import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Courses.scss';

gsap.registerPlugin(ScrollTrigger);

const allCourses = [
  {
    id: 1,
    title: 'IIT-JEE Advanced Apex',
    category: 'Engineering',
    duration: '2 Years',
    mode: 'Offline / Hybrid',
    image: 'https://images.unsplash.com/photo-1629306262232-1f854b4b0b13?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    description: 'An uncompromising 2-year program covering physics, chemistry, and mathematics with extreme rigor for guaranteed AIR ranks.'
  },
  {
    id: 2,
    title: 'NEET Zenith Batch',
    category: 'Medical',
    duration: '1 Year (Dropper)',
    mode: 'Offline',
    image: 'https://images.unsplash.com/photo-1561089489-f13d5e730d72?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    description: 'A ruthless, focused curriculum for repeaters determined to crack top Government Medical Colleges.'
  },
  {
    id: 3,
    title: 'UPSC IAS Foundation',
    category: 'Civil Services',
    duration: '3 Years',
    mode: 'Hybrid',
    image: 'https://images.unsplash.com/photo-1781092176313-8b8b1e9927c7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    description: 'Build your administrative acumen from the ground up with integrated NCERT, current affairs, and answer writing.'
  },
  {
    id: 4,
    title: 'NTSE & Olympiad Base',
    category: 'Foundation',
    duration: '1 Year',
    mode: 'Offline',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop',
    description: 'Develop absolute cognitive dominance in classes 9th and 10th to prepare for future competitive supremacy.'
  },
  {
    id: 5,
    title: 'JEE Mains Crash Course',
    category: 'Engineering',
    duration: '4 Months',
    mode: 'Online',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop',
    description: 'High-speed, high-impact revision modules designed to maximize your percentile in the final stretch.'
  }
];

const categories = ['All', 'Engineering', 'Medical', 'Civil Services', 'Foundation'];

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const pageRef = useRef(null);
  const gridRef = useRef(null);

  // Filter courses based on category
  const filteredCourses = activeCategory === 'All' 
    ? allCourses 
    : allCourses.filter(course => course.category === activeCategory);

  // Initial Page Load Animation
  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      gsap.from('.courses-hero__title', { y: 50, opacity: 0, duration: 1, ease: 'power4.out' });
      gsap.from('.courses-hero__desc', { y: 30, opacity: 0, duration: 1, delay: 0.2, ease: 'power3.out' });
      gsap.from('.filter-btn', { y: 20, opacity: 0, duration: 0.8, stagger: 0.1, delay: 0.4, ease: 'power3.out' });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  // Animate grid every time the filter changes
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.catalog-card', 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out', overwrite: true }
      );
    }, gridRef);
    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <div className="page-courses" ref={pageRef}>
      
      {/* HERO SECTION */}
      <section className="courses-hero">
        <div className="courses-hero__container">
          <h1 className="courses-hero__title">
            Choose Your <span className="accent">Battlefield.</span>
          </h1>
          <p className="courses-hero__desc">
            Elite academic frameworks engineered for maximum output. Select your domain and begin your ascension.
          </p>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="courses-filter">
        <div className="courses-filter__container">
          <div className="courses-filter__scroll">
            {categories.map((cat, idx) => (
              <button 
                key={idx}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES CATALOG */}
      <section className="courses-catalog">
        <div className="courses-catalog__container" ref={gridRef}>
          {filteredCourses.length > 0 ? (
            <div className="courses-catalog__grid">
              {filteredCourses.map((course) => (
                <div className="catalog-card" key={course.id}>
                  
                  <div className="catalog-card__media">
                    <img src={course.image} alt={course.title} />
                    <span className="catalog-card__badge">{course.category}</span>
                  </div>
                  
                  <div className="catalog-card__content">
                    <div className="catalog-card__header">
                      <h3 className="catalog-card__title">{course.title}</h3>
                      <p className="catalog-card__desc">{course.description}</p>
                    </div>
                    
                    <div className="catalog-card__meta">
                      <div className="meta-item">
                        <span className="meta-label">Duration</span>
                        <span className="meta-val">{course.duration}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Mode</span>
                        <span className="meta-val">{course.mode}</span>
                      </div>
                    </div>
                    
                    <button className="catalog-card__cta">
                      Apply Now
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>

                </div>
              ))}
            </div>
          ) : (
            <div className="courses-catalog__empty">
              <h3>No programs found for this category.</h3>
            </div>
          )}
        </div>
      </section>

    </div>
  );
};

export default Courses;