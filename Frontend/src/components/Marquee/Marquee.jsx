import './Marquee.scss';

const Marquee = () => {
  return (
    <section className="marquee">
      <div className="marquee__inner">
        <div className="marquee__part">
          ELEVATE YOUR MINDSET <span className="dot">•</span> 
          MASTER YOUR CRAFT <span className="dot">•</span> 
          DOMINATE YOUR FIELD <span className="dot">•</span> 
        </div>
        {/* We duplicate the exact same content for the seamless loop */}
        <div className="marquee__part">
          ELEVATE YOUR MINDSET <span className="dot">•</span> 
          MASTER YOUR CRAFT <span className="dot">•</span> 
          DOMINATE YOUR FIELD <span className="dot">•</span> 
        </div>
      </div>
    </section>
  );
};

export default Marquee;