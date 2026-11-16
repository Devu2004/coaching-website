import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import './Navbar.scss';

// Added the 4th section here
const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Courses', path: '/courses' },
  { title: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  // Smart Navbar: Hide on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > 100 && latest > previous) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.header
      className="navbar"
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={isHidden && !isOpen ? 'hidden' : 'visible'}
      transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }} 
    >
      <div className="navbar__container">
        {/* Brand / Logo */}
        <Link to="/" className="navbar__logo" onClick={() => setIsOpen(false)}>
          Elevate<span>.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar__desktop">
          {navLinks.map((link, index) => (
            <Link key={index} to={link.path} className="navbar__link">
              {link.title}
            </Link>
          ))}
          <button className="navbar__cta">Join Now</button>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="navbar__toggle" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className={`hamburger ${isOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="navbar__mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="navbar__mobile-links">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link 
                    to={link.path} 
                    className="navbar__mobile-link"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
              <motion.button 
                className="navbar__mobile-cta"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Join Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;