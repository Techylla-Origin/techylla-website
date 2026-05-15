"use client";

import { motion } from "framer-motion";

export default function SandipStory() {
    return (
        <section className={`relative bg-gradient-to-r from-blue-100 via-white to-blue-200 w-full overflow-hidden`}>

            <div className={`max-w-7xl mx-auto px-6`}>

                <div className="grid lg:grid-cols-3 gap-6 py-20 md:py-28">
                    <div className="lg:col-span-2">

                        <h1 className={`  md:font-normal font-bold text-black md:mb-10 mb-5 md:text-5xl text-2xl`}>
                            The End of Static Trade: Engineering Margin Defense in a Fragmented World
                        </h1>

                        <h2 className={`  md:text-3xl text-xl mb-3 font-semibold`}>The Macro Reality </h2>

                        <p className="md:text-lg text-sm text-gray-700 mb-8">
                            The era of predictable global trade is over. As supply chains decouple, tariffs have become volatile variables that can erase a year’s margin in a single trading day. Relying on legacy spreadsheets is a high-risk strategy that fails the "clean books" test.

                        </p>

                        <h2 className={`  md:text-3xl text-xl mb-3 font-semibold mt-3`}>The Solution: Data & AI Engineering as a Hedge </h2>

                        <p className={`  md:text-lg text-sm text-gray-700 mb-8`}>
                            We don't "predict" the future; we build the <span className="text-gray-900 font-semibold"> picks and shovels</span> to navigate it. Our AI engineering framework integrates your enterprise financial data with real-time global trade feeds to create a <span className="text-gray-900 font-semibold"> Living Tariff Model</span>.
                            <br />
                            <br />
                            <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                            <span className="text-gray-900 font-semibold">Granular Impact Mapping:</span> Automatically map tariff changes across 10,000+ SKUs to see the immediate impact on your cost of goods sold ($COGS$).
                            <br />
                            <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                            <span className="text-gray-900 font-semibold">Arbitrage Logic:</span> Use data engineering to identify "lowest-duty" routing and sourcing shifts before the market reacts.
                            <br />
                            <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                            <span className="text-gray-900 font-semibold">EBITDA Protection: </span> Shift from reactive accounting to proactive simulation. Know the exact impact on your bottom line before the policy is even signed.
                            <br />

                        </p>

                        <h2 className={`  md:text-3xl text-xl mb-3 font-semibold mt-4`}>The Business Value </h2>

                        <p className="mb-6 md:text-lg text-sm text-gray-700">
                            In a world of shifting rules, the winner is the one with the cleanest data and the fastest simulation engine. We provide the automated logic that turns global volatility into a calculated operational cost.

                        </p>




                        {/* MOBILE IMAGE */}
                        <div className="lg:hidden mt-8">

                            <div className="relative w-full overflow-hidden rounded-[16px]">

                                <motion.img
                                    src="/leader1.png"
                                    alt="Sandip Sanyal"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                    className="w-full object-cover rounded-[16px]"
                                />

                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4">

                                    <span className="block text-white/80 text-xs mb-1">
                                        by
                                    </span>

                                    <span className="block text-white text-2xl leading-tight">
                                        Sandip Sanyal
                                    </span>

                                    <span className="block text-white/90 text-sm mt-1">
                                        CEO, Techylla
                                    </span>

                                </div>

                            </div>

                        </div>



                    </div>


                    <div className="hidden lg:flex lg:flex-col lg:col-span-1 items-end">

                        <div className="relative w-full max-w-[320px] overflow-hidden rounded-[16px]">

                            <motion.img
                                src="/leader1.png"
                                alt="Sandip Sanyal"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="w-full object-cover"
                            />

                            {/* Bottom Overlay */}
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/70 to-transparent p-5">

                                <p className="text-white text-sm">
                                    <span className="block text-sm opacity-80 mb-1">
                                        by
                                    </span>

                                    <span className="block text-2xl font-medium leading-tight">
                                        Sandip Sanyal
                                    </span>

                                    <span className="block text-lg opacity-90 mt-1">
                                        CEO, Techylla
                                    </span>
                                </p>

                            </div>

                        </div>

                    </div>



                </div>
            </div>
        </section >
    );
}
