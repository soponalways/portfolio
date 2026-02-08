import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react"; // Use motion from motion/react for compatibility

export default function Banner() {
    const socials = [
        { src: <FaFacebook />, alt: "Facebook", href: "https://www.facebook.com/soponalways" },
        { src: <FaTwitter />, alt: "Twitter", href: "https://x.com/soponalways" },
        { src: <FaLinkedin />, alt: "LinkedIn", href: "https://www.linkedin.com/in/sopon-islam1" },
        { src: <FaGithub />, alt: "GitHub", href: "https://github.com/soponalways" },
    ]
    return (
        <>
            <section id="home" className="min-h-screen bg-[#0a0d37] flex items-center ">
                <div className="container mx-auto grid grid-cols-12 gap-8 items-center">
                    <div className=" col-span-12 md:col-span-7 text-center px-4 flex flex-col gap-4 lg:gap-6">
                        {/* Upper Container  */}
                        <div>
                            <motion.h1
                                animate={{ color: ["#ff0080", "#7928ca", "#0070f3", "#00ff88", "#ff0080"] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 lg:mb-8"
                            >Hi 👋, I'm Sopon islam
                            </motion.h1>
                            <TypeAnimation
                                sequence={[
                                    'MERN Stack Developer',
                                    1000,
                                    'Frontend Developer',
                                    1000,
                                    'I am always Dedicated ',
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
                        </div>
                        {/* Down Container  */}
                        <div>
                            <p className="text-lg md:text-xl lg:text-2xl mb-3">Frontend Developer | Jr. MERN Stack Developer</p>
                            <p className="caveat-font text-lg md:text-xl lg:text-2xl mb-6">Passionate about creating beautiful, functional web applications that solve real-world problems. Let's build something amazing together.</p>
                            <div className="flex items-center gap-2 md:gap-3 lg:gap-4 justify-center my-3 md:my-5 lg:my-6">
                                {
                                    socials.map((social, index) => (
                                        <Link key={index} target="_blank" to={social.href} className="text-2xl md:text-3xl lg:text-4xl hover:text-secondary duration-300" aria-label={social.alt}>
                                            {social.src}
                                        </Link>
                                    ))
                                }
                            </div>
                            <button className="btn bg-primary hover:bg-secondary hover:border-none cursor-pointer py-2 md:py-3 lg:py-4 duration-300">
                                <Link to="https://drive.google.com/file/d/1SLb3Nnu5ED48lIZB3m3eMNPo5WZxe82k/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download Resume</Link>
                            </button>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-5 p-4 relative place-content-center place-items-center">
                        <div className="relative rounded-full p-2 ring-2 md:right-4 ring-blue-500 shadow-2xl hover:shadow-[0_0_10px_rgba(0,0,0,0.5)] shadow-gray-500">
                            <img
                                src="/images/Banner/Hero-img.png"
                                alt="Banner Image"
                                className="w-64 md:w-72 lg:w-96 h-64 md:h-72 lg:h-96 object-cover rounded-full"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
