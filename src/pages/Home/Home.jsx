import React from 'react';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            {/* <Hero section/> */}
            <section>
                <Banner />
            </section>
            {/* <About Section /> */}
            <section className='py-10 md:py-12 lg:py-14 bg-base-200'>
                {/* <About /> */}
            </section>
            {/* <Skills Section /> */}
            <section>
                {/* <Skills /> */}
            </section>
        </div>
    );
};

export default Home;