"use client"

export function FAQSection() {
  const faqs = [
    {
      question: "Is Merge Fellas Mod suitable for kids?",
      answer:
        "This game is suitable for kids as it comes with easy control and exciting visuals. It is free from any aggressive or unsafe content.",
    },
    {
      question: "Can I play Merge fellas offline?",
      answer:
        "Yes, you can play this game without having an internet or wifi connection. It is ideal for areas with low internet connectivity.",
    },
    {
      question: "What is the latest version of Merge Fellas APK, and where can I download it?",
      answer: "Its latest version is v1.8.7, and you can download it from the link given on this website.",
    },
    {
      question: "Is this mod version free to download?",
      answer: "Yes, you can download Merge Fellas Mod for free without spending any money.",
    },
    {
      question: "Why has Merge Fellas APK become so popular?",
      answer:
        "Although the official version of this game is very entertaining but it has some restrictions. Its modded versions come with a lot of modded features like unlimited moves, accelerated progress, offline play, and ad-free gameplay.",
    },
    {
      question: "Can I use Merge Fellas on iOS?",
      answer:
        "Yes, you can play the official version of this game on your iOS devices, but you can't play the modded version on iOS. The reason is that the modded versions are only designed for Android devices, not for iOS.",
    },
    {
      question: "What's New in the merge fellas Latest Version 1.8.7?",
      answer: "The latest version comes with:\n1. One new mode\n2. Fix bugs that are problematic for you in the older version.",
    },
    {
      question: "Can I enjoy Merge Fellas APK Offline?",
      answer:
        "Yes, this game doesn't need internet or wi-fi connection. It offers you the best gaming experience online and offline.",
    },
  ]

  return (
    <section className="max-w-5xl mx-auto px-4 mb-20">
      <h2 className="text-center font-extrabold text-3xl md:text-4xl mb-10 text-gray-900 dark:text-white">
        Frequently Asked Questions
      </h2>
      <div className="space-y-5">
        {faqs.map((faq, index) => (
          <details key={index} className="faq-item border-b border-gray-200 dark:border-gray-700 pb-3">
            <summary className="font-semibold cursor-pointer text-lg hover:text-yellow-500 transition-colors text-gray-900 dark:text-white">
              {faq.question}
            </summary>
            <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}