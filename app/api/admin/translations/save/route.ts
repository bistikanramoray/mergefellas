import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import fs from "fs"
import path from "path"

// Check authentication middleware
async function checkAuth() {
  const cookieStore = await cookies()
  const authCookie = cookieStore.get("admin-auth")
  return authCookie?.value === "authenticated"
}

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const isAuthenticated = await checkAuth()
    if (!isAuthenticated) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { filename, content } = await request.json()

    if (!filename || !content) {
      return NextResponse.json({ error: "Filename and content are required" }, { status: 400 })
    }

    // Validate filename to prevent directory traversal
    if (filename.includes("..") || filename.includes("/") || !filename.endsWith(".ts")) {
      return NextResponse.json({ error: "Invalid filename" }, { status: 400 })
    }

    const filePath = path.join(process.cwd(), "lib", "translations", filename)

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "File does not exist" }, { status: 404 })
    }

    // Write the file
    fs.writeFileSync(filePath, content, "utf-8")

    const isDevelopment = process.env.NODE_ENV === "development"

    return NextResponse.json({
      success: true,
      message: isDevelopment
        ? "File saved successfully. Changes will be reflected automatically."
        : "File saved successfully. Click 'Restart Application' to see changes.",
      needsRestart: !isDevelopment,
    })
  } catch (error) {
    console.error("Error saving translation file:", error)
    return NextResponse.json({ error: "Failed to save file" }, { status: 500 })
  }
}
