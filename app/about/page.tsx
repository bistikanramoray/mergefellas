// app/about/page.tsx

import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getTranslation } from "@/lib/translations";
import { t } from "@/lib/translations"

 

export const metadata: Metadata =  {
    title: t("aboutMetaTitle", "en")  ,
    description:   t("aboutMetaDescription", "en"),
    keywords:   t("aboutMetaKeywords", "en"),
    openGraph: {
      title:   t("aboutMetaTitle", "en"),
      description:  t("aboutMetaDescription", "en"),
      type: "website",
      url: `https://mergefellas-apk.com/about`,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title:  t("aboutMetaTitle", "en"),
      description: t("aboutMetaDescription", "en"),
    },
    robots: { index: false, follow: false },
    alternates: {
      canonical: `https://mergefellas-apk.com/about`,
      languages: {
        en: "https://mergefellas-apk.com/about" 
      },
    },
  }


export default function AboutPage() {
  const lang = "en";

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          <ol className="flex space-x-2">
            <li>
              <a href="/" className="hover:underline">
                Merge Fellas
              </a>
            </li>
            <li className="flex items-center">
              <span className="mx-2">{">"}</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                {about.aboutTitle}
              </span>
            </li>
          </ol>
        </nav>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            {about.aboutTitle}
          </h1>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {about.aboutDescription}
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            {about.keyFeaturesTitle}
          </h2>
          <ul className="text-gray-700 dark:text-gray-300 mb-6 list-disc pl-6">
            <li>{about.keyFeatures.feature1}</li>
            <li>{about.keyFeatures.feature2}</li>
            <li>{about.keyFeatures.feature3}</li>
            <li>{about.keyFeatures.feature4}</li>
            <li>{about.keyFeatures.feature5}</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            {about.ourMissionTitle}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {about.ourMissionText}
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            {about.whyChooseUsTitle}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {about.whyChooseUsText}
          </p>
        </article>
      </main>

      <Footer lang={lang} />
    </div>
  );
}
