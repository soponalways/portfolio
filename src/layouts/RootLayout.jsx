import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';


const RootLayout = () => {
    return (
        <div>
            <header className="bg-base-100 sticky top-0 z-50">
                <Navbar />
            </header>
            <main className="min-h-[88vh]">
                <Outlet />
            </main>
            <footer className=''>
                {/* <p className="text-center">© 2025 Sopon islam. All rights reserved.</p> */}
                <Footer />
            </footer>
        </div>
    );
};

export default RootLayout;