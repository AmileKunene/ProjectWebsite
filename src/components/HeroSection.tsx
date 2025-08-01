import heroImage from '@/assets/church-hero.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Diocese of Mthatha"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Welcome to the
          <span className="block text-5xl md:text-7xl mt-2">Diocese of Mthatha</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          A community of faith, hope, and love serving the Eastern Cape region with dedication and compassion.
        </p>
        <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
          <button className="block w-full md:w-auto bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-accent transition-colors duration-300">
            Join Our Community
          </button>
          <button className="block w-full md:w-auto border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-300">
            Service Times
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;