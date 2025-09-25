"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Smartphone, Shield, Zap, CheckCircle, Clock } from "lucide-react"

const staticAPKData = {
  name: "Merge Fellas",
  versions: [
    {
      version: "1.8.7",
      download_url: "http://zubairakhtar.com/download/Demo-APK_v3.20.52_mergefellas-apk.com.apk",
    },
    {
      version: "1.8.6",
      download_url: "http://zubairakhtar.com/download/Demo-APK_v3.20.52_mergefellas-apk.com.apk",
    },
    {
      version: "1.5.8",
      download_url: "http://zubairakhtar.com/download/Demo-APK_v3.20.52_mergefellas-apk.com.apk",
    },
    {
      version: "1.4.8",
      download_url: "http://zubairakhtar.com/download/Demo-APK_v3.20.52_mergefellas-apk.com.apk",
    },
  ],
}

export function DownloadPageContent() {
  const [downloadingVersion, setDownloadingVersion] = useState<string | null>(null)
  const [downloadComplete, setDownloadComplete] = useState<string | null>(null)
  const [countdown, setCountdown] = useState(0)

  const handleDownload = (downloadUrl: string, version: string) => {
    setDownloadingVersion(version)
    setDownloadComplete(null)
    setCountdown(10)

    // Start countdown
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval)
          // Trigger actual download
          const link = document.createElement("a")
          link.href = downloadUrl
          link.download = `merge-fellas-${version}.apk`
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
          
          setDownloadingVersion(null)
          setDownloadComplete(version)
          
          // Hide success message after 3 seconds
          setTimeout(() => setDownloadComplete(null), 3000)
          
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  return (
    <div className="py-4 px-4 sm:py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-8 sm:mb-16">
        <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 px-3 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
          <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
          MOD APK Available
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight px-2">
          Download <span className="text-yellow-500">Merge Fellas</span> MOD APK
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
          Unlock unlimited features, enjoy ad-free gameplay, and experience endless fun with our premium MOD version.
        </p>
      </div>

      {/* Download Section */}
      <div className="max-w-3xl mx-auto mb-12 sm:mb-20">
         

        <div className="space-y-3">
          {staticAPKData.versions.map((version, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-yellow-200 dark:hover:border-yellow-800">
              <CardContent className="p-4 sm:p-6">
                {/* Mobile Layout - Stacked */}
                <div className="sm:hidden space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-xl group-hover:bg-yellow-200 dark:group-hover:bg-yellow-800/40 transition-colors flex-shrink-0">
                      <Download className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold truncate">
                          {staticAPKData.name} v{version.version}
                        </h3>
                        {index === 0 && (
                          <Badge className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs flex-shrink-0">
                            Latest
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm leading-tight">
                        MOD APK with unlimited features & no ads
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    {downloadComplete === version.version && (
                      <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-medium text-sm">
                        <CheckCircle className="w-4 h-4" />
                        Downloaded!
                      </div>
                    )}
                    
                    {downloadingVersion === version.version ? (
                      <Button disabled className="bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 w-full sm:min-w-[140px] sm:w-auto">
                        <Clock className="w-4 h-4 mr-2 animate-spin" />
                        {countdown}s remaining
                      </Button>
                    ) : (
                      <Button
                        onClick={() => handleDownload(version.download_url, version.version)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 w-full sm:min-w-[140px] sm:w-auto"
                        disabled={!!downloadingVersion}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    )}
                  </div>
                </div>

                {/* Desktop Layout - Side by side */}
                <div className="hidden sm:flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-xl group-hover:bg-yellow-200 dark:group-hover:bg-yellow-800/40 transition-colors">
                      <Download className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-bold">
                          {staticAPKData.name} v{version.version}
                        </h3>
                        {index === 0 && (
                          <Badge className="bg-yellow-500 hover:bg-yellow-600 text-white">
                            Latest
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground">
                        MOD APK with unlimited features & no ads
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {downloadComplete === version.version && (
                      <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-medium">
                        <CheckCircle className="w-5 h-5" />
                        Downloaded!
                      </div>
                    )}
                    
                    {downloadingVersion === version.version ? (
                      <Button disabled className="bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 min-w-[140px]">
                        <Clock className="w-4 h-4 mr-2 animate-spin" />
                        {countdown}s remaining
                      </Button>
                    ) : (
                      <Button
                        onClick={() => handleDownload(version.download_url, version.version)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 min-w-[140px]"
                        disabled={!!downloadingVersion}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    )}
                  </div>
                </div>

                {/* Download Progress Animation */}
                {downloadingVersion === version.version && (
                  <div className="mt-4 p-3 sm:p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
                      <span className="font-medium text-yellow-700 dark:text-yellow-300 text-sm sm:text-base">
                        Preparing your download...
                      </span>
                    </div>
                    <div className="w-full bg-yellow-200 dark:bg-yellow-800 rounded-full h-2">
                      <div 
                        className="bg-yellow-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${((10 - countdown) / 10) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="mb-12 sm:mb-16">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">Why Choose Our MOD APK?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
            Experience the game like never before with these premium features unlocked
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="pb-3 sm:pb-4">
              <div className="bg-yellow-100 dark:bg-yellow-900/30 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-800/40 transition-colors">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <CardTitle className="text-lg sm:text-xl">Unlimited Features</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Enjoy unlimited shakes, revives, and all premium features unlocked from the start.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="pb-3 sm:pb-4">
              <div className="bg-yellow-100 dark:bg-yellow-900/30 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-800/40 transition-colors">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <CardTitle className="text-lg sm:text-xl">Ad-Free Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Play without interruptions. No ads to break your gaming flow and concentration.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
            <CardHeader className="pb-3 sm:pb-4">
              <div className="bg-yellow-100 dark:bg-yellow-900/30 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-800/40 transition-colors">
                <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600 dark:text-yellow-400" />
              </div>
              <CardTitle className="text-lg sm:text-xl">Offline Play</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Play anywhere, anytime. No internet connection required for the full gaming experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Installation Instructions */}
      <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
        <Card className="overflow-hidden">
          <CardHeader className="bg-yellow-50 dark:bg-yellow-900/20 border-b border-yellow-200 dark:border-yellow-800 p-4 sm:p-6">
            <CardTitle className="text-xl sm:text-2xl flex items-center gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Download className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              Installation Guide
            </CardTitle>
            <CardDescription className="text-sm sm:text-base mt-2">
              Follow these simple steps to install Merge Fellas MOD APK on your device
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 lg:p-8">
            <div className="grid gap-4 sm:gap-6">
              {[
                "Download the APK file by clicking the download button above",
                "Enable 'Unknown Sources' in your Android settings (Settings → Security → Unknown Sources)",
                "Locate the downloaded APK file in your device's download folder",
                "Tap on the APK file and select 'Install'",
                "Wait for the installation to complete and enjoy unlimited features!"
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed pt-0.5">{step}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Requirements */}
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-xl sm:text-2xl">System Requirements</CardTitle>
            <CardDescription className="text-sm sm:text-base">Make sure your device meets these requirements</CardDescription>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-4">
                <h4 className="font-bold text-base sm:text-lg text-yellow-600 dark:text-yellow-400">Minimum Requirements</h4>
                <div className="space-y-2 sm:space-y-3">
                  {[
                    "Android 6.0 or higher",
                    "2GB RAM",
                    "100MB free storage",
                    "ARM or x86 processor"
                  ].map((req, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm sm:text-base">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-base sm:text-lg text-yellow-600 dark:text-yellow-400">Recommended</h4>
                <div className="space-y-2 sm:space-y-3">
                  {[
                    "Android 8.0 or higher",
                    "4GB RAM",
                    "200MB free storage",
                    "Stable internet for updates"
                  ].map((req, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm sm:text-base">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}