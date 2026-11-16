import { Routes, Route } from 'react-router-dom';

// Pages
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Courses from '../pages/Courses/Courses';

// Layout Components
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default AppRoutes;