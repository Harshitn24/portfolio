"use client";
import {
    useMotionValueEvent,
    useScroll,
    useTransform,
    motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { CardSpotlight } from "./card-spotlight";

interface TimelineEntry {
    title: string;
    job_title: string;
    company: string;
    content: string[];
    tech_stack: string[];
    // content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            className="w-full font-sans md:px-10"
            ref={containerRef}
        >
            <h1 className='heading'>
                Work {' '}
                <span className='text-purple'>Experience</span>
            </h1>

            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-start pt-10 md:pt-40 md:gap-10"
                    >
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                            </div>
                            <h3 className="hidden md:block text-2xl md:pl-20 md:text-3xl lg:text-4xl font-bold text-neutral-500 dark:text-neutral-500 ">
                                {item.title}
                            </h3>
                        </div>

                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <CardSpotlight>
                                <div>
                                    <p className="mb-2 text-xl font-normal text-neutral-800 md:text-2xl lg:text-3xl dark:text-neutral-200" >
                                        {item.job_title}
                                    </ p >

                                    <p className="mb-8 text-md font-normal text-neutral-800 md:text-lg lg:text-xl dark:text-neutral-200" >
                                        {item.company}
                                    </ p >
                                    <ul className="list-disc pl-7 text-md font-normal text-neutral-800 md:text-lg lg:text-xl dark:text-neutral-200">
                                        {item.content.map((content, idx) => (
                                            <li className="mb-2">
                                                {content}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2 ml-3 mt-6">
                                        {item.tech_stack.map((item) => (
                                            <span
                                                key={item}
                                                className="py-2 px-3 text-s lg:text-lg opacity-80 rounded-lg text-center bg-white/20 backdrop-blur-md border border-white/10 rounded-xl shadow-lg"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </CardSpotlight>


                            {/* {item.content}{" "} */}
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};
