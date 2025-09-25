import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { ScrollProgress } from "@/components/scroll-progress"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Merge Fellas - Download Latest MOD APK",
  description:
    "Download the latest version of Merge Fellas Mod APK to enjoy modded features, such as a mod menu, unlimited shakes, revives, and ad-free gameplay.",
  keywords: "Merge Fellas, MOD APK, unlimited shakes, revives, mod menu, ad-free gameplay, puzzle game",
  authors: [{ name: "Merge Fellas Team" }],
  creator: "Merge Fellas",
  publisher: "Merge Fellas",
  applicationName: "Merge Fellas",
  referrer: "origin-when-cross-origin",
  category: "Gaming",
  classification: "Mobile Game",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mergefellas-apk.com"),
  alternates: {
    canonical: "https://mergefellas-apk.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mergefellas-apk.com",
    siteName: "Merge Fellas",
    title: "Merge Fellas - Download Latest MOD APK",
    description:
      "Download the latest version of Merge Fellas Mod APK to enjoy modded features, such as a mod menu, unlimited shakes, revives, and ad-free gameplay.",
    images: [
      {
        url: "https://mergefellas-apk.com/images/featured.webp",
        width: 1200,
        height: 630,
        alt: "Merge Fellas MOD APK",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@MergeFellas",
    creator: "@MergeFellas",
    title: "Merge Fellas - Download Latest MOD APK",
    description:
      "Download the latest version of Merge Fellas Mod APK to enjoy modded features, such as a mod menu, unlimited shakes, revives, and ad-free gameplay.",
    images: {
      url: "https://mergefellas-apk.com/images/featured.webp",
      alt: "Merge Fellas MOD APK",
      width: 1200,
      height: 630,
      type: "image/webp",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/images/favicon.webp", sizes: "16x16", type: "image/webp" },
      { url: "/images/favicon.webp", sizes: "32x32", type: "image/webp" },
      { url: "/images/favicon.webp", sizes: "96x96", type: "image/webp" },
      { url: "/images/favicon.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/images/favicon.webp",
    apple: [
      { url: "/images/favicon.webp", sizes: "180x180", type: "image/webp" },
      { url: "/images/favicon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  other: {
    "theme-color": "#FFD700",
    "msapplication-TileColor": "#FFD700",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="icon" href="/images/favicon.webp" />
        <link rel="apple-touch-icon" href="/images/favicon.webp" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="image" content="https://mergefellas-apk.com/images/featured.webp" />
        <meta property="og:image" content="https://mergefellas-apk.com/images/featured.webp" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://mergefellas-apk.com/images/featured.webp" />
        <meta name="twitter:site" content="@MergeFellas" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Organization",
              url: "https://mergefellas-apk.com/",
              logo: "https://mergefellas-apk.com/images/Merge-Fellas-logo.webp",
              name: "Merge Fellas",
              image: "https://mergefellas-apk.com/images/Merge-Fellas-logo.webp",
              brand: { "@type": "Organization" },
              legalName: "Merge Fellas",
            }),
          }}
        />
      </head>
      <body className={`${inter.className} font-sans`}>
        <ScrollProgress />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Toaster />
          <nav className="sr-only" aria-label="Site Navigation for Search Engines">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/download">Download</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/sitemap.xml">Sitemap</a>
              </li>
              <li>
                <a href="/robots.txt">Robots</a>
              </li>
            </ul>
          </nav>
        </ThemeProvider>
      </body>
    </html>
  )
}