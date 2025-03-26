import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import "../style/help.css";

const faqs = [
  {
    question: "I want to partner my restaurant with Food",
    answer: "I want to partner my restaurant with Food"
  },
  {
    question: "What are the mandatory documents needed to list my restaurant on Swiggy?",
    answer: "I want to partner my restaurant with Food"
  },
  {
    question: "I want to opt-out from Google reserve",
    answer: "I want to partner my restaurant with Food"
  },
  {
    question: "After I submit all documents, how long will it take for my restaurant to go live on Swiggy?",
    answer: "I want to partner my restaurant with Food"
  },
  {
    question: "What is this one time Onboarding fees? Do I have to pay for it while registering?",
    answer:"I want to partner my restaurant with Food"
  }
];

export const Help = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="help-container">
      <h1 className="help-title">Help & Support</h1>
      <p className="help-subtitle">Let's take a step ahead and help you better.</p>

      <div className="help-section">
        <h2>Partner Onboarding</h2>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question}
                {openIndex === index ? <ChevronUp /> : <ChevronDown />}
              </button>
              {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
