import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import bannerImage from "@/assets/bishops-banner.jpg"; 
import gallery1 from "@/assets/Bishop-Fritz-Lobinger.png";
import gallery2 from "@/assets/Bishop-Oswald-Hirmer.png";
import gallery3 from "@/assets/Bishop-Sithembele-Anton-Sipuka.jpeg";
import gallery4 from "@/assets/Bishop-Zolile-Brook.png";

const bishopsData = [
  {
    id: "brook",
    name: "Bishop Andrew, Zolile Brook",
    role: "Bishop",
    years: "1979–1995",
    summary:
      "Bishop Zolile Brook was the first isiXhosa-speaking bishop of the Diocese of Mthatha, serving from 1982 until his early retirement in 1995. Known for his humble, fatherly, and pastorally oriented leadership, he delivered culturally contextualized homilies in isiXhosa.",
    bio:
      "From 1982 to 1995, Bishop Brook led the Diocese of Mthatha with a gentle and pastoral approach, emphasizing culturally relevant homilies in isiXhosa. His tenure was marked by challenges including conflicts between missionary and local clergy, the divisive issue of Sotho circumcision customs, and the political tensions of apartheid’s end.",
    image: gallery4,
    imageAlt: "Portrait of Bishop Zolile Brook",
  },
  {
    id: "lobinger",
    name: "Bishop Fritz Lobinger",
    role: "Administrator",
    years: "1995–1997",
    summary:
      "Bishop Fritz Lobinger, a German-born priest from the Diocese of Regensburg, served in South Africa for decades before becoming Apostolic Administrator of the Diocese of Mthatha from 1995 to 1997.",
    bio:
      "After Bishop Brook’s resignation, Bishop Fritz Lobinger guided the Diocese of Mthatha during a turbulent period. He introduced pastoral measures such as Sanatio in Radice for marriage cases and blessings for service leaders, and played a key role in reconciliation efforts.",
    image: gallery1,
    imageAlt: "Portrait of Bishop Fritz Lobinger",
  },
  {
    id: "hirmer",
    name: "Bishop Oswald Hirmer",
    role: "Bishop",
    years: "1997–2008",
    summary:
      "Bishop Oswald Hirmer was born in Germany and served many years in South Africa as a priest and educator. Appointed Bishop of Mthatha in 1997, he focused on community building and faith spreading.",
    bio:
      "Bishop Hirmer championed three guiding principles: putting Christ at the center, building community, and spreading the faith. He established diocesan deaneries and animation teams, addressed circumcision conflicts, and supported local church building projects.",
    image: gallery2,
    imageAlt: "Portrait of Bishop Oswald Hirmer",
  },
  {
    id: "sipuka",
    name: "Bishop Sithembele Anton Sipuka",
    role: "Bishop",
    years: "2008–present",
    summary:
      "Bishop Sipuka was born in Idutywa, South Africa, and appointed Bishop of Mthatha in 2008. He focuses on pastoral care, youth empowerment, and modernizing diocesan administration.",
    bio:
      "Since his appointment, Bishop Sipuka has strengthened diocesan structures, revitalized the Mthatha Diocesan Pastoral Conference, and initiated community projects like food gardens and small-scale farming. He also leads efforts to translate key liturgical texts into isiXhosa.",
    image: gallery3,
    imageAlt: "Portrait of Bishop Sithembele Sipuka",
  },
];

const BishopsPage = () => {
  useEffect(() => {
    document.title = "Bishops of the Diocese of Mthatha";
  }, []);

  return (
    <>
      <Navigation
        currentSection=""
        onNavigate={(sectionId) => {
          window.location.href = `/#${sectionId}`;
        }}
      />
       
    {/* Banner Section */}
<section className="relative w-full h-64 md:h-96 mb-12">
  {/* Banner Image with dark overlay */}
  <img
    src={bannerImage}
    alt="Bishops of the Diocese of Mthatha"
    className="w-full h-full object-cover brightness-50"
    loading="lazy"
  />
  
  {/* Overlay Text */}
  <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
    <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
      Bishops of the Diocese of Mthatha
    </h1>
    <p className="text-white text-lg md:text-2xl mt-3 drop-shadow-md max-w-3xl">
      A history of pastoral leadership in the Diocese of Mthatha.
    </p>
    <div className="mt-6">
      <Link to="/">
        <Button variant="secondary">Back to Home</Button>
      </Link>
    </div>
  </div>
</section>


      {/* Bishop Profiles */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl space-y-20">
          {bishopsData.map((b, index) => (
            <div
              key={b.id}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
        
     {/* Image */}
      <div className="md:w-1/2 w-full flex justify-center">
      <img
        src={b.image}
        alt={b.imageAlt}
        className="rounded-lg shadow-lg object-cover"
        style={{
        maxWidth: "320px",
        maxHeight: "400px",
        width: "100%",
        height: "auto",
           }}
           loading="lazy"
        decoding="async"
          />
         </div>

              {/* Text */}
              <div className="md:w-1/2 w-full">
                <h2 className="text-2xl font-semibold mb-2">{b.name}</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  {b.role} • {b.years}
                </p>
                <p className="mb-4">{b.summary}</p>
                <p className="text-muted-foreground">{b.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BishopsPage;
