import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Script from "next/script"; 
import CookieConsent from "@/components/CookieConsent";


export const metadata = {
  title: "Techylla",
  description: "Techylla Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
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