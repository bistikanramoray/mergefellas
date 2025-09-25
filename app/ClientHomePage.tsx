"use client"

import { Header } from "@/components/header"
import { Breadcrumb } from "@/components/breadcrumb"
import { HeroSection } from "@/components/hero-section"
import { FaceSwapDemo } from "@/components/face-swap-demo"
import { WhatCanAIDoSection } from "@/components/what-can-ai-do-section"
import { UserReviewsSection } from "@/components/PersonalExperienceSection"
import { FAQSection } from "@/components/faq-section"
import { HowToUseSection } from "@/components/how-to-use-section"
import { OnlineToolsSection } from "@/components/online-tools-section"
import { PerfectFaceSwapperSection } from "@/components/perfect-face-swapper-section"
import { BlogSection } from "@/components/blog-section"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/components/language-provider"
import { useLanguage } from "@/components/language-provider"

// Add this component wrapper
function HomePageContent({ latestPosts }) {
  const { language } = useLanguage()

  const breadcrumbItems = [
    { label: "Home", href: "/" }, 
    { label: "Merge Fellas" },
  ]

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <HeroSection lang={language} />
      <FaceSwapDemo lang={language} />
      <WhatCanAIDoSection lang={language} />
      <UserReviewsSection lang={language} />
      <FAQSection lang={language} />
      <HowToUseSection lang={language} />
      <OnlineToolsSection lang={language} />
      <PerfectFaceSwapperSection lang={language} />
      <BlogSection posts={latestPosts} lang={language} />
    </>
  )
}

// Update the main component to wrap with language provider
export default function ClientHomePage({ latestPosts }) {
  return (
    <LanguageProvider>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Header />

        <main className="max-w-7xl mx-auto px-6 pb-20">
          <HomePageContent latestPosts={latestPosts} />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  )
}
