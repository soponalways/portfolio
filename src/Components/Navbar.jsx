import { Button } from "@material-tailwind/react";
import ThemeToggole from "../Theme/ThemeToggole";
import { Link } from "react-router";

const Navbar = () => {
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
    const linksList = () => {
        return <>
            <li onClick={() => scrollToSection("banner")}><span>Home</span></li>
            <li onClick={() => scrollToSection("about")}><span>About</span></li>
            <li onClick={() => scrollToSection("skills")}><span>Skills</span></li>
        </>
    }

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
                        className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {linksList()}
                    </ul>
                </div>
                <Link href="/" className=" normal-case text-xl font-bold text-primary md:font-semibold lg:font-bold md:text-2xl"><code>&lt;Sopon /&gt;</code></Link>
            </div>

            {/* Desktop menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {linksList()}
                </ul>
            </div>

            <div className="navbar-end flex gap-2 md:gap-4 lg:gap-6 items-center">
                <ThemeToggole />
                <Button className="btn btn-primary hover:bg-secondary hover:border-none hover:text-base-content cursor-pointer">Resume</Button>
            </div>
        </div>
    );
};

export default Navbar;