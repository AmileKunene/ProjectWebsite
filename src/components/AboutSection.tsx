const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              About the Diocese
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Content */}
            <div className="space-y-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                The Diocese of Mthatha has a long-standing tradition of faith and community service. 
                Our mission is to guide, support, and inspire our parishioners through worship, education, 
                and outreach programs, strengthening the bond between our churches and the community.
              </p>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-4">Background</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Prior to 1922, the territory formed part of the Natal Vicariate and from 1922 to 1930 part of the Mariannhill Vicariate under Bishop Adalberto Fleischer. 
                  On 31 May 1930 it was made a Prefecture and in April 1937 a Vicariate. 
                  The ecclesiastical territory of the Diocese of Mthatha (Umtata) comprises the following civil districts: Mthatha, 
                  Libode, Ngqeleni, Port St John's (Mzimvubu), Mqanduli, Elliotdale (Xhora), Cala, Ngcobo (Engcobo), Tsolo, Qumbu, 
                  Mount Fletcher, part of Matatiele with the Kenera river as boundary Elliot and Maclear (Nqanqaru), Eastern Cape.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center">
              <div className="bg-card rounded-lg shadow-md overflow-hidden max-w-md">
                <img 
                  src="/images/520837633_1143835584443620_6001930786428496459_n.jpg" 
                  alt="Diocese of Mthatha" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;