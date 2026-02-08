import React from "react";
import { Link } from "react-router";
import { HashLink } from "react-router-hash-link";
import { motion } from "motion/react"; // Use motion from motion/react for compatibility
import AnimatedButton from "./AnimatedButton";

const Navbar = () => {
    const linksList = (
        <>
            <li><HashLink smooth to="/#home"><AnimatedButton text={'Home'} /></HashLink></li>
            <li><HashLink smooth to="/#about"><AnimatedButton text={'About'} delay={1} /></HashLink></li>
            <li><HashLink smooth to="/#skills"><AnimatedButton text={'Skills'} delay={1.3} /></HashLink></li>
            <li><HashLink smooth to="/#projects"><AnimatedButton text={'Projects'} delay={1.5} /></HashLink></li>
            <li><HashLink smooth to="/#contact"><AnimatedButton text={'Contact'} delay={1.7} /></HashLink></li>
        </>
    )

    return (
        <div className="container mx-auto navbar shadow-md">
            <div className="navbar-start">
                {/* Mobile menu */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0}
                        className="menu-sm dropdown-content flex flex-col gap-3 justify-center items-center mt-3 p-2 bg-base-100 hover:bg-primary duration-300 transition rounded-box w-52 shadow-2xl shadow-secondary">
                        {linksList}
                    </ul>
                </div>


                <Link href="/" className=" normal-case text-xl font-bold text-primary md:font-semibold lg:font-bold md:text-2xl"><code>&lt;Sopon /&gt;</code></Link>
            </div>

            {/* Desktop menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal  border border-green-500 md:px-6 lg:px-8 rounded-2xl lg:rounded-3xl bg-gray-700 py-1 lg:py-2 gap-4 lg:gap-5">
                    {linksList}
                </ul>
            </div>

            <div className="navbar-end flex gap-2 md:gap-4 lg:gap-6 items-center">
                <Link to={'https://drive.google.com/file/d/1SLb3Nnu5ED48lIZB3m3eMNPo5WZxe82k/view?usp=sharing'} target="_blank" className="btn btn-primary hover:bg-secondary hover:border-none hover:text-base-content cursor-pointer">Resume</Link>
            </div>
        </div>
    );
};

export default Navbar;