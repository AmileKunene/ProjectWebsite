import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const schema = z.object({
  name: z.string().min(2, { message: 'Please enter your full name' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters' }),
  // Honeypot field for spam bots
  website: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const ContactSection = () => {
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', message: '', website: '' },
  });

  const onSubmit = async (data: FormData) => {
    // If honeypot is filled, silently ignore
    if (data.website) return;

    // Simulate async submission
    await new Promise((r) => setTimeout(r, 800));

    reset();
    toast({
      title: 'Message sent',
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Contact Us
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8" aria-hidden="true"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We would love to hear from you. Whether you have questions, need pastoral care, or want to get involved, please reach out.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <article className="space-y-8" aria-labelledby="contact-info-heading">
              <h3 id="contact-info-heading" className="text-2xl font-bold text-primary mb-6">
                Get in Touch
              </h3>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-full">
                    <MapPin size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Address</h4>
                    <p className="text-muted-foreground">19 Craister St, Norwood, Mthatha, 5100</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-full">
                    <Phone size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Phone</h4>
                    <p className="text-muted-foreground">047 532 6301</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-full">
                    <Mail size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Email</h4>
                    <p className="text-muted-foreground">sichwayitiles1@gmail.com</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground p-3 rounded-full">
                    <Clock size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Office Hours</h4>
                    <p className="text-muted-foreground">Mon - Thu: 8:00 AM - 4:30 PM</p>
                    <p className="text-muted-foreground">Fri: 8:00 AM - 4:00 PM</p>
                  </div>
                </li>
              </ul>
            </article>

            {/* Contact Form */}
            <aside className="bg-card rounded-lg border shadow-sm p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Send us a Message</h3>

              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
                {/* Honeypot */}
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                  {...register('website')}
                />

                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    aria-invalid={!!errors.name}
                    {...register('name')}
                  />
                  {errors.name && (
                    <p role="alert" className="mt-2 text-sm font-medium text-destructive">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    {...register('email')}
                  />
                  {errors.email && (
                    <p role="alert" className="mt-2 text-sm font-medium text-destructive">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Enter your message here..."
                    aria-invalid={!!errors.message}
                    {...register('message')}
                  />
                  {errors.message && (
                    <p role="alert" className="mt-2 text-sm font-medium text-destructive">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </aside>
          </div>

          {/* Responsive Map */}
          <div className="mt-12">
            <AspectRatio ratio={16 / 9}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4435.081923730851!2d28.784411339221936!3d-31.591670241675626!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e5fd0becb45d98f%3A0xd63766cd2d090370!2sCatholic%20Diocese%20of%20Mthatha!5e0!3m2!1sen!2sza!4v1754472101967!5m2!1sen!2sza"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full rounded-lg border"
                style={{ border: 0 }}
                title="Catholic Diocese of Mthatha location"
                allowFullScreen
              />
            </AspectRatio>
          </div>

          {/* JSON-LD Structured Data for ContactPoint */}
          <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'Catholic Diocese of Mthatha',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: '19 Craister St, Norwood',
                  addressLocality: 'Mthatha',
                  postalCode: '5100',
                  addressCountry: 'ZA',
                },
                contactPoint: [
                  {
                    '@type': 'ContactPoint',
                    telephone: '+27-47-532-6301',
                    email: 'sichwayitiles1@gmail.com',
                    contactType: 'customer support',
                    areaServed: 'ZA',
                    availableLanguage: 'en',
                  },
                ],
              }),
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;