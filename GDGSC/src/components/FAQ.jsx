import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Is it free to participate in this hackathon?",
      answer: "Yes, you can register and participate for free."
    },
    {
      question: "What is the eligibility criteria for participation?",
      answer: "The hackathon is open to all undergraduate and graduate students from recognized institutions. Participants must be at least 18 years old."
    },
    {
      question: "Can students from other colleges participate?",
      answer: "Absolutely! We encourage participation from students across different colleges and universities."
    },
    {
      question: "Are non-USAR students allowed to attend on-campus events?",
      answer: "Yes, non-USAR students can attend on-campus events with valid student ID and prior registration."
    },
    {
      question: "Can we form inter-college teams?",
      answer: "Yes, you're welcome to form teams with participants from different colleges."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 bg-black -z-1">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 blur-[160px] opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-700 blur-[180px] opacity-40"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-purple-400 blur-[140px] opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/5 w-48 h-48 bg-purple-600 blur-[120px] opacity-35"></div>
      </div>

      {/* Separator line */}
      <div className="mt-12 mb-8 w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>

      {/* FAQ Content */}
      <div className="relative z-10 max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-8 text-center drop-shadow-[0_0_8px_rgba(192,132,252,0.6)]">
          Frequently Asked Questions (FAQ's)
        </h1>

        <div className="flex flex-col items-center space-y-3 w-full">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="group bg-white/10 backdrop-blur-lg rounded-lg shadow-md overflow-hidden transition-all duration-300 w-full border border-white/15 hover:border-purple-300/50"
              style={{ maxWidth: '500px' }}
            >
              <button
                className="w-full flex justify-between items-center p-3 text-left hover:bg-white/15 transition-colors duration-200 cursor-pointer"
                onClick={() => toggleFAQ(index)}
                style={{ minHeight: '40px' }}
              >
                <div className="flex items-center">
                  <svg 
                    className="w-5 h-5 mr-3 text-purple-300 group-hover:text-purple-200 transition-colors" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                  <h3 className="text-base font-medium text-white pr-2 flex-1 group-hover:text-purple-100 transition-colors">
                    {faq.question}
                  </h3>
                </div>
                <span className="text-white/90 text-lg transition-transform duration-200 group-hover:text-purple-200">
                  {activeIndex === index ? (
                    <FiChevronUp className="transform group-hover:scale-110" />
                  ) : (
                    <FiChevronDown className="transform group-hover:scale-110" />
                  )}
                </span>
              </button>
              
              {activeIndex === index && (
                <div 
                  className="px-4 pb-4 pt-2 bg-purple-900/30 border-t border-purple-400/20 text-purple-100 text-sm"
                  style={{ maxHeight: '200px' }}
                >
                  <p className="leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Bottom separator line */}
        <div className="mt-12 mb-8 w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
      </div>
    </div>
  );
};

export default FAQ;