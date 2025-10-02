"use client"

import React from "react"

interface MergeFellasAlternativesProps { 
  pageType?: "single" | "multi"
}

export function MergeFellasAlternatives({ pageType = "single" }: MergeFellasAlternativesProps) {
  const sections = [
    {
      title: "Fruit Merge Games",
      description: "These games, such as Watermelon Merge Suika Game, Fruit Merge: Juicy Drop Game, and Fruit Merge: Watermelon puzzle, involve merging fruits to form large fruits and achieve specific combinations.",
      image: "/images/one-img.webp",
      alt: "Fruit Merge Games Screenshot",
      bgColor: "from-orange-400 to-red-500",
      bgColorDark: "bg-orange-100 dark:bg-orange-900"
    },
    {
      title: "Egg Maker",
      description: "This game involves combining eggs to unlock new features. It offers a casual gaming experience with gameplay similar to that of Merge Fellas, but here you merge eggs instead of memes or animals.",
         image: "/images/two-img.webp",
      alt: "Egg Maker Game Screenshot",
      bgColor: "from-yellow-400 to-orange-500",
      bgColorDark: "bg-yellow-100 dark:bg-yellow-900"
    },
    {
      title: "Suika x Watermelon Game: Kitty",
      description: "This game involves fruit-matching experience, where you merge identical fruits to form an entirely new fruit. This game brings an extra level of joy by creating new fruits.",
         image: "/images/three-img.webp",
      alt: "Suika Watermelon Game Screenshot",
      bgColor: "from-green-400 to-blue-500",
      bgColorDark: "bg-green-100 dark:bg-green-900"
    },
    {
      title: "Block Blast",
      description: "This is also a puzzle game with two different modes. In classic Block Puzzle mode, you have to eliminate rows or columns that you build with the block to get a score. In the second game mode, you have to solve complex situations.",
        image: "/images/four-img.webp",
      alt: "Block Blast Game Screenshot",
      bgColor: "from-purple-400 to-pink-500",
      bgColorDark: "bg-purple-100 dark:bg-purple-900"
    },
    {
      title: "Escape from Playcare Chapter 3",
      description: "This is a horror game where your purpose is to advance with a peculiar monster. The long limbs of this monster make your progress easy in this game. If you like horror games, choose this one.",
      image: "/images/five-img.webp", 
      alt: "Escape from Playcare Screenshot",
      bgColor: "from-gray-600 to-gray-800",
      bgColorDark: "bg-gray-100 dark:bg-gray-900"
    }
  ]

  const sectionTitle = "Common Alternatives of Merge Fellas Mod APK"
  const sectionDescription = "Some other popular games offer similar gameplay to Merge Fellas. Some common alternatives are here for discussion:"

  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-5  ">
        {/* Left side sticky content */}
        <div className="flex flex-col gap-6 lg:sticky lg:top-20 lg:max-w-xs lg:self-start">
          <h2 className="text-3xl font-extrabold leading-tight max-w-xs text-gray-900 dark:text-white">
            {sectionTitle}
          </h2>
          <p className="text-sm opacity-80 max-w-xs text-gray-600 dark:text-gray-300">
            {sectionDescription}
          </p>
        </div>

        {/* Right side scrollable content */}
        <div className="scrollable-right flex-1 flex flex-col gap-11 lg:pr-6">
          {sections.map((section, index) => (
            <section
              key={index}
              className={`right-section flex flex-col md:flex-row bg-gradient-to-r ${section.bgColor} rounded-lg shadow-lg overflow-hidden`}
            >
              <div
                className={`md:flex-shrink-0 p-6 md:p-0 md:w-1/2 flex justify-center items-center ${section.bgColorDark}`}
              >
                <img
                  src={section.image || "/placeholder.svg"}
                  alt={section.alt}
                  className="rounded-lg shadow-lg max-w-full h-auto"
                />
              </div>
              <div className="md:w-1/2 bg-gray-100 dark:bg-gray-800 p-6 flex flex-col justify-center rounded-r-lg">
                <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">
                  {section.title}
                </h3>
                <p className="text-sm opacity-90 leading-relaxed text-gray-600 dark:text-gray-300">
                  {section.description}
                </p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}