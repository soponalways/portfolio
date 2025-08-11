import { Button } from "@material-tailwind/react";
import { Link } from "react-router";
import { TypeAnimation } from "react-type-animation";

export default function Banner() {
    const socials = [
        { src: "/images/logos/facebook.png", alt: "Facebook", href: "https://www.facebook.com/soponalways" },
        { src: "/images/logos/twitter.png", alt: "Twitter", href: "https://x.com/soponalways" },
        { src: "/images/logos/linkedIn.png", alt: "LinkedIn", href: "https://www.linkedin.com/in/sopon-islam1" },
        { src: "/images/logos/github.png", alt: "GitHub", href: "https://github.com/soponalways" },
    ]
    return (
        <section id="banner" className=" flex items-center  bg-gradient-to-r from-primary to-secondary text-white">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className=" text-center px-4">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl">Welcome 👋 </h1>
                    <TypeAnimation
                        sequence={[
                            'Hi 👋, I\'m Sopon islam',
                            1000,
                            'How can I help you?',
                            1000,
                            'How are You?',
                            1000,
                            'Download My Resume Below the Button ',
                            1000
                        ]}
                        wrapper="span"
                        speed={20}
                        style={{ display: 'inline-block' }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
                        repeat={Infinity}
                    />
                    <p className="text-lg md:text-xl lg:text-2xl mb-6">Frontend Developer | Jr. MERN Stack Developer</p>
                    <div className="flex items-center gap-2 md:gap-3 lg:gap-4 justify-center my-3 md:my-5 lg:my-6">
                        {
                            socials.map((social, index) => (
                                <Link key={index} target="_blank" to={social.href}>
                                    <img className="w-12 h-12 transition-transform duration-300 hover:scale-110 rounded-full" src={social.src} alt={social.alt} />
                                </Link>
                            ))
                        }
                    </div>
                    <Button className="btn btn-outline bg-primary cursor-pointer py-2 md:py-3 lg:py-4 duration-300 hover:bg-secondary text-white">
                        {/* <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</Link> */}
                        Download Resume
                    </Button>
                </div>
                <div className="">
                    <img src="/images/Banner/Hero-img.jpg" alt="Sopon islam" width={500} height={500} className="w-full h-full" />
                </div>
            </div>
        </section>
    );
}
