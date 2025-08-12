const FacebookFeedSection = () => {
  return (
    <section id="facebook" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <header className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Follow Us on Facebook</h2>
          <p className="text-muted-foreground mt-2">
            Latest updates and announcements from our Facebook page.
          </p>
        </header>
        <div className="mx-auto max-w-3xl flex justify-center">
  <div className="rounded-lg shadow-sm border border-border overflow-hidden w-full max-w-[500px]">
    <iframe
      title="RCC Mthatha Facebook Timeline"
      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Frccmthatha%2F&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
      width="500"
      height="600"
      style={{ border: 'none', overflow: 'hidden' }}
      scrolling="no"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      allowFullScreen
      loading="lazy"
    />
  </div>
        </div>
      </div>
    </section>
  );
};

export default FacebookFeedSection;
