import type { Metadata } from "next"
import { Header } from "@/components/header"
import { BlogList } from "@/components/blog-list"
import { Footer } from "@/components/footer"
import { fetchPostsByLanguage } from "@/lib/api"

export const metadata: Metadata = {
  title: "Blog –  Merge Fellas Mod APK",
  description:
    " Discover the latest tips, tutorials, updated and insights about the Merge Fellas Mod APK with unlimited features, ad-free gameplay, and endless fun.",
  alternates: {
    canonical: "https://mergefellas-apk.com/blog",
     
  },
  openGraph: {
    title: "Blog –  Merge Fellas Mod APK",
    description:
      " Discover the latest tips, tutorials, updated and insights about the Merge Fellas Mod APK with unlimited features, ad-free gameplay, and endless fun.",
    type: "website",
    url: "https://mergefellas-apk.com/blog",
    locale: "en_US",
  },
}

export const revalidate = 3600

export default async function BlogPage() {
  const posts = await fetchPostsByLanguage("en")

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />

      <main className="max-w-7xl mx-auto px-6 pb-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-600 dark:text-gray-400 pt-8 select-none">
          <ol className="flex space-x-2 rtl:space-x-reverse">
            <li className="flex items-center">
              <a href={`/`} className="hover:underline">
                Home
              </a>
            </li>
            <li className="flex items-center">
              <span className="mx-2">{">"}</span>
              <span className="font-semibold text-gray-900 dark:text-white">Blog</span>
            </li>
          </ol>
        </nav>
        <section className="text-center max-w-5xl mx-auto mt-8 mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mt-12 mb-6">Blog</h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm md:text-base max-w-3xl mx-auto">
            Discover the latest tips, tutorials, updated and insights about the Merge Fellas Mod APK with unlimited features, ad-free gameplay, and endless fun.
          </p>
        </section>
        <BlogList posts={posts}  />
      </main>

      <Footer  />
    </div>
  )
}
