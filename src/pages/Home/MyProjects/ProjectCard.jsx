import React from "react";
import { Card, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";
import { motion } from "motion/react";
import { Link } from "react-router";
import { MdOpenInNew } from "react-icons/md";


export default function ProjectCard({ project }) {
    return (
        <motion.div whileHover={{ scale: 1.05 }}>
            <Card
                sx={{
                    width: 345,
                    height: 400,
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 3,
                    boxShadow: 4
                }}
            >
                {/* Image container with fixed height */}
                <Box sx={{ height: 220, overflow: "hidden" }}>
                    <CardMedia
                        
                        component="img"
                        image={project.image}
                        alt={project.name}
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                        }}
                        className="hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                </Box>

                <CardContent
                    sx={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between"
                    }}
                    className="bg-base-100 text-primary"
                >
                    <Typography gutterBottom variant="h6" className="text-xl md:text-2xl">
                        {project.name}
                    </Typography>

                    <Button
                        component={Link}
                        to={`/projects/${project.id}`}
                        variant="contained"
                        sx={{ mt: "auto" }} 
                        className="bg-primary hover:bg-secondary text-primary-content hover:text-base-content border-none flex items-center justify-center gap-2"
                    >
                        <span>View More </span><MdOpenInNew />
                    </Button>
                </CardContent>
            </Card>
        </motion.div>
    );
}
