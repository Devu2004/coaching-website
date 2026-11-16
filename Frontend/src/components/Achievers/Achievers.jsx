import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Achievers.scss';

gsap.registerPlugin(ScrollTrigger);

const achievers = [
  {
    id: 1,
    name: 'Aarav Sharma',
    rank: 'AIR 12 • IIT-JEE Advanced',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop',
    quote: 'The rigorous testing and elite peer group pushed me beyond my perceived limits. The frameworks here don’t just teach you formulas; they teach you how to think under extreme pressure.'
  },
  {
    id: 2,
    name: 'Priya Patel',
    rank: 'AIR 8 • NEET UG',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    quote: 'From day one, the focus was on absolute conceptual clarity. The mentorship helped me eliminate negative marking and build a completely bulletproof exam temperament.'
  },
  {
    id: 3,
    name: 'Rohan Verma',
    rank: 'IAS • UPSC Civil Services',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop',
    quote: 'Preparing for UPSC is an ocean, but the faculty here provided the exact compass I needed. Their answer-writing modules were the decisive factor in my final selection.'
  }
];

const Achievers = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from('.achievers__header-elem', {
        scrollTrigger: {
          trigger: '.achievers__header',
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out'
      });

      // Card Stagger Animation
      gsap.from('.achiever-card', {
        scrollTrigger: {
          trigger: '.achievers__grid',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="achievers" ref={sectionRef}>
      <div className="achievers__container">
        
        <div className="achievers__header">
          <h2 className="achievers__title achievers__header-elem">
            Hear From <span className="accent">The Best.</span>
          </h2>
          <p className="achievers__desc achievers__header-elem">
            Numbers don't lie. Meet the minds who trusted our systems and completely dominated their respective fields.
          </p>
        </div>

        <div className="achievers__grid">
          {achievers.map((achiever) => (
            <div className="achiever-card" key={achiever.id}>
              {/* Quote Icon */}
              <div className="achiever-card__quote-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              {/* 3-Line Paragraph */}
              <p className="achiever-card__text">
                "{achiever.quote}"
              </p>
              
              {/* Profile Block */}
              <div className="achiever-card__profile">
                <img src={achiever.image} alt={achiever.name} className="achiever-card__image" />
                <div className="achiever-card__meta">
                  <h4 className="achiever-card__name">{achiever.name}</h4>
                  <span className="achiever-card__rank">{achiever.rank}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Achievers;