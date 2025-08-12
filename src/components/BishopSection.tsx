import bishopImage from '@/assets/bishop-portrait.webp';
import { Button } from '@/components/ui/button';
import { Link } from "react-router-dom";

const BishopSection = () => {
  return (
    <section id="bishop" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <header className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Bishop Sithembele Anton Sipuka
            </h2>
            <p className="text-muted-foreground">Message from the Bishop</p>
            <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
          </header>

          {/* Bio Row */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Bishop Image & Meta */}
            <aside className="text-center">
              <div className="relative inline-block">
                <img
                  src={bishopImage}
                  alt="Portrait of Bishop Sithembele Anton Sipuka - Diocese of Mthatha"
                  loading="lazy"
                  className="w-80 h-80 object-cover rounded-full mx-auto shadow-lg"
                />
                <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
              </div>
              <div className="mt-6 space-y-1">
                <p className="text-sm uppercase tracking-wide text-muted-foreground">Bishop of Mthatha</p>
                <p className="text-base text-foreground">Serving since 3 May 2008</p>
                <p className="italic text-primary">“To work and to care”</p>
              </div>
            </aside>

            {/* Bishop's Message & CTA */}
            <article className="space-y-6 text-left">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Bishop Sipuka was born in Idutywa in the Diocese of Queenstown on 27 April 1960. In 1967, his
                family moved to Mthatha where his father worked on the farms. He became a Catholic as a child and his
                family also converted. He was baptized by Fr. Nicholas Lamla in 1969.
              </p>
              <div>
                <Button asChild>
                   <Link to="/bishops" aria-label="Learn more about our bishops">
                     More About Our Bishops
                   </Link>
                </Button>
              </div>
            </article>
          </div>

          {/* Vision & Mission */}
          <section aria-labelledby="vision-mission" className="mt-16">
            <h3 id="vision-mission" className="sr-only">Vision and Mission</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <article className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <h4 className="text-xl font-semibold text-primary mb-3">Our Vision</h4>
                <p className="text-muted-foreground leading-relaxed">
                  The Catholic Diocese of Mthatha sees itself as an evangelising community serving God, humanity, and
                  creation. Each member is characterised by a deep personal relationship with Christ and established in
                  our Catholic faith.
                  <br /><strong className="text-foreground">John 15:4-6 – Pastoral Plan 2024:6</strong>
                </p>
              </article>
              <article className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <h4 className="text-xl font-semibold text-primary mb-3">Our Mission</h4>
                <p className="text-muted-foreground leading-relaxed">
                  We commit ourselves to foster a personal encounter with Christ, deepen our faith, build a strong
                  community, and continue Christ’s evangelising mission in all spheres of life.
                  <br /><strong className="text-foreground">Pastoral Plan 2024:6</strong>
                </p>
              </article>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default BishopSection;