import { useEffect, useState } from 'react';
import Calculate from '../components/Calculate';
import Features from '../components/Features';
import Hero from '../components/Hero';
import InvestPlans from '../components/InvestPlans';
import NewsletterFooter from '../components/NewsletterFooter';
import OurInvest from '../components/OurInvest';
import { FaChevronUp } from "react-icons/fa";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <>
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-4 rounded-full bg-[#0E4B4D] text-white shadow-lg hover:bg-[#0c3f41] transition-all duration-300"
          >
            <FaChevronUp size={20} />
          </button>
        )}
      </>

      <Hero />
      <Features />
      <OurInvest />
      <Calculate />
      <InvestPlans />
      <NewsletterFooter />
    </div>
  );
}