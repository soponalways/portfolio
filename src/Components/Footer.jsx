import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="footer footer-center bg-base-200 container mx-auto text-base-content py-6">
            <aside>
                <p className="font-bold text-lg">
                    Sopon islam <br />
                    <span className="font-normal text-sm">Frontend Developer</span>
                </p>
                <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <Link to={"https://github.com/soponalways"} className="link link-hover text-2xl">
                        <FaGithub />
                    </Link>
                    <Link to={"https://www.linkedin.com/in/sopon-islam1/"} className="link link-hover text-2xl">
                        <FaLinkedin />
                    </Link>
                    <Link to={"https://twitter.com/soponalways"} className="link link-hover text-2xl">
                        <FaTwitter />
                    </Link>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
