import React, { useEffect, useState } from "react";
import logo from './logo.jpg';
const Navbar = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="logo">
                <img
                    src={logo}
                    alt="Logo"
                    style={{ height: 40 }}
                />
                <h2><strong>Employee Activity Dashboard</strong></h2>
            </div>
            <div className="time">
                <div>{currentTime.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                <div>{currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</div>
            </div>
        </nav>
    );
};

export default Navbar;
