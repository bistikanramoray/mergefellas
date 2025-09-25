import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DownloadPageContent } from "@/components/download-page-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Download Merge Fellas MOD APK - Latest Versions Available",
  description:
    "Download all available versions of Merge Fellas Mod APK with unlimited shakes, revives, and ad-free gameplay. Get the latest v1.8.7 and older versions.",
  keywords: "Merge Fellas download, MOD APK download, unlimited shakes, revives, ad-free gameplay",
  openGraph: {
    title: "Download Merge Fellas MOD APK - Latest Versions Available",
    description:
      "Download all available versions of Merge Fellas Mod APK with unlimited shakes, revives, and ad-free gameplay.",
    type: "website",
    url: "https://mergefellas-apk.com/download",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Merge Fellas MOD APK - Latest Versions Available",
    description:
      "Download all available versions of Merge Fellas Mod APK with unlimited shakes, revives, and ad-free gameplay.",
  },
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://mergefellas-apk.com/download",
  },
}

export const revalidate = 3600

export default function DownloadPage() {
  return (
    <>
      <div className="bg-background text-foreground transition-colors duration-300">
        <Header />

        <main className="max-w-7xl mx-auto px-6 pb-20">
          {/* Server-rendered breadcrumb navigation */}
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground pt-8 select-none">
            <ol className="flex space-x-2">
              <li className="flex items-center">
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li className="flex items-center">
                <span className="mx-2">{">"}</span>
                <span className="font-semibold text-foreground">Download</span>
              </li>
            </ol>
          </nav>
 
          <DownloadPageContent />
        </main>

        <Footer />
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebPage",
            name: "Download Merge Fellas MOD APK",
            url: "https://mergefellas-apk.com/download",
            description:
              "Download all available versions of Merge Fellas Mod APK with unlimited shakes, revives, and ad-free gameplay.",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://mergefellas-apk.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Download",
                  item: "https://mergefellas-apk.com/download",
                },
              ],
            },
          }),
        }}
      />
    </>
  )
}
