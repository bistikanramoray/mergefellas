import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import fs from "fs"
import path from "path"

// Check authentication middleware
async function checkAuth() {
  const cookieStore = await cookies()
  const authCookie = cookieStore.get("admin-auth")
  return authCookie?.value === "authenticated"
}

export async function GET() {
  try {
    // Check authentication
    const isAuthenticated = await checkAuth()
    if (!isAuthenticated) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const translationsDir = path.join(process.cwd(), "lib", "translations")

    if (!fs.existsSync(translationsDir)) {
      return NextResponse.json({ error: "Translations directory not found" }, { status: 404 })
    }

    const files = fs.readdirSync(translationsDir)
    const translationFiles = files
      .filter((file) => file.endsWith(".ts") && file !== "index.ts")
      .map((filename) => {
        const filePath = path.join(translationsDir, filename)
        const content = fs.readFileSync(filePath, "utf-8")

        try {
          // Parse the TypeScript export to extract the object
          const exportMatch = content.match(/export\s+const\s+\w+\s*=\s*({[\s\S]*});?\s*$/)
          if (exportMatch) {
            // Use Function constructor to safely evaluate the object
            const objectString = exportMatch[1]
            const parsedContent = new Function(`return ${objectString}`)()

            return {
              filename,
              content,
              parsedContent,
            }
          } else {
            console.error(`Could not parse ${filename}`)
            return {
              filename,
              content,
              parsedContent: {},
            }
          }
        } catch (error) {
          console.error(`Error parsing ${filename}:`, error)
          return {
            filename,
            content,
            parsedContent: {},
          }
        }
      })

    return NextResponse.json(translationFiles)
  } catch (error) {
    console.error("Error loading translation files:", error)
    return NextResponse.json({ error: "Failed to load translation files" }, { status: 500 })
  }
}
