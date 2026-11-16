import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './CourseShowcase.scss';

gsap.registerPlugin(ScrollTrigger);

const courses = [
  {
    id: 1,
    title: 'IIT-JEE Advanced',
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1629306262232-1f854b4b0b13?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D', // Complex physics/math board
    description: 'Elite curriculum and rigorous problem-solving frameworks to secure top AIRs in JEE.'
  },
  {
    id: 2,
    title: 'NEET Apex Batch',
    category: 'Medical',
    image: 'https://images.unsplash.com/photo-1561089489-f13d5e730d72?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D', // Medical/Biology focus
    description: 'Comprehensive biology, physics, and chemistry modules for guaranteed selection in top GMCs.'
  },
  {
    id: 3,
    title: 'UPSC Civil Services',
    category: 'Bureaucracy',
    image: 'https://images.unsplash.com/photo-1781092176313-8b8b1e9927c7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D', // Intense study desk with books
    description: 'Strategic syllabus coverage, answer writing, and interview prep for future IAS officers.'
  },
  {
    id: 4,
    title: 'Olympiad Foundation',
    category: 'Class 9th & 10th',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop', // Focused student setup
    description: 'Build an unshakable academic base for NTSE, Olympiads, and future competitive success.'
  }
];

const CourseShowcase = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Animate Header Reveal
      gsap.from('.courses__header-elem', {
        scrollTrigger: {
          trigger: '.courses__header',
          start: 'top 85%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out'
      });

      // 2. Animate Grid Cards Staggering in
      gsap.from('.course-card', {
        scrollTrigger: {
          trigger: '.courses__grid',
          start: 'top 80%',
        },
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out'
      });

      // 3. Animate the Bottom CTA
      gsap.from('.courses__cta-wrapper', {
        scrollTrigger: {
          trigger: '.courses__footer',
          start: 'top 90%',
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="courses" ref={sectionRef}>
      <div className="courses__container">
        
        {/* Section Header */}
        <div className="courses__header">
          <h2 className="courses__title courses__header-elem">
            Signature <span className="accent">Programs.</span>
          </h2>
          <p className="courses__subtitle courses__header-elem">
            Curated frameworks designed to shatter your limits and elevate your baseline.
          </p>
        </div>

        {/* 4-Item Course Grid */}
        <div className="courses__grid">
          {courses.map((course) => (
            <Link to={`/courses`} key={course.id} className="course-card">
              <div className="course-card__image-wrapper">
                <img src={course.image} alt={course.title} className="course-card__image" />
                <div className="course-card__category">{course.category}</div>
              </div>
              <div className="course-card__content">
                <h3 className="course-card__title">{course.title}</h3>
                <p className="course-card__desc">{course.description}</p>
                <div className="course-card__explore">
                  <span>Explore Program</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA to main courses page */}
        <div className="courses__footer">
          <div className="courses__cta-wrapper">
            <Link to="/courses" className="courses__cta">
              View All Programs
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CourseShowcase;