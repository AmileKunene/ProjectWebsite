const ParishesSection = () => {
  const parishes = [
    {
      name: "St. Matthew's Cathedral",
      location: "Mthatha Central",
      services: "Sunday: 7:30 AM, 9:30 AM | Wednesday: 6:00 PM",
      contact: "+27 47 531 0000"
    },
    {
      name: "St. John's Parish",
      location: "Mqanduli",
      services: "Sunday: 8:00 AM, 10:00 AM | Thursday: 6:30 PM",
      contact: "+27 47 575 0000"
    },
    {
      name: "Holy Trinity Church",
      location: "Libode",
      services: "Sunday: 7:00 AM, 9:00 AM | Friday: 6:00 PM",
      contact: "+27 47 555 0000"
    },
    {
      name: "St. Mary's Anglican Church",
      location: "Cofimvaba",
      services: "Sunday: 8:30 AM, 10:30 AM | Tuesday: 6:00 PM",
      contact: "+27 45 932 0000"
    },
    {
      name: "Christ Church",
      location: "Elliotdale",
      services: "Sunday: 8:00 AM, 10:00 AM | Wednesday: 5:30 PM",
      contact: "+27 47 548 0000"
    },
    {
      name: "St. Peter's Parish",
      location: "Tsolo",
      services: "Sunday: 7:30 AM, 9:30 AM | Thursday: 6:00 PM",
      contact: "+27 47 542 0000"
    }
  ];

  return (
    <section id="parishes" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Parishes
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The Diocese of Mthatha encompasses parishes throughout the Eastern Cape region. 
              Each parish serves its local community with worship services, pastoral care, and community outreach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {parishes.map((parish, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-primary mb-3">
                  {parish.name}
                </h3>
                
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-start">
                    <span className="font-semibold text-primary w-20 flex-shrink-0">Location:</span>
                    <span>{parish.location}</span>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="font-semibold text-primary w-20 flex-shrink-0">Services:</span>
                    <span className="text-sm leading-relaxed">{parish.services}</span>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="font-semibold text-primary w-20 flex-shrink-0">Contact:</span>
                    <span className="text-sm">{parish.contact}</span>
                  </div>
                </div>
                
                <button className="mt-4 w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-colors duration-300">
                  Visit Parish
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Can't find your local parish? Contact our diocesan office for assistance.
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300">
              Contact Diocese Office
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParishesSection;