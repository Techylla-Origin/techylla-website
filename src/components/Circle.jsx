"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Circle = ({ percentage = 100, number, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  const radius = 100;
  const stroke = 10;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset =
    circumference - (percentage / 100) * circumference;

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center hover:scale-105 transition-transform duration-300"
    >
      <svg height={radius * 2} width={radius * 2}>
        
        {/* Background */}
        <circle
          
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        {/* Animated Circle */}
        <motion.circle
          stroke="#1E3A8A"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{
            strokeDashoffset: isInView ? strokeDashoffset : circumference,
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "50% 50%",
          }}
        />
      </svg>

      {/* TEXT */}
      <div className="absolute flex flex-col items-center justify-center text-center px-3">
        <p className="text-black text-lg font-bold">{number}</p>
        <p className="text-black text-md font-semibold leading-tight max-w-[120px]">
          {label}
        </p>
      </div>
    </div>
  );
};

export default Circle;