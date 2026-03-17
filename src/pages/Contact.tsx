import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    treatment: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="section-padding bg-hazel-cream">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-hazel-gold uppercase tracking-widest text-xs font-bold mb-4 block">Connect</span>
            <h1 className="text-5xl md:text-7xl text-hazel-green mb-8 leading-tight">
              Get in <span className="italic font-light">Touch</span>
            </h1>
            <p className="text-hazel-dark/60 max-w-2xl mx-auto">
              Whether you have a question about our treatments or are ready to book your first session, we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div className="space-y-16">
            <div>
              <h2 className="text-3xl text-hazel-green mb-10">Contact Details</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-hazel-cream flex items-center justify-center text-hazel-green shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs text-hazel-gold mb-2">Visit Us</h4>
                    <p className="text-hazel-dark/70">Glenfield Mall, Auckland, New Zealand</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-hazel-cream flex items-center justify-center text-hazel-green shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs text-hazel-gold mb-2">Call Us</h4>
                    <p className="text-hazel-dark/70">02041330168</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-hazel-cream flex items-center justify-center text-hazel-green shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs text-hazel-gold mb-2">Email Us</h4>
                    <p className="text-hazel-dark/70">hello@hazelbeauty.co.nz</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl text-hazel-green mb-10">Opening Hours</h2>
              <div className="space-y-4 max-w-xs">
                <div className="flex justify-between border-b border-hazel-green/10 pb-2">
                  <span className="text-hazel-dark/60">Monday - Friday</span>
                  <span className="text-hazel-green font-medium">9 AM - 7 PM</span>
                </div>
                <div className="flex justify-between border-b border-hazel-green/10 pb-2">
                  <span className="text-hazel-dark/60">Saturday</span>
                  <span className="text-hazel-green font-medium">10 AM - 5 PM</span>
                </div>
                <div className="flex justify-between border-b border-hazel-green/10 pb-2">
                  <span className="text-hazel-dark/60">Sunday</span>
                  <span className="text-hazel-green font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-hazel-cream p-10 md:p-16 relative">
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none overflow-hidden">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCOBme4BKUrhiFY8MSJezEU0KNZE5yFcVXQZgXKfFyyjtqnNwkhkRH-PYi0riqB8TDUSTM4j3vVEoScdJA4tkXK_QnMw4U4ExIe1oRZEQvUABSBKl5rGj-0HytCOGNHqrb4bpK28xm8qerYdXY2iYZdHcEL0V97o7gpXeNzxgGzWiiQMvahqer0RYhT-n8KzIY0mluhyNlQ_mgctOlSBNKoUddP81PytsUpQ7mUYsfNb4AK7HTghgZXMjW-KneXLnXSpoFUXOGCWo" alt="Leaf" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
            </div>
            
            <h2 className="text-3xl text-hazel-green mb-10">Book a Consultation</h2>
            
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-hazel-green text-hazel-cream p-8 text-center"
              >
                <h3 className="text-2xl mb-4">Thank You!</h3>
                <p className="text-hazel-cream/70 text-sm">Your request has been received. We'll be in touch shortly to confirm your booking.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest text-hazel-dark/40 font-bold">Full Name</label>
                    <input
                      type="text"
                      required
                      className="bg-white border-b border-hazel-green/20 py-3 px-4 focus:outline-none focus:border-hazel-gold transition-colors text-sm"
                      placeholder="Jane Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest text-hazel-dark/40 font-bold">Email Address</label>
                    <input
                      type="email"
                      required
                      className="bg-white border-b border-hazel-green/20 py-3 px-4 focus:outline-none focus:border-hazel-gold transition-colors text-sm"
                      placeholder="jane@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-hazel-dark/40 font-bold">Select Treatment</label>
                  <select
                    className="bg-white border-b border-hazel-green/20 py-3 px-4 focus:outline-none focus:border-hazel-gold transition-colors text-sm appearance-none"
                    value={formState.treatment}
                    onChange={(e) => setFormState({...formState, treatment: e.target.value})}
                  >
                    <option value="">General Inquiry</option>
                    <option value="bb-glow">BB Glow Treatment</option>
                    <option value="herbal">Herbal Infusion Facial</option>
                    <option value="signature">Signature Facial Glow</option>
                    <option value="consultation">Complimentary Consultation</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-hazel-dark/40 font-bold">Your Message</label>
                  <textarea
                    rows={4}
                    className="bg-white border-b border-hazel-green/20 py-3 px-4 focus:outline-none focus:border-hazel-gold transition-colors text-sm resize-none"
                    placeholder="Tell us about your skin goals..."
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-3">
                  Send Request <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-hazel-cream relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-hazel-gold mx-auto mb-4 opacity-50" />
            <span className="text-hazel-green uppercase tracking-widest text-sm font-bold">Auckland, New Zealand</span>
          </div>
        </div>
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCKfPfQ3KPdkVpUJCL1XgyYJkXL2clS-DumsN4SCVeOF8pvv4HlLKHWmmfsVshVqpEObVUBQYvNG76_cBq2gvJ6X0wugW7ixpspMI4iGRPbGN3i-toR4Dg1DPZ5Ig6AGd1gQFi5hSNYcSq_zCXAGNTvemzQxFne9LPaCa5xGrvUnseFW1hqgWT72_4f_KnXaZ5ozI3TJKuitrON-hu08pLXy3mX4Ce1YRGIGmGQ37H5j48IQhml_2olGKu6T_XVTlO0PA38eVR6bA"
          alt="Map Background"
          className="w-full h-full object-cover opacity-20 grayscale"
          referrerPolicy="no-referrer"
        />
      </section>
    </div>
  );
};

export default Contact;
