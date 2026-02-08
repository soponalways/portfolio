import { TypeAnimation } from "react-type-animation";
import AnimateBackgroundCard from "../../../Components/AnimateBackgroundCard";
import { CardContent, Typography } from "@mui/material";
import { motion } from "motion/react";

export default function Skills() {
    const skills = [
        { title: "Typescript", icon: "/images/logos/updated/typescript.png", level: "Advanced", pourpouse: "Development" },
        { title: "JavaScript", icon: "/images/logos/javascript.png", level: "Advanced", pourpouse: "Development" },
        { title: "Next JS", icon: "/images/logos/updated/nextjs.webp", level: "Advanced", pourpouse: "Development" },
        { title: "React.js", icon: "/images/logos/react.png", level: "Advanced", pourpouse: "Development" },
        { title: "Node.js", icon: "/images/logos/node.png", level: "Intermediate", pourpouse: "Backend" },
        { title: "Express.js", icon: "/images/logos/express.png", level: "Intermediate", pourpouse: "Backend" },
        { title: "Better Auth", icon: "/images/logos/updated/better-auth.png", level: "Intermediate", pourpouse: "Authentication" },
        { title: "Go Lang", icon: "/images/logos/updated/golang.png", level: "Intermediate", pourpouse: "Backend" },
        { title: "Docker", icon: "/images/logos/updated/docker.png", level: "Intermediate", pourpouse: "DevOps" },
        { title: "Nginx", icon: "/images/logos/updated/nginx.webp", level: "Intermediate", pourpouse: "DevOps" },
        { title: "PostgreSQL", icon: "/images/logos/updated/postgresql.png", level: "Advanced", pourpouse: "Database" },
        { title: "Prisma ORM", icon: "/images/logos/updated/prisma.png", level: "Advanced", pourpouse: "Database" },
        { title: "SQL Databases", icon: "/images/logos/updated/sql.jpeg", level: "Advanced", pourpouse: "Database" },
        { title: "MongoDB", icon: "/images/logos/mongodb.png", level: "Intermediate", pourpouse: "Database" },
        { title: "Redux Toolkit", icon: "/images/logos/updated/redux.png", level: "Advanced", pourpouse: "Frontend State Management" },
        { title: "Firebase", icon: "/images/logos/updated/firebase.png", level: "Advanced", pourpouse: "Backend as a Service" },
        { title: "Tailwind CSS", icon: "/images/logos/updated/tailwindcss.png", level: "Advanced", pourpouse: "Styling Framework" },
        { title: "CSS", icon: "/images/logos/css.png", level: "Advanced", pourpouse: "Styling Language" },
        { title: "HTML", icon: "/images/logos/html.png", level: "Advanced", pourpouse: "Markup Language" },
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
                        speed={30}
                        repeat={Infinity}
                        className="text-3xl md:text-4xl lg:text-5xl font-semibold md:font-bold text-primary "
                    />
                </motion.div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map((skill, i) => (
                        <div key={i} className=" transition cursor-pointer">
                            {/* <AnimateBackgroundCard>
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
                            </AnimateBackgroundCard> */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1, delay: i * 0.1 }}
                                transition={{ duration: 0.5 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.9 }}
                                key={skill.title} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-primary shadow-base-100">
                                <div className="card-body items-center text-center">
                                    <div className="text-5xl mb-4">
                                        <img src={skill.icon} alt={skill.title} className="w-16 h-16 hover:scale-110 transition-transform duration-300 rounded-xl md:rounded-2xl" />
                                    </div>
                                    <h3 className="card-title text-2xl">{skill.title}</h3>
                                    <p className="text-base-content/70">{skill.level}</p>
                                    <div className="card-actions justify-end mt-4">
                                        <div className="badge badge-outline animate-pulse border-primary/70">{skill.pourpouse}</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
