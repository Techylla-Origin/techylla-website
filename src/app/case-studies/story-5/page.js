"use client";

import { motion } from "framer-motion";

export default function StoryFive() {
    return (
        <section className="relative bg-gradient-to-r from-blue-100 via-white to-blue-100 w-full overflow-hidden">

            <div className={`max-w-7xl mx-auto px-6`}>
                <img
                    src="/Bg Network Pattern.png"
                    className="absolute -top-40 md:left-0 -left-10 w-[600] rotate-350 opacity-10 pointer-events-none select-none"
                />
                <img
                    src="/Bg Network Pattern.png"
                    className="absolute -bottom-20 right-0 w-[800] rotate-355 opacity-30 pointer-events-none select-none"
                />
                <div className="grid lg:grid-cols-3 gap-6 py-20 md:py-28">
                    <div className="lg:col-span-2">

                        <h1 className={`  md:font-normal font-semibold text-black md:mb-8 mb-5 md:text-5xl text-4xl`}>
                            Integrated Analytics for Pulp Mill Optimization
                        </h1>

                        <div className="md:hidden mb-5">
                            <motion.img
                                src="/CaseStudy-5-Img.png"
                                alt="Illustration of a pulp mill analytics ecosystem"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="w-full h-full object-cover rounded-md"
                            />
                        </div>

                        <h2 className={`  md:text-3xl text-xl mb-5 font-semibold`}>Business Need</h2>

                        <p className="md:text-lg text-sm text-gray-700 mb-8">
                            Pulp manufacturing operations face challenges in effectively monitoring and optimizing production due to fragmented data across shop-floor systems, MES, SAP, and manual logs. This lack of integration limits real-time visibility and makes it difficult to align operational performance with business targets.               <br />
                            <br />
                            Traditional approaches rely on delayed and disconnected reporting, preventing operators from reacting quickly to process deviations and making it difficult for leadership to track production efficiency, cost per ton, and resource utilization against financial goals.
                            Additionally, the absence of unified analytics restricts the ability to identify inefficiencies in chemical usage, energy consumption, and production yield, impacting overall cost optimization and sustainability efforts.              <br />
                            <br />
                            To address these challenges, the objective was to:
                            <br />
                            <br />
                            <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                            <span className="text-gray-900 font-semibold">Establish real-time visibility into shop-floor operations</span>
                            <br />
                            <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                            <span className="text-gray-900 font-semibold">Align operational data with strategic business KPIs and targets</span>
                            <br />
                            <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                            <span className="text-gray-900 font-semibold">Enable data-driven optimization of cost, yield, and resource utilization</span>

                        </p>

                        <h2 className={`  md:text-3xl text-xl mb-3 font-semibold mt-9`}>Solution</h2>

                        <p className={`  md:text-lg text-sm text-gray-700 mb-8`}>
                            The Techylla team developed an <span className="text-gray-900 font-semibold"> Integrated Analytics Ecosystem for Pulp Mill Optimization </span> and implemented the following key initiatives:
                            <br />
                            <br />
                            <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                            Built a <span className="text-gray-900 font-semibold"> dual-layer data architecture (Hot & Cold paths) </span>combining <span className="text-gray-900 font-semibold"> real-time (Grafana + InfluxDB) </span>and <span className="text-gray-900 font-semibold"> strategic analytics (Power BI) </span>
                            <br />
                            <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                            Enabled <span className="text-gray-900 font-semibold"> real-time shop-floor monitoring</span> by integrating <span className="text-gray-900 font-semibold"> sensor and PLC data</span> into a <span className="text-gray-900 font-semibold"> time-series database</span> for instant visibility
                            <br />
                            <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                            Developed <span className="text-gray-900 font-semibold"> interactive Grafana dashboards </span> to track <span className="text-gray-900 font-semibold"> production, yield, inventory levels, and cost per ton </span>
                            <br />
                            <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                            Implemented <span className="text-gray-900 font-semibold"> Power BI analytics layer</span> to monitor <span className="text-gray-900 font-semibold"> KPIs, forecasts vs AOP targets, and variance analysis</span>
                            <br />
                            <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                            Integrated data from <span className="text-gray-900 font-semibold"> MES, SAP, and manual logs</span>  to create a <span className="text-gray-900 font-semibold"> unified performance view </span>
                            <br />
                            <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                            Enabled <span className="text-gray-900 font-semibold"> data-driven decision-making</span> for optimizing <span className="text-gray-900 font-semibold"> cost, yield, and resource utilization</span>

                        </p>

                        <div className="md:hidden mb-6 ">
                            <h2 className={`  text-xl mb-3 font-semibold`}>
                                Business Impact
                            </h2>

                            <p className={`  text-sm font-semibold text-gray-900 `}>
                                <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                                Real-time operational visibility
                                <br />

                                <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                                Improved cost and resource efficiency
                                <br />

                                <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                                Better alignment with business targets
                                <br />

                                <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                                Optimized production performance
                            </p>
                        </div>

                    </div>

                    {/* BUSINESS IMPACT - BELOW IMAGE */}
                    <div className="hidden lg:block lg:col-span-1">

                        <motion.img
                            src="/CaseStudy-5-Img.png"
                            alt="Illustration of a pulp mill analytics ecosystem"
                            initial={{ opacity: 0, x: 80 }}
                            animate={{ opacity: 0.9, x: 0 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="w-full max-w-[340px] ml-auto rounded-md"
                        />
                        <div className="mt-8 max-w-[340px] ml-auto">
                            <h2 className={`  text-3xl mb-3 font-semibold mt-4`}>Business Impact</h2>

                            <p className={`  text-lg text-gray-700 mb-8`}>
                                <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                                Real-time operational visibility
                                <br />
                                <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                                Improved cost and resource efficiency
                                <br />
                                <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                                Better alignment with business targets
                                <br />
                                <span className="w-4 h-3 text-black text-2xl mb-0.5 inline-block mr-3">▸</span>
                                Optimized production performance

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
