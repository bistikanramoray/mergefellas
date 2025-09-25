// app/terms/page.tsx

import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getTranslation } from "@/lib/translations";
import { t } from "@/lib/translations"


const translation = getTranslation("en");
const terms = translation.termsOfService;

export const metadata: Metadata =  {
    title: t("termMetaTitle", "en")  ,
    description:   t("termMetaDescription", "en"),
    keywords:   t("termMetaKeywords", "en"),
    openGraph: {
      title:   t("termMetaTitle", "en"),
      description:  t("termMetaDescription", "en"),
      type: "website",
      url: `https://mergefellas-apk.com/terms`,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title:  t("termMetaTitle", "en"),
      description: t("termMetaDescription", "en"),
    },
    robots: { index: false, follow: false },
    alternates: {
      canonical: `https://mergefellas-apk.com/terms`,
      languages: {
        en: "https://mergefellas-apk.com/terms", 
        id: "https://mergefellas-apk.com/id/terms",
        ru: "https://mergefellas-apk.com/ru/terms",
        pt: "https://mergefellas-apk.com/pt/terms",
        es: "https://mergefellas-apk.com/es/terms",
      },
    },
  }

 
export default function TermsPage() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="text-sm text-gray-600 dark:text-gray-400 mb-8"
        >
          <ol className="flex space-x-2">
            <li>
              <a href="/" className="hover:underline">
               Merge Fellas
              </a>
            </li>
            <li className="flex items-center">
              <span className="mx-2">{">"}</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                {terms.title}
              </span>
            </li>
          </ol>
        </nav>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            {terms.title}
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mb-8">
            {terms.lastUpdated}
          </p>

          <div className="text-gray-700 dark:text-gray-300 mb-8">
            {terms.introText}
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            {terms.section1Title}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {terms.section1Text}
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            {terms.section2Title}
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
            {terms.section2_1Title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {terms.section2_1Text}
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-6">
            <li>{terms.section2_1Restrictions.restriction1}</li>
            <li>{terms.section2_1Restrictions.restriction2}</li>
            <li>{terms.section2_1Restrictions.restriction3}</li>
            <li>{terms.section2_1Restrictions.restriction4}</li>
            <li>{terms.section2_1Restrictions.restriction5}</li>
            <li>{terms.section2_1Restrictions.restriction6}</li>
            <li>{terms.section2_1Restrictions.restriction7}</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
            {terms.section2_2Title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {terms.section2_2Text1}
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {terms.section2_2Text2}
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            {terms.section3Title}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {terms.section3Text}
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            {terms.section4Title}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {terms.section4Text}
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            {terms.section5Title}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {terms.section5Text}
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            {terms.section6Title}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {terms.section6Text}
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            {terms.section7Title}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {terms.section7Text}
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            {terms.section8Title}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {terms.section8Text}
          </p>
        </article>
      </main>

      <Footer lang="en" />
    </div>
  );
}
