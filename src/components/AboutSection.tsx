const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              About the Diocese of Mthatha
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Diocese of Mthatha serves as a beacon of faith and hope in the Eastern Cape region of South Africa. 
                Established with a mission to spread the Gospel and serve our communities, we are committed to spiritual 
                growth, social justice, and community development.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our diocese encompasses numerous parishes across the region, each serving their local communities with 
                dedication and love. We believe in the power of faith to transform lives and build stronger, more 
                compassionate communities.
              </p>

              <div className="pt-6">
                <h3 className="text-xl font-semibold text-primary mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To proclaim the Gospel of Jesus Christ, nurture spiritual growth, and serve our communities with 
                  love, compassion, and justice, while promoting unity and understanding among all people.
                </p>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-muted-foreground">Parishes</div>
              </div>
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Clergy</div>
              </div>
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-primary mb-2">15k+</div>
                <div className="text-muted-foreground">Members</div>
              </div>
              <div className="text-center bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;