import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Sparkles, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding bg-hazel-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="order-2 lg:order-1"
          >
            <span className="text-hazel-gold uppercase tracking-widest text-xs font-bold mb-4 block">Our Story</span>
            <h1 className="text-5xl md:text-7xl text-hazel-green mb-8 leading-tight">
              Rooted in <br /><span className="italic font-light">Skincare Excellence</span>
            </h1>
            <div className="space-y-6 text-hazel-dark/70 leading-relaxed">
              <p>
                Founded in the heart of Auckland, Hazel Beauty was born from a simple yet profound belief: that skincare should be a holistic journey of both science and soul.
              </p>
              <p>
                Our founder, Hazel, envisioned a sanctuary where the purity of botanical extracts meets the precision of modern aesthetic technology. With over a decade of experience in luxury skincare, she has curated a menu of treatments that don't just mask imperfections but reveal the inherent health and radiance of your skin.
              </p>
              <p>
                At Hazel Beauty, we don't believe in one-size-fits-all solutions. Every face tells a unique story, and our mission is to listen, understand, and provide bespoke care that honors your individuality.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCKfPfQ3KPdkVpUJCL1XgyYJkXL2clS-DumsN4SCVeOF8pvv4HlLKHWmmfsVshVqpEObVUBQYvNG76_cBq2gvJ6X0wugW7ixpspMI4iGRPbGN3i-toR4Dg1DPZ5Ig6AGd1gQFi5hSNYcSq_zCXAGNTvemzQxFne9LPaCa5xGrvUnseFW1hqgWT72_4f_KnXaZ5ozI3TJKuitrON-hu08pLXy3mX4Ce1YRGIGmGQ37H5j48IQhml_2olGKu6T_XVTlO0PA38eVR6bA"
                alt="Founder at work"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-hazel-gold/10 backdrop-blur-xl hidden md:block"></div>
          </motion.div>
        </div>
      </section>

      {/* Full Bleed Image */}
      <section className="h-[60vh] relative">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCOBme4BKUrhiFY8MSJezEU0KNZE5yFcVXQZgXKfFyyjtqnNwkhkRH-PYi0riqB8TDUSTM4j3vVEoScdJA4tkXK_QnMw4U4ExIe1oRZEQvUABSBKl5rGj-0HytCOGNHqrb4bpK28xm8qerYdXY2iYZdHcEL0V97o7gpXeNzxgGzWiiQMvahqer0RYhT-n8KzIY0mluhyNlQ_mgctOlSBNKoUddP81PytsUpQ7mUYsfNb4AK7HTghgZXMjW-KneXLnXSpoFUXOGCWo"
          alt="Botanical Detail"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-hazel-green/20"></div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-hazel-gold uppercase tracking-widest text-xs font-bold mb-4 block">Our Values</span>
            <h2 className="text-4xl md:text-5xl text-hazel-green">Our Core Philosophy</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Leaf className="w-10 h-10 text-hazel-gold" />,
                title: 'Purity',
                desc: 'We source only the finest organic botanical extracts, ensuring every product that touches your skin is clean, ethical, and potent.'
              },
              {
                icon: <Sparkles className="w-10 h-10 text-hazel-gold" />,
                title: 'Efficacy',
                desc: 'Our treatments are backed by aesthetic science, delivering visible results that enhance your natural beauty without compromise.'
              },
              {
                icon: <ShieldCheck className="w-10 h-10 text-hazel-gold" />,
                title: 'Luxury',
                desc: 'We believe skincare is self-care. Every visit is designed to be a sensory experience that calms the mind and restores the spirit.'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 border border-hazel-green/5"
              >
                <div className="flex justify-center mb-8">{item.icon}</div>
                <h3 className="text-2xl text-hazel-green mb-4">{item.title}</h3>
                <p className="text-hazel-dark/60 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section-padding bg-hazel-cream border-y border-hazel-green/5">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-3xl md:text-4xl text-hazel-green italic font-light mb-10 leading-snug">
            "True beauty begins the moment you decide to be yourself. Our role is simply to provide the canvas of healthy, glowing skin for your confidence to shine."
          </blockquote>
          <span className="text-hazel-gold uppercase tracking-widest text-sm font-bold">— Hazel, Founder</span>
        </div>
      </section>

      {/* Location CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl text-hazel-green mb-8">Proudly Serving <br /><span className="italic font-light">Auckland Since 2018</span></h2>
            <p className="text-hazel-dark/70 leading-relaxed mb-10">
              Located in the vibrant heart of Ponsonby, our boutique clinic is a haven for those seeking a moment of peace and a lifetime of radiant skin. We invite you to join our community of glowing clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex flex-col">
                <span className="text-hazel-gold uppercase tracking-widest text-xs font-bold mb-1">Visit Us</span>
                <span className="text-hazel-green text-sm">Glenfield Mall, Auckland</span>
              </div>
              <div className="flex flex-col">
                <span className="text-hazel-gold uppercase tracking-widest text-xs font-bold mb-1">Call Us</span>
                <span className="text-hazel-green text-sm">02041330168</span>
              </div>
            </div>
          </div>
          <div className="h-[400px] overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVZvBSQMR6rXiIItf6Ha48VVtGTq8M5-W2f84UVpZ4ygaQH3WHjeoqf_WwMjg4jACXA7dYQ45OXPJyhYdoVn0lwsotlMA0XAALdU5n3rX2DQNr6rVNNuS_oZEAGW-3g0rox_aBXVi2gvoHkADQPoP5gnhhuiZ8NWS2WUHzrOYFg5in9bHwMa5ctJNAwSjHLPIp1BbJwZPra5S-P-OKPxkWxyEG054XsN_Yqa09dldhg110xjBTaIg6M6eQ35vzQWTWS8ZOy6_6pyU"
              alt="Clinic Interior"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
