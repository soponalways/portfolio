import React from "react";
import { useParams } from "react-router";
import { Container, Typography, Chip, Button, Stack } from "@mui/material";
import Projects from "../Home/MyProjects/Projects";
import ParticleBackground from "../../Particles/ParticleBackground";
import { Helmet } from "react-helmet-async";

export default function ProjectDetails() {
    const { id } = useParams();
    const project = Projects.find((p) => p.id === parseInt(id));

    if (!project) return <Typography>Project not found</Typography>;

    return (
        <div className="bg-base-200">
            <div className="absolute z-50">
                <div>
                    <Helmet>
                        <title>Project Details - {project.name} </title>
                        <meta name="description" content={project.description} />
                    </Helmet>
                </div>
                <ParticleBackground />
            </div>
            <Container sx={{ py: 5 }}>
                <Typography variant="h3" gutterBottom>{project.name}</Typography>
                <img src={project.image} alt={project.name} style={{ maxWidth: "100%", borderRadius: "8px" }} />

                <Typography variant="h5" mt={3}>Tech Stack</Typography>
                <Stack direction="row" className="flex flex-wrap gap-1 md:gap-2" spacing={1} mt={1}>
                    {project.techStack.map((tech, idx) => (
                        <p key={idx} className="btn btn-ghost btn-outline border-green-600">{tech}</p>
                    ))}
                </Stack>

                <Typography variant="body1" mt={3}>{project.description}</Typography>

                <Stack direction="row" spacing={2} mt={3}>
                    <Button variant="contained" href={project.liveLink} target="_blank">Live Project</Button>
                    <Button variant="outlined" href={project.githubLink} target="_blank">GitHub</Button>
                </Stack>

                <Typography variant="h6" mt={4}>Challenges</Typography>
                <Typography>{project.challenges}</Typography>

                <Typography variant="h6" mt={4}>Improvements & Future Plans</Typography>
                <Typography>{project.improvements}</Typography>
            </Container>
        </div>
    );
}
