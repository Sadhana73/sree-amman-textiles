import React, { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do you provide tailoring services in Guduvanchery?",
      answer: "Yes, Sree Amman Textiles & Tailoring provides complete tailoring and textile services in Guduvanchery for men, women, and families."
    },
    {
      question: "What types of tailoring services do you offer?",
      answer: "We offer blouse stitching, alterations, uniform stitching, and custom tailoring services with perfect fitting and quality finishing."
    },
    {
      question: "Do you stitch school and office uniforms?",
      answer: "Yes, we provide school and office uniform stitching services in and around Guduvanchery."
    },
    {
      question: "How can I contact Sree Amman Textiles & Tailoring?",
      answer: "You can contact us through phone call or WhatsApp to place your tailoring orders."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Frequently Asked Questions
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-6 cursor-pointer transition-shadow hover:shadow-lg"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-start gap-4">
              <h3 className="text-lg font-semibold text-gray-800 flex-1">
                {faq.question}
              </h3>
              <span className="text-blue-600 text-2xl font-bold flex-shrink-0">
                {openIndex === index ? '-' : '+'}
              </span>
            </div>
            
            {openIndex === index && (
              <p className="text-gray-600 leading-relaxed mt-4">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <a
          href="#"
          className="inline-block text-blue-600 font-medium hover:text-blue-700 transition-colors"
        >
          View our full tailoring services in Guduvanchery →
        </a>
      </div>
    </div>
  );
}
