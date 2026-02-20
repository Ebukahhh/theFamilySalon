import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  ChevronUp,
  User,
  Palette,
  MessageCircle
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

const testimonials = [
  {
    name: "Abena K.",
    review: "Best salon in Kwabenya, hands down! My natural hair has never looked and felt this healthy. The silk press they did on my 4C hair was absolutely perfect — zero heat damage.",
    rating: 5,
    service: "Natural Hair Care",
  },
  {
    name: "Adjoa M.",
    review: "I bring my two daughters here every month for their protective styles. The team is so patient with kids and the braids always last super long. Truly a family-friendly experience!",
    rating: 5,
    service: "Protective Styling",
  },
  {
    name: "Kwame A.",
    review: "I was hesitant about trying a 'family salon' for my beard and cut, but wow — best fade I've gotten in Accra. Very professional. I'm coming back every two weeks.",
    rating: 5,
    service: "Men's Grooming",
  },
];

const pricingData = [
  {
    category: "Natural Hair", items: [
      { name: "Silk Press (short)", price: "GHS 80" },
      { name: "Silk Press (long)", price: "GHS 120" },
      { name: "Wash & Condition", price: "GHS 40" },
      { name: "Scalp Treatment", price: "GHS 60" },
    ]
  },
  {
    category: "Protective Styles", items: [
      { name: "Cornrows (simple)", price: "GHS 60" },
      { name: "Box Braids (medium)", price: "GHS 200" },
      { name: "Twist Out / Locs", price: "from GHS 150" },
      { name: "Crochet Braids", price: "from GHS 180" },
    ]
  },
  {
    category: "Women's Styling", items: [
      { name: "Cut & Style", price: "GHS 100" },
      { name: "Relaxer Treatment", price: "GHS 120" },
      { name: "Wig Install", price: "GHS 80" },
      { name: "Colour & Highlights", price: "from GHS 200" },
    ]
  },
  {
    category: "Men & Nails", items: [
      { name: "Men's Cut & Fade", price: "GHS 50" },
      { name: "Beard Trim & Shape", price: "GHS 30" },
      { name: "Manicure", price: "GHS 50" },
      { name: "Pedicure", price: "GHS 70" },
    ]
  },
];

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Used as spread props on standalone motion elements (e.g. About section)
  const fadeInProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  // Used as child variants inside a stagger parent — keys must match parent state names
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    initial: {},
    visible: { transition: { staggerChildren: 0.12 } }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop")'
            }}
          />
          <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px]" />
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
              Welcome to The Family Salon · Kwabenya, Accra
            </Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight">
              Natural Beauty <br />
              <span className="italic text-amber-200">Redefined.</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/90 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
              Kwabenya's premier destination for natural hair care, protective styling, and family grooming. Rated 4.5★ by over 190 happy clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="h-14 px-8 rounded-full text-lg bg-white text-black hover:bg-white/90 w-full sm:w-auto shadow-2xl"
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
            <div className="w-24 h-1 gold-accent mx-auto mb-8 rounded-full" />
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

      {/* Pricing Section */}
      <section id="pricing" className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary uppercase tracking-widest px-4 py-1">Transparent Pricing</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Rates</h2>
            <div className="w-24 h-1 gold-accent mx-auto mb-6 rounded-full" />
            <p className="text-lg text-muted-foreground">All prices in Ghana Cedis (GHS). Final price may vary based on hair length, density, and complexity.</p>
          </div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {pricingData.map((section) => (
              <motion.div
                key={section.category}
                variants={fadeIn}
                className="bg-secondary/20 rounded-2xl p-8 border border-secondary/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <h3 className="text-xl font-display font-bold mb-6 text-foreground flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                  {section.category}
                </h3>
                <div className="space-y-3">
                  {section.items.map((item) => (
                    <div key={item.name} className="flex justify-between items-center py-2 border-b border-secondary/50 last:border-0">
                      <span className="text-muted-foreground">{item.name}</span>
                      <span className="font-semibold text-foreground">{item.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">Not sure about pricing? Send us a message and we'll give you a personalised quote.</p>
            <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90" asChild>
              <a href="#contact">Get a Quote</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="about" className="py-24 md:py-32 overflow-hidden bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              {...fadeInProps}
              className="relative"
            >
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl -z-10 rotate-3" />
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
                  <span className="font-bold text-lg">4.5 / 5 Rating</span>
                </div>
                <p className="text-muted-foreground">"Best salon in Kwabenya! My natural hair has never flourished like this." — <span className="text-foreground font-medium">192 Reviews</span></p>
              </div>
            </motion.div>

            <motion.div {...fadeInProps}>
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
                <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90" asChild>
                  <a href="#reviews">Read Our Reviews</a>
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

      {/* Testimonials Section */}
      <section id="reviews" className="py-24 md:py-32 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary uppercase tracking-widest px-4 py-1">Happy Clients</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">What People Say</h2>
            <div className="w-24 h-1 gold-accent mx-auto mb-6 rounded-full" />
          </div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={fadeIn}
                className="bg-white rounded-2xl p-8 shadow-md shadow-black/5 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="flex text-yellow-500 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed flex-1 mb-6 italic">"{t.review}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.service}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-background">
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
                We use high-quality, professional-grade products tailored to your hair porosity and needs. We also sell some of our favourite natural hair products in the salon.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-none bg-white rounded-xl px-6 shadow-sm">
              <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-primary py-6">How long do protective styles last?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                With proper care, braids and cornrows typically last 4–8 weeks. We'll advise you on the best nighttime routine and moisturising products to maximise longevity.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div {...fadeInProps}>
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
                    <a href="https://maps.app.goo.gl/MQH4HXJKwabenya" target="_blank" className="text-primary text-sm font-medium mt-1 inline-block hover:underline">Get Directions →</a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold text-lg">Call Us</h4>
                    <a href="tel:+233207705483" className="text-muted-foreground hover:text-primary transition-colors block">020 770 5483</a>
                    <a href="tel:+233302400502" className="text-muted-foreground hover:text-primary transition-colors block">030 240 0502</a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-bold text-lg">Opening Hours</h4>
                    <p className="text-muted-foreground">Mon – Sat: 8:00 AM – 8:00 PM</p>
                    <p className="text-muted-foreground">Sunday: 12:00 PM – 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Map */}
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

            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-black/5 border border-secondary/30">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Ready to Glow?</h2>
          <p className="text-white/80 text-lg mb-8">Walk in, transform, walk out glowing. Book today.</p>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Scissors className="w-5 h-5 text-primary" />
                <span className="text-lg font-bold font-display">The Family Salon</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">Kwabenya's premier natural hair & beauty destination. Open 7 days a week.</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2 text-sm text-white/60">
                <a href="#services" className="hover:text-white transition-colors">Services</a>
                <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
                <a href="#about" className="hover:text-white transition-colors">About</a>
                <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
                <a href="#contact" className="hover:text-white transition-colors">Book Appointment</a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-4">Get In Touch</h4>
              <div className="flex flex-col gap-2 text-sm text-white/60">
                <a href="tel:+233207705483" className="hover:text-white transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4" /> 020 770 5483
                </a>
                <a href="tel:+233302400502" className="hover:text-white transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4" /> 030 240 0502
                </a>
                <a href="https://wa.me/233207705483" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
                <a href="https://instagram.com/thefamilysalongh" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <Instagram className="w-4 h-4" /> @thefamilysalongh
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 text-center text-sm text-white/40">
            © {new Date().getFullYear()} The Family Salon, Kwabenya. All rights reserved.
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/233207705483?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20The%20Family%20Salon"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <span className="absolute inset-0 rounded-full bg-green-500 ping-slow" />
        <span className="relative flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white rounded-full px-4 py-3 shadow-xl shadow-green-500/40 transition-all duration-300 group-hover:scale-105">
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="text-sm font-semibold hidden sm:inline">WhatsApp Us</span>
        </span>
      </a>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollTop}
            aria-label="Scroll to top"
            className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-foreground/80 backdrop-blur text-white flex items-center justify-center shadow-lg hover:bg-foreground transition-colors"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
