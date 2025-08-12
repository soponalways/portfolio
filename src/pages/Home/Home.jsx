import React from 'react';
import Banner from './Banner/Banner';
import About from './About/About';
import ParticleBackground from '../../Particles/ParticleBackground';
import Skills from './Skills/Skills';
import MyProjects from './MyProjects/MyProjects';

const Home = () => {
    return (
        <div>
        <div className='absolute z-50 '>
                <ParticleBackground />
            </div>

            {/* <Hero section/> */}
            <section>
                <Banner />
            </section>
            {/* <About Section /> */}
            <section className='py-10 md:py-12 lg:py-14 bg-base-200'>
                <About />
            </section>
            {/* <Skills Section /> */}
            <section className='py-10 md:py-12 lg:py-14 bg-base-200'>
                <Skills />
            </section>
            {/* <My Projects Section /> */}
            <section className='py-10 md:py-12 lg:py-14 bg-base-200'>
                <MyProjects />
            </section>
        </div>
    );
};

export default Home;