// app/privacy/page.tsx

import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy - Merge Fellas MOD APK",
  description: "Learn about how Merge Fellas MOD APK collects, uses, and protects your personal information. Our comprehensive privacy policy explains our data practices and your rights.",
  keywords: "privacy policy, data protection, personal information, Merge Fellas MOD APK, privacy rights, data security",
  openGraph: {
    title: "Privacy Policy - Merge Fellas MOD APK",
    description: "Learn about how Merge Fellas MOD APK collects, uses, and protects your personal information. Our comprehensive privacy policy explains our data practices and your rights.",
    type: "website",
    url: `https://mergefellas-apk.com/privacy`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - Merge Fellas MOD APK",
    description: "Learn about how Merge Fellas MOD APK collects, uses, and protects your personal information. Our comprehensive privacy policy explains our data practices and your rights.",
  },
  robots: { index: false, follow: false },
  alternates: {
    canonical: `https://mergefellas-apk.com/privacy`,
    languages: {
      en: "https://mergefellas-apk.com/privacy"
    },
  },
}

export default function PrivacyPage() {
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
                Privacy Policy
              </span>
            </li>
          </ol>
        </nav>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Privacy Policy</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="text-gray-700 dark:text-gray-300 mb-8">
            <p>
              At Merge Fellas MOD APK, we respect your privacy and are committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, and safeguard your data when you use our website or download our app.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Information We Collect</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">We may collect the following types of information:</p>
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Personal Information</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Such as your name, email address, and contact details when you voluntarily provide them (e.g., through our contact form).
          </p>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">Non-Personal Information</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Such as your IP address, browser type, device information, and browsing behavior through cookies or analytics tools.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            We do not collect any sensitive personal information without your explicit consent.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">We use the collected information for:</p>
          <ul className="text-gray-700 dark:text-gray-300 mb-6 list-disc pl-6">
            <li>Providing and improving our website and services.</li>
            <li>Responding to your inquiries or feedback.</li>
            <li>Monitoring website performance and usage trends.</li>
            <li>Preventing fraudulent activities and ensuring security.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Cookies and Tracking Technologies</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Our site may use cookies and similar tracking technologies to enhance your browsing experience. 
            You can choose to disable cookies in your browser settings; however, some features of the site may not function properly.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Third-Party Services</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            We may use third-party services such as analytics tools or advertising networks. 
            These third parties may collect and process your information according to their own privacy policies. 
            We are not responsible for the privacy practices of these services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Data Sharing and Disclosure</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            We do not sell, rent, or trade your personal information to third parties. We may share your data only in the following cases:
          </p>
          <ul className="text-gray-700 dark:text-gray-300 mb-6 list-disc pl-6">
            <li>To comply with legal obligations.</li>
            <li>To protect our rights, property, and safety.</li>
            <li>With trusted service providers who assist in operating our website.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Security of Your Data</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            We implement reasonable security measures to protect your personal information from unauthorized access, 
            alteration, or disclosure. However, no data transmission over the internet can be guaranteed to be completely secure.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Links to Other Websites</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Our website may contain links to third-party websites. We are not responsible for the privacy policies 
            or content of these external sites. We encourage you to review their privacy policies before sharing personal data.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Children's Privacy</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Our website is not intended for children under 13 years old. We do not knowingly collect personal data from children. 
            If you believe a child has provided us with personal information, please contact us so we can remove it.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Changes to This Privacy Policy</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated effective date. 
            Please review this policy periodically to stay informed.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            If you have any questions about this Privacy Policy or how we handle your information, please contact us through our website.
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
}