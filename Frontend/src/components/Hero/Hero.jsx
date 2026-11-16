import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Hero.scss';

const Hero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ 
        defaults: { ease: 'cubic-bezier(0.85, 0, 0.15, 1)', duration: 1.5 } 
      });

      tl.from('.hero__word-inner', {
        y: '120%',
        rotation: 2,
        stagger: 0.05,
      })
      .fromTo('.hero__inline-media img', 
        { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.2 },
        { clipPath: 'inset(0% 0% 0% 0%)', scale: 1, duration: 1.5 },
        "-=1.2"
      )
      .fromTo('.hero__floating-img',
        { clipPath: 'inset(0% 100% 0% 0%)', x: -50 },
        { clipPath: 'inset(0% 0% 0% 0%)', x: 0, duration: 1.5 },
        "-=1.2"
      )
      .from('.hero__bottom-item', {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 1
      }, "-=1");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={sectionRef}>
      <div className="hero__container">
        
        {/* Floating Element: Aligned to container bounds on desktop */}
        <div className="hero__floating-img">
          <img 
            src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=600&auto=format&fit=crop" 
            alt="Mentorship" 
          />
        </div>

        {/* Main Kinetic Typography */}
        <div className="hero__main">
          <h1 className="hero__title">
            <div className="hero__line">
              <span className="hero__word"><span className="hero__word-inner">UNLEASH</span></span>
              <span className="hero__word"><span className="hero__word-inner">YOUR</span></span>
            </div>
            
            <div className="hero__line hero__line--center">
              <div className="hero__inline-media">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" 
                  alt="Coaching Session" 
                />
              </div>
              <span className="hero__word accent"><span className="hero__word-inner">TRUE</span></span>
            </div>
            
            <div className="hero__line hero__line--end">
              <span className="hero__word"><span className="hero__word-inner">POTENTIAL.</span></span>
            </div>
          </h1>
        </div>

        {/* Bottom Editorial Bar */}
        <div className="hero__bottom">
          <div className="hero__bottom-item hero__desc">
            <p>Elevating ambition into achievement. We provide elite coaching frameworks for leaders, creatives, and athletes to dominate their craft.</p>
          </div>
          
          <div className="hero__bottom-item hero__actions">
            <div className="hero__stats">
              <span className="stat-number">10k+</span>
              <span className="stat-label">Lives<br/>Changed</span>
            </div>
            <button className="hero__cta">Start Journey</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
