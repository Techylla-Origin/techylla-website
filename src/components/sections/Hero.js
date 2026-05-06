"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import BlurText from "@/components/BlurText";

 

 

const Silk = dynamic(() => import("@/components/Silk"), {
    ssr: false,
});
const PlasmaticBurst = dynamic(() => import("@/components/PrismaticBurst"), {
    ssr: false,
});
const FloatingLines = dynamic(() => import("@/components/FloatingLines"), {
    ssr: false,
});
const ColorBends = dynamic(() => import("@/components/ColorBends"), {
    ssr: false,
});
const LightPillar = dynamic(() => import("@/components/LightPillar"), {
    ssr: false,
});

const heroSlides = [
    {
        title: "Transform your business with Agentic AI",
        image: "/hero1.jpg",
        tab: "AI-Driven Enterprise Efficiency",
        link: "/services/artificial-intelligence",
    },
    {
        title: "Data & Cloud Services",
        image: "/hero2.jpg",
        tab: "Data & Cloud Services",
        link: "/services/data-cloud",
    },
    {
        title: "Innovation in MedTech R&D",
        image: "/hero3.jpg",
        tab: "Innovation in MedTech R&D",
        link: "/industry/healthcare-and-lifesciences",
    },
    {
        title: "Agentic AI Services",
        image: "/hero4.jpg",
        tab: "Agentic AI Services",
        link: "/services/artificial-intelligence",
    },
];

export default function Hero() {
    const [active, setActive] = useState(0);
    const duration = 11000; // 5 seconds

    useEffect(() => {
        let timer;

        // Only apply timer for images
        if (active !== 0) {
            timer = setTimeout(() => {
                setActive((prev) => (prev + 1) % heroSlides.length);
            }, 5000); // ✅ 5 sec for images
        }

        return () => clearTimeout(timer);
    }, [active]);

    return (
        <section
            aria-label={`Hero section: ${heroSlides[active].title}`}
            className="relative min-h-screen overflow-hidden bg-black"
        >
            {/* Dark overlay */}

            <motion.div
                key={active}
                className="absolute inset-0 z-0 bg-black/50"
                initial={{ scale: 1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                {active === 0 && (
                    // <FloatingLines
                    //     enabledWaves={["top", "middle", "bottom"]}
                    //     // Array - specify line count per wave; Number - same count for all waves
                    //     lineCount={5}
                    //     // Array - specify line distance per wave; Number - same distance for all waves
                    //     lineDistance={10}
                    //     bendRadius={10}
                    //     bendStrength={0.9}
                    //     linesGradient={["#2563eb", "#38bdf8", "#ffffff", "#F917FC"]}
                    //     parallax={false} // ✅ added
                    // />
                    <>
                        <video
                            className="absolute inset-0 w-full h-full object-cover"
                            autoPlay
                            muted
                            playsInline
                            aria-label="Background video showcasing digital transformation and AI-driven technology visuals"
                            onEnded={() => setActive((prev) => (prev + 1) % heroSlides.length)}
                        >
                            <source src="/Hero-Video-3.mp4" type="video/mp4" />
                        </video>

                        {/* 🔥 Top dark overlay */}
                        {/* <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black/70 to-transparent z-10" /> */}
                    </>
                )}
                {active === 1 && (
                    // <PlasmaticBurst
                    //     animationType="hover"
                    //     intensity={5}
                    //     speed={0.2}
                    //     distort={0.2}
                    //     paused={false}
                    //     offset={{ x: -600, y: 0 }}
                    //     hoverDampness={5}
                    //     rayCount={0}
                    //     mixBlendMode="screen"
                    //     colors={['#020024', '#090979', '#00D4FF']}
                    // />
                    <img
                        src="/Data-And-Cloud.png"
                        alt="Data And Cloud Services"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                )}

                {active === 2 && (
                    // <LightPillar
                    //     topColor="#5227FF"
                    //     bottomColor="#9effa5"
                    //     intensity={1}
                    //     rotationSpeed={0.4}
                    //     glowAmount={0.003}
                    //     pillarWidth={4.3}
                    //     pillarHeight={0.4}
                    //     noiseIntensity={0.5}
                    //     pillarRotation={25}
                    //     interactive={false}
                    //     mixBlendMode="screen"
                    //     quality="high"
                    // />
                    <img
                        src="/Innovation-In-Medtech.png"
                        alt="Innovation In Medtech Research and Development"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                )}

                {active === 3 && (
                    // <ColorBends
                    //     colors={["#2563eb", "#6366f1", "#a855f7"]}
                    //     rotation={90}
                    //     speed={0.2}
                    //     scale={1}
                    //     frequency={1}
                    //     warpStrength={1}
                    //     mouseInfluence={0}
                    //     parallax={0.5}
                    //     noise={0.1}
                    //     transparent
                    //     autoRotate={0}
                    //     color=""
                    // />
                    <img
                        src="/Agentic-AI-Services.png"
                        alt="Agentic AI Services"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                )}
            </motion.div>

            <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>

            {/* Hero Content */}
            <AnimatePresence mode="wait">
                <motion.div

                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
                    className="relative z-10 max-w-7xl mx-auto px-6 pt-40 text-white"
                >

                    {/* ✅ ADD HERE */}
                    <p className="sr-only" aria-live="polite">
                        {heroSlides[active].title}
                    </p>



                    <BlurText
                        key={`title-${active}`}
                        text={heroSlides[active].title}
                        delay={40}
                        animateBy="words"
                        direction="top"
                        className={`  text-4xl md:text-6xl font-normal max-w-3xl md:mt-25 mt-40 leading-tight`}
                    />

                    <Link href={heroSlides[active].link}>
                        <motion.button
                            key={`btn-${active}`}
                            aria-label={`Explore ${heroSlides[active].title}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.5, ease: "easeInOut" }}
                            className={`  mt-8 bg-[#FF4700]/90 px-3 py-2 md:px-7 md:py-3 rounded-md text-md hover:bg-[#FF4700] transition font-normal cursor-pointer`}
                        >
                            Explore services
                        </motion.button>
                    </Link>

                </motion.div>
            </AnimatePresence>

            {/* Bottom Tabs */}
            <div className="hidden absolute bottom-0 w-full px-5 sm:px-6 pb-6 sm:pb-10">
                {/* added hidden here */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">

                    {heroSlides.map((slide, index) => (
                        <button
                            key={index}
                            onClick={() => setActive(index)}
                            className={`  relative text-left p-6 bg-black/40 text-white rounded-sm backdrop-blur border border-white/5 transition
              ${active === index ? "block" : "hidden md:block"}`}
                        >
                            {slide.tab}

                            {active === index && (
                                <motion.div
                                    className="absolute bottom-0 left-0 h-0.75 bg-red-600 rounded-sm font-normal"
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 5, ease: "linear" }}
                                />
                            )}
                        </button>
                    ))}

                </div>
            </div>
        </section>
    );
}