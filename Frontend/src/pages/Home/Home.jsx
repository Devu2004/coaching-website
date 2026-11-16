import Hero from '../../components/Hero/Hero';
import Marquee from '../../components/Marquee/Marquee';
import CourseShowcase from '../../components/CourseShowcase/CourseShowcase';
import Centers from '../../components/Centers/Centers';
import Achievers from '../../components/Achievers/Achievers';
import FAQ from '../../components/FAQ/FAQ';

const Home = () => {
  return (
    <div className="page-home">
      <Hero />
      <CourseShowcase />
      <Marquee />
      <Centers/>
      <Achievers/>
      <FAQ/>
    </div>
  );
};

export default Home;