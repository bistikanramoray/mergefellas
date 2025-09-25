import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { exec } from "child_process"
import { promisify } from "util"
import { writeFileSync } from "fs"
import path from "path"

const execAsync = promisify(exec)

// Check authentication middleware
async function checkAuth() {
  const cookieStore = await cookies()
  const authCookie = cookieStore.get("admin-auth")
  return authCookie?.value === "authenticated"
}

export async function POST() {
  try {
    // Check authentication
    const isAuthenticated = await checkAuth()
    if (!isAuthenticated) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const isDevelopment = process.env.NODE_ENV === "development"

    if (isDevelopment) {
      return NextResponse.json({
        message: "Restart not needed in development mode. Next.js auto-reloads.",
      })
    }

    // Get the port from environment or default to 3005
    const port = process.env.PORT || "3005"
    const projectDir = process.cwd()

    // Create a restart script that will run independently
    const restartScript = `#!/bin/bash
echo "Starting application restart process..."

# Function to kill process on port
kill_process_on_port() {
    local port=$1
    echo "Killing process on port $port..."
    
    # Find and kill process using the port
    local pids=$(netstat -tulpn 2>/dev/null | grep ":$port " | awk '{print $7}' | cut -d'/' -f1)
    
    if [ -n "$pids" ]; then
        for pid in $pids; do
            if [ "$pid" != "-" ] && [ -n "$pid" ]; then
                echo "Found process $pid on port $port, killing..."
                kill -9 $pid 2>/dev/null
                if [ $? -eq 0 ]; then
                    echo "Successfully killed process $pid"
                else
                    echo "Failed to kill process $pid"
                fi
            fi
        done
    else
        echo "No process found on port $port"
    fi
}

# Kill process on port
kill_process_on_port ${port}

# Wait for process to stop
echo "Waiting 3 seconds for processes to stop..."
sleep 3

# Verify port is free
if netstat -tulpn 2>/dev/null | grep -q ":${port} "; then
    echo "Warning: Port ${port} still in use, trying again..."
    kill_process_on_port ${port}
    sleep 2
fi

# Change to the correct directory
cd "${projectDir}"

# Build the application
echo "Building application..."
npm run build
if [ $? -eq 0 ]; then
    echo "Build completed successfully"
else
    echo "Build failed"
    exit 1
fi

# Start the application
echo "Starting application on port ${port}..."
nohup npm start -- -p ${port} > /tmp/nextjs-app.log 2>&1 &

# Wait and verify startup
sleep 5

if netstat -tulpn 2>/dev/null | grep -q ":${port} "; then
    echo "✓ Application successfully restarted on port ${port}"
    # Get the new process info
    netstat -tulpn 2>/dev/null | grep ":${port} " | head -1
else
    echo "✗ Failed to start application on port ${port}"
    echo "Check logs at /tmp/nextjs-app.log"
    cat /tmp/nextjs-app.log
    exit 1
fi

# Clean up this script
rm "$0"
echo "Restart completed successfully"
`

    // Write the restart script to a temporary file
    const scriptPath = path.join(process.cwd(), `restart-${Date.now()}.sh`)
    writeFileSync(scriptPath, restartScript, { mode: 0o755 })

    // Execute the script in the background with a delay
    setTimeout(async () => {
      try {
        console.log(`Executing restart script: ${scriptPath}`)
        // Run the script in the background, detached from this process
        execAsync(`bash ${scriptPath} > /tmp/restart.log 2>&1`, { detached: true })
        console.log("Restart script started")
      } catch (error) {
        console.error("Failed to start restart script:", error)
      }
    }, 1500) // Give more time for response to be sent

    return NextResponse.json({
      success: true,
      message: "Application restart initiated. Please wait about 15-20 seconds and refresh the page. Check /tmp/restart.log for progress.",
    })
  } catch (error) {
    console.error("Error initiating restart:", error)
    return NextResponse.json({ error: "Failed to restart application" }, { status: 500 })
  }
}
