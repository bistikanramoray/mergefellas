// app/disclaimer/page.tsx

import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Disclaimer - Merge Fellas MOD APK",
  description: "Important disclaimer regarding the use of Merge Fellas MOD APK website, third-party links, and APK files. Read our terms and user responsibilities.",
  keywords: "disclaimer, terms of use, APK files, user responsibility, legal notice, Merge Fellas MOD APK, third-party links",
  openGraph: {
    title: "Disclaimer - Merge Fellas MOD APK",
    description: "Important disclaimer regarding the use of Merge Fellas MOD APK website, third-party links, and APK files. Read our terms and user responsibilities.",
    type: "website",
    url: `https://mergefellas-apk.com/disclaimer`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer - Merge Fellas MOD APK",
    description: "Important disclaimer regarding the use of Merge Fellas MOD APK website, third-party links, and APK files. Read our terms and user responsibilities.",
  },
  robots: { index: false, follow: false },
  alternates: {
    canonical: `https://mergefellas-apk.com/disclaimer`,
    languages: {
      en: "https://mergefellas-apk.com/disclaimer"
    },
  },
}

export default function DisclaimerPage() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          <ol className="flex space-x-2">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li className="flex items-center">
              <span className="mx-2">{">"}</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                Disclaimer
              </span>
            </li>
          </ol>
        </nav>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Disclaimer</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="text-gray-700 dark:text-gray-300 mb-8">
            <p>
              The information provided on Merge Fellas MOD APK is for general informational and educational purposes only. 
              By using our site, you agree to this disclaimer in full.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">No Official Affiliation</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Merge Fellas MOD APK is not affiliated with, endorsed by, or connected to the official creators or publishers 
            of the original Merge Fellas game. All trademarks, product names, and logos mentioned belong to their respective owners.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">APK Files and Usage</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We provide links to third-party sources for downloading APK files solely for educational and testing purposes. 
            We do not host any copyrighted files on our servers.
          </p>
          <ul className="text-gray-700 dark:text-gray-300 mb-6 list-disc pl-6">
            <li>Any use of the provided files is at your own discretion and risk.</li>
            <li>You are responsible for ensuring compliance with local laws and app store policies before downloading or using modified APK files.</li>
            <li>We do not encourage piracy or illegal distribution of paid content.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Accuracy of Information</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            We strive to keep the content on this site accurate and up to date. However, we make no guarantees 
            regarding the completeness, reliability, or accuracy of any information provided. Any action you take 
            based on the content is strictly at your own risk.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">External Links</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Our website may contain links to third-party websites or services. We have no control over the content, 
            privacy policies, or practices of any third-party sites and accept no responsibility for them.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">No Liability</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            In no event shall Merge Fellas MOD APK or its owners be liable for any loss, damage, or data breach resulting from:
          </p>
          <ul className="text-gray-700 dark:text-gray-300 mb-6 list-disc pl-6">
            <li>Downloading or installing APK files from external links.</li>
            <li>Using any third-party services linked from our website.</li>
            <li>Any errors, omissions, or technical issues with the files or instructions provided.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">User Responsibility</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            By downloading any files from our site, you acknowledge that:
          </p>
          <ul className="text-gray-700 dark:text-gray-300 mb-6 list-disc pl-6">
            <li>You have the legal right to install and use the file in your jurisdiction.</li>
            <li>You understand the potential risks associated with installing modified APK files, including but not limited to device malfunction, data loss, or security vulnerabilities.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Consent</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            By using our website, you hereby consent to our disclaimer and agree to its terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            If you have any questions regarding this disclaimer, you may contact us at our contact page or via email.
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
}