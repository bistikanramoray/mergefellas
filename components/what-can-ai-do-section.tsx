"use client"

import React from "react"
import { Crown, Gamepad2, Infinity, ShieldOff, Gift, RotateCcw, Download } from "lucide-react"

interface MergeFellasModFeaturesProps { 
  pageType?: "single" | "multi"
}

export function MergeFellasModFeatures({ pageType = "single" }: MergeFellasModFeaturesProps) {
  const getFeatures = () => {
    const icons = [Crown, Gamepad2, Infinity, ShieldOff, Gift, RotateCcw, Download]
    
    const featuresData = [
      {
        number: "1",
        title: "Unlocked Premium Content",
        description:
          "In the official version, your ultimate goal is to unlock new characters and enjoy them fully. With the modded version, you can access exclusive creatures without any restrictions. You can enjoy unlimited and unlocked everything, which will increase your creativity level. Here, you won't focus only on accumulating points; you will also fully enjoy every moment of the game. Everything in this game is in your hands without any wait, even from the start of the game.",
      },
      {
        number: "2",
        title: "Unlocked Multiple Mode Types",
        description:
          "In the official version, you have to unlock different modes step by step. But in the mod APK, you can jump into any of the modes, like Italian Brainrot 2, Italian Brainrot 2, Capybara Mode, and Giga Mode right from the beginning. Why are you still waiting? Just click the link and enjoy the mode that you want.",
      },
      {
        number: "3",
        title: "Unlimited Shakes/Merges",
        description:
          "In the official version, your game ends when there is no space left in the container. It means you have limited merges in the original game. After that limit, your game will be over, and you have to play it again. This may lose your interest in the game once it is over. To sustain your interest, you need a version where you can enjoy unlimited merges/shakes. Yes! It is possible with a mod version of Merge Fellas, where you get unlimited merges to test your creativity level by creating multiple new creations.",
      },
      {
        number: "4",
        title: "Ads Free Gameplay",
        description:
          "In the official versions, ads interrupt your game and divert your attention. Ads are always an annoying part of games. To get rid of this issue, download the modded version and enjoy the game without ad interruptions.",
      },
      {
        number: "5",
        title: "Free Reward",
        description:
          "In the official version, sometimes you need to watch ads to get free rewards. But in the modded version, you can claim for free reward without even watching the ads. The mod version offers ad-free gameplay, so there is no option to watch ads to get a reward. You can get unlimited free rewards whenever you want.",
      },
      {
        number: "6",
        title: "Unlimited Revives",
        description:
          "In the original version, whenever you lost your game, the game itself supported a one-time revive option per session, or you had to watch ads to continue it. If you avail that one revive option, what's after that? Play it from the start? At this time, you are completely helpful and disappointed. Don't worry, the mod version's unlimited revives never disappoint you. With mod APK, you can now enjoy unlimited revives. You can play again even if the game is over. Is it not mindblowing? Enjoy the game again and again without any restarts.",
      },
      {
        number: "7",
        title: "Free to Download",
        description:
          "One of the major advantages of Merge Mod APK is that it is free to download. It means you can enjoy all the above premium features just by clicking on the download button. Enjoy this game without spending a single penny.",
      },
    ]

    return featuresData.map((feature, index) => ({
      ...feature,
      icon: icons[index]
    }))
  }

  const features = getFeatures()

  return (
    <section className="max-w-7xl mx-auto mb-20">
      <h2 className="text-center font-extrabold text-3xl mb-6 max-w-4xl mx-auto text-gray-900 dark:text-white">
        Modded Features of Merge Fellas Mod APK
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto px-4 leading-relaxed">
        Although the official version of Merge Fellas offers multiple features to capture your attention, it may fail when you want to enjoy unlimited and unlocked content.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {features.map((feature) => {
          const IconComponent = feature.icon
          return (
            <article key={feature.number} className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 space-y-4 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-8xl font-black text-gray-300 dark:text-gray-600 opacity-30 select-none pointer-events-none">
                {feature.number}
              </div>
              <div className="flex items-center gap-3 relative z-10">
                <div className="bg-yellow-500 p-2 rounded-lg">
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 dark:text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed relative z-10">{feature.description}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}