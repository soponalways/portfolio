import { motion } from "motion/react";

const AnimatedButton = ({ text, onClick, className = "" }) => {
    return (
        <motion.button
            onClick={onClick}
            className={`relative rounded-lg md:rounded-xl px-4 md:px-6 lg:px-7 py-1 md:py-2 cursor-pointer border-0 border-transparent 
        bg-[length:300%_300%] hover:scale-105 transition-transform duration-300 ${className}`}
            style={{
                backgroundImage:
                    "linear-gradient(45deg, #ff0080, #7928ca, #0070f3, #00ff88, #ff0080, #00ff88, #0070f3, #7928ca, #ff0080)"
            }}
            animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
            }}
        >
            {/* Inner background for button content */}
            <span className="absolute inset-[3px] rounded-lg bg-gray-900"></span>
            <span className="relative z-10 text-base-content font-semibold hover:text-primary">
                {text}
            </span>
        </motion.button>
    );
};

export default AnimatedButton;
