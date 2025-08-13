import React from 'react';
import { Grid, Typography, Container } from "@mui/material";
import ProjectCard from "./ProjectCard";
import Projects from './Projects';

const MyProjects = () => {
    return (
        <div id="projects" className='text-center'>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold md:font-bold text-primary mb-6 md:mb-8 lg:mb-10">My Projects</h2>
            <Container sx={{ py: 5 }}>
                <Grid container spacing={3} justifyContent="center">
                    {Projects.map((project) => (
                        <Grid item key={project.id}>
                            <ProjectCard project={project} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default MyProjects;