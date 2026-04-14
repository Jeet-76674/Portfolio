import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../data/portfolio'

const Skills = () => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-bg-secondary">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10" ref={containerRef}>
        
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-8 bg-accent" />
            <span className="text-sm font-mono tracking-widest text-accent uppercase">
              Skills
            </span>
            <div className="h-[1px] w-8 bg-accent" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2.5rem,4vw,3.5rem)] font-display font-bold leading-[1.1] text-white tracking-[-0.02em]"
          >
            Technologies I <span className="text-accent">work with</span>
          </motion.h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 + (index * 0.05) }}
              className="bg-bg-card rounded-xl p-6 border border-white/5 shadow-md relative overflow-hidden group"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="flex justify-between items-center mb-4 relative z-10">
                <span className="text-lg font-display font-semibold text-white">
                  {skill.name}
                </span>
                <span className="text-accent font-mono font-medium">
                  {skill.pct}%
                </span>
              </div>
              
              {/* Progress Bar Track */}
              <div className="h-2 w-full bg-bg-primary rounded-full overflow-hidden relative z-10">
                {/* Animated Fill */}
                <motion.div 
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.pct}%` } : { width: 0 }}
                  transition={{ 
                    duration: 1.2, 
                    delay: 0.3 + (index * 0.1), 
                    ease: [0.4, 0, 0.2, 1] 
                  }}
                  className="h-full rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #ff5533, #ff8866)'
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills
