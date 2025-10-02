"use client";

import { Shield, Users, Star, Download, Share } from 'lucide-react';
import Link from 'next/link';

export default function PlayStoreStyleApp() {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Merge Fellas Mod APK',
        text: 'Download Merge Fellas Mod APK v1.9.7 with unlimited features!',
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <section className="">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        
        {/* Main Content */}
        <div className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            
            {/* Left Content */}
            <div className="flex-1 text-gray-900 dark:text-gray-100">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 lg:leading-[1.2] leading-[1.2]">
                Merge Fellas Mod APK v1.9.7 Unlimited Shakes 2025
              </h1> 
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
                Download the latest version of Merge Fellas Mod APK to enjoy modded features, such as a mod menu, unlimited shakes, revives, and ad-free gameplay.
              </p>

              {/* App Info Row */}
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 bg-white dark:bg-gray-100 rounded-2xl flex items-center justify-center shadow-lg">
                  <img
                    src="images/favicon.webp"
                    alt="Game Icon"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <div className="flex items-center gap-1 mb-1">
                      <span className="text-xl font-bold">4.8</span>
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">22.2M reviews</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-xl font-bold mb-1">1M+</div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Downloads</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <span className="text-sm bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded text-gray-800 dark:text-white">3+</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Rated for 3+</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link 
                  href="/download"
                  className="bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download now
                </Link>
                
                <button 
                  onClick={handleShare}
                  className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
                >
                  <Share className="w-5 h-5 mr-2" />
                  Share
                </button>
              </div>

              {/* Device Compatibility */}
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <div className="w-4 h-4 border border-gray-400 dark:border-gray-500 rounded flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-sm"></div>
                </div>
                <span>This app is available for your device</span>
              </div>

             {/* Security Features */}
<div className="flex flex-wrap items-center gap-4">
  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
      <Shield className="w-3 h-3 text-white" />
    </div>
    <span className="font-semibold">Secure</span>
  </div>
 
  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
      <Star className="w-3 h-3 text-white" />
    </div>
    <span className="font-semibold">Ad Free</span>
  </div>
 
  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
    <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
      <Download className="w-3 h-3 text-white" />
    </div>
    <span className="font-semibold">Premium Content</span>
  </div>
 
  <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
    <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
      <Star className="w-3 h-3 text-white" />
    </div>
    <span className="font-semibold">Free to Download</span>
  </div>
</div>

            </div>

            {/* Right Content - Mobile Image */}
            <div className="flex-1 lg:max-w-md">
              <div className="flex justify-center">
                <img 
                  src="images/mobile.webp" 
                  alt="Mobile App Screenshot" 
                  className="h-auto"
                  style={{ maxWidth: '217px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

     {/* Additional Info Section */}
<div className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="text-gray-900 dark:text-gray-100">
      <h2 className="text-2xl font-bold mb-4">About this app</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
        Fellas Mod APK is a third-party app, so it is not available on the Google Play Store, but there is no need to worry! We are here with the link to the Merge Fellas APK file for you. You can download this mod APK from our website using the following steps.
      </p>
      
      {/* App Details */}
      <div className="grid grid-cols-3 md:grid-cols-3 gap-6 text-sm">
        <div>
          <span className="font-semibold mb-2 block">Version</span>
          <p className="text-gray-600 dark:text-gray-400">1.9.7</p>
        </div>
        <div>
          <span className="font-semibold mb-2 block">Size</span>
          <p className="text-gray-600 dark:text-gray-400">102MB</p>
        </div>
        <div>
          <span className="font-semibold mb-2 block">Requirements</span>
          <p className="text-gray-600 dark:text-gray-400">Android 6.0+</p>
        </div>
      </div>
    </div>
  </div>
</div>



    </section>
  );
}