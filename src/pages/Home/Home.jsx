import React from 'react';
import Banner from './Banner/Banner';
import About from './About/About';
import ParticleBackground from '../../Particles/ParticleBackground';

const Home = () => {
    return (
        <div>
        <div className='absolute z-50 w-full h-full '>
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
            <section>
                {/* <Skills /> */}
            </section>
        </div>
    );
};

export default Home;