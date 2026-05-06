"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
});

export default function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie_consent");
        if (consent !== "accepted") setVisible(true);
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie_consent", "accepted");
        setVisible(false);
    };

    const handleReject = () => {
        setVisible(false); // shows again on reload
    };

    if (!visible) return null;

    return (
        <div className={`  fixed bottom-0 left-0 w-full z-50`}>

            <div className="bg-black/90 backdrop-blur-lg border-t border-white/10 py-4">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                    {/* TEXT */}
                    <p className="text-sm md:text-[15px] text-gray-300 max-w-3xl">
                        We use cookies to improve your experience, analyze traffic, and enhance our services.{" "}
                        <Link href="/cookie-policy" className="underline hover:text-white">
                            Learn more
                        </Link>
                    </p>

                    {/* BUTTONS */}
                    <div className="flex gap-3 flex-wrap">

                        {/* Reject */}
                        <button
                            onClick={handleReject}
                            className="px-4 py-2 text-sm border border-white/20 text-gray-300 rounded-md hover:bg-white hover:text-black transition duration-300 cursor-pointer"
                        >
                            Reject All
                        </button>

                        {/* Manage */}


                        {/* Accept */}
                        <button
                            onClick={handleAccept}
                            className="px-5 py-2 text-sm rounded-md bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white hover:opacity-90 transition duration-300 cursor-pointer"
                        >
                            Accept All
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}