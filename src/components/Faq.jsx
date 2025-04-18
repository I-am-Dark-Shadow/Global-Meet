import React, { useState } from 'react';

const faqs = [
    {
        id: 1,
        question: 'How do I start a video meeting?',
        answer: 'To start a video meeting, simply log in to your account and click the "Start Meeting" button on your dashboard. You can then invite others using the meeting link.',
    },
    {
        id: 2,
        question: 'Do participants need to download anything?',
        answer: 'No downloads needed! Participants can join directly through their browser using the meeting link you provide.',
    },
    {
        id: 3,
        question: 'Is there a time limit for meetings?',
        answer: 'Free plans have a 40-minute time limit per meeting. Upgrade to a premium plan for unlimited meeting duration.',
    },
    {
        id: 4,
        question: 'Can I record my meetings?',
        answer: 'Yes, you can record meetings by clicking the "Record" button during a session. Recordings will be saved to your account dashboard.',
    },
];

const Faq = () => {
    const [activeId, setActiveId] = useState(null);

    const toggleFAQ = (id) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <section id='FAQ' className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">Frequently Asked Questions</h2>
                    <p className="max-w-lg mx-auto mt-6 text-base text-gray-600 font-pj">
                        Everything you need to know about using our video conferencing platform.
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
