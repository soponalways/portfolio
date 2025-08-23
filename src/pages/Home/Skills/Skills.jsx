import { TypeAnimation } from "react-type-animation";
import AnimateBackgroundCard from "../../../Components/AnimateBackgroundCard";
import { CardContent, Typography } from "@mui/material";
import { motion } from "motion/react";

export default function Skills() {
    const skills = [
        { title : "HTML", icon: "/images/logos/html.png" },
        { title : "CSS", icon: "/images/logos/css.png" },
        { title : "JavaScript", icon: "/images/logos/javascript.png" },
        { title : "React.js", icon: "/images/logos/react.png" },
        { title : "Node.js", icon: "/images/logos/node.png" },
        { title : "Express.js", icon: "/images/logos/express.png" },
        { title : "MongoDB", icon: "/images/logos/mongodb.png" }
    ];

    return (
        <section id="skills" className="bg-base-200">
            <div className="container mx-auto px-6 text-center ">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-3 md:mb-5 lg:mb-7">
                    <div className="relative mx-auto -top-5 w-12 h-12 md:w-16 md:h-16 lg:h-20 lg:w-20 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
                    <TypeAnimation
                        sequence={[
                            'My Skills',
                            1000,
                            'My Technology Stack',
                            1000,
                        ]}
                        speed={50}
                        repeat={Infinity}
                        className="text-3xl md:text-4xl lg:text-5xl font-semibold md:font-bold text-primary "
                    />
                </motion.div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map((skill, i) => (
                        <div key={i} className=" transition cursor-pointer">
                            <AnimateBackgroundCard>
                                <CardContent>
                                    <Typography variant="h5" component="div" className="flex items-center justify-center mb-2">
                                        <img src={skill.icon} alt={skill.title}
                                            className="w-6 md:w-8 lg:w-10 h-6 md:h-8 lg:h-10"
                                        />
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" className="text-xl md:text-2xl lg:text-3xl text-base-content mt-3 md:mt-4 lg:mt-5">
                                        {skill.title}
                                    </Typography>
                                </CardContent>
                            </AnimateBackgroundCard>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
