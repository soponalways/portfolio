import { TypeAnimation } from "react-type-animation";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto px-6 text-center space-y-6 md:space-y-8 lg:space-y-10">
               <div>
                    <div className="relative mx-auto -top-5 w-12 h-12 md:w-16 md:h-16 lg:h-20 lg:w-20 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
                    <TypeAnimation
                        sequence={[
                            'About Me',
                            1000,
                            'Simple My self',
                            1000,
                        ]}
                        speed={50}
                        repeat={Infinity}
                        className="text-3xl md:text-4xl lg:text-5xl font-semibold md:font-bold text-primary "
                    />
               </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 lg:gap-7 items-center justify-center">
                    <p className="md:col-span-7 col-span-1 text-sm md:text-lg lg:text-xl mb-6 text-justify ">
                        Hello! I’m Sopon Ahmed, a passionate web developer with a love for turning ideas into interactive, user-friendly experiences. My programming journey started in a simple way — purely out of curiosity and a desire to learn. What began as a learning exercise quickly became a meaningful path, shaping the way I think and create. Along the way, I’ve built projects that not only challenge my skills but also fuel my excitement for technology. <br></br> <br /> I genuinely enjoy my work — from writing clean, efficient code to solving tricky problems that bring digital ideas to life. Whether it’s a personal project or a collaborative effort, I find joy in every step of the process. Outside of coding, I’m always exploring new technologies, reading books that broaden my perspective, and enjoying the thrill of a good cricket match. These hobbies keep me balanced, inspired, and ready to bring fresh ideas into my development work. <br />  In short, I’m not just a developer — I’m a lifelong learner, a creative problem-solver, and someone who believes that every project is an opportunity to grow and inspire.
                    </p>
                    <div className="relative md:col-span-5 col-span-1 p-4 md:p-8 lg:p-10">
                        <div className="absolute -top-24 left-0 w-14 h-14 bg-transparent hover:shadow-2xl shadow-green-500 rounded-full"></div>
                        <div >
                            <img
                                src="/images/sopon.jpg"
                                alt="Sopon Ahmed"
                                className="rounded-xl md:rounded-2xl mx-auto hover:scale-110 w-4/5 transform duration-300 hover:shadow-xl lg:hover:shadow-2xl shadow-green-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
