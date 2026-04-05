import type { Metadata } from "next"
import Script from "next/script"
import "./globals.css"
import HeaderLogoVisible from "@/components/HeaderLogoVisible"
import Footer from "@/components/Footer"
import MobileNav from "@/components/MobileNav"
import SearchOverlay from "@/components/SearchOverlay"
import PageTransition from "@/components/PageTransition"
import HeaderHeightSetter from "@/components/HeaderHeightSetter"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  metadataBase: new URL("https://joedeluca.it"),
  title: {
    default: "Joe DeLuca",
    template: "%s — Joe DeLuca",
  },
  description:
    "Senior copywriter and creative director. US agency pedigree. Works in English. Based in Sardinia.",
  openGraph: {
    siteName: "Joe DeLuca",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/dnx2cfm.css" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PLACEHOLDER"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PLACEHOLDER');
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col">

        {/* Fixed header — logo lives inside so overflow:hidden clips it */}
        <header
          className="fixed top-0 left-0 right-0 backdrop-blur-md"
          style={{ backgroundColor: 'rgba(245, 240, 232, 0.85)', borderBottom: '1px solid #C8B89A', zIndex: 150, overflow: 'hidden' }}
        >
          <div id="header-inner" className="w-full mx-auto px-5 sm:px-8 pb-4" style={{ maxWidth: "800px", display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "100%" }}>
            <HeaderLogoVisible />
          </div>
          <div className="absolute top-4 right-6" style={{ zIndex: 60 }}>
            <MobileNav />
          </div>
        </header>

        <HeaderHeightSetter />
        <SearchOverlay />

        {/* Page content pushed below fixed header */}
        <PageTransition>
          <div className="flex flex-col flex-1" style={{ paddingTop: 'var(--header-height, 0)' }}>
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </PageTransition>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
