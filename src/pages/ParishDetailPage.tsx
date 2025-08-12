import { useEffect } from 'react';
import { useParams, useNavigate, Link as RouterLink } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getAllParishes } from '@/data/parishes';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, ArrowLeft } from 'lucide-react';

const ParishDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const all = getAllParishes();
  const parish = all.find((p) => p.slug === slug);

  // SEO basics without external libs
  useEffect(() => {
    const title = parish ? `${parish.name} – Diocese of Mthatha` : 'Parish not found – Diocese of Mthatha';
    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    metaDesc.setAttribute(
      'content',
      parish
        ? `${parish.name} in ${parish.location}. Contact: ${parish.contact}.`
        : 'Requested parish could not be found.'
    );
    if (!metaDesc.parentNode) document.head.appendChild(metaDesc);

    const linkCanonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    linkCanonical.setAttribute('rel', 'canonical');
    linkCanonical.setAttribute('href', window.location.href);
    if (!linkCanonical.parentNode) document.head.appendChild(linkCanonical);
  }, [parish]);

  const handleNavigate = (sectionId: string) => {
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header>
        <Navigation currentSection="parishes" onNavigate={handleNavigate} />
      </header>

      <main className="pt-24">
        <section className="container mx-auto px-4">
          {!parish ? (
            <div className="max-w-3xl mx-auto text-center py-24">
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Parish not found</h1>
              <p className="text-muted-foreground mb-8">We couldn't find the parish you were looking for.</p>
              <RouterLink to="/#parishes">
                <Button variant="default">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Parishes
                </Button>
              </RouterLink>
            </div>
          ) : (
            <article className="max-w-4xl mx-auto">
              <div className="mb-8">
                <RouterLink to="/#parishes" className="inline-flex items-center text-primary hover:underline">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Parishes
                </RouterLink>
              </div>

              <header className="mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">{parish.name}</h1>
                <p className="text-muted-foreground">Region: {parish.region}</p>
              </header>

              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Parish Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {parish.description && (
                    <div className="space-y-2">
                      <h2 className="text-lg font-semibold">About this parish</h2>
                      <p className="text-muted-foreground leading-relaxed">{parish.description}</p>
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-base">{parish.location}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    {parish.type === 'email' ? (
                      <Mail className="h-5 w-5 text-primary" />
                    ) : (
                      <Phone className="h-5 w-5 text-primary" />
                    )}
                    <span className="text-base">{parish.contact}</span>
                  </div>

                  {parish.telephone && (
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <span className="text-base">{parish.telephone}</span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-3 pt-2">
                    {parish.type === 'phone' && (
                      <a href={`tel:${parish.contact.replace(/\s+/g, '')}`}>
                        <Button>Call Now</Button>
                      </a>
                    )}
                    {parish.type === 'email' && (
                      <a href={`mailto:${parish.contact}`}>
                        <Button>Email Parish</Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </article>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ParishDetailPage;