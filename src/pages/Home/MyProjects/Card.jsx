import React from 'react';
import { motion } from 'motion/react';
import { MdOpenInNew } from 'react-icons/md';
import { Link } from 'react-router';
const Card = ({ project, index }) => {
    const { name, image, id, liveLink, githubLink, description, techStack } = project || {};
    const showTechStack = techStack.slice(0, 5);
    const remainigTechstack = techStack.length - 5;
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeInOut", delay: index * 0.1, transitionBehavior: "in-out" }}
                className='flex flex-col border border-primary rounded-lg p-4 md:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-base-100 shadow-primary/30'
            >
                <div className='space-y-3 md:space-y-4'>
                    <motion.img whileHover={{ scale: 1.05, duration: 0.5 }} src={image} alt={name} className='w-full h-48 object-cover rounded-lg shadow-lg' />
                    <h3 className='text-xl  md:text-2xl'>{name}</h3>
                    <p>{description.slice(0, 70)}...</p>
                </div>
                <div className='my-2 md:my-3 flex flex-wrap gap-2 md:gap-3'>
                    {
                        showTechStack?.map((t, i) => <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeInOut", delay: i * 0.2, transitionBehavior: "in-out" }}
                            key={i}
                            className="badge badge-dash text-green-400"
                        >{t}</motion.div>)
                    }
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeInOut", delay: 0.2, transitionBehavior: "in-out" }}
                        className="badge badge-dash text-green-400"
                    >+{remainigTechstack} Skills</motion.div>
                </div>
                <div className='mt-4 flex gap-2 md:gap-3 lg:gap-4 justify-center w-5/6 mx-auto'>
                    <Link to={liveLink} className='btn btn-ghost btn-sm hover:border-0 bg-primary hover:bg-secondary text-white rounded-lg' >
                        <motion.button whileHover={{ scale: 1.05 }} className='flex gap-2 items-center' >
                            Live visit <MdOpenInNew />
                        </motion.button>
                    </Link>
                    <Link to={githubLink} className='btn btn-ghost btn-sm hover:border-0 bg-primary hover:bg-secondary text-white rounded-lg' >
                        <motion.button whileHover={{ scale: 1.05 }} className='flex gap-2 items-center' >
                            View Code <MdOpenInNew />
                        </motion.button>
                    </Link>
                    <Link to={`/projects/${id}`} className='btn btn-ghost btn-sm hover:border-0 bg-primary hover:bg-secondary text-white rounded-lg' >
                        <motion.button whileHover={{ scale: 1.05 }} className='flex gap-2 items-center' >
                            View More <MdOpenInNew />
                        </motion.button>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default Card;