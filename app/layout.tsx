import type { Metadata } from "next"
import Script from "next/script"
import "./globals.css"
import HeaderLogoVisible from "@/components/HeaderLogoVisible"
import Footer from "@/components/Footer"
import MobileNav from "@/components/MobileNav"
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
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png?v=2", type: "image/png" },
    ],
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
        {/* Header */}
        <header className="w-full relative" style={{ backgroundColor: '#F5F0E8', borderBottom: '1px solid #C8B89A' }}>
          <div className="w-full mx-auto px-5 sm:px-8 py-8" style={{ maxWidth: '800px' }}>
            <HeaderLogoVisible />
          </div>
          <div className="absolute top-4 right-6 z-10">
            <MobileNav />
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        <Footer />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

