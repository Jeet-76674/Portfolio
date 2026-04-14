import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { personalInfo } from '../data/portfolio'
import { Github, Linkedin, Twitter, Mail, MapPin, CheckCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
  const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setLoading(true);
    setError('');
    
    const templateParams = {
      from_name:  formData.name,
      from_email: formData.email,
      name:       formData.name,
      email:      formData.email,
      message:    formData.message,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError('Failed to send message. Please try emailing directly at ntetar@gmail.com');
      console.error('EmailJS error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-32 relative bg-bg-primary overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full filter blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white-[0.02] rounded-full filter blur-[150px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-accent" />
            <span className="text-sm font-mono tracking-widest text-accent uppercase">
              Contact
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2.5rem,5vw,4rem)] font-display font-bold leading-[1.1] text-white tracking-[-0.02em]"
          >
            Let's <span className="text-accent">work together</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 md:p-10 rounded-2xl relative"
          >
            {success ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[350px] text-center">
                <CheckCircle size={64} className="text-[#4ade80] mb-6" />
                <h3 className="text-2xl font-display font-semibold text-white mb-2">Message Sent!</h3>
                <p className="text-[#888] mb-8">Thanks for reaching out. I'll get back to you soon.</p>
                <button 
                  onClick={() => setSuccess(false)}
                  className="px-6 py-3 bg-white/5 border border-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                <div className="float-label-group">
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=" " 
                    required 
                    disabled={loading}
                  />
                  <label htmlFor="name">Your Name</label>
                </div>

                <div className="float-label-group">
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" " 
                    required 
                    disabled={loading}
                  />
                  <label htmlFor="email">Your Email</label>
                </div>

                <div className="float-label-group">
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=" " 
                    rows={4}
                    required 
                    disabled={loading}
                    className="resize-none"
                  />
                  <label htmlFor="message">Your Message</label>
                </div>

                <div className="flex flex-col gap-2 mt-2">
                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-gradient-to-r from-accent to-[#ff8866] text-white font-bold text-sm tracking-widest uppercase rounded-xl transition-all flex items-center justify-center gap-2 group hover:shadow-[0_10px_30px_rgba(255,85,51,0.2)] hover:-translate-y-1 outline-none disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                    {!loading && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    )}
                  </button>
                  {error && (
                    <p className="text-[#ff4444] text-[13px] mt-2 text-center">{error}</p>
                  )}
                </div>
              </form>
            )}
          </motion.div>

          {/* Right Column: Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <div className="flex flex-col gap-10">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0 text-accent">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-mono tracking-widest text-txt-muted uppercase mb-2">Email</h4>
                  <a href={`mailto:${personalInfo.email}`} className="text-xl font-display font-medium text-white hover:text-accent transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0 text-accent">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-mono tracking-widest text-txt-muted uppercase mb-2">Location</h4>
                  <p className="text-xl font-display font-medium text-white">
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0 text-green-500">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-mono tracking-widest text-txt-muted uppercase mb-2">Availability</h4>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse-dot" />
                    <p className="text-xl font-display font-medium text-white">
                      {personalInfo.availability}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-10 border-t border-white/10 flex gap-4">
                <a 
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 bg-white/5 hover:bg-accent text-white flex items-center justify-center rounded-full transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(255,85,51,0.4)] outline-none"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </a>
                <a 
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 bg-white/5 hover:bg-accent text-white flex items-center justify-center rounded-full transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(255,85,51,0.4)] outline-none"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
