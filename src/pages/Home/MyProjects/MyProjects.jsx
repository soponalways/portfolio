import React from 'react';
import Projects from './Projects';
import SpotlightCardWraper from './SpotlightCardWraper';
import Card from './Card';

const MyProjects = () => {
    return (
        <div id="projects" className='text-center container mx-auto px-6 py-10 bg-base-200'>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold md:font-bold text-primary mb-6 md:mb-8 lg:mb-10">My Projects</h2>
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