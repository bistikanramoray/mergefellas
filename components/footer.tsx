"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-muted text-foreground py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/images/Merge-Fellas-logo.webp" width={171} alt="Merge Fellas Logo" />
            </div>
            <p className="text-sm mb-4 text-muted-foreground">
              Download the latest Merge Fellas Mod APK with unlimited features, ad-free gameplay, and endless fun.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary transition-colors text-muted-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/download" className="hover:text-primary transition-colors text-muted-foreground">
                  Download APK
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors text-muted-foreground">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Sitemap</h3>
            <ul className="space-y-2 text-sm">
             
             
               <li>
                <Link href="/disclaimer" className="hover:text-primary transition-colors text-muted-foreground">
                  Disclaimer
                </Link>
              </li>

 
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors text-muted-foreground">
                  Privacy Policy
                </Link>
              </li>

                     
              <li>
                <Link href="/contact-us" className="hover:text-primary transition-colors text-muted-foreground">
                  Contact Us
                </Link>
              </li>




            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a
                target="_blank"
                href="#"
                className="hover:text-primary transition-colors text-muted-foreground"
                aria-label="Facebook"
                rel="noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                target="_blank"
                href="#"
                className="hover:text-primary transition-colors text-muted-foreground"
                aria-label="Twitter"
                rel="noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                target="_blank"
                href="#"
                className="hover:text-primary transition-colors text-muted-foreground"
                aria-label="Instagram"
                rel="noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323C6.001 8.198 7.152 7.708 8.449 7.708s2.448.49 3.323 1.416c.875.875 1.365 2.026 1.365 3.323s-.49 2.448-1.365 3.323c-.875.807-2.026 1.218-3.323 1.218zm7.718-1.297c-.875.807-2.026 1.218-3.323 1.218s-2.448-.411-3.323-1.218c-.875-.875-1.365-2.026-1.365-3.323s.49-2.448 1.365-3.323c.875-.926 2.026-1.416 3.323-1.416s2.448.49 3.323 1.416c.875.875 1.365 2.026 1.365 3.323s-.49 2.448-1.365 3.323z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">©2025 Merge Fellas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
