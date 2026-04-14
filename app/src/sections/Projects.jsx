import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects } from '../data/portfolio'
import { ExternalLink, Github } from 'lucide-react'

// Custom hook / component wrapper for 3D tilt
const TiltCard = ({ children, className }) => {
  const cardRef = useRef(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const centerX = rect.left + width / 2
    const centerY = rect.top + height / 2
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY

    // Max rotation 8 degrees
    const rotateX = (mouseY / (height / 2)) * -8
    const rotateY = (mouseX / (width / 2)) * 8

    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseEnter = () => setIsHovering(true)

  const handleMouseLeave = () => {
    setIsHovering(false)
    setRotation({ x: 0, y: 0 })
  }

  return (
    <div 
      style={{ perspective: '1000px' }}
      className={`relative ${className}`}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: isHovering ? 'none' : 'transform 0.5s ease',
          transformStyle: 'preserve-3d',
        }}
        className="w-full h-full relative"
      >
        {children}
      </div>
    </div>
  )
}

const Projects = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="projects" ref={sectionRef} className="py-32 relative bg-bg-primary">
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
              Selected Work
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2.5rem,5vw,4rem)] font-display font-bold leading-[1.1] text-white tracking-[-0.02em]"
          >
            Featured <span className="text-accent">Projects</span>
          </motion.h2>
        </div>

        {/* 3-Column Grid representing full contained cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <TiltCard className="h-[560px]">
                <div className="absolute inset-0 bg-bg-card rounded-2xl border border-white/5 overflow-hidden flex flex-col group shadow-lg">
                  
                  {/* Image Section (55% height approx) */}
                  <div className="relative h-[250px] w-full overflow-hidden bg-[#111]">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="px-6 py-3 bg-accent text-white font-bold text-sm tracking-wider uppercase rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 pointer-events-auto shadow-lg"
                      >
                        View Project →
                      </a>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex-1 flex flex-col relative z-20 bg-bg-card translate-z-[20px]">
                    
                    {/* Meta */}
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-mono font-semibold tracking-[2px] text-accent uppercase">
                        {project.category}
                      </span>
                      <span className="text-sm text-txt-muted font-mono">
                        {project.year}
                      </span>
                    </div>

                    {/* Title & Desc */}
                    <h3 className="text-2xl font-display font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-txt-secondary text-sm leading-relaxed mb-6 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="mt-auto">
                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map(tech => (
                          <span 
                            key={tech} 
                            className="px-3 py-1 bg-accent/10 border border-accent/30 text-accent font-mono text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Footer Actions */}
                      <div className="flex gap-4 items-center">
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full text-sm font-medium transition-colors"
                          aria-label={`${project.title} GitHub Source`}
                        >
                          <Github size={16} />
                          <span>Source</span>
                        </a>
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-2 px-4 py-2 bg-accent hover:bg-accent-hover text-white rounded-full text-sm font-medium transition-colors flex-1 text-center"
                          aria-label={`${project.title} Live Preview`}
                        >
                          <ExternalLink size={16} />
                          <span>Live Preview</span>
                        </a>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects
