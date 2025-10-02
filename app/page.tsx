import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { MergeFellasMainContent } from "@/components/merge-fellas-main-content"
import { MergeFellasModFeatures  } from "@/components/what-can-ai-do-section"
import { MergeFellasAlternatives } from "@/components/MergeFellasAlternatives"
import ProsConsSection from '@/components/ProsConsSection';
import { PersonalExperienceSection } from '@/components/PersonalExperienceSection'
import { FAQSection } from "@/components/faq-section"
import { FinalWordsSection } from '@/components/FinalWordsSection'
import { MergeFellasFeatures } from '@/components/MergeFellasFeatures' 
import PlayStoreStyleApp from '@/components/PlayStoreStyleApp'

export const metadata: Metadata = {
  title: "Merge Fellas MOD APK v1.9.7 Unlimited Shakes 2025",
  description:
    "Download the latest version of Merge Fellas Mod APK to enjoy modded features, such as a mod menu, unlimited shakes, revives, and ad-free gameplay.",
  keywords: "Merge Fellas, MOD APK, unlimited shakes, revives, mod menu, ad-free gameplay, puzzle merge game",
  openGraph: {
    title: "Merge Fellas MOD APK v1.9.7 Unlimited Shakes 2025",
    description:
      "Download the latest version of Merge Fellas Mod APK to enjoy modded features, such as a mod menu, unlimited shakes, revives, and ad-free gameplay.",
    type: "website",
    url: "https://mergefellas-apk.com",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Merge Fellas MOD APK v1.9.7 Unlimited Shakes 2025",
    description:
      "Download the latest version of Merge Fellas Mod APK to enjoy modded features, such as a mod menu, unlimited shakes, revives, and ad-free gameplay.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://mergefellas-apk.com",
  },
}

export const revalidate = 3600

export default async function HomePage() {
    // const posts = await fetchAllPosts()
  // const latestPosts = posts.slice(0, 3)
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
                <span className="font-semibold text-foreground">Merge Fellas Mod APK</span>
              </li>
            </ol>
          </nav> 

           <PlayStoreStyleApp />
           <MergeFellasMainContent />
           <MergeFellasFeatures />
           <MergeFellasModFeatures />
           <ProsConsSection />
           <MergeFellasAlternatives  />
           <PersonalExperienceSection  />
           <FAQSection />
           <FinalWordsSection />
           {/* <BlogSection posts={latestPosts}   /> */}

       
          
        </main>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Website",
              name: "Merge Fellas - MOD APK Download",
              url: "https://mergefellas-apk.com/",
              headline: "Merge Fellas MOD APK v1.9.7 Unlimited Shakes 2025",
              description:
                "Download the latest version of Merge Fellas Mod APK to enjoy modded features, such as a mod menu, unlimited shakes, revives, and ad-free gameplay.",
              image: "https://mergefellas-apk.com/images/Merge-Fellas-logo.webp",
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: "1",
                  name: "Home",
                  item: "https://mergefellas-apk.com/",
                },
                {
                  "@type": "ListItem",
                  position: "2",
                  name: "Merge Fellas MOD APK",
                  item: "https://mergefellas-apk.com/",
                },
              ],
            }),
          }}
        />

        <Footer />
      </div>

      {/* Structured Data for Mobile Application */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MobileApplication",
            name: "Merge Fellas",
            description: "Merge internet characters and animals to create funny and adorable creatures",
            url: "https://mergefellas-apk.com",
            applicationCategory: "GameApplication",
            operatingSystem: "Android",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            creator: {
              "@type": "Organization",
              name: "Merge Fellas",
              url: "https://mergefellas-apk.com",
            },
          }),
        }}
      />
    </>
  )
}
