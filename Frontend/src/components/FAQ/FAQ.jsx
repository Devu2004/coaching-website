import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './FAQ.scss';

gsap.registerPlugin(ScrollTrigger);

const faqData = [
  {
    question: "What is the admission process for the Apex Batches?",
    answer: "Admission to our IIT-JEE and NEET Apex batches is strictly through our National Level Scholarship & Admission Test (NLSAT). We select only the top 1% of applicants to maintain an elite peer group."
  },
  {
    question: "Do you provide hostel and accommodation facilities?",
    answer: "Yes, our flagship campuses in Kota and Delhi offer premium, fully air-conditioned hostels with high-security, hygienic mess facilities, and in-house doubt-solving counters open till 2 AM."
  },
  {
    question: "How are the doubt-solving sessions structured?",
    answer: "We operate on a zero-doubt policy. Apart from regular classes, students have access to 1-on-1 mentorship desks and a 24/7 dedicated app where expert faculty resolve queries within 15 minutes."
  },
  {
    question: "Are there scholarships available for meritorious students?",
    answer: "Absolutely. Students securing top ranks in our entrance test or those with proven track records in Olympiads/NTSE can avail up to 100% scholarship on tuition and accommodation."
  },
  {
    question: "How do you handle the psychological pressure of these exams?",
    answer: "Mental toughness is built into our curriculum. We have in-house performance psychologists, bi-weekly stress management workshops, and dedicated mentors to ensure students remain focused and burnout-free."
  }
];

const FAQItem = ({ faq, index, activeIndex, setActiveIndex }) => {
  const isActive = activeIndex === index;

  return (
    <div className="faq__item faq__anim-item" onClick={() => setActiveIndex(isActive ? null : index)}>
      <div className="faq__question-wrapper">
        <h3 className="faq__question">{faq.question}</h3>
        <div className={`faq__icon ${isActive ? 'active' : ''}`}>
          <span></span>
          <span></span>
        </div>
      </div>
      
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="faq__answer-wrapper"
          >
            <p className="faq__answer">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0); // First item open by default
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from('.faq__header-elem', {
        scrollTrigger: {
          trigger: '.faq',
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out'
      });

      // Accordion List Animation
      gsap.from('.faq__anim-item', {
        scrollTrigger: {
          trigger: '.faq__list',
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="faq" ref={sectionRef}>
      <div className="faq__container">
        
        {/* Left Column: Sticky Header */}
        <div className="faq__left">
          <div className="faq__header-sticky">
            <h2 className="faq__title faq__header-elem">
              Core <span className="accent">Queries.</span>
            </h2>
            <p className="faq__desc faq__header-elem">
              Everything you need to know about our ecosystem, infrastructure, and elite methodology.
            </p>
          </div>
        </div>

        {/* Right Column: Accordion List */}
        <div className="faq__right">
          <div className="faq__list">
            {faqData.map((faq, index) => (
              <FAQItem 
                key={index} 
                faq={faq} 
                index={index} 
                activeIndex={activeIndex} 
                setActiveIndex={setActiveIndex} 
              />
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default FAQ;