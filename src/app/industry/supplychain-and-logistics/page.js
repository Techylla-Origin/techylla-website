"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Database, Brain, BarChart3, RefreshCcw, Radar, Lightbulb, Settings2, TrendingUp } from "lucide-react";
import Script from "next/script";


 

 

const SupplyChainandLogistics = () => {
    return (
        <div className="w-full overflow-x-hidden">

            {/* HERO */}
            <section aria-label="Supply Chain and Logistics overview" className="relative bg-white py-20 min-h-screen overflow-hidden">

                <div className="absolute inset-0 z-0">
                    <img
                        src="/Supplychain-and-Logistics.png"
                        alt="Supply Chain & Logistics Background image"
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/40"></div>
                </div>

                <div className="relative max-w-6xl z-20 mx-auto px-4 md:px-6">

                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className={`  text-5xl md:text-7xl font-semibold text-white tracking-tight leading-tight mb-4 mt-60`}
                    >
                        Supply Chain & Logistics @ <span className="bg-gradient-to-b from-blue-700 via-blue-600 to-blue-300 bg-clip-text text-transparent">Techylla</span>
                    </motion.h2>

                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className={`  text-md md:text-3xl font-light text-white tracking-wide leading-10 mb-20`}
                    >
                        Driving Agile, Cost-Efficient Supply Chains through <span className="text-blue-200">Advanced Analytics</span>
                    </motion.h2>

                </div>
            </section>

            {/* SECTION 2 */}
            <section aria-label="Supply Chain and Logistics explanation" className="relative bg-blue-100 px-6 md:px-12 min-h-screen overflow-hidden">

                <img src="/Bg Network Pattern.png" className="absolute -top-50 -left-60 w-[500] opacity-30 pointer-events-none select-none" />
                <img src="/Bg Network Pattern.png" className="absolute -bottom-40 -right-30 w-[600] opacity-30 pointer-events-none select-none" />

                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-3 items-center">

                    {/* IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <Image
                            src="/Supplychain-and-Logistics-why.png"
                            alt="Supply Chain and Logistics Image"
                            width={390}
                            height={500}
                            className="rounded-lg object-cover mt-45 md:mt-50"
                        />

                        <div className="absolute top-3 md:top-6 md:-ml-5 ml-0 ">
                            <h2 className={`  text-black md:text-6xl text-4xl font-light md:w-230 w-full`}>
                                How Analytics Transforms <span className="text-blue-800">Supply Chains</span> ?
                            </h2>
                        </div>
                    </motion.div>

                    {/* TEXT */}
                    <div className="space-y-8 mt-10 md:mt-30 ml-0 md:-ml-10 md:mb-0 mb-10">

                        <h2 className={`  text-black text-xl font-light`}>
                            Supply chain analytics uses data from across the value chain—such as sales, production, and transportation—to improve overall performance and provide meaningful insights into operations. Traditional approaches focus on analyzing past and current data, often relying on manual interpretation, which limits the ability to detect patterns, identify inefficiencies, and respond to disruptions effectively.
                        </h2>

                        <h2 className={`  text-blue-900 text-xl font-medium`}>
                            With advanced analytics, organizations can uncover trends, forecast demand, and optimize operations—enabling smarter decisions, greater agility, lower costs, and a more resilient supply chain.
                        </h2>

                    </div>
                </div>
            </section>

            <section aria-label="Challenges in Traditional Supply Chain Management" className={`  relative py-10 px-6 md:px-19 overflow-hidden bg-gradient-to-t from-blue-50 to-pink-50`}>
                {/* Heading */}
                <div className="max-w-6xl mx-auto mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }} className="text-5xl md:text-6xl font-light text-gray-900">
                        Challenges in Traditional Supply Chain Management
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }} className="text-gray-600 mt-3 max-w-5xl text-md md:text-xl">
                        Conventional supply chains rely on historical data and manual analysis, limiting responsiveness to dynamic conditions.
                    </motion.p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{
                            scale: 1.03,
                            transition: { duration: 0.25, ease: "easeOut" }
                        }}
                        transition={{ duration: 0.5, delay: 0, scale: { duration: 0.25 } }}
                        viewport={{ once: true }} className="bg-green-100 rounded-3xl p-5 flex flex-col justify-between min-h-[220px]">
                        {/* <div className="text-sm font-medium text-gray-700 mb-4">Challenge</div> */}
                        <div className="bg-white rounded-2xl border-2 h-full flex flex-col border-black p-4 shadow-xl">
                            <h3 className="text-lg font-semibold text-gray-900">
                                Limited Data Flexibility
                            </h3>
                            <p className="text-sm text-gray-600 mt-auto">
                                Rigid systems fail to reflect real-time supply chain changes.
                            </p>
                        </div>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{
                            scale: 1.03,
                            transition: { duration: 0.25, ease: "easeOut" }
                        }}
                        transition={{ duration: 1, delay: 0.5, scale: { duration: 0.25 } }}
                        viewport={{ once: true }} className="bg-blue-100 rounded-3xl p-5 flex flex-col justify-between min-h-[220px]">
                        {/* <div className="text-sm font-medium text-gray-700 mb-4">Challenge</div> */}
                        <div className="bg-white rounded-2xl border-2 h-full flex flex-col border-black p-4 shadow-xl">
                            <h3 className="text-lg font-semibold text-gray-900">
                                Unreliable Commitments
                            </h3>
                            <p className="text-sm text-gray-600 mt-auto">
                                Lack of foresight leads to inconsistent delivery promises.
                            </p>
                        </div>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{
                            scale: 1.03,
                            transition: { duration: 0.25, ease: "easeOut" }
                        }}
                        transition={{ duration: 1, delay: 1, scale: { duration: 0.25 } }}
                        viewport={{ once: true }} className="bg-yellow-100 rounded-3xl p-5 flex flex-col justify-between min-h-[220px]">
                        {/* <div className="text-sm font-medium text-gray-700 mb-4">Challenge</div> */}
                        <div className="bg-white rounded-2xl border-2 h-full flex flex-col border-black p-4 shadow-xl">
                            <h3 className="text-lg font-semibold text-gray-900">
                                Suboptimal Inventory Flow
                            </h3>
                            <p className="text-sm text-gray-600 mt-auto">
                                Imbalanced stock movement creates delays and inefficiencies.
                            </p>
                        </div>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{
                            scale: 1.03,
                            transition: { duration: 0.25, ease: "easeOut" }
                        }}
                        transition={{ duration: 1, delay: 1.5, scale: { duration: 0.25 } }}
                        viewport={{ once: true }} className="bg-purple-100 rounded-3xl p-5 flex flex-col justify-between min-h-[220px]">
                        {/* <div className="text-sm font-medium text-gray-700 mb-4">Challenge</div> */}
                        <div className="bg-white rounded-2xl border-2 h-full flex flex-col border-black p-4 shadow-xl">
                            <h3 className="text-lg font-semibold text-gray-900">
                                Rising Costs & Gaps
                            </h3>
                            <p className="text-sm text-gray-600 mt-auto">
                                Operational disconnects drive higher costs and execution issues.
                            </p>
                        </div>

                    </motion.div>

                </div>
            </section>

            <section aria-label="Advanced Supply Chain Analytics Approach" className={`  relative py-10 px-6 md:px-19 overflow-hidden bg-gradient-to-b from-blue-50 to-pink-50`}>

                {/* Heading */}
                <div className="max-w-6xl mx-auto mb-14">
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }} className="text-5xl md:text-6xl font-light text-gray-900">
                        Advanced Supply Chain Analytics Approach
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }} className="text-gray-600 mt-3 max-w-5xl text-md md:text-xl">
                        Driving smarter supply chain decisions through advanced analytics.
                    </motion.p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{
                            scale: 1.03,
                            transition: { duration: 0.25, ease: "easeOut" }
                        }}
                        transition={{ duration: 0.5, delay: 0, scale: { duration: 0.25 } }}
                        viewport={{ once: true }} className="rounded-3xl p-[1px] bg-gradient-to-br from-blue-300 via-blue-100 to-blue-300">
                        <div className="h-full rounded-3xl bg-white/80 backdrop-blur-md p-6 flex flex-col shadow-lg">

                            <Radar className="w-6 h-6 text-blue-600 mb-4" />

                            <h3 className="text-lg font-semibold text-gray-900">
                                End-to-End Visibility
                            </h3>

                            <p className="text-sm text-gray-600 mt-auto">
                                Gain a unified view of operations to improve control, coordination, and decision-making across the supply chain.
                            </p>

                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{
                            scale: 1.03,
                            transition: { duration: 0.25, ease: "easeOut" }
                        }}
                        transition={{ duration: 1, delay: 0.5, scale: { duration: 0.25 } }}
                        viewport={{ once: true }} className="rounded-3xl p-[1px] bg-gradient-to-br from-orange-300 via-orange-100 to-orange-300">
                        <div className="h-full rounded-3xl bg-white/80 backdrop-blur-md p-6 flex flex-col shadow-lg">

                            <Lightbulb className="w-6 h-6 text-orange-600 mb-4" />

                            <h3 className="text-lg font-semibold text-gray-900">
                                Actionable Insights
                            </h3>

                            <p className="text-sm text-gray-600 mt-auto">
                                Uncover inefficiencies and opportunities to drive smarter, faster business decisions.
                            </p>

                        </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{
                            scale: 1.03,
                            transition: { duration: 0.25, ease: "easeOut" }
                        }}
                        transition={{ duration: 1, delay: 1, scale: { duration: 0.25 } }}
                        viewport={{ once: true }} className="rounded-3xl p-[1px] bg-gradient-to-br from-yellow-300 via-yellow-100 to-yellow-300">
                        <div className="h-full rounded-3xl bg-white/80 backdrop-blur-md p-6 flex flex-col shadow-lg">

                            <TrendingUp className="w-6 h-6 text-yellow-600 mb-4" />

                            <h3 className="text-lg font-semibold text-gray-900">
                                Improved Forecast Accuracy
                            </h3>

                            <p className="text-sm text-gray-600 mt-auto">
                                Anticipate demand shifts and disruptions to plan with greater confidence and precision.
                            </p>

                        </div>
                    </motion.div>

                    {/* Card 4 */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{
                            scale: 1.03,
                            transition: { duration: 0.25, ease: "easeOut" }
                        }}
                        transition={{ duration: 1, delay: 1.5, scale: { duration: 0.25 } }}
                        viewport={{ once: true }} className="rounded-3xl p-[1px] bg-gradient-to-br from-emerald-300 via-emerald-100 to-emerald-300">
                        <div className="h-full rounded-3xl bg-white/80 backdrop-blur-md p-6 flex flex-col shadow-lg">

                            <Settings2 className="w-6 h-6 text-emerald-600 mb-4" />

                            <h3 className="text-lg font-semibold text-gray-900">
                                Operational Efficiency
                            </h3>

                            <p className="text-sm text-gray-600 mt-auto">
                                Optimize processes to reduce costs, minimize delays, and enhance overall performance.
                            </p>

                        </div>
                    </motion.div>

                </div>
            </section>

            <section
                aria-label="Technology & Expertise"
                className={`  relative py-10 px-6 md:px-20 overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617]`}
            >

                {/* Glow Background Effects */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>

                {/* Heading */}
                <div className="max-w-6xl mx-auto mb-14">
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-light text-white"
                    >
                        Technology & Expertise
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-gray-300 mt-4 max-w-3xl text-md md:text-lg"
                    >
                        Leveraging advanced technologies and analytics expertise to drive smarter, data-driven supply chain decisions.
                    </motion.p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="group backdrop-blur-xl bg-gradient-to-br from-white/10 via-black to-emerald-500 border border-white/20 rounded-3xl p-6 shadow-2xl hover:shadow-green-500/20 hover:bg-gradient-to-br hover:from-emerald-300 hover:via-emerald-100 hover:to-white/50 transition-all duration-100"
                    >
                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-black transition-colors duration-300">
                            SAP S/4HANA
                        </h3>

                        <p className="text-gray-300 text-sm group-hover:text-black transition-colors duration-300">
                            Extract and integrate supply chain data to enable better visibility and analysis.
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="group backdrop-blur-xl bg-gradient-to-br from-white/10 via-black to-blue-800 border border-white/20 rounded-3xl p-6 shadow-2xl hover:shadow-blue-500/20 hover:bg-gradient-to-br hover:from-blue-300 hover:via-blue-100 hover:to-white/50 transition-all duration-100"
                    >
                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-black transition-colors duration-300">
                            Data Analytics
                        </h3>

                        <p className="text-gray-300 text-sm group-hover:text-black transition-colors duration-300">
                            Identify patterns, inefficiencies, and opportunities to optimize supply chain performance.
                        </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="group backdrop-blur-xl bg-gradient-to-br from-white/10 via-black to-purple-300 border border-white/20 rounded-3xl p-6 shadow-2xl hover:shadow-purple-500/20 hover:bg-gradient-to-br hover:from-purple-300 hover:via-purple-100 hover:to-white/50 transition-all duration-100"
                    >
                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-black transition-colors duration-300">
                            ML Models
                        </h3>

                        <p className="text-gray-300 text-sm group-hover:text-black transition-colors duration-300">
                            Predict trends and support smarter decision-making across the supply chain.
                        </p>
                    </motion.div>

                </div>
            </section>

            <section aria-label="Business Impact of Supply Chain Analytics" className={`  relative py-10 px-6 md:px-19 bg-black text-white min-h-[70%] overflow-hidden`}>

                <img src="/Bg Network Pattern.png" className="absolute -top-50 -left-60 w-[500] opacity-100 pointer-events-none select-none" />
                <img src="/Bg Network Pattern.png" className="absolute -bottom-40 -right-30 w-[700] opacity-100 pointer-events-none select-none" />

                {/* Heading */}
                <div className="max-w-6xl mx-auto mb-14">
                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }} className="text-5xl md:text-6xl font-light leading-tight">
                        Business Impact of Supply Chain Analytics
                    </motion.h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                    {/* Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0 }}
                        viewport={{ once: true }} className="relative rounded-3xl overflow-hidden group">

                        <img
                            src="/Supplychain-Impact-4.png"
                            alt="Supply chain visibility visualization using sales, production, and transportation data insights"
                            className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                        <div className="absolute bottom-0 p-6">
                            <h3 className="text-xl font-medium mb-3">
                                Improving Supply Chain Visibility
                            </h3>
                            <p className="text-sm font-light text-gray-300">
                                Analyze sales, production, and transportation data to improve supply chain visibility.
                            </p>
                        </div>

                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }} className="relative rounded-3xl overflow-hidden group">

                        <img
                            src="/Supplychain-Impact-6.png"
                            alt="Operational efficiency improvement in supply chain with optimized processes and cost reduction"
                            className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                        <div className="absolute bottom-0 p-6">
                            <h3 className="text-xl font-medium mb-3">
                                Enhancing Operational Efficiency
                            </h3>
                            <p className="text-sm font-light text-gray-300">
                                Identify inefficiencies and optimize processes to improve efficiency and reduce operational costs.
                            </p>
                        </div>

                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        viewport={{ once: true }} className="relative rounded-3xl overflow-hidden group">

                        <img
                            src="/Supplychain-Impact-7.png"
                            alt="Data-driven supply chain decision-making using analytics and trend insights"
                            className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                        <div className="absolute bottom-0 p-6">
                            <h3 className="text-xl font-medium mb-3">
                                Enabling Data-Driven Decisions
                            </h3>
                            <p className="text-sm font-light text-gray-300">
                                Leverage analytics to uncover patterns and trends, enabling more informed and effective decisions.
                            </p>
                        </div>

                    </motion.div>

                </div>
            </section>

            <section aria-label="Supply Chain and Logistics inquiry form" className="relative bg-gradient-to-br from-blue-100 via-white to-blue-100 px-6 md:px-12 overflow-hidden min-h-screen">

                {/* Background Pattern */}
                <img
                    src="/Bg Network Pattern.png"
                    className="absolute -top-50 -left-60 w-[500] rotate-350 opacity-30 pointer-events-none select-none"
                />
                <img
                    src="/Bg Network Pattern.png"
                    className="absolute -bottom-55 -right-40 w-[600] rotate-340 opacity-20 pointer-events-none select-none"
                />

                <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

                    {/* LEFT TEXT */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <h2 className={`  text-5xl font-semibold text-black leading-tight mb-6 mt-10`}>
                            Have an Idea? Let’s Build It <span className="text-blue-800 font-bold">Together</span>
                        </h2>

                        <p className={`  text-gray-800 text-xl max-w-[700]`}>
                            From concept to reality, we make it happen.
                        </p>
                    </motion.div>

                    {/* RIGHT SIDE FORM */}
                    <div className="relative mt-10 p-6 sm:p-8 rounded-xl shadow-lg bg-white overflow-hidden">

                        <h3 className={`  text-2xl sm:text-3xl font-semibold mb-4`}>
                            Send us your details
                        </h3>

                        <Script
                            src="https://js-na2.hsforms.net/forms/embed/245721089.js"
                            strategy="afterInteractive"

                        />

                        {/* FORM WRAPPER */}
                        <div className="form-wrapper">
                            <div
                                className="hs-form-frame"
                                aria-label="Manufacturing solutions inquiry form"
                                data-region="na2"
                                data-form-id="2d512c76-1898-499f-a646-13ff510d1f49"
                                data-portal-id="245721089"
                            ></div>
                        </div>

                        {/* RESPONSIVE MASK (SAFE) */}
                        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-30 sm:h-20 bg-gradient-to-t from-blue-100 to-white"></div>

                    </div>


                </div>
            </section>


        </div>
    );
};

export default SupplyChainandLogistics;