import { Button } from "@material-tailwind/react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router";
import { TypeAnimation } from "react-type-animation";

export default function Banner() {
    const socials = [
        { src: <FaFacebook />, alt: "Facebook", href: "https://www.facebook.com/soponalways" },
        { src: <FaTwitter />, alt: "Twitter", href: "https://x.com/soponalways" },
        { src: <FaLinkedin />, alt: "LinkedIn", href: "https://www.linkedin.com/in/sopon-islam1" },
        { src: <FaGithub />, alt: "GitHub", href: "https://github.com/soponalways" },
    ]
    return (
        <section id="banner" className="min-h-screen bg-base-200 flex items-center ">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className=" text-center px-4">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl">Hi 👋, I'm Sopon islam </h1>
                    <TypeAnimation
                        sequence={[
                            'MERN Stack Developer',
                            1000,
                            'Frontend Developer',
                            1000,
                            'I am a Dedicated developer',
                            1000,
                            'Full Stack Developer',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ display: 'inline-block' }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                        repeat={Infinity}
                    />
                    <p className="text-lg md:text-xl lg:text-2xl mb-6">Frontend Developer | Jr. MERN Stack Developer</p>
                    <div className="flex items-center gap-2 md:gap-3 lg:gap-4 justify-center my-3 md:my-5 lg:my-6">
                        {
                            socials.map((social, index) => (
                                <Link key={index} target="_blank" to={social.href} className="text-2xl md:text-3xl lg:text-4xl hover:text-secondary duration-300" aria-label={social.alt}>
                                    {social.src}
                                </Link>
                            ))
                        }
                    </div>
                    <Button className="btn bg-primary hover:bg-secondary hover:border-none cursor-pointer py-2 md:py-3 lg:py-4 duration-300">
                        {/* <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</Link> */}
                        Download Resume
                    </Button>
                </div>
                <div className="relative place-content-center place-items-center">
                    <div className="absolute inset-0 bg-primary rounded-full opacity-50 "></div>
                    <div className="absolute top-1/4 right-7 z-10 bg-transparent rounded-2xl md:rounded-3xl px-4 md:px-6 lg:px-7 py-2 md:py-4 lg:py-5"><span className="text-3xl font-bold md:text-4xl lg:text-5xl md:font-black text-secondary">MERN</span> <p className="text-center font-semibold">Stack Developer</p></div>
                    <img src="/images/Banner/Hero-img.png" alt="Sopon islam" className=" w-1/2 h-1/2 relative z-10" />
                </div>
            </div>
        </section>
    );
}
