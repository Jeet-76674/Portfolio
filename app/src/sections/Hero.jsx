import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { personalInfo, stats } from '../data/portfolio'

const Hero = () => {
  const containerRef = useRef(null)

  // Scroll parallax for shapes
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const scrolled = window.scrollY
      const shapes = containerRef.current.querySelectorAll('.parallax-shape')
      shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.15
        shape.style.transform = `translateY(${scrolled * speed}px)`
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-bg-primary dot-grid-bg"
    >
      {/* Anti-gravity Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="parallax-shape absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-accent opacity-10 filter blur-[80px] animate-float" />
        <div className="parallax-shape absolute top-[40%] right-[10%] w-[500px] h-[500px] rounded-full bg-accent opacity-[0.05] filter blur-[100px] animate-float-slow" style={{ animationDelay: '-2s' }} />
        <div className="parallax-shape absolute bottom-[-10%] left-[30%] w-[350px] h-[350px] rounded-full bg-accent opacity-[0.08] filter blur-[90px] animate-float" style={{ animationDelay: '-4s' }} />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative z-10">
        
        {/* Left Column - Content */}
        <div className="col-span-1 lg:col-span-7 flex flex-col justify-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="flex items-center justify-center w-5 h-5 bg-green-500/20 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse-dot" />
            </div>
            <span className="text-sm font-mono tracking-widest text-txt-secondary uppercase">
              {personalInfo.availability}
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[clamp(3.5rem,8vw,5.5rem)] font-name font-extrabold leading-[1.05] text-white mb-4 tracking-[0.01em]"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl md:text-3xl font-display font-bold text-accent mb-6 h-[32px] md:h-[40px]"
          >
            <Typewriter 
              words={['UI Designer', 'React Developer', 'Frontend Developer', 'Full Stack Developer']}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-txt-secondary max-w-[600px] leading-relaxed mb-10"
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-5 mb-14"
          >
            <a 
              href="#projects"
              className="px-8 py-4 bg-accent hover:bg-accent-hover text-bg-primary font-bold text-sm tracking-wider uppercase rounded-full transition-all flex items-center gap-2 group hover:shadow-[0_0_30px_rgba(255,85,51,0.3)] hover:-translate-y-1"
            >
              View My Work
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            
            <a 
              href="#contact"
              className="px-8 py-4 bg-transparent border border-white/20 hover:border-accent text-white hover:text-accent font-bold text-sm tracking-wider uppercase rounded-full transition-all flex items-center gap-2 group hover:-translate-y-1 hover:bg-accent/5"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Get in Touch
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform opacity-50">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div 
            initial={{ opacity: 0, border: 'none' }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center gap-8 md:gap-14 pt-8 border-t border-white/10"
          >
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + (i * 0.1) }}
                className="flex flex-col gap-1"
              >
                <span className="text-3xl md:text-4xl font-display font-bold text-accent">{stat.value}</span>
                <span className="text-xs md:text-sm text-white font-mono tracking-wider uppercase">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* Right Column - Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
          className="col-span-1 lg:col-span-5 hidden lg:flex items-center justify-center relative"
        >
          {/* Profile Container */}
          <div className="relative w-full aspect-square max-w-[500px]">
            {/* Outline ring */}
            <div className="absolute inset-0 rounded-full border border-white/10 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-accent/20 animate-[spin_15s_linear_infinite_reverse]" />
            
            {/* Hexagon/Circle Image */}
            <div className="absolute inset-[10%] rounded-full overflow-hidden bg-bg-card border border-white/5 relative group">
               {/* 
                 For a real production site, use standard object-cover. 
                 Using the provided person image with a subtle scale effect.
               */}
               <img 
                 src="/hero-person.png" 
                 alt={personalInfo.name} 
                 className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(255,85,51,0.2)]" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-60" />
            </div>

          </div>
        </motion.div>
      </div>

    </section>
  )
}

export default Hero
