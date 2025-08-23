import React from 'react';
import Projects from './Projects';
import SpotlightCardWraper from './SpotlightCardWraper';
import Card from './Card';
import { motion } from "motion/react";
import { TypeAnimation } from 'react-type-animation';

const MyProjects = () => {
    return (
        <div id="projects" className='text-center container mx-auto px-6 py-10 bg-base-200'>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-3 md:mb-5 lg:mb-7">
                <div className="relative mx-auto -top-5 w-12 h-12 md:w-16 md:h-16 lg:h-20 lg:w-20 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
                <TypeAnimation
                    sequence={[
                        'My Projects',
                        1000,
                        'My Recents Projects',
                        1000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                    className="text-3xl md:text-4xl lg:text-5xl font-semibold md:font-bold text-primary "
                />
            </motion.div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-4'>
                {
                    Projects?.map((project, i) => <SpotlightCardWraper
                        key={project.id}
                        spotlightColor="rgba(0, 229, 255, 0.2)"
                    >
                        <Card project={project} index={i} />
                    </SpotlightCardWraper>)
                }
            </div>
        </div>
    );
};

export default MyProjects;