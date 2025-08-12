import AnimateBackgroundCard from "../../../Components/AnimateBackgroundCard";
import { CardContent, Typography } from "@mui/material";

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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold md:font-bold text-primary mb-6 md:mb-8 lg:mb-10">My Skills</h2>
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
