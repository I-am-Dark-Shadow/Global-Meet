import React, { useState } from 'react';

const faqs = [
    {
        id: 1,
        question: 'How do I request a refund?',
        answer: 'We understand that situations may arise where you need a refund. Please reach out to our support team for assistance.',
    },
    {
        id: 2,
        question: 'Can I upgrade my plan at any time?',
        answer: 'Yes, you can upgrade your plan at any time to access more features and services. Contact our team for assistance with upgrading.',
    },
    {
        id: 3,
        question: 'Is technical support available 24/7?',
        answer: 'Our technical support team is available 24/7 to assist you with any queries or issues you may encounter. Reach out to us anytime!',
    },
    {
        id: 4,
        question: 'Are there any discounts for long-term subscriptions?',
        answer: 'We offer special discounts for customers who opt for long-term subscription plans. Contact us for more details on available offers.',
    },
];

const Faq = () => {
    const [activeId, setActiveId] = useState(null);

    const toggleFAQ = (id) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">Frequently Asked Questions</h2>
                    <p className="max-w-lg mx-auto mt-6 text-base text-gray-600 font-pj">
                        Have questions? We've got answers. Check out some common queries below.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto mt-8 sm:mt-14 space-y-4">
                    {faqs.map(({ id, question, answer }) => (
                        <div key={id} className="relative">
                            <div className="absolute -inset-1">
                                <div className="w-full h-full mx-auto opacity-30 blur-lg rounded-xl" style={{
                                    background: 'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)'
                                }} />
                            </div>

                            <div className="relative overflow-hidden bg-white border border-gray-200 rounded-xl">
                                <h3>
                                    <button
                                        onClick={() => toggleFAQ(id)}
                                        className="flex items-center justify-between w-full px-6 py-5 text-xl font-bold text-left text-gray-900 sm:p-8 font-pj"
                                    >
                                        <span>{question}</span>
                                        <span className="ml-4">
                                            {activeId === id ? (
                                                <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                                </svg>
                                            ) : (
                                                <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                </svg>
                                            )}
                                        </span>
                                    </button>
                                </h3>

                                {activeId === id && (
                                    <div className="px-6 pb-6 sm:px-8 sm:pb-8">
                                        {answer}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
