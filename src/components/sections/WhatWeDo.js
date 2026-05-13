"use client";

import React from "react";
import { BuildingOffice2Icon, ChartBarIcon, CodeBracketIcon, SparklesIcon } from "@heroicons/react/20/solid";

const WhatWeDo = () => {
    return (
        <section className="relative bg-white py-10 md:py-10 min-h-screen overflow-hidden">

            <div className="absolute inset-0 z-0">

                {/* Main premium dark gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#93c5fd_0%,_#475569_28%,_#1e293b_58%,_#0f172a_82%,_#020617_100%)]"></div>

                {/* Subtle white glow */}
                <div className="absolute top-0 left-0 w-[35rem] h-[35rem] bg-white/5 blur-3xl rounded-full"></div>

                {/* Deep blue ambient glow */}
                <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-blue-500/10 blur-3xl rounded-full"></div>

                {/* Dark cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/40"></div>

            </div>



            <div className="relative max-w-7xl z-20 mx-auto px-6 bg-cover">

                <h2 className={`text-5xl md:text-6xl font-light text-white tracking-tight leading-tight mb-10`}>
                    What We Do
                </h2>

                {/* Premium Responsive Cards */}
                <div className="relative mt-12 md:mt-10">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

                        {/* Card 1 */}
                        <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.06] backdrop-blur-xl p-7 md:p-10  hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white/10 hover:via-black hover:to-blue-800 hover:border-white/20 transition-all duration-500">

                            {/* Glow */}
                            {/* <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_top_right,rgba(29,78,216,0.55),transparent_40%)]"></div> */}

                            {/* Number */}
                            {/* <div className="absolute top-6 right-6 text-white/10 text-5xl md:text-6xl font-light">
                                01
                            </div> */}

                            {/* Icon */}
                            <div className="relative flex items-center gap-5 mb-8">

                                <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-blue-100/10 border border-white/10 flex items-center justify-center shrink-0">
                                    <ChartBarIcon className="w-7 h-7 text-blue-200" />
                                </div>

                                <h3 className="relative text-2xl md:text-3xl font-light text-white tracking-normal leading-tight">
                                    Data Driven Analytics
                                </h3>

                            </div>

                            <p className="relative text-white/70 leading-relaxed text-sm md:text-base">
                                Leverage advanced analytics and real-time insights to optimize operations, predict demand changes, reduce costs, and build smarter, more resilient business strategies.
                            </p>

                            <div className="mt-8 h-px w-full bg-gradient-to-r from-blue-300/40 via-white/10 to-transparent"></div>
                        </div>

                        {/* Card 2 */}
                        <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.06] backdrop-blur-xl p-7 md:p-10  hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white/10 hover:via-black hover:to-blue-800 hover:border-white/20 transition-all duration-500">

                            {/* <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_top_right,rgba(29,78,216,0.55),transparent_40%)]"></div> */}

                            {/* <div className="absolute top-6 right-6 text-white/10 text-5xl md:text-6xl font-light">
                                02
                            </div> */}

                            <div className="relative flex items-center gap-5 mb-8">

                                <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-blue-100/10 border border-white/10 flex items-center justify-center shrink-0">
                                    <BuildingOffice2Icon className="w-7 h-7 text-blue-200" />
                                </div>

                                <h3 className="relative text-2xl md:text-3xl font-light text-white tracking-normal leading-tight">
                                    SAP & Business Analytics
                                </h3>

                            </div>

                            <p className="relative text-white/70 leading-relaxed text-sm md:text-base">
                                We combine SAP expertise with intelligent business analytics to uncover bottlenecks,
                                streamline workflows, optimize supply chains, and transform enterprise data into
                                actionable business decisions.
                            </p>

                            <div className="mt-8 h-px w-full bg-gradient-to-r from-blue-300/40 via-white/10 to-transparent"></div>
                        </div>

                        {/* Card 3 */}
                        <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.06] backdrop-blur-xl p-7 md:p-10  hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white/10 hover:via-black hover:to-blue-800 hover:border-white/20 transition-all duration-500">

                            {/* <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_top_right,rgba(29,78,216,0.55),transparent_40%)]"></div> */}

                            {/* <div className="absolute top-6 right-6 text-white/10 text-5xl md:text-6xl font-light">
                                03
                            </div> */}

                            <div className="relative flex items-center gap-5 mb-8">

                                <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-blue-100/10 border border-white/10 flex items-center justify-center shrink-0">
                                    <CodeBracketIcon className="w-7 h-7 text-blue-200" />
                                </div>

                                <h3 className="relative text-2xl md:text-3xl font-light text-white tracking-normal leading-tight">
                                    Application Management Service
                                </h3>

                            </div>

                            <p className="relative text-white/70 leading-relaxed text-sm md:text-base">
                                From agile data integration to AI-powered operational insights, we provide scalable
                                application management and consulting solutions that improve efficiency, flexibility,
                                and long-term business growth.
                            </p>

                            <div className="mt-8 h-px w-full bg-gradient-to-r from-blue-300/40 via-white/10 to-transparent"></div>
                        </div>

                        {/* Card 4 */}
                        <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.06] backdrop-blur-xl p-7 md:p-10  hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white/10 hover:via-black hover:to-blue-800 hover:border-white/20 transition-all duration-500">

                            {/* <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_top_right,rgba(29,78,216,0.55),transparent_40%)]"></div> */}

                            {/* <div className="absolute top-6 right-6 text-white/10 text-5xl md:text-6xl font-light">
                                04
                            </div> */}

                            <div className="relative flex items-center gap-5 mb-8">

                                <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-blue-100/10 border border-white/10 flex items-center justify-center shrink-0">
                                    <SparklesIcon className="w-7 h-7 text-blue-200" />
                                </div>

                                <h3 className="relative text-2xl md:text-3xl font-light text-white tracking-normal leading-tight">
                                    AI-Led Data Engineering
                                </h3>

                            </div>

                            <p className="relative text-white/70 leading-relaxed text-sm md:text-base">
                                We design intelligent data platforms and scalable AI-ready infrastructures that
                                automate processing, improve accessibility, and unlock the full value of enterprise data.
                            </p>

                            <div className="mt-8 h-px w-full bg-gradient-to-r from-blue-300/40 via-white/10 to-transparent"></div>
                        </div>

                    </div>
                </div>

            </div>

        </section >
    )
}

export default WhatWeDo;