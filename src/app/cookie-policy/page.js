"use client";

import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
});

export default function CookiePolicy() {
    return (
        <section className={`  bg-black text-white py-20`}>
            <div className="max-w-7xl mx-auto px-6">

                <h1 className="text-4xl md:text-5xl font-semibold mb-8">
                    Cookie Policy
                </h1>

                <p className="text-gray-300 mb-6">
                    This Cookie Policy explains how we use cookies and similar technologies
                    to recognize you when you visit our website.
                </p>

                {/* SECTION */}
                <h2 className="text-2xl font-semibold mt-10 mb-4">
                    What are cookies?
                </h2>
                <p className="text-gray-300">
                    Cookies are small data files that are placed on your device when you visit a website.
                    They are widely used to make websites work efficiently and provide reporting information.
                </p>

                {/* SECTION */}
                <h2 className="text-2xl font-semibold mt-10 mb-4">
                    How we use cookies
                </h2>
                <p className="text-gray-300">
                    We use cookies to enhance your browsing experience, analyze site traffic,
                    and understand where our visitors are coming from.
                </p>

                {/* SECTION */}
                <h2 className="text-2xl font-semibold mt-10 mb-4">
                    Types of cookies we use
                </h2>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <li>Essential cookies – Required for basic website functionality</li>
                    <li>Analytics cookies – Help us understand user behavior</li>
                    <li>Preference cookies – Remember your settings</li>
                </ul>

                {/* SECTION */}
                <h2 className="text-2xl font-semibold mt-10 mb-4">
                    Managing cookies
                </h2>
                <p className="text-gray-300">
                    You can control and manage cookies through your browser settings.
                    You can also choose to accept or reject cookies through our cookie banner.
                </p>

                {/* SECTION */}
                <h2 className="text-2xl font-semibold mt-10 mb-4">
                    Updates to this policy
                </h2>
                <p className="text-gray-300">
                    We may update this Cookie Policy from time to time to reflect changes in technology or regulations.
                </p>

            </div>
        </section>
    );
}