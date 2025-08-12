import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Phone, Mail, Search } from 'lucide-react';
import { parishData, createParishSlug } from '@/data/parishes';

const ParishesSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeRegion, setActiveRegion] = useState('all');

  // parishData is imported from '@/data/parishes'
  // Get all parishes for search
  const allParishes = Object.entries(parishData).flatMap(([region, parishes]) => 
    parishes.map(parish => ({ ...parish, region }))
  );

  // Filter parishes based on search term and active region
  const filteredParishes = allParishes.filter(parish => {
    const matchesSearch = parish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         parish.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = activeRegion === 'all' || parish.region === activeRegion;
    return matchesSearch && matchesRegion;
  });

  const regions = Object.keys(parishData);

  return (
    <section id="parishes" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Parishes
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              The Diocese of Mthatha encompasses parishes throughout the Eastern Cape region. 
              Each parish serves its local community with worship services, pastoral care, and community outreach.
            </p>
          </div>

          {/* Search and Filter Controls */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search parishes by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Tabs value={activeRegion} onValueChange={setActiveRegion} className="w-full">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-5 mb-8">
                <TabsTrigger value="all" className="text-xs">All Regions</TabsTrigger>
                {regions.slice(0, 4).map((region) => (
                  <TabsTrigger key={region} value={region} className="text-xs">
                    {region.split(' ')[0]}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="all">
                <div className="grid gap-8">
                  {regions.map((region) => {
                    const regionParishes = parishData[region].filter(parish =>
                      parish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      parish.location.toLowerCase().includes(searchTerm.toLowerCase())
                    );
                    
                    if (regionParishes.length === 0) return null;

                    return (
                      <div key={region} className="space-y-4">
                        <h3 className="text-xl font-semibold text-primary border-b border-primary/20 pb-2">
                          {region}
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {regionParishes.map((parish, index) => (
                            <ParishCard key={`${region}-${index}`} parish={parish} region={region} />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>

              {regions.map((region) => (
                <TabsContent key={region} value={region}>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {parishData[region]
                      .filter(parish =>
                        parish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        parish.location.toLowerCase().includes(searchTerm.toLowerCase())
                      )
                      .map((parish, index) => (
                        <ParishCard key={`${region}-filtered-${index}`} parish={parish} region={region} />
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* No Results Message */}
          {filteredParishes.length === 0 && searchTerm && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No parishes found matching "{searchTerm}". Try a different search term.
              </p>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center mt-12 bg-card rounded-lg p-8 shadow-sm">
            <p className="text-muted-foreground mb-6 text-lg">
              Can't find your local parish or need assistance?
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Contact Diocese Office
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Parish Card Component
const ParishCard = ({ parish, region }: { parish: any; region: string }) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg text-primary group-hover:text-primary/80 transition-colors">
          {parish.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-start gap-2">
          <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
          <span className="text-sm text-muted-foreground leading-relaxed">
            {parish.location}
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          {parish.type === 'email' ? (
            <Mail className="h-4 w-4 text-primary flex-shrink-0" />
          ) : (
            <Phone className="h-4 w-4 text-primary flex-shrink-0" />
          )}
          <span className="text-sm text-muted-foreground">
            {parish.contact}
          </span>
        </div>

        {parish.telephone && (
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-primary flex-shrink-0" />
            <span className="text-sm text-muted-foreground">
              {parish.telephone}
            </span>
          </div>
        )}
        
        <Link to={`/parishes/${createParishSlug(parish.name, region)}`} aria-label={`Visit ${parish.name} details`}>
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
          >
            Visit Parish
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ParishesSection;
