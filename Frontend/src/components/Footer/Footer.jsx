import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Footer.scss';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Staggered reveal for link columns
      gsap.from('.footer__col', {
        scrollTrigger: {
          trigger: '.footer',
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      });

      // 2. Massive text sweep up
      gsap.from('.footer__massive-text span', {
        scrollTrigger: {
          trigger: '.footer__massive-text',
          start: 'top 90%',
        },
        y: '100%',
        duration: 1.2,
        ease: 'cubic-bezier(0.76, 0, 0.24, 1)'
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer__container">
        
        {/* Main Links Grid */}
        <div className="footer__top">
          
          <div className="footer__col brand-col">
            <h3 className="footer__brand">Elevate<span>.</span></h3>
            <p className="footer__desc">
              India's premier coaching ecosystem for IIT-JEE, NEET, and UPSC. We don't just teach; we engineer top ranks.
            </p>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Programs</h4>
            <ul className="footer__list">
              <li><Link to="/courses">IIT-JEE Advanced</Link></li>
              <li><Link to="/courses">NEET Apex</Link></li>
              <li><Link to="/courses">UPSC Civil Services</Link></li>
              <li><Link to="/courses">Olympiad Foundation</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Campuses</h4>
            <ul className="footer__list">
              <li><Link to="#">Kota, Rajasthan</Link></li>
              <li><Link to="#">New Delhi, NCR</Link></li>
              <li><Link to="#">Hyderabad, TS</Link></li>
              <li><Link to="#">Lucknow, UP</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Connect</h4>
            <ul className="footer__list">
              <li><a href="#" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="#" target="_blank" rel="noreferrer">YouTube</a></li>
              <li><a href="#" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

        </div>

        {/* Massive Typography */}
        <div className="footer__middle">
          <h1 className="footer__massive-text">
            <span>ELEVATE.</span>
          </h1>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} Elevate Institute. All rights reserved.
          </p>
          
          <div className="footer__legal">
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Service</Link>
          </div>

          <button className="footer__back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <span>Back to Top</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 19V5M5 12l7-7 7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;