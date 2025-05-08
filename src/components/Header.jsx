import { NavLink } from 'react-router-dom';
import { Menu, Phone, Mail, Clock, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Header() {
    const [hideTopBar, setHideTopBar] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHideTopBar(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="w-full">
            {/* Top Info Bar */}
            <div
                className={`bg-[#0c4244] text-white py-2 fixed top-0 left-0 w-full z-50 transition-transform duration-500 ease-in-out ${hideTopBar ? '-translate-y-full' : 'translate-y-0'}`}
            >
                <div className="container mx-auto flex flex-wrap justify-between items-center text-base font-medium px-4">
                    <div className="flex flex-wrap items-center gap-6">
                        <a href="tel:+911234567890" className="flex items-center gap-1">
                            <Phone size={14} />
                            <span>+91 1234567890</span>
                        </a>
                        <a href="mailto:info@infiniumfinance.com" className="flex items-center gap-1">
                            <Mail size={14} />
                            <span>info@infiniumfinance.com</span>
                        </a>
                    </div>
                    <div className="flex flex-wrap items-center gap-6 mt-2 md:mt-0">
                        <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>Ahmedabad, Maharashtra</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Placeholder to prevent layout shift */}
            <div className={`${hideTopBar ? 'h-[42px]' : 'h-[84px]'} transition-all duration-500`}></div>

            {/* Main Navigation */}
            <nav
                className={`w-full bg-white fixed top-[42px] left-0 right-0 z-40 transition-transform duration-500 ease-in-out ${hideTopBar ? 'translate-y-[-42px] shadow-md' : 'translate-y-0'}`}
            >
                <div className="container mx-auto flex justify-between items-center px-4">
                    {/* Logo */}
                    <NavLink to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center">
                        <img
                            src="https://68199ce7b80a86dab6bac1b0--rococo-mousse-fc58f1.netlify.app/logo.png"
                            alt="Infinium Finance Logo"
                            className="h-[150px] w-[150px] object-contain transition-transform hover:rotate-12"
                        />
                    </NavLink>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-8 text-lg font-semibold leading-6 text-gray-900">
                        {[
                            { to: '/', label: 'Home' },
                            { to: '/about', label: 'About Us' },
                            { to: '/plans', label: 'Investment Plans' },
                            { to: '/how-it-works', label: 'How It Works' },
                            { to: '/calculator', label: 'Calculator' },
                            { to: '/faqs', label: 'FAQs' },
                            { to: '/contact', label: 'Contact' },
                        ].map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className="relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0c4244] transition-all duration-300 group-hover:w-full"></span>
                            </NavLink>
                        ))}
                    </div>

                    {/* Desktop Login/Register Button */}
                    <div className="hidden lg:flex">
                        <NavLink to="/login" className="bg-yellow-500 hover:bg-yellow-600 transition-colors text-white font-medium py-2 px-6 rounded">
                            Login / Register
                        </NavLink>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        <Menu size={28} />
                    </button>
                </div>

              
            </nav>
        </header>
    );
}
