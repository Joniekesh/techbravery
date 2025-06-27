import { useState } from "react";
import "./faqs.scss";
import FaqsItem from "../faqsItem/FaqsItem";

const faqs = [
  {
    question: "What services does Techbravery provide?",
    answer:
      "Techbravery specializes in architecting, designing, developing, testing, deploying, and maintaining secure and responsive applications. Our services include web and mobile app development (iOS & Android), UI/UX design, project architecture, existing app optimization, startup incubation/partnership, and product marketing.",
  },
  {
    question: "Can I request only one of your services?",
    answer:
      "Yes, our services are modular. Whether you need just UI/UX design, Android app development, iOS app development, project architecture or startup incubation/partnership, we tailor solutions to your specific needs.",
  },
  {
    question: "What is the process for requesting a quote?",
    answer:
      "Simply fill out our quotation request form by selecting your desired technology stacks, budget range, and additional project details like your name, phone number, email, whether you already have a UI design and maybe sample images of what you want us to build. We’ll review your request, email you the quotation and schedule a meeting to further understand your goals, negotiate and hopefully kick off the development to professionally give you what you want.",
  },
  {
    question: "Do you provide complete startup solutions?",
    answer:
      "Yes. Our startup incubation services help you from ideation to launch, including project architecture, MVP development, scaling, marketing, and support. We’ve worked with startups across various industries.",
  },
  {
    question: "What platforms do you build applications for?",
    answer:
      "We develop secure, scalable applications for web, Android, and iOS platforms using modern frameworks and stacks best suited to each client's unique requirements.",
  },
  {
    question: "What is Tech Varsity?",
    answer:
      "Tech Varsity is Techbravery’s in-house web development training platform. We equip beginners and intermediates with practical skills in modern web technologies, preparing them for real-world development jobs.",
  },
  {
    question: "Can I view or use Techbravery's own software solutions?",
    answer:
      "Absolutely. We have several company-owned solutions used in real-world scenarios. You can explore and even adopt them as part of your business solutions depending on your needs.",
  },
  {
    question: "Do you offer long-term support and maintenance?",
    answer:
      "Yes, we offer ongoing support and maintenance packages to ensure your application stays secure, updated, and optimized as your business grows. Terms and Conditions apply.",
  },
  {
    question: "Do you handle UI/UX design separately?",
    answer:
      "Yes, our design team can work with you independently to create user interfaces and experiences that are visually appealing, intuitive, and aligned with your brand.",
  },
  {
    question: "What makes Techbravery different?",
    answer:
      "At Techbravery, we combine technical expertise with strategic insight. We don’t just build apps — we craft digital products that help businesses grow through quality code, scalable architecture, modern design, and performance-driven deployments.",
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="faqs">
      <h1 className="faqs-title">Frequently Asked Questions</h1>
      <div className="faqs-list">
        {faqs.map((faq, index) => {
          const open = activeIndex === index;

          return (
            <FaqsItem
              key={index}
              faq={faq}
              open={open}
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Faqs;
