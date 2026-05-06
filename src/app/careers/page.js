"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Script from "next/script";







const Careers = () => {


    return (

        <div className="w-full overflow-x-hidden">
            <section className="relative bg-white py-20 min-h-screen overflow-hidden">

                <div className="absolute inset-0 z-0">
                    <img
                        src="/Careers-Page.png"
                        alt="Careers Page Background Image"
                        className="w-full h-full object-cover"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/40"></div>
                </div>


                <div className="relative max-w-6xl z-20 mx-auto px-4 md:px-6 bg-cover">

                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className={`  text-6xl md:text-7xl font-semibold text-white tracking-tight leading-tight mb-4 mt-60 md:mt-60`}
                    >
                        Career @ <span className="bg-gradient-to-b from-blue-700 via-blue-600 to-blue-300 bg-clip-text text-transparent font-semibold">Techylla</span>
                    </motion.h2>

                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                        className={`  text-md md:text-4xl font-light text-white tracking-wide leading-10 mb-20`}
                    >
                        Drive Change, Shape The Future with Data
                    </motion.h2>

                </div>

            </section >
            <section aria-label="Why choose Techylla" className="relative bg-blue-100 px-6 md:px-12 min-h-screen overflow-hidden">
                <img
                    src="/Bg Network Pattern.png"
                    className="absolute -top-50 -left-60 w-[500] rotate-350 opacity-30 pointer-events-none select-none"
                />
                <img
                    src="/Bg Network Pattern.png"
                    className="absolute -bottom-40 -right-30 w-[600] rotate-340 opacity-30 pointer-events-none select-none"
                />
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-3 items-center">

                    {/* LEFT IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <Image
                            src="/Career-Page-2.png" // replace with your image
                            alt="Team collaboration and work culture at Techylla"
                            width={390}
                            height={500}
                            className="rounded-lg object-cover mt-50 md:mt-30"
                        />

                        {/* Overlay Text */}
                        <div className="absolute top-6 ">
                            <h2 className={`  text-black text-6xl font-light`}>
                                Why choose us?
                            </h2>
                        </div>
                    </motion.div>

                    {/* RIGHT CONTENT */}
                    <div className="space-y-8 mt-10 md:mt-30 ml-0 md:-ml-10">

                        {[
                            {
                                title: "Accelerate Your Growth",
                                desc: "Solve real challenges and grow faster with hands-on experience.",
                            },
                            {
                                title: "Build Together, Win Together",
                                desc: "Collaborate with a team that supports, challenges, and succeeds together.",
                            },
                            {
                                title: "A Community That Inspires",
                                desc: "Work in a culture that values ideas, curiosity, and shared growth.",
                            },
                            {
                                title: "Create Meaningful Solutions",
                                desc: "Build solutions that create real impact and drive measurable change.",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h3 className={`  text-2xl md:text-3xl font-medium mb-2`}>
                                    {item.title}
                                </h3>
                                <p className={`  text-gray-700 mb-4`}>{item.desc}</p>

                                {i !== 3 && (
                                    <div className="border-b border-gray-300 mt-6"></div>
                                )}
                            </motion.div>
                        ))}

                    </div>
                </div>
            </section>

            <section id="active-jobs" className="w-full py-10 px-6 md:px-12 bg-black/90 text-white">
                <div className="max-w-5xl mx-auto">

                    {/* Heading */}
                    <div className="mb-14">
                        <h2 className="text-6xl md:text-6xl font-light">
                            Active Jobs
                        </h2>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                        {/* Card 1 */}
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] hover:bg-black p-7 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-white/50 hover:shadow-[0_20px_60px_rgba(59,130,246,0.25)] group">

                            {/* Background Glow */}
                            <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                            {/* Top Section */}
                            <div className="relative z-10 flex items-center justify-between mb-5">
                                <span className="text-sm tracking-[0.2em] uppercase text-zinc-200">
                                    ID-001
                                </span>

                                <span className="text-xs bg-blue-700 border border-blue-500/20 text-white px-4 py-1.5 rounded-full backdrop-blur-md tracking-wide font-normal">
                                    Full Time
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="relative z-10 text-2xl font-semibold text-white mb-4">
                                Frontend Developer
                            </h3>

                            {/* Description */}
                            <p className="relative z-10 text-zinc-300 leading-relaxed mb-8">
                                Build responsive and modern user interfaces using React,
                                Next.js, and Tailwind CSS while collaborating with the design team.
                            </p>

                            {/* Bottom */}
                            <div className="relative z-10 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                                    <span className="text-sm text-zinc-400">
                                        Hiring Active
                                    </span>
                                </div>

                                <button
                                    onClick={() =>
                                        document
                                            .getElementById("application-form")
                                            ?.scrollIntoView({ behavior: "smooth" })
                                    }
                                    className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-blue-800 hover:shadow-[0_10px_30px_rgba(59,130,246,0.2)] cursor-pointer"
                                >
                                    Apply Now
                                </button>
                            </div>

                            {/* Shine Effect */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute top-0 left-[-30%] h-full w-[120px] rotate-12 bg-white/10 blur-2xl" />
                            </div>
                        </div>

                        {/* Card 2 */}
                        {/* <div className="bg-white/5 border border-white/10 rounded-3xl p-7 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300">
                            <div className="flex items-center justify-between mb-5">
                                <span className="text-sm text-zinc-400">JOB-002</span>
                                <span className="text-xs bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">
                                    Remote
                                </span>
                            </div>

                            <h3 className="text-2xl font-semibold mb-4">
                                UI/UX Designer
                            </h3>

                            <p className="text-zinc-400 leading-relaxed mb-8">
                                Design intuitive and visually engaging user experiences
                                for modern web applications and digital platforms.
                            </p>

                            <button
                                onClick={() =>
                                    document
                                        .getElementById("application-form")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition-all duration-300 font-medium"
                            >
                                Apply Now
                            </button>
                        </div> */}

                        {/* Card 3 */}
                        {/* <div className="bg-white/5 border border-white/10 rounded-3xl p-7 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300">
                            <div className="flex items-center justify-between mb-5">
                                <span className="text-sm text-zinc-400">JOB-003</span>
                                <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
                                    Internship
                                </span>
                            </div>

                            <h3 className="text-2xl font-semibold mb-4">
                                MERN Stack Developer
                            </h3>

                            <p className="text-zinc-400 leading-relaxed mb-8">
                                Work on scalable full-stack applications using MongoDB,
                                Express.js, React, and Node.js technologies.
                            </p>

                            <button
                                onClick={() =>
                                    document
                                        .getElementById("application-form")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition-all duration-300 font-medium"
                            >
                                Apply Now
                            </button>
                        </div> */}

                    </div>
                </div>
            </section>

            <section id="application-form" aria-label="Join Techylla careers form" className="relative bg-gradient-to-br from-blue-100 via-white to-blue-100 px-6 md:px-12 overflow-hidden min-h-screen">

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
                            Join <span className="text-blue-800 font-bold">Techylla</span> and shape the future of Data and AI
                        </h2>

                        <p className={`  text-gray-800 text-xl max-w-[700]`}>
                            Where your skills create impact, and your growth never stops.
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
                                aria-label="Job application form"
                                data-region="na2"
                                data-form-id="d7e5b28d-ba9d-4975-8388-01c50f224187"
                                data-portal-id="245721089"
                            ></div>
                        </div>

                        {/* RESPONSIVE MASK (SAFE) */}
                        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-30 sm:h-20 bg-gradient-to-t from-blue-100 to-white"></div>

                    </div>


                </div>
            </section>
        </div>
    )
}

export default Careers;