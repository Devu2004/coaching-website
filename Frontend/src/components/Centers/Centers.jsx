import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Centers.scss';

gsap.registerPlugin(ScrollTrigger);

const campuses = [
  {
    id: 1,
    city: 'Kota',
    state: 'Rajasthan',
    type: 'Flagship IIT/NEET Campus',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    city: 'New Delhi',
    state: 'Delhi NCR',
    type: 'UPSC & Civil Services Hub',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    city: 'Hyderabad',
    state: 'Telangana',
    type: 'Advanced Tech & JEE Node',
    image: 'https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    type: 'Regional Foundation Center',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop'
  }
];

const Centers = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header text reveal
      gsap.from('.centers__header-elem', {
        scrollTrigger: {
          trigger: '.centers__header',
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out'
      });

      // Cards staggered reveal
      gsap.from('.center-card', {
        scrollTrigger: {
          trigger: '.centers__grid',
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power4.out'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="centers" ref={sectionRef}>
      <div className="centers__container">
        
        {/* Simplified Header */}
        <div className="centers__header">
          <h2 className="centers__title centers__header-elem">
            Elite <span className="accent">Campuses.</span>
          </h2>
          <p className="centers__desc centers__header-elem">
            State-of-the-art infrastructure designed purely for extreme focus and competitive dominance. 
            Find your nearest battlefield.
          </p>
        </div>

        {/* Pure Grid Layout */}
        <div className="centers__grid">
          {campuses.map((campus) => (
            <div className="center-card" key={campus.id}>
              {/* Image Background */}
              <div className="center-card__bg">
                <img src={campus.image} alt={`${campus.city} Campus`} loading="lazy" />
                <div className="center-card__overlay"></div>
              </div>
              
              {/* Content overlay */}
              <div className="center-card__content">
                <div className="center-card__meta">
                  <span className="center-card__state">{campus.state}</span>
                  <h3 className="center-card__city">{campus.city}</h3>
                </div>
                
                <div className="center-card__footer">
                  <p className="center-card__type">{campus.type}</p>
                  <div className="center-card__arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Centers;