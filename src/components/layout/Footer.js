"use client";

import Link from "next/link";
import { Manrope } from "next/font/google";

const manrope = Manrope({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"]
});

import { Urbanist } from 'next/font/google'

const urbanist = Urbanist({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
})

export default function Footer() {
    return (
        <footer className="bg-black/90 text-white min-h-screen">

            <div className="max-w-7xl mx-auto px-6">

                {/* TOP SECTION */}
                <div className="grid md:grid-cols-2 gap-12">

                    {/* LEFT SIDE */}
                    <div className={`${urbanist.className} mt-10 md:mt-15`}>
                        <h2 className={`${urbanist.className} text-7xl font-medium tracking-tight leading-tight mb-10`}>
                            Think Data <br />
                            Think{" "}
                            <Link href="/">
                                <img
                                    src="/SampleLogo.png"
                                    alt="Techylla Logo"
                                    className="w-70 inline-block align-middle"
                                />
                            </Link>
                        </h2>

                        {/* ✅ LOGO HERE */}

                        <div className="mt-20 pl-2">
                            <p className="text-xl font-semibold bg-gradient-to-b from-blue-500 via-blue-300 to-blue-200 bg-clip-text text-transparent mb-3">
                                Connect with us on
                            </p>

                            <Link href="https://www.linkedin.com/company/techylla/" target="_blank">
                                <img
                                    src="/linkedin.png"
                                    alt="LinkedIn"
                                    className="w-36 md:w-40 cursor-pointer hover:opacity-80 transition"
                                />
                            </Link>
                        </div>

                        <div className={`${urbanist.className} grid grid-cols-2 gap-y-2 gap-x-4 md:gap-x-0 text-sm text-gray-200 mt-6 -mb-8 ml-2`}>

                            {/* INDIA */}
                            {/* <p className="font-semibold text-white">India Office:</p>
                        <div></div>

                        <p>Kolkata, India</p>
                        <div></div> */}

                            {/* SPACE */}
                            {/* <div className="col-span-2 h-4"></div> */}

                            {/* US + CONTACT */}
                            <p className="text-l font-semibold text-white">US Office:</p>
                            <div></div>

                            <p>116 Village Blvd Suite 200</p>
                            <div></div>
                            {/* <p className="-ml-5 md:-ml-10">Tel: +91 98311 69927 (IN)</p> */}

                            <p>Princeton, NJ 08540</p>
                            <div></div>
                            {/* <a href="mailto:sales@techylla.com" className="hover:underline -ml-5 md:-ml-10">
                            Email: sales@techylla.com
                        </a> */}

                            {/* <div className="col-span-2 h-4"></div> */}

                            <div></div>
                            <p className="-ml-5 md:-ml-10">Tel: +1 (732) 208-4788 (US)</p>



                            <p className="font-semibold text-white">India Office:</p>
                            <p className="-ml-5 md:-ml-10">Tel: +91 98311 69927 (IN)</p>

                            <p>Kolkata, India</p>
                            <a href="mailto:sales@techylla.com" className="hover:underline -ml-5 md:-ml-10">
                                Email: sales@techylla.com
                            </a>

                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className={`${urbanist.className} text-white text-sm mt-10 md:mt-20 md:-ml-20`}>

                        {/* TOP GRID (3 COLUMNS) */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">

                            {/* Services */}
                            <div>
                                <h3 className="text-xl font-semibold bg-gradient-to-b from-blue-500 via-blue-300 to-blue-200 bg-clip-text text-transparent mb-4">Services & Solutions</h3>
                                <div className="space-y-3">
                                    <Link href="/services/data-cloud" className="block hover:text-blue-300 transition">
                                        Data & Cloud
                                    </Link>
                                    <Link href="/services/business-transformation" className="block hover:text-blue-300 transition">
                                        Business Transformation
                                    </Link>
                                    <Link href="/services/artificial-intelligence" className="block hover:text-blue-300 transition">
                                        Artificial Intelligence
                                    </Link>
                                </div>
                            </div>

                            {/* Knowledge Center */}
                            <div>
                                <h3 className="text-xl font-semibold bg-gradient-to-b from-blue-500 via-blue-300 to-blue-200 bg-clip-text text-transparent mb-4">Knowledge Center</h3>
                                <div className="space-y-3">
                                    <Link href="/case-studies" className="block hover:text-blue-300 transition">
                                        Case Studies
                                    </Link>
                                    <Link href="/data-ai" className="block hover:text-blue-300 transition">
                                        Blogs
                                    </Link>
                                </div>
                            </div>

                            {/* Industry */}
                            <div>
                                <h3 className="text-xl font-semibold bg-gradient-to-b from-blue-500 via-blue-300 to-blue-200 bg-clip-text text-transparent mb-4">Industry</h3>
                                <div className="space-y-3">
                                    <Link href="/industry/healthcare-and-lifesciences" className="block hover:text-blue-300 transition">
                                        Healthcare & LifeSciences
                                    </Link>
                                    <Link href="/industry/supplychain-and-logistics" className="block hover:text-blue-300 transition">
                                        Supply Chain & Logistics
                                    </Link>
                                    <Link href="/industry/manufacturing" className="block hover:text-blue-300 transition">
                                        Manufacturing
                                    </Link>
                                    <Link href="/hitech" className="block hover:text-blue-300 transition">
                                        HiTech
                                    </Link>
                                </div>
                            </div>

                        </div>

                        {/* BOTTOM GRID (LINKS + SOCIAL) */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-5">

                            <Link href="/about" className="text-xl font-semibold bg-gradient-to-b from-blue-500 via-blue-300 to-blue-200 bg-clip-text text-transparent hover:text-white transition">
                                About Us
                            </Link>

                            <Link href="/careers" className="text-xl font-semibold bg-gradient-to-b from-blue-500 via-blue-300 to-blue-200 bg-clip-text text-transparent hover:text-white transition">
                                Careers
                            </Link>

                            <Link href="/contact" className="text-xl font-semibold bg-gradient-to-b from-blue-500 via-blue-300 to-blue-200 bg-clip-text text-transparent hover:text-white transition">
                                Contact Us
                            </Link>

                            {/* <div>
                            <p className="text-xl text-orange-400">
                                Connect with us on
                            </p>

                            <Link href="https://www.linkedin.com/company/techylla/" target="_blank">
                                <img
                                    src="/linkedin.png"
                                    alt="LinkedIn"
                                    className="w-40 cursor-pointer hover:opacity-80"
                                />
                            </Link>
                        </div> */}

                        </div>

                    </div>
                    {/* BOTTOM */}


                </div>

                <div className={`${urbanist.className} mt-12 w-[99%] max-w-[1320px] mx-auto`}>

                    <div className="border-t border-white/20"></div>

                    <p className="mt-4 text-sm text-gray-200 text-left">
                        Copyright © 2026 Techylla. All rights reserved.
                    </p>

                </div>
            </div>
        </footer>
    );
}