import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { Clock, DollarSign, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="section-padding bg-hazel-cream text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <span className="text-hazel-gold uppercase tracking-widest text-xs font-bold mb-4 block">Our Menu</span>
          <h1 className="text-5xl md:text-7xl text-hazel-green mb-8 leading-tight">
            Bespoke <br /><span className="italic font-light">Glow Treatments</span>
          </h1>
          <p className="text-hazel-dark/60 leading-relaxed">
            Each treatment at Hazel Beauty is a curated experience, blending botanical purity with advanced aesthetic techniques to deliver transformative results for your unique skin.
          </p>
        </motion.div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto space-y-32">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-1/2 aspect-[4/5] overflow-hidden relative group">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-hazel-green/5"></div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <span className="text-hazel-gold uppercase tracking-[0.2em] text-xs font-bold mb-6 block">Treatment {index + 1}</span>
                <h2 className="text-4xl md:text-5xl text-hazel-green mb-8">{service.title}</h2>
                <p className="text-hazel-dark/70 leading-relaxed mb-10 text-lg">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-2 gap-8 mb-12 border-y border-hazel-green/10 py-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-hazel-cream flex items-center justify-center text-hazel-green">
                      <Clock size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-hazel-dark/40 block">Duration</span>
                      <span className="text-hazel-green font-bold tracking-widest">{service.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-hazel-cream flex items-center justify-center text-hazel-green">
                      <DollarSign size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-hazel-dark/40 block">Investment</span>
                      <span className="text-hazel-green font-bold tracking-widest">From {service.price}</span>
                    </div>
                  </div>
                </div>

                <Link to="/contact" className="btn-primary inline-flex items-center gap-3">
                  Book This Treatment <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="section-padding bg-hazel-green text-hazel-cream text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl mb-8">Not sure which treatment is <br /><span className="italic font-light">right for you?</span></h2>
          <p className="text-hazel-cream/70 mb-12 max-w-2xl mx-auto">
            We offer complimentary 15-minute consultations to analyze your skin and recommend a bespoke treatment plan tailored to your goals.
          </p>
          <Link to="/contact" className="btn-outline !border-hazel-cream !text-hazel-cream hover:!bg-hazel-cream hover:!text-hazel-green">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
