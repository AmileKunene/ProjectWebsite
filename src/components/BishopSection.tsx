import bishopImage from '@/assets/bishop-portrait.jpg';

const BishopSection = () => {
  return (
    <section id="bishop" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Message from the Bishop
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Bishop Image */}
            <div className="text-center">
              <div className="relative inline-block">
                <img
                  src={bishopImage}
                  alt="Bishop of Mthatha"
                  className="w-80 h-80 object-cover rounded-full mx-auto shadow-lg"
                />
                <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-bold text-primary mb-2">
                  The Right Reverend Bishop
                </h3>
                <p className="text-muted-foreground text-lg">
                  Diocese of Mthatha
                </p>
              </div>
            </div>

            {/* Bishop's Message */}
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute top-0 left-0 text-6xl text-primary/20 font-serif">"</div>
                <div className="pl-12 pt-4">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Dear beloved community of faith, it is with great joy and thanksgiving that I welcome you to 
                    the Diocese of Mthatha. In this sacred fellowship, we are called to be instruments of God's 
                    love, peace, and justice in our world.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Our diocese stands as a testament to the transformative power of faith. Through our shared 
                    commitment to the Gospel, we work together to build communities of hope, healing, and 
                    reconciliation. Each parish, each ministry, each act of service contributes to the greater 
                    mission of Christ in our region.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    I encourage you to join us in this sacred journey. Whether you are seeking spiritual growth, 
                    community connection, or opportunities to serve, you will find a welcoming home in our diocese. 
                    Together, we can make a lasting difference in our communities and beyond.
                  </p>
                  
                  <p className="text-lg text-primary font-semibold">
                    May God's blessings be upon you and your families.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BishopSection;