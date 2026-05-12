"use client";

import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function SuccessStories() {

    const stories = [
        {
            image: "/Tariff-1.png",
            title:
                "Global Tariff Financial Modeling System",
            slug: "story-1",
        },
        {
            image: "/SAP-1.png",
            title:
                "Transforming Supply Chain Operations with SAP-Based Intercompany Automation",
            slug: "story-2",
        },
        {
            image: "/SmartFactory-1.png",
            title:
                "Transforming Production with an AI-Powered Early Warning System",
            slug: "story-3",
        },
        {
            image: "/MedTech-1.png",
            title:
                "The Intelligent Quality Ecosystem: Moving from Data Silos to Autonomous Quality Surveillance",
            slug: "story-4",
        },
        {
            image: "/PulpMill-1.png",
            title:
                "Integrated Analytics for Pulp Mill Optimization",
            slug: "story-5",
        },
    ];

    return (
        <section className="min-h-screen bg-gray-200 py-10 overflow-hidden">

            <div className="max-w-7xl mx-auto px-6">

                <h2 className={`md:text-6xl text-5xl font-light tracking-tight leading-tight md:mb-16 mb-12`}>
                    Success Stories
                </h2>

            </div>

            <div className={`w-full px-6`}>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={1.1}
                    spaceBetween={16}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.1,
                            spaceBetween: 16,
                        },
                        640: {
                            slidesPerView: 1.5,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 24,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                    centeredSlides={true}
                    loop={true}
                    speed={1400}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    className="successSwiper"
                >

                    {stories.map((story, i) => (

                        <SwiperSlide key={i} className="transition-transform duration-500">

                            <div className="group relative bg-white rounded-md overflow-hidden shadow-lg duration-500 h-[320px] md:h-auto flex flex-col">

                                {/* Image */}
                                <div className="aspect-5/4 overflow-hidden relative z-20 transition-all duration-700 inset-0 ease-in-out">

                                    <img
                                        src={story.image}
                                        alt={`${story.title} case study visual`}
                                        className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:grayscale-70 grayscale-0 group-hover:blur-[1px]"
                                    />

                                    {/* Read More Button */}
                                    <Link href={`/case-studies/${story.slug}`}>
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-transform duration-700 ease-in-out ">

                                            <div className="text-white tracking-wide inline-block bg-[#FF4700] px-3 py-2 md:px-7 md:py-3 rounded-md text-md transition font-normal cursor-pointer">
                                                Know more
                                            </div>

                                        </div>
                                    </Link>

                                </div>


                                {/* Content */}
                                <div className="p-4 flex flex-col justify-start flex-1 relative z-0 min-h-[110px]">

                                    <h3 className="text-black font-light tracking-normal text-md md:text-lg leading-snug">
                                        {story.title}
                                    </h3>

                                </div> 

                            </div>

                        </SwiperSlide>

                    ))}

                </Swiper>

            </div>

            {/* Pop-out center effect */}
            <style jsx global>{`

        .successSwiper .swiper-slide {
          transform: scale(1);
          transition: transform 0.1s linear;
          overflow: visible !important;
          opacity: 0.9;
          
        }

        .successSwiper .swiper-wrapper {
            overflow: visible !important;
        }

        .successSwiper .swiper-slide-active {
          transform: scale(1);
          opacity: 1;
        }

        .successSwiper {
            overflow: visible !important;
        }

        .successSwiper .swiper-pagination {
            position: relative !important;
            margin-top: 45px;
        }

        .successSwiper .swiper-pagination-bullet {
          background: #999;
          opacity: 1;
        }

        .successSwiper .swiper-pagination-bullet-active {
          background:#FF4700
        }

      `}</style>

        </section>
    );
}