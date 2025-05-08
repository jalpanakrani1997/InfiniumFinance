
import React from 'react';
import { Shield, LineChart, Users } from "lucide-react";

function Features() {
    const features = [
        {
            icon: Shield,
            title: "Secure Investment",
            description: "Our investment plans are designed to be risk-free with a fixed return ratio, providing stable and long-term wealth creation.",
        },
        {
            icon: LineChart,
            title: "Consistent Returns",
            description: "Enjoy consistent quarterly returns of 6% through our powerful compounding model, resulting in up to 26.25% annual returns.",
        },
        {
            icon: Users,
            title: "Tree Family System",
            description: "Our unique distribution system allocates 70% profits to the main investor and 30% to family or dependents.",
        },
    ];

    return (
        <div className="pattern-dots bg-gradient-to-br from-gray-50 to-gray-100 py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0c4244] mb-4">
                        Why Choose Infinium Finance
                    </h2>
                 </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-9xl mx-auto">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="relative group border-t-4 border-[#0c4244] border border-black/90 bg-white p-8 rounded-xl hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-transform duration-500 overflow-hidden flex flex-col items-center justify-center text-center hover:-translate-y-3"
                        >
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-500/20 to-gray-500/20 opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-x-full group-hover:translate-x-0 z-0"></div>

                            {/* Icon */}
                            <div className="relative z-10 mb-2 p-4 bg-teal-950/5 rounded-full transition-transform duration-700 ease-in-out group-hover:rotate-[360deg] flex items-center justify-center">
                                <feature.icon className="h-10 w-10 text-[#0c4244]" />
                            </div>

                            {/* Title and description */}
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className=" text-lg text-gray-700 leading-relaxed">{feature.description}</p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Features;
