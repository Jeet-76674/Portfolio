import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experience } from '../data/portfolio'

const ExperienceCard = ({ exp, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const isEven = index % 2 === 0

  return (
    <div 
      ref={ref}
      className={`relative w-full mb-16 lg:mb-24 flex justify-between items-center ${
        isEven ? 'flex-col lg:flex-row-reverse' : 'flex-col lg:flex-row'
      }`}
    >
      {/* Invisible spacer for the other side in desktop layout */}
      <div className="hidden lg:block w-[45%]" />

      {/* Timeline Dot with Pulse Effect */}
      <div className="absolute left-4 lg:left-1/2 transform -translate-x-[50%] flex items-center justify-center z-20">
        <motion.div 
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="w-5 h-5 rounded-full bg-accent border-4 border-bg-primary relative"
        >
          {isInView && (
             <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-30 origin-center" style={{ transform: 'scale(2.5)' }} />
          )}
        </motion.div>
      </div>

      {/* Content Card */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? 50 : -50, y: 30 }}
        animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.1, type: 'spring', damping: 20 }}
        className="w-full lg:w-[45%] pl-12 lg:pl-0 mt-2 lg:mt-0"
      >
        <div className={`glass-card p-8 rounded-2xl relative ${isEven ? 'lg:text-left' : 'lg:text-right'}`}>
          <div className={`flex flex-col mb-4 ${isEven ? 'items-start' : 'lg:items-end items-start'}`}>
            <span className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 text-accent font-mono text-sm rounded-full mb-4">
              {exp.period}
            </span>
            <h3 className="text-2xl font-display font-bold text-white mb-1">
              {exp.role}
            </h3>
            <span className="text-lg text-txt-muted font-medium">
              {exp.company}
            </span>
          </div>
          
          <p className="text-txt-secondary leading-relaxed mb-6">
            {exp.description}
          </p>
          
          <div className={`flex flex-wrap gap-2 ${isEven ? 'justify-start' : 'lg:justify-end justify-start'}`}>
            {exp.tags.map(tag => (
              <span key={tag} className="text-xs font-mono text-txt-secondary bg-white/5 px-2 py-1 rounded border border-white/5">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const Experience = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="experience" ref={sectionRef} className="py-32 relative overflow-hidden bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-24 text-center flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-8 bg-accent" />
            <span className="text-sm font-mono tracking-widest text-accent uppercase">
              Experience
            </span>
            <div className="h-[1px] w-8 bg-accent" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2.5rem,4vw,4rem)] font-display font-bold leading-[1.1] text-white tracking-[-0.02em]"
          >
            My <span className="text-accent">Journey</span>
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 lg:left-1/2 top-4 bottom-4 w-[2px] bg-white/5 transform lg:-translate-x-1/2 z-10" />
          
          {/* Cards */}
          <div className="relative z-20">
            {experience.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience
