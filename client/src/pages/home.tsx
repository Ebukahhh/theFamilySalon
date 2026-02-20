import { motion } from "framer-motion";
import { 
  Scissors, 
  Sparkles, 
  Heart, 
  Clock, 
  MapPin, 
  Phone, 
  Instagram, 
  Star,
  ChevronDown,
  User,
  Palette
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { ContactForm } from "@/components/contact-form";
import { ServiceCard } from "@/components/service-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Using a high-quality salon interior or hair model image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop")'
            }}
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30 backdrop-blur border-none px-4 py-1.5 text-sm uppercase tracking-widest">
              Welcome to The Family Salon
            </Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight">
              Natural Beauty <br />
              <span className="text-primary-foreground/90 italic">Redefined.</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/90 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
              Experience Kwabenya's premier destination for natural hair care, styling, and family grooming. Rated 4.5 stars by over 190 happy clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="h-14 px-8 rounded-full text-lg bg-white text-black hover:bg-white/90 w-full sm:w-auto"
                asChild
              >
                <a href="#contact">Book Appointment</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="h-14 px-8 rounded-full text-lg border-white text-white hover:bg-white/10 w-full sm:w-auto backdrop-blur-sm"
                asChild
              >
                <a href="#services">View Services</a>
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary uppercase tracking-widest px-4 py-1">Our Expertise</Badge>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-foreground leading-tight">Professional Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full" />
            <p className="text-xl text-muted-foreground leading-relaxed">
              We specialize in healthy, natural hair care for the whole family. From protective styles to grooming, we've got you covered with premium techniques and products.
            </p>
          </div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <motion.div variants={fadeIn}>
              <ServiceCard 
                title="Natural Hair Care" 
                description="Expert care for your natural crown. Silk presses, treatments, and healthy hair maintenance routines tailored to your texture."
                icon={Sparkles}
                image="https://images.unsplash.com/photo-1620331311520-246422ff83f9?q=80&w=2574&auto=format&fit=crop"
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <ServiceCard 
                title="Protective Styling" 
                description="Beautiful braids, twists, locs, and cornrows designed to protect your hair while looking absolutely stunning."
                icon={Palette}
                image="https://images.unsplash.com/photo-1647383363364-772960616175?q=80&w=2574&auto=format&fit=crop"
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <ServiceCard 
                title="Women's Styling" 
                description="From cuts to color, relaxers to wigs. Our stylists are trained in the latest techniques to bring your vision to life."
                icon={Scissors}
                image="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=2576&auto=format&fit=crop"
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <ServiceCard 
                title="Men's Grooming" 
                description="Sharp cuts, fades, and beard trims. A relaxing experience for the modern gentleman."
                icon={User}
                image="https://images.unsplash.com/photo-1621605815841-2cd6060f195c?q=80&w=2570&auto=format&fit=crop"
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <ServiceCard 
                title="Mani & Pedi" 
                description="Pamper your hands and feet with our luxurious nail services. Gel polish, acrylics, and spa treatments available."
                icon={Heart}
                image="https://images.unsplash.com/photo-1604654894610-df490668f602?q=80&w=2574&auto=format&fit=crop"
              />
            </motion.div>
            <motion.div variants={fadeIn}>
              <ServiceCard 
                title="Massage Therapy" 
                description="Unwind with a relaxing massage. The perfect way to de-stress while your hair treatment processes."
                icon={Star}
                image="https://images.unsplash.com/photo-1544161515-4af6b1d462c2?q=80&w=2670&auto=format&fit=crop"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="about" className="py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              {...fadeIn}
              className="relative"
            >
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl -z-10 rotate-3" />
              {/* Salon interior shot */}
              <img 
                src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2574&auto=format&fit=crop" 
                alt="Salon Interior" 
                className="rounded-2xl shadow-2xl w-full object-cover h-[600px]"
              />
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur p-6 rounded-xl shadow-lg border border-white/20">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex text-yellow-500">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="font-bold text-lg">4.5/5 Rating</span>
                </div>
                <p className="text-muted-foreground">"Best salon in Kwabenya! My natural hair has never flourished like this." — <span className="text-foreground font-medium">192 Reviews</span></p>
              </div>
            </motion.div>

            <motion.div {...fadeIn}>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Why Kwabenya Chooses <span className="text-primary">The Family Salon</span></h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Family Friendly Atmosphere</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We're not just a salon, we're a family. Bring your kids, bring your partner. We create a comfortable, welcoming environment for everyone.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Natural Hair Experts</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We understand textures. Whether 3C or 4C, low or high porosity, we have the products and expertise to make your natural curls pop.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Convenient Hours</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Open late until 8 PM to accommodate your busy schedule. Stop by after work for that much-needed pampering session.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90">
                  Read Our Reviews
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">Our Gallery</h2>
            <p className="text-white/60 max-w-2xl mx-auto">See the transformations and happy smiles leaving our chairs.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
            {/* Gallery Images with Unsplash Sources */}
            <div className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2669&auto=format&fit=crop" 
                alt="Natural Hair Smile" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
            </div>
            <div className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2669&auto=format&fit=crop" 
                alt="Hair Styling Process" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=2574&auto=format&fit=crop" 
                alt="Men's Grooming" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=2576&auto=format&fit=crop" 
                alt="Manicure" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2670&auto=format&fit=crop" 
                alt="Salon Products" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://instagram.com/thefamilysalongh" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors font-medium border-b border-white/20 pb-1 hover:border-primary"
            >
              <Instagram className="w-5 h-5" />
              Follow @thefamilysalongh on Instagram for more
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Common Questions</h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border-none bg-white rounded-xl px-6 shadow-sm">
              <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-primary py-6">Do I need to book an appointment?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                Appointments are highly recommended to ensure you don't have to wait, especially for braids and extensive treatments. Walk-ins are welcome but subject to availability.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-none bg-white rounded-xl px-6 shadow-sm">
              <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-primary py-6">Do you wash natural hair before styling?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                Yes! A clean scalp is the foundation of healthy hair. All our styling services include a wash and condition unless explicitly requested otherwise.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-none bg-white rounded-xl px-6 shadow-sm">
              <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-primary py-6">Do you do kids' hair?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                Absolutely! We are "The Family Salon" for a reason. Our stylists are patient and experienced with children's hair textures.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-none bg-white rounded-xl px-6 shadow-sm">
              <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-primary py-6">What products do you use?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                We use high-quality, professional-grade products tailored to your hair porosity and needs. We also sell some of our favorite natural hair products in the salon.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Book Your Visit</h2>
              <p className="text-lg text-muted-foreground mb-12">
                Ready to transform your look? Send us a message to book your appointment or ask any questions. We'll get back to you immediately.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex gap-4 items-start">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold text-lg">Visit Us</h4>
                    <p className="text-muted-foreground">MQH4+HXJ, Kwabenya, Accra</p>
                    <a href="https://maps.google.com" target="_blank" className="text-primary text-sm font-medium mt-1 inline-block hover:underline">Get Directions</a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold text-lg">Call Us</h4>
                    <p className="text-muted-foreground">020 770 5483</p>
                    <p className="text-muted-foreground">030 240 0502</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold text-lg">Opening Hours</h4>
                    <p className="text-muted-foreground">Mon - Sat: 8:00 AM - 8:00 PM</p>
                    <p className="text-muted-foreground">Sunday: 12:00 PM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-64 bg-secondary/50 rounded-2xl overflow-hidden relative grayscale hover:grayscale-0 transition-all">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.4385966779364!2d-0.24769062497672528!3d5.649557494331773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf995400000001%3A0x0!2sKwabenya!5e0!3m2!1sen!2sgh!4v1710000000000!5m2!1sen!2sgh" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>

            <div className="bg-secondary/20 p-8 md:p-12 rounded-3xl border border-secondary/50">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Ready to Glow?</h2>
          <Button 
            size="lg" 
            variant="secondary"
            className="h-16 px-10 rounded-full text-xl font-semibold bg-white text-primary hover:bg-white/90"
            asChild
          >
            <a href="#contact">Book Now</a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Scissors className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold font-display">The Family Salon</span>
            </div>
            
            <div className="flex gap-8 text-sm text-white/60">
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>

            <div className="text-sm text-white/40">
              © {new Date().getFullYear()} The Family Salon. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
