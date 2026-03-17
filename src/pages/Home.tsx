import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Quote } from 'lucide-react';
import { SERVICES, TESTIMONIALS } from '../constants';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCKfPfQ3KPdkVpUJCL1XgyYJkXL2clS-DumsN4SCVeOF8pvv4HlLKHWmmfsVshVqpEObVUBQYvNG76_cBq2gvJ6X0wugW7ixpspMI4iGRPbGN3i-toR4Dg1DPZ5Ig6AGd1gQFi5hSNYcSq_zCXAGNTvemzQxFne9LPaCa5xGrvUnseFW1hqgWT72_4f_KnXaZ5ozI3TJKuitrON-hu08pLXy3mX4Ce1YRGIGmGQ37H5j48IQhml_2olGKu6T_XVTlO0PA38eVR6bA"
            alt="Botanical Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-hazel-cream/40 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-hazel-green uppercase tracking-[0.3em] text-sm font-medium mb-6 block"
          >
            Auckland's Premier Skincare Boutique
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-8xl text-hazel-green mb-8 leading-tight"
          >
            Discover Your <br />
            <span className="italic font-light">Auckland Glow</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row gap-6 justify-center items-center"
          >
            <Link to="/services" className="btn-primary">
              Explore Treatments
            </Link>
            <Link to="/contact" className="btn-outline">
              Book Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Signature Treatments */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-hazel-gold uppercase tracking-widest text-xs font-bold mb-4 block">Our Expertise</span>
              <h2 className="text-4xl md:text-5xl text-hazel-green">Signature Treatments</h2>
            </div>
            <Link to="/services" className="flex items-center gap-2 text-hazel-green hover:text-hazel-gold transition-colors uppercase tracking-widest text-sm font-bold">
              View All Services <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-hazel-green/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <h3 className="text-2xl text-hazel-green mb-3">{service.title}</h3>
                <p className="text-hazel-dark/60 text-sm leading-relaxed mb-4 line-clamp-2">
                  {service.description}
                </p>
                <div className="flex justify-between items-center text-xs uppercase tracking-widest font-bold text-hazel-gold">
                  <span>{service.duration}</span>
                  <span>From {service.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Highlight */}
      <section className="relative py-32 bg-hazel-green text-hazel-cream overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCOBme4BKUrhiFY8MSJezEU0KNZE5yFcVXQZgXKfFyyjtqnNwkhkRH-PYi0riqB8TDUSTM4j3vVEoScdJA4tkXK_QnMw4U4ExIe1oRZEQvUABSBKl5rGj-0HytCOGNHqrb4bpK28xm8qerYdXY2iYZdHcEL0V97o7gpXeNzxgGzWiiQMvahqer0RYhT-n8KzIY0mluhyNlQ_mgctOlSBNKoUddP81PytsUpQ7mUYsfNb4AK7HTghgZXMjW-KneXLnXSpoFUXOGCWo"
            alt="Leaf Pattern"
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Quote className="w-12 h-12 text-hazel-gold mx-auto mb-10 opacity-50" />
          <h2 className="text-3xl md:text-5xl italic font-light leading-snug mb-12">
            "Hazel Beauty is not just a clinic; it's a sanctuary. My skin has never looked more radiant, and the attention to detail is simply unmatched in Auckland."
          </h2>
          <div className="flex flex-col items-center">
            <span className="text-hazel-gold uppercase tracking-widest text-sm font-bold mb-2">Sophie Montgomery</span>
            <span className="text-hazel-cream/50 text-xs uppercase tracking-widest">Auckland, NZ</span>
          </div>
        </div>
      </section>

      {/* Kind Words Grid */}
      <section className="section-padding bg-hazel-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-hazel-gold uppercase tracking-widest text-xs font-bold mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-5xl text-hazel-green">Kind Words from Our Clients</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 border border-hazel-green/5 shadow-sm"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-hazel-gold text-hazel-gold" />
                  ))}
                </div>
                <p className="text-hazel-dark/70 italic leading-relaxed mb-8">
                  "{testimonial.text}"
                </p>
                <div className="flex flex-col">
                  <span className="text-hazel-green font-bold text-sm uppercase tracking-widest">{testimonial.name}</span>
                  <span className="text-hazel-dark/40 text-xs uppercase tracking-widest">{testimonial.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white border-t border-hazel-green/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl text-hazel-green mb-10">Ready to Reveal Your <br /><span className="italic font-light">Natural Radiance?</span></h2>
          <Link to="/contact" className="btn-primary inline-block">
            Book Your Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
