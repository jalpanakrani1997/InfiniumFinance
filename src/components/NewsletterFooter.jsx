import { ArrowRight } from "lucide-react";

function NewsletterFooter() {
    return (
        <div className="bg-[#003b3b] py-8 px-4">
            <section className="bg-[#073c3c] py-10 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Secure Your Financial Future?
                    </h1>
                    <p className="text-xl max-w-2xl mx-auto text-white mb-10">
                        Start your investment journey with Infinium Finance today and experience the power of our quarterly compounding model.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <button className="h-12 bg-yellow-600 hover:bg-yellow-700 transition-all text-white px-10 py-2 rounded-md font-medium shadow-lg hover:shadow-xl transform hover:scale-105">
                            Invest Now
                        </button>
                        <button className="h-12 bg-white text-black border-2 border-white hover:bg-white/10 hover:text-white transition-all duration-300 px-10 py-2 rounded-md font-medium">
                            Contact Us
                        </button>
 
                    </div>
                </div>
            </section>



            <div className="max-w-8xl mx-20 mt-16 flex flex-col h-auto md:flex-row items-center justify-between gap-6 rounded-xl p-6 md:p-8 mb-12 border border-[#3e5537] bg-[#1c443a] transform hover:scale-[1.01] transition-transform duration-300">

                {/* Left Content */}
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold text-white mb-2">
                        Subscribe to Our Newsletter
                    </h2>
                    <p className="text-gray-300 text-xl">
                        Stay updated with our latest investment opportunities and financial insights.
                    </p>
                </div>

                <div className="flex w-full md:w-auto items-center gap-2">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex h-10 w-full lg:w-[500px] rounded-md border px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                    <button className="flex h-10 items-center justify-center gap-2 bg-[#c89b28] hover:bg-[#b78c1f] text-white font-semibold px-6 py-3 rounded-md transition-all">
                        Subscribe
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>

        </div>
    );
}

export default NewsletterFooter;
