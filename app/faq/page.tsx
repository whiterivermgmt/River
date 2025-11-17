"use client";

import Container from '@/components/ui/Container';
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
   {
    question: "What services does White River Media offer?",
    answer: "We provide video production, photography, social media management, website design, and digital marketing solutions tailored to your business."
  },
  {
    question: "Do you create content for social media platforms?",
    answer: "Yes! We specialize in creating engaging content for Instagram, Facebook, TikTok, YouTube, and other social platforms."
  },
  {
    question: "Can you help with branding and logo design?",
    answer: "Absolutely. Our team can develop your visual identity, including logos, brand guides, and cohesive digital assets."
  },
  {
    question: "Do you offer website design and development?",
    answer: "Yes, we build custom websites optimized for performance, SEO, and mobile responsiveness."
  },
  {
    question: "What industries do you work with?",
    answer: "We work with businesses of all sizes, from local companies to larger enterprises, across multiple industries including hospitality, retail, and creative sectors."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope, but most projects are completed within 2–6 weeks. Complex campaigns may take longer."
  },
  {
    question: "Do you offer ongoing social media management?",
    answer: "Yes, we provide monthly packages that include content creation, posting schedules, analytics tracking, and engagement management."
  },
  {
    question: "Can you handle video production from start to finish?",
    answer: "Absolutely. We handle everything from concept development, scripting, filming, editing, and final delivery."
  },
  {
    question: "Do you provide photography services?",
    answer: "Yes, we offer professional photography for products, events, portraits, and promotional materials."
  },
  {
    question: "Can you help with advertising campaigns?",
    answer: "Yes, we design and manage paid advertising campaigns across social media and Google Ads to help you reach your audience effectively."
  },
  {
    question: "Do you provide analytics and performance reports?",
    answer: "Yes, we track performance metrics and provide detailed reports to ensure your campaigns are achieving your goals."
  },
  {
    question: "Do you offer consultation before starting a project?",
    answer: "Yes, we offer free consultations to understand your goals and determine the best strategy for your business."
  },
  {
    question: "Can you work with existing branding guidelines?",
    answer: "Absolutely. We can adapt our creative work to match your existing brand style and messaging."
  },
  {
    question: "How do I get started with White River Media?",
    answer: "Simply reach out via our contact form, email, or phone. We'll schedule a consultation to discuss your project."
  },
  {
    question: "Do you offer financing or payment plans?",
    answer: "Yes, we provide flexible payment options for larger projects to make working with us easier for your business."
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container className="mt-16 mb-32">
      <h2 className="text-3xl font-semibold mb-10 text-center">FAQs</h2>

      {/* Grid layout: 1 column on mobile, 2 columns on md+ screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-xl overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-xl"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-5 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              <span>{faq.question}</span>
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openIndex === index && (
              <div className="px-6 py-5 bg-white border-t text-gray-700 leading-relaxed transition-all duration-300">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default FAQPage;
