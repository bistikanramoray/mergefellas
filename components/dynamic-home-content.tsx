"use client"

import Link from "next/link"
import { HeroSection } from "@/components/hero-section"
import { FaceSwapDemo } from "@/components/face-swap-demo"
import { WhatCanAIDoSection } from "@/components/what-can-ai-do-section"
import { UserReviewsSection } from "@/components/PersonalExperienceSection"
import { FAQSection } from "@/components/faq-section"
import { HowToUseSection } from "@/components/how-to-use-section"
import { OnlineToolsSection } from "@/components/online-tools-section"
import { PerfectFaceSwapperSection } from "@/components/perfect-face-swapper-section"
import { BlogSection } from "@/components/blog-section"
import type { BlogPost } from "@/lib/api"

interface DynamicHomeContentProps {
  initialPosts: BlogPost[]
}

export function DynamicHomeContent({ initialPosts }: DynamicHomeContentProps) {
  return (
    <div>
      <HeroSection lang="en" />
      <FaceSwapDemo lang="en" />
      <WhatCanAIDoSection lang="en" />
      <UserReviewsSection lang="en" />
      <FAQSection lang="en" />
      <HowToUseSection lang="en" />
      <OnlineToolsSection lang="en" />
      <PerfectFaceSwapperSection lang="en" />
      <BlogSection posts={initialPosts} lang="en" />

      {/* Hidden navigation links for crawlers */}
      <div className="sr-only">
        <h2>Site Navigation (For Search Engines)</h2>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <span>Blog</span>
              </Link>
            </li>
           
            <li>
              <Link href="/about">
                <span>About Us</span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span>Contact</span>
              </Link>
            </li>
            <li>
              <Link href="/privacy">
                <span>Privacy Policy</span>
              </Link>
            </li>
            <li>
              <Link href="/terms">
                <span>Terms of Service</span>
              </Link>
            </li>
            <li>
              <Link href="/download">
                <span>Download App</span>
              </Link>
            </li>
            <li>
              <Link href="/help">
                <span>Help Center</span>
              </Link>
            </li>
            <li>
              <Link href="/tutorials">
                <span>Tutorials</span>
              </Link>
            </li>
            <li>
              <Link href="/templates">
                <span>Templates</span>
              </Link>
            </li> 
            <li>
              <Link href="/id">
                <span>Bahasa Indonesia</span>
              </Link>
            </li>
            <li>
              <Link href="/ru">
                <span>Русский</span>
              </Link>
            </li>
            <li>
              <Link href="/pt">
                <span>Português</span>
              </Link>
            </li>
            <li>
              <Link href="/es">
                <span>Español</span>
              </Link>
            </li>
          </ul>
        </nav>

        <h3>Latest Blog Posts</h3>
        <ul>
          {initialPosts.map((post) => (
            <li key={`nav-${post.id}`}>
              <Link href={`/blog/${post.slug}`}>
                <span>{post.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
