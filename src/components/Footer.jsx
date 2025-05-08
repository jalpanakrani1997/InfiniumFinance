import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, Clock, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#003b3b] text-white -mt-12 pt-16 pb-6">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12  ">
                    <div>
                        <h3 className='text-2xl font-bold mb-6 flex items-center'>
                            <div className='foot-bg bg-bold bg-gold text-white p-1 rounded mr-2 transform rotate-12'>
                                <span className='text-sm font-bold my-2'>IFS</span>
                            </div>
                            Infinium Finance <br /> Solutions
                        </h3>
                        <p className="text-white-100 text-xl mt-4 mb-4">
                            A forward-thinking investment solutions company dedicated to offering secure, structured, and profitable financial growth plans.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className=" p-3 rounded-full bg-white/10 hover:text-yellow-400 transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className=" p-3 rounded-full bg-white/10 hover:text-yellow-400 transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className=" p-3 rounded-full bg-white/10 hover:text-yellow-400 transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className=" p-3 rounded-full bg-white/10 hover:text-yellow-400 transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-6 border-b border-white/10 pb-2 ">Quick Links</h3>
                        <ul className="space-y-3 text-lg">
                            {[
                                { label: "Home", href: "#" },
                                { label: "About Us", href: "#" },
                                { label: "Investment Plans", href: "#" },
                                { label: "How It Works", href: "#" },
                                { label: "Investment Calculator", href: "#" },
                            ].map((link, index) => (
                                <li
                                    key={index}
                                    className="flex items-center transform transition-transform hover:translate-x-2 "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="lucide lucide-arrow-right mr-2 h-4 w-4 text-yellow-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                    <FooterLink href={link.href} label={link.label} />
                                </li>
                            ))}
                        </ul>

                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-6 border-b border-white/10 pb-2">Legal</h3>
                        <ul className="space-y-3 text-lg ">
                            {[
                                { label: "Terms & Conditions", href: "#" },
                                { label: "Privacy Policy", href: "#" },
                                { label: "Refund Policy", href: "#" },
                                { label: "Risk Disclosure", href: "#" },
                            ].map((link, index) => (
                                <li
                                    key={index}
                                    className="text-white flex items-center transform transition-transform hover:translate-x-2"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="lucide lucide-arrow-right mr-2 h-4 w-4 text-yellow-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                    <FooterLink href={link.href} label={link.label} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-6 border-b border-white/10 pb-2">Contact Us</h3>
                        <ul className="space-y-4 text-lg">
                            <li className="flex items-start">
                                <MapPin size={16} className="mr-2 mt-1 text-yellow-400" />
                                Infinium Finance Solutions<br />
                                123 Financial District<br />
                                Ahmedabad, Gujarat<br />
                                India
                            </li>
                            <li className="flex items-center">
                                <Phone size={16} className="mr-2 text-yellow-400" />
                                +91 1234567890
                            </li>
                            <li className="flex items-center">
                                <Mail size={16} className="mr-2 text-yellow-400" />
                                info@infiniumsolutions.com
                            </li>
                            <li className="flex items-center">
                                <Clock size={16} className="mr-2 text-yellow-400" />
                                Mon-Fri: 9:00 AM - 6:00 PM
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-teal-800 pt-8 py-6 text-center text-white-900 text-lg">
                    <p className="flex justify-center items-center text-xl">
                        © 2025 Infinium Finance Solutions Ltd. All rights reserved.
                    </p>
                    <p className="flex justify-center items-center text-white/60 mt-3">
                        Designed and developed with ❤️ for secure financial growth
                    </p>
                </div>
            </div>
        </footer>
    );
};

// Updated FooterLink component (remove the <li>)
const FooterLink = ({ href, label }) => (
    <a
        href={href}
        className="text-white-100 hover:text-yellow-400 transition-colors flex items-center"
    >
        {label}
    </a>
);

export default Footer;
