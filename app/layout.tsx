import type { Metadata } from "next"
import Script from "next/script"
import "./globals.css"
import HeaderLogo from "@/components/HeaderLogo"
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
        {/* Fixed Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md h-28" style={{ borderBottom: '1px solid #3A2E24' }}>
          <div className="h-full flex items-center justify-between px-8">
            <div className="w-8" />
            <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none opacity-0">
              <HeaderLogo />
            </div>
            <MobileNav />
          </div>
        </header>

        {/* Logo — fixed above overlay, outside header stacking context */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 h-28 flex items-center z-[105] pointer-events-auto">
          <HeaderLogo />
        </div>

        {/* Main Content */}
        <main className="flex-1 pt-28">{children}</main>

        <Footer />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

