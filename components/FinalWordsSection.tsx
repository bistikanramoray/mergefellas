"use client"

import { Download } from 'lucide-react'

export function FinalWordsSection() {
  const handleDownloadClick = () => {
    // Replace with your actual download page URL
    window.location.href = '/download' // or use Next.js router
  }

  return (
    <section className="py-9 mb-9">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          Final Words
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
          <p className="text-lg leading-relaxed mb-6 text-gray-600 dark:text-gray-300">
            Merge Fellas Mod APK stands out due to the features that the official version doesn't offer. These features include a mod menu, unlimited shakes, revives, hummer, and ad-free gameplay. Click the download button to enjoy all these premium features for free. Hurry up! Download now and elevate your gaming experience with this mod APK.
          </p>
          <button 
            onClick={handleDownloadClick}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors flex items-center mx-auto"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Now
          </button>
        </div>
      </div>
    </section>
  )
}