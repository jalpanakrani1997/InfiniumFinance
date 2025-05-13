import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Mail, Clock, MapPin } from 'lucide-react';

export default function Header() {
    const [hideTopBar, setHideTopBar] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isDesktop = window.innerWidth > 768;
            setHideTopBar(isDesktop ? window.scrollY > 10 : true);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    const Dropdown = ({ title, links, className = "" }) => {
        const [open, setOpen] = useState(false);
        const dropdownRef = useRef(null);

        useEffect(() => {
            const handleClickOutside = (event) => {
                if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                    setOpen(false);
                }
            };
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }, []);

        return (

            <div className="relative" ref={dropdownRef}>
                <button onClick={() => setOpen(!open)} className={`flex items-center gap-1 font-semibold text-black ${className}`}>
                    {title}
                    <svg className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                {open && (
                    <div className="absolute mt-2 w-auto bg-white border rounded-lg shadow-lg z-50">
                        {links.map(({ to, label }) => (
                            <a
                                key={to}
                                href={to}
                                className="block m-1 px-4 py-2 w-56 rounded-md hover:bg-[#b4891d] hover:text-white text-black"
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        );
    };

    const MobileDropdown = ({ title, links }) => {
        const [open, setOpen] = useState(false);
        return (
            <div>
                <button onClick={() => setOpen(!open)} className="w-full text-left font-semibold flex justify-between items-center">
                    {title}
                    <svg className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                {open && (
                    <div className="mt-2 ml-2 space-y-1">
                        {links.map(({ to, label }) => (
                            <a key={to} href={to} className="block text-gray-700 hover:underline">
                                {label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <header className="w-full">
            {/* Top Bar */}
            <div className={`hidden md:block fixed top-0 w-full bg-[#0c4244] text-white py-2 pl-14 pr-14 z-50 transition-transform duration-500 ease-in-out ${hideTopBar ? '-translate-y-full' : 'translate-y-0'}`}>
                <div className="flex justify-between items-center text-xs sm:text-sm font-medium px-2 sm:px-4 flex-wrap">
                    <div className="flex gap-4 items-center flex-wrap">
                        <a href="tel:+911234567890" className="flex items-center gap-1">
                            <Phone size={14} />
                            <span>+91 1234567890</span>
                        </a>
                        <a href="mailto:info@infiniumfinance.com" className="flex items-center gap-1">
                            <Mail size={14} />
                            <span>info@infiniumfinance.com</span>
                        </a>
                    </div>
                    <div className="flex gap-4 items-center flex-wrap">
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

            {/* Space below top bar */}
            <div className={`${hideTopBar ? 'h-[40px]' : 'h-[84px]'} md:h-[84px] transition-all duration-500`} />

            {/* Nav Bar */}
            <nav className={`fixed top-[40px] w-full pl-14 pr-14 bg-white shadow z-40 transition-transform duration-500 ${hideTopBar ? 'translate-y-[-40px]' : ''}`}>
                <div className="flex items-center justify-between h-[80px] md:h-[120px] px-2 sm:px-4">
                    {/* Logo */}
                    <a href="/" onClick={() => window.scrollTo(0, 0)}>
                        <img
                            src="https://68199ce7b80a86dab6bac1b0--rococo-mousse-fc58f1.netlify.app/logo.png"
                            alt="Logo"
                            className="h-[100px] w-[100px] lg:h-[160px] lg:w-[160px] object-contain hover:rotate-12 transition-transform"
                        />
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex gap-6 items-center text-sm xl:text-base font-semibold text-gray-900">

                        <a href="/" className="relative pb-1 font-semibold text-black hover:text-[#0c4244] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full
                            after:bg-[#0c4244] after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100" >Home </a>
                        <Dropdown
                            title="About Us"
                            className="hover:text-[#0c4244]"
                            links={[
                                { to: "/about/story", label: "Our Story" },
                                { to: "/about/team", label: "Our Team" },
                                { to: "/about/mission", label: "Our Mission" },
                            ]}
                        />
                        <Dropdown
                            title="Investment Plans"
                            className="hover:text-[#0c4244]"
                            links={[
                                { to: "/plans/Quarterly Compounding", label: "Quarterly Compounding" },
                                { to: "/plans/Tree Family Plan", label: "Tree Family Plan" },
                                { to: "/plans/Systematic Investment", label: "Systematic Investment" },
                            ]}
                        />

                        <a href="/how-it-works" className="relative pb-1 font-semibold text-black hover:text-[#0c4244] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full
                          after:bg-[#0c4244] after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100" > How It Works </a>
                        <a href="/calculator" className="relative pb-1 font-semibold text-black hover:text-[#0c4244] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full
                           after:bg-[#0c4244] after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100" > Calculator</a>
                        <a href="/faqs" className="relative pb-1 font-semibold text-black hover:text-[#0c4244] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full
                              after:bg-[#0c4244] after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100" >FAQs</a>
                        <a href="/contact" className="relative pb-1 font-semibold text-black hover:text-[#0c4244] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full
                         after:bg-[#0c4244] after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100" > Contact</a>
                    </div>

                    {/* Desktop Login */}
                    <div className="hidden lg:block">
                        <a href="/login" className="bg-[#c89b28] hover:bg-[#b4891d] text-white py-2 px-4 rounded">
                            Login / Register
                        </a>
                    </div>

                    {/* Mobile Toggle Button */}
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2">
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Dropdown */}
                {mobileMenuOpen && (
                    <div className="lg:hidden bg-white px-4 pb-6 pt-2 space-y-2 shadow-md">
                        <MobileDropdown
                            title="About Us"
                            links={[
                                { to: "/about/story", label: "Our Story" },
                                { to: "/about/team", label: "Our Team" },
                                { to: "/about/mission", label: "Our Mission" },
                            ]}
                        />
                        <MobileDropdown
                            title="Investment Plans"
                            links={[
                                { to: "/plans/Quarterly Compounding", label: "Quarterly Compounding" },
                                { to: "/plans/Tree Family Plan", label: "Tree Family Plan" },
                                { to: "/plans/Systematic Investment", label: "Systematic Investment" },
                            ]}
                        />

                        <a href="/login" className="block bg-[#c89b28] text-white text-center py-2 rounded hover:bg-yellow-600">
                            Login / Register
                        </a>
                    </div>
                )}
            </nav>
        </header>
    );
}


// #0c4244

// #093c3e
  
// #c89b28

// #b4891d

// #145052

// #093d3e
