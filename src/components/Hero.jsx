import React from 'react';
import { HERO_CONTENT } from "../constants";
import profilePic from "../Assets/chandraProfile.png";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
});

const Hero = () => {
    return (
        <div className="bg-neutral-950 min-h-[80vh] border-b border-neutral-800 pb-8"> {/* Adjusted height and background */}
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="pb-8 text-5xl font-thin tracking-tight lg:mt-16 lg:text-6xl"> {/* Reduced padding and font size */}
                            Chandra Prakash
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent"> {/* Reduced font size */}
                            Front End Developer
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-4 max-w-xl py-6 font-light tracking-tighter">
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            src={profilePic}
                            width={350}
                            height={350}
                            alt="Chandra Prakash"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
