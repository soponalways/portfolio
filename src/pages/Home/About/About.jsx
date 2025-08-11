export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold md:font-bold mb-4 text-primary">About Me</h2>
                <div className="flex gap-4 md:gap-6 lg:gap-7 flex-col md:flex-row items-center justify-center">
                    <p className="text-sm md:text-lg lg:text-xl mb-6 md:w-5/6 text-justify ">
                        Hello! I’m Sopon Ahmed, a passionate web developer with a love for turning ideas into interactive, user-friendly experiences. My programming journey started in a simple way — purely out of curiosity and a desire to learn. What began as a learning exercise quickly became a meaningful path, shaping the way I think and create. Along the way, I’ve built projects that not only challenge my skills but also fuel my excitement for technology. I genuinely enjoy my work — from writing clean, efficient code to solving tricky problems that bring digital ideas to life. Whether it’s a personal project or a collaborative effort, I find joy in every step of the process. Outside of coding, I’m always exploring new technologies, reading books that broaden my perspective, and enjoying the thrill of a good cricket match. These hobbies keep me balanced, inspired, and ready to bring fresh ideas into my development work. In short, I’m not just a developer — I’m a lifelong learner, a creative problem-solver, and someone who believes that every project is an opportunity to grow and inspire.
                    </p>
                    <div>
                        <img
                            src="/images/sopon.jpg"
                            alt="Sopon Ahmed"
                            width={500}
                            height={500}
                            className="rounded-xl md:rounded-2xl mx-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
