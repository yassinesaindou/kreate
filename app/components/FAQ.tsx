import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import React from "react";

const faqs = [
  {
    question: "How long does it take to build a website or app?",
    answer:
      "The timeline depends on the size and complexity of the project. A simple website can take between 3 to 6 weeks, while more complex websites or mobile apps may take 2 to 4 months. After understanding your goals and requirements, we’ll provide a detailed project plan with clear milestones and timelines to keep everything on track.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We work across a wide range of industries including e-commerce, real estate, education, health care, and startups. Our flexible process allows us to tailor solutions to the unique needs of each industry.",
  },
  {
    question: "Can you redesign my existing website or app?",
    answer:
      "Yes, we can! Whether it’s a full redesign or just UI/UX improvements, we’ll assess your current product and work with you to modernize and enhance its design and functionality.",
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer:
      "Absolutely. We provide ongoing support, updates, bug fixes, and feature enhancements to ensure your product stays secure, fast, and aligned with evolving user needs.",
  },
];

export default function FAQ() {
  return (
    <section className="text-center my-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
        Frequently Asked Questions
      </h2>
      <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
        Got questions? We’ve got answers. Here’s what you need to know before
        working with us.
      </p>

      <Accordion
        type="single"
        className="mt-10 w-full max-w-4xl mx-auto"
        collapsible>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-base sm:text-lg text-gray-700 font-medium sm:font-semibold text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm sm:text-base text-left text-gray-600">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
