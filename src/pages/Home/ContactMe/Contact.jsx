import React from 'react';
import { motion } from "motion/react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { TypeAnimation } from 'react-type-animation';
import { useForm } from 'react-hook-form';
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;

const Contact = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const result = await axios.post('/sendContact', data)
            if (result?.data?.message) {
                toast.success(result?.data?.message);
                reset();
            } else {
                toast.error("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Error submitting form please try again ");
        }

    };

    return (
        <div id='contact' className='container mx-auto px-6 py-10 bg-base-200'>
            <div>
                <motion.div 
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-3 md:mb-5 lg:mb-7">
                    <div className="relative mx-auto -top-5 w-12 h-12 md:w-16 md:h-16 lg:h-20 lg:w-20 bg-gradient-to-r from-primary to-secondary rounded-full animate-pulse"></div>
                    <TypeAnimation
                        sequence={[
                            'Contact Me',
                            1000,
                            'Get in Touch',
                            1000,
                        ]}
                        speed={50}
                        repeat={Infinity}
                        className="text-3xl md:text-4xl lg:text-5xl font-semibold md:font-bold text-primary "
                    />
                </motion.div>
                <motion.h1 
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }} 
                    className='text-xl md:text-3xl lg:text-4xl text-center'>Reach Out me to the below option</motion.h1>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 p-8">
                {/* Left Side Contact Info */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }} 
                    whileHover={{ skew: 2, borderColor: 'green', boxShadow: "0px 0px 20px green" }}
                    className="flex-1 space-y-3 md:space-y-5 lg:space-y-6 h-full bg-gray-600 p-5 md:p-8 lg:p-10 lg:sticky lg:top-20 rounded-lg shadow-lg border border-primary ">
                    <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">Contact Info</h2>
                    <div className='space-y-2 md:space-y-3 lg:space-y-4'>
                        <p> <PhoneIcon sx={{ fontSize: 24, color: "#1976d2" }} /> Phone: <Link to="tel:+8801884953018">+8801884953018</Link></p>
                        <p> <WhatsAppIcon sx={{ fontSize: 24, color: "#25D366" }} /> WhatsApp: +8801884953018</p>
                        <p> <EmailIcon sx={{ fontSize: 24, color: "#1976d2" }} /> Email: <Link to="mailto:sopon-dev@outlook.com"> sopon-dev@outlook.com</Link></p>
                        <p className='flex gap-2'> <FaLocationDot size={24} color='#1976d2' /> Address: Rangpur, Bangladesh</p>
                    </div>
                </motion.div>

                {/* Right Side Form */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }} 
                    className="flex-1 p-5 md:p-8 lg:p-10 bg-gray-600 rounded-lg shadow-lg border border-primary ">
                    <h2 className="text-xl md:text-2xl font-semibold md:font-bold  mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">Send Message to fillup the form</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="">
                        {/* Name */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Name:</legend>
                            <input
                                type="text"
                                placeholder="Jhon Doe"
                                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
                                {...register('name', {
                                    required: 'Name is required',
                                    minLength: { value: 3, message: 'Minimum 3 characters' },
                                })}
                            />
                            {errors.name && <p className="text-red-400 mt-1">{errors.name.message}</p>}
                        </fieldset>

                        {/* Email */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Email:</legend>
                            <input
                                type="email"
                                placeholder="example@mail.com"
                                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
                                })}
                            />
                            {errors.email && <p className="text-red-400 mt-1">{errors.email.message}</p>}
                        </fieldset>

                        {/* Subject */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Subject Line:</legend>
                            <input
                                type="text"
                                placeholder="I want to contact with you."
                                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
                                {...register('subject', {
                                    required: 'Subject is required',
                                    minLength: { value: 5, message: 'Minimum 5 characters' },
                                })}
                            />
                            {errors.subject && <p className="text-red-400 mt-1">{errors.subject.message}</p>}
                        </fieldset>

                        {/* Message */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">What is your message?</legend>
                            <motion.textarea
                                placeholder="Hello Sopon. I 'am Interested to work with you. Your Portfolio......"
                                className="textarea textarea-bordered h-28 w-full focus:outline-none focus:ring-2 focus:ring-primary focus-within:text-green-400 bg-[length:300%_300%] transition-transform duration-300                              
                                "
                                style={{
                                    backgroundImage:
                                        "linear-gradient(90deg, #ff008030,  #00ff8830, #ff008030, #00ff8830,  #ff008030)"
                                }}
                                animate={{
                                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: 1
                                }}
                                {...register('message', {
                                    required: 'Message is required',
                                    minLength: { value: 10, message: 'Minimum 10 characters' },
                                })}
                            ></motion.textarea>
                            {errors.message && <p className="text-red-400 mt-1">{errors.message.message}</p>}
                        </fieldset>

                        {/* Submit */}
                        <button type="submit" className="btn btn-primary w-full">
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;