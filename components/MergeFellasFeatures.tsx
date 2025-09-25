"use client"

import React from "react"
import { 
  Gamepad2, 
  Users, 
  Eye, 
  Volume2, 
  Sparkles,
  Grid3X3,
  Cat,
  Dog,
  Rabbit,
  Laugh,
  UserPlus,
  Zap
} from "lucide-react"

interface MergeFellasFeaturesSectionProps { 
  pageType?: "single" | "multi"
}

export function MergeFellasFeatures({ pageType = "single" }: MergeFellasFeaturesSectionProps) {
  const featuresData = [
    {
      title: "Genre and Style",
      icon: Gamepad2,
      description: "Merge Fellas is a merge puzzle game genre that invites you to combine identical items like animals and mees to create new ones. It designs;",
      features: [
        "Short and addictive play sessions to sustain your attention and interest",
        "Has a causal structure",
        "Gives instant feedback and rewards at every sharp merge",
        "Give unlimited shakes, revives"
      ]
    },
    {
      title: "Multiple Mode Types",
      icon: Grid3X3,
      description: "The thing that makes this game stand out is its remarkable features and a wide collection of Fellas. It was born from \"Brainrot' Universe, a weird meme that originated from AI images.",
      modes: [
        "Italian Brainrot",
        "Italian Brainrot 2",
        "Italian Brainrot 2",
        "Italian Brainrot 3",
        "Fellas Mode: Combine generic pets to form high-tier creatures",
        "Cats Mode and Dog Mode: Merge cats and dogs into remarkable hybrids",
        "Giga Mode",
        "Capybara Mode: Merge capybara into variants such as \"capybara with turtle\" or \"bee capybara\"",
        "Xmas Mod",
        "Friends Mode: collaborate with friends",
        "Meme Mode: Combine internet memes for chaotic creatures"
      ],
      comparison: [
        { mode: "Fellas", focus: "Pets & Memes", objective: "Form Giant Capybara" },
        { mode: "Dog Mode", focus: "Dog", objective: "Merge pups into a unique combination" },
        { mode: "Cat Mode", focus: "Cats", objective: "Merge cats to add cuteness" },
        { mode: "Capybara Mode", focus: "Capybara", objective: "Discover new capybara forms" },
        { mode: "Memes Mode", focus: "Internet Memes", objective: "Combine to form ultimate memes" },
        { mode: "Friends Mode", focus: "Social/Leaderboards", objective: "Compte friends (asynchronously)" },
        { mode: "Italian Brainrot", focus: "Hyper-specific Memes", objective: "Create the strongest combinations" }
      ]
    },
    {
      title: "Accessibility Features",
      icon: Eye,
      description: "Accessibility features of this game are:",
      features: [
        "Suitable for all ages and everyone",
        "Play offline where you don't have an internet connection",
        "Optimized fonts and controls for small and large screens, enjoy it on both Android phones and PC. To play this game on your PC, you have to download an Android emulator, like Nox, Bluestacks, or LDPlayer",
        "Clear interface and instant feedback system for both newcomers and regular young players"
      ]
    },
    {
      title: "Visual and Auditory Treats",
      icon: Volume2,
      description: "Beyond interesting gameplay, this game captivates you with its amazing visuals and immersive sound effects. The auditory element plays an important role in mood enhancement. When you get an immersive atmosphere with amazing sounds, graphics, and gameplay, you will become addicted to this game."
    },
    {
      title: "Brainrot Universe in Merge Fellas",
      icon: Sparkles,
      description: "Merge Fellas come with a bunch of amazing characters. When you combine two copies successfully, a new creature appears that no one can guess. They are:",
      creatures: [
        "Bombardino Crocodile: Crocodile with aeroplane shape",
        "Tralalero Tralala: A three-legged shark wearing Nike shoes",
        "Cappuccino Ballerina: Dancer in tutu, spins the shape of a cup of cappuccino",
        "Tung Tung Tung Sahur: Final boss of the game"
      ]
    }
  ]

  return (
    <section className="max-w-7xl mx-auto mb-20 px-4">
      <h2 className="text-center font-extrabold text-3xl mb-6 max-w-4xl mx-auto text-gray-900 dark:text-white">
        Features of Merge Fellas
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
        Merge Fella's offers a lot of features that make this game interesting. Let's explore these features in detail.
      </p>
      
      <div className="space-y-8">
        {featuresData.map((section, index) => {
          const IconComponent = section.icon
          return (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-yellow-500 p-3 rounded-xl">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-2xl text-gray-900 dark:text-white">{section.title}</h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {section.description}
              </p>

              {/* Features List */}
              {section.features && (
                <ul className="space-y-3">
                  {section.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Modes List */}
              {section.modes && (
                <div className="mb-6">
                  <p className="font-semibold text-gray-900 dark:text-white mb-4">Available Modes on this game are:</p>
                  <ol className="space-y-2">
                    {section.modes.map((mode, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full font-semibold min-w-[24px] text-center">
                          {idx + 1}
                        </span>
                        <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{mode}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Comparison Table */}
              {section.comparison && (
                <div className="mt-6">
                  <p className="font-semibold text-gray-900 dark:text-white mb-4">Here is a brief comparison among these options:</p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden">
                      <thead>
                        <tr className="bg-gray-100 dark:bg-gray-600">
                          <th className="border border-gray-300 dark:border-gray-500 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Mode</th>
                          <th className="border border-gray-300 dark:border-gray-500 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Focus</th>
                          <th className="border border-gray-300 dark:border-gray-500 px-4 py-3 text-left font-semibold text-gray-900 dark:text-white">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        {section.comparison.map((row, idx) => (
                          <tr key={idx}>
                            <td className="border border-gray-300 dark:border-gray-500 px-4 py-3 text-gray-700 dark:text-gray-300 text-sm">{row.mode}</td>
                            <td className="border border-gray-300 dark:border-gray-500 px-4 py-3 text-gray-700 dark:text-gray-300 text-sm">{row.focus}</td>
                            <td className="border border-gray-300 dark:border-gray-500 px-4 py-3 text-gray-700 dark:text-gray-300 text-sm">{row.objective}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Creatures List */}
              {section.creatures && (
                <ul className="space-y-3">
                  {section.creatures.map((creature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{creature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}