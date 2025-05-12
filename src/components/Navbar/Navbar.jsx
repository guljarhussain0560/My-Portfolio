import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);

    // Detect scroll and change navbar background
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Smooth scroll function
    const handleMenuItemClick = (sectionId) => {
        setActiveSection(sectionId);
        setIsOpen(false);

        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const menuItems = [
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "experience", label: "Experience" },
        { id: "work", label: "Projects" },
        { id: "education", label: "Education" },
    ];
    return (
        <nav
            className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${isScrolled ? "bg-blue-90 bg-opacity-100 backdrop-blur-md shadow-md" : "bg-transparent"
                }`}>
            <div className='text-white py-5 flex justify-between items-center'>
                {/* Logo */}
                <div className="text-lg font-semibold cursor-pointer">
                    <span className="text-blue-900">&lt;</span>
                    <span className="text-white">Guljar</span>
                    <span className="text-blue-900">/</span>
                    <span className="text-white">Hussain</span>
                    <span className="text-blue-900">&gt;</span>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 text-white">
                    {menuItems.map((item) => (
                        <li
                            key={item.id}
                            className={`cursor-pointer hover:text-blue-900 ${activeSection === item.id ? "text-[#8245ec]" : ""
                                }`}
                        >
                            <button onClick={() => handleMenuItemClick(item.id)}>
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Social Icons */}
                <div className="hidden md:flex space-x-4">
                    <a
                        href="https://github.com/guljarhussain0560"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-900"
                    >
                        <FaGithub size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/guljar-hussain-7953a9243/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-900"
                    >
                        <FaLinkedin size={24} />
                    </a>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    {isOpen ? (
                        <FiX
                            className="text-3xl text-blue-900 cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        />
                    ) : (
                        <FiMenu
                            className="text-3xl text-blue-900 cursor-pointer"
                            onClick={() => setIsOpen(true)}
                        />
                    )}
                </div>
            </div>

            {/* Mobile Menu Items */}
            {isOpen && (
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-blue-950 bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
                    <ul className="flex flex-col items-center space-y-4 py-4 text-white">
                        {menuItems.map((item) => (
                            <li
                                key={item.id}
                                className={`cursor-pointer hover:text-white ${activeSection === item.id ? "text-blue-900" : ""
                                    }`}
                            >
                                <button onClick={() => handleMenuItemClick(item.id)}>
                                    {item.label}
                                </button>
                            </li>
                        ))}
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com/guljarhussain0560"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-white"
                            >
                                <FaGithub size={24} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/guljar-hussain-7953a9243/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-white"
                            >
                                <FaLinkedin size={24} />
                            </a>
                            <a
                                href="https://x.com/guljar7865?t=AX35zw00fBhMwXEn7kOmnA&s=09"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-white">
                                <FaTwitter size={24} />
                            </a>
                            <a
                                href="https://www.facebook.com/share/19DtzznsJy/"
                                target='_blank'
                                rel="noopener noreferrer"
                                className="text-white hover:text-white">
                                <FaFacebook size={24} />
                            </a>

                        </div>
                    </ul>
                </div>
            )}



        </nav>

    )
};

export default Navbar;
