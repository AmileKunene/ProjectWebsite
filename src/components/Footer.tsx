const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Diocese Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Diocese of Mthatha</h3>
              <p className="mb-4 leading-relaxed">
                Serving the Eastern Cape region with faith, hope, and love. 
                Building communities of worship, fellowship, and service.
              </p>
              <p className="text-sm">
                © 2024 Diocese of Mthatha. All rights reserved.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="hover:text-accent transition-colors duration-200">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#bishop" className="hover:text-accent transition-colors duration-200">
                    Bishop's Message
                  </a>
                </li>
                <li>
                  <a href="#parishes" className="hover:text-accent transition-colors duration-200">
                    Find a Parish
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="hover:text-accent transition-colors duration-200">
                    Photo Gallery
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-accent transition-colors duration-200">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Service Times */}
            <div>
              <h3 className="text-xl font-bold mb-4">Service Times</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold">Sunday Services</h4>
                  <p className="text-sm">7:30 AM & 9:30 AM</p>
                </div>
                <div>
                  <h4 className="font-semibold">Wednesday Evening</h4>
                  <p className="text-sm">6:00 PM</p>
                </div>
                <div>
                  <h4 className="font-semibold">Bible Study</h4>
                  <p className="text-sm">Thursday 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-sm">
              Diocese of Mthatha | 123 Cathedral Street, Mthatha 5100 | +27 47 531 0123
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;