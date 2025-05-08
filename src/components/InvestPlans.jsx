import React from 'react';

const InvestPlans = () => {
    const testimonials = [
        {
            img: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            name: 'Rajesh Sharma',
            position: 'Investor since 2022',
            content: '"I\'ve been investing with Infinium Finance for over a year now, and the returns have been exactly as promised. The quarterly compounding has significantly grown my initial investment."'
        },
        {
            img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            name: 'Priya Patel',
            position: 'Investor since 2021',
            content: '"The Tree Family model has been a game-changer for my family. Not only am I seeing great returns, but my children are also benefiting from the 30% allocation."'
        },
        {
            img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            name: 'Amit Verma',
            position: 'Investor since 2023',
            content: '"I was skeptical at first, but after seeing my first quarterly return, I was convinced. The transparency and professionalism of Infinium Finance are commendable."'
        }
    ];

    return (
        <section className="py-16  bg-[#fbf9f4] pattern-waves	">
            <div className="container mx-auto px-4 ">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-4">What Our Investors Say</h2>
                </div>


                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="flex flex-col h-full bg-white border border-black rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2"
                        >
                            <div className="flex flex-col items-center text-center p-6 flex-grow">
                                <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                                    <img
                                        src={testimonial.img}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="font-bold text-xl">{testimonial.name}</p>
                                <p className="text-gray-500 text-lg mb-1">{testimonial.position}</p>
                                <p className="text-gray-600 mt-4 text-xl">{testimonial.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InvestPlans;