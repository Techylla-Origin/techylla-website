import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Script from "next/script";
import CookieConsent from "@/components/CookieConsent";
import { Urbanist } from 'next/font/google'

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-urbanist',
  display: 'swap',
})


export const metadata = {
  title: "Techylla — AI & Digital Transformation",
  description: "Reimagine your enterprise with AI-led digital solutions.",
  openGraph: {
    title: "Techylla — AI & Digital Transformation",
    description: "Reimagine your enterprise with AI-led digital solutions.",
    siteName: "Techylla",
    type: "website"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={urbanist.variable}>
      <body className={`${urbanist.className} antialiased`}>
        <Navbar />
        {children}
        <CookieConsent />
        <Footer />

        {/* ✅ HUBSPOT CHATBOT SCRIPT */}
        <Script
          id="hs-script-loader"
          src="https://js.hs-scripts.com/245721089.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}