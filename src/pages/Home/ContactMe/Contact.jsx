import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Box } from "@mui/material";
import { motion } from "motion/react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const contactItems = [
    {
        id: 1,
        name: "Phone",
        details: "+88 01884953018",
        icon: <PhoneIcon sx={{ fontSize: 50, color: "#1976d2" }} />
    },
    {
        id: 2,
        name: "Email",
        details: "sopon.dev@outlook.com",
        icon: <EmailIcon sx={{ fontSize: 50, color: "#1976d2" }} />
    },
    {
        id: 3,
        name: "WhatsApp",
        details: "+88 01884953018",
        icon: <WhatsAppIcon sx={{ fontSize: 50, color: "#25D366" }} />
    }
];

const Contact = () => {
    return (
        <div id='contact'>
            <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold md:font-bold text-primary mb-6 md:mb-8 lg:mb-10 text-center">
                    Contact Me
                </h2>
                <h1 className='text-xl md:text-3xl lg:text-4xl text-center'>Reach Out me to the below option</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-8 lg:px-12 py-6'>
                {contactItems?.map((item) => (
                    <motion.div key={item.id} whileHover={{ scale: 1.05 }}>
                        <Card
                            sx={{
                                height: 200,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 3,
                                boxShadow: 4,
                                textAlign: "center"
                            }}
                        >
                            <Box>{item.icon}</Box>
                            <CardContent >
                                <Typography variant="h6">{item.name}</Typography>
                                <Typography variant="body1" color="text.secondary">
                                    {item.details}
                                </Typography>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Contact;