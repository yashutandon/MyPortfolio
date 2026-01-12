import React, { useEffect, useState } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
    const [srcolled, setSrcolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSrcolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`navbar ${srcolled ? "scrolled" : "not-scrolled"}`}>
            <div className="inner">
                <a className="logo" href="#hero">
                    Yashu | Tandon
                </a>

                <nav className="desktop">
                    <ul>
                        {navLinks.map(({ link, name, external }) => (
                            <li key={name} className="group">
                                <a
                                    href={link}
                                    target={external ? "_blank" : "_self"}
                                    rel={external ? "noopener noreferrer" : undefined}
                                >
                                    <span>{name}</span>
                                    <span className="underline" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Resume + Contact Buttons */}
                <div className="flex gap-4">
                    <a
                        href="https://drive.google.com/file/d/1l15qkddxkwZGdM_sW85TzozsaALLV9rw/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-btn group"
                    >
                        <div className="inner px-3 py-1.5 md:px-5 md:py-2">
                            <span className="text-sm md:text-base">View Resume</span>
                        </div>
                    </a>

                    <a href="#contact" className="contact-btn group">
                        <div className="inner px-3 py-1.5 md:px-5 md:py-2">
                            <span className="text-sm md:text-base">Contact</span>
                        </div>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
