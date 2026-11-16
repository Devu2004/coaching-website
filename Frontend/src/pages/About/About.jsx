import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.scss';

gsap.registerPlugin(ScrollTrigger);

const ethosString = "Success in IIT-JEE, NEET, and UPSC is never an accident. It is the brutal byproduct of absolute discipline, relentless execution, and an ecosystem that violently refuses to accept mediocrity. We don't just teach the syllabus; we forge unbreakable exam temperaments. We push boundaries until our students shatter them.";
const ethosWords = ethosString.split(" ");

const teamMembers = [
  {
    id: 1,
    name: "Dr. Vikram Singh",
    role: "Founder & Head of Physics",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Dr. Ananya Rao",
    role: "Chief Academic Officer, NEET",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Arjun Mehta",
    role: "Director, UPSC Strategy",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop"
  }
];

const About = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // 1. Hero Entrance
      const tl = gsap.timeline({ defaults: { ease: 'expo.out', duration: 2 } });
      tl.from('.about-hero__char', { 
          y: '120%', 
          stagger: 0.05, 
          duration: 1.5 
        })
        .from('.about-hero__media', { 
          scale: 0.8, 
          opacity: 0, 
          duration: 2 
        }, "-=1.5");

      // 2. Hero Scroll Scaling (Image grows as you scroll down)
      gsap.to('.about-hero__media img', {
        scrollTrigger: {
          trigger: '.about-hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1 // Smooth scrubbing
        },
        scale: 1.2,
        y: '15%'
      });

      // 3. Ethos Word-by-Word Scroll Reveal
      gsap.fromTo('.ethos-word', 
        { opacity: 0.1 },
        {
          opacity: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.about-ethos',
            start: 'top 70%',
            end: 'bottom 80%',
            scrub: 1
          }
        }
      );

      // 4. Stats Border & Number Reveal
      gsap.from('.stat-box', {
        scrollTrigger: {
          trigger: '.about-stats',
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out'
      });

      // 5. Team List Reveal
      gsap.from('.team-row', {
        scrollTrigger: {
          trigger: '.about-team',
          start: 'top 80%',
        },
        x: -40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out'
      });

    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="page-about" ref={pageRef}>
      
      {/* 1. CINEMATIC HERO */}
      <section className="about-hero">
        <div className="about-hero__container">
          <h1 className="about-hero__title">
            <div className="about-hero__line">
              {['W','H','O','W','E','A','R','E'].map((char, i) => (
                <span key={i} className="about-hero__char-wrap">
                  <span className="about-hero__char">{char}</span>
                </span>
              ))}
            </div>
          </h1>
          <div className="about-hero__media">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop" 
              alt="Elite Campus" 
            />
          </div>
        </div>
      </section>

      {/* 2. THE ETHOS (Scroll Reveal) */}
      <section className="about-ethos">
        <div className="about-ethos__container">
          <h2 className="about-ethos__label">Our DNA</h2>
          <p className="about-ethos__text">
            {ethosWords.map((word, index) => (
              <span key={index} className="ethos-word">{word} </span>
            ))}
          </p>
        </div>
      </section>

      {/* 3. METRICS (Bordered Grid) */}
      <section className="about-stats">
        <div className="about-stats__container">
          <div className="stat-box">
            <h3 className="stat-number">15+</h3>
            <p className="stat-label">Years of Dominance</p>
          </div>
          <div className="stat-box">
            <h3 className="stat-number">50+</h3>
            <p className="stat-label">Top 100 AIRs</p>
          </div>
          <div className="stat-box">
            <h3 className="stat-number">10k+</h3>
            <p className="stat-label">Total Selections</p>
          </div>
        </div>
      </section>

      {/* 4. THE ARCHITECTS (Sleek List) */}
      <section className="about-team">
        <div className="about-team__container">
          <div className="about-team__header">
            <h2 className="about-team__title">The <span className="accent">Architects.</span></h2>
          </div>
          
          <div className="about-team__list">
            {teamMembers.map(member => (
              <div className="team-row" key={member.id}>
                <div className="team-row__image-wrapper">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-row__content">
                  <h4 className="team-row__name">{member.name}</h4>
                  <p className="team-row__role">{member.role}</p>
                </div>
                <div className="team-row__arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;