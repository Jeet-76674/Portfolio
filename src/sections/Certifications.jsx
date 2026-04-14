import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { certifications } from '../data/portfolio'
import { X, ExternalLink, ChevronLeft, ChevronRight, Award } from 'lucide-react'

// Square Image Tile Component
const CertTile = ({ cert, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => onClick(index)}
      className="group relative w-full aspect-square rounded-2xl overflow-hidden cursor-none bg-bg-card border border-white/5"
    >
      <style>{`
        @keyframes pulse-badge {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.55; }
        }
      `}</style>
      
      {/* Placeholder Image / Gradient Background using cert color */}
      <div 
        className="absolute inset-0 opacity-20 mix-blend-screen transition-transform duration-700 group-hover:scale-105"
        style={{
          background: `radial-gradient(circle at top right, ${cert.color}, transparent 60%)`
        }}
      />
      
      {/* Large Icon Background Placeholder */}
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-30 transform group-hover:scale-110 transition-transform duration-700">
        <span className="text-8xl">{cert.icon}</span>
      </div>

      {/* Dark Overlay gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

      {/* Corner Badge */}
      <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-black/40 flex items-center justify-center backdrop-blur-md border border-white/10">
        <Award size={14} className="text-accent" />
      </div>

      {cert.status === 'completed' && (
        <div 
          className="absolute top-3 right-3 font-mono tracking-wide z-10"
          style={{
            background: 'rgba(74, 222, 128, 0.12)',
            border: '1px solid rgba(74, 222, 128, 0.35)',
            color: '#4ade80',
            fontSize: '10px',
            padding: '3px 8px',
            borderRadius: '20px'
          }}
        >
          ✓ Completed
        </div>
      )}
      
      {cert.status === 'inprogress' && (
        <div 
          className="absolute top-3 right-3 font-mono tracking-wide z-10"
          style={{
            background: 'rgba(251, 191, 36, 0.12)',
            border: '1px solid rgba(251, 191, 36, 0.35)',
            color: '#fbbf24',
            fontSize: '10px',
            padding: '3px 8px',
            borderRadius: '20px',
            animation: 'pulse-badge 2s ease-in-out infinite'
          }}
        >
          ⟳ In Progress
        </div>
      )}

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-start translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-lg font-display font-bold text-white mb-1 line-clamp-2">
          {cert.title}
        </h3>
        <p className="text-accent text-sm font-medium mb-1">{cert.issuer}</p>
        <p className="text-txt-muted text-xs font-mono mb-4">
          {cert.status === 'inprogress' ? (
            <span style={{ color: '#fbbf24', fontStyle: 'italic' }}>In Progress</span>
          ) : (
            cert.date
          )}
        </p>
        
        {/* Hidden button that slides up */}
        <div className="flex items-center gap-2 text-white font-bold text-xs tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          View Certificate
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform translate-x-0 group-hover:translate-x-1 transition-transform">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </div>
    </motion.div>
  )
}

// Modal Component
const CertModal = ({ cert, isOpen, onClose, onNext, onPrev }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose, onNext, onPrev])

  return (
    <AnimatePresence>
      {isOpen && cert && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-md cursor-none"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-[720px] bg-bg-card rounded-2xl border border-white/10 shadow-2xl overflow-hidden z-10 font-sans"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black text-white rounded-full transition-colors outline-none"
            >
              <X size={20} />
            </button>

            {/* Certificate Preview Placeholder / Image */}
            <div className="w-full aspect-[4/3] relative bg-[#0a0a0a] flex items-center justify-center overflow-hidden border-b border-white/5">
              {cert.image ? (
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-contain p-4 bg-black/50" 
                />
              ) : (
                <>
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: `radial-gradient(circle at center, ${cert.color}, transparent 70%)`
                    }}
                  />
                  <div className="relative z-10 flex flex-col items-center text-center p-6 border-4 border-white/10 m-8 w-[calc(100%-64px)] h-[calc(100%-64px)] justify-center bg-black/40 backdrop-blur-sm">
                    <span className="text-6xl mb-4">{cert.icon}</span>
                    <h2 className="text-2xl font-display font-bold text-white mb-2">{cert.title}</h2>
                    <p className="text-accent font-medium mb-2">Presented by {cert.issuer}</p>
                    
                    {cert.status === 'completed' ? (
                      <p style={{ color: '#4ade80', fontSize: '13px' }}>✓ Completed — {cert.date}</p>
                    ) : (
                      <p style={{ color: '#fbbf24', fontSize: '13px', fontStyle: 'italic' }}>⟳ Currently in progress</p>
                    )}
                    
                    {/* Decorative lines */}
                    <div className="w-24 h-[1px] bg-white/20 mt-8 mb-2" />
                    <p className="text-txt-muted text-xs font-mono">Verified Achievement</p>
                  </div>
                </>
              )}
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 flex flex-col sm:flex-row justify-between items-start gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-display font-bold text-white mb-2">{cert.title}</h3>
                <div className="flex items-center gap-3 text-sm">
                  <span className="font-semibold text-accent">{cert.issuer}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="text-txt-secondary font-mono">
                    {cert.status === 'inprogress' ? (
                      <span style={{ color: '#fbbf24', fontStyle: 'italic' }}>In Progress</span>
                    ) : (
                      cert.date
                    )}
                  </span>
                </div>
                <p className="text-txt-secondary mt-4 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
              
              {cert.status === 'inprogress' ? (
                <button
                  disabled
                  className="w-full sm:w-auto px-6 py-3 bg-white/5 border-white/10 border text-white/40 font-bold text-sm tracking-widest uppercase rounded-full flex items-center justify-center gap-2 outline-none flex-shrink-0 cursor-not-allowed opacity-40 hover:bg-white/5 pointer-events-none"
                >
                  Certificate Pending
                </button>
              ) : (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-6 py-3 bg-accent hover:bg-accent-hover text-white font-bold text-sm tracking-widest uppercase rounded-full transition-colors flex items-center justify-center gap-2 outline-none flex-shrink-0"
                >
                  Verify <ExternalLink size={16} />
                </a>
              )}
            </div>

            {/* Navigation Bar */}
            <div className="w-full bg-bg-primary/50 p-4 border-t border-white/5 flex items-center justify-between">
              <button 
                onClick={onPrev}
                className="flex items-center gap-2 text-sm font-mono text-txt-secondary hover:text-white transition-colors outline-none"
              >
                <ChevronLeft size={16} /> Previous
              </button>
              <div className="text-xs font-mono text-txt-muted tracking-[0.2em]">
                CERTIFICATE ID: {cert.id.toString().padStart(6, '0')}
              </div>
              <button 
                onClick={onNext}
                className="flex items-center gap-2 text-sm font-mono text-txt-secondary hover:text-white transition-colors outline-none"
              >
                Next <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}


const Certifications = () => {
  const [activeCert, setActiveCert] = useState(null)
  
  const sortedCerts = [...certifications].sort((a, b) => 
    a.status === 'completed' ? -1 : 1
  )

  const handleOpenModal = (index) => {
    setActiveCert(sortedCerts[index])
  }

  const handleCloseModal = () => {
    setActiveCert(null)
  }

  const handleNext = () => {
    if (!activeCert) return
    const currentIndex = sortedCerts.findIndex(c => c.id === activeCert.id)
    const nextIndex = currentIndex === sortedCerts.length - 1 ? 0 : currentIndex + 1
    setActiveCert(sortedCerts[nextIndex])
  }

  const handlePrev = () => {
    if (!activeCert) return
    const currentIndex = sortedCerts.findIndex(c => c.id === activeCert.id)
    const prevIndex = currentIndex === 0 ? sortedCerts.length - 1 : currentIndex - 1
    setActiveCert(sortedCerts[prevIndex])
  }

  return (
    <>
      <section id="certifications" className="py-32 relative bg-bg-secondary">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
          
          {/* Header */}
          <div className="mb-20 text-center flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[1px] w-8 bg-accent" />
              <span className="text-sm font-mono tracking-widest text-accent uppercase">
                Credentials
              </span>
              <div className="h-[1px] w-8 bg-accent" />
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[clamp(2.5rem,4vw,4rem)] font-display font-bold leading-[1.1] text-white tracking-[-0.02em]"
            >
              Verified <span className="text-accent">Achievements</span>
            </motion.h2>
          </div>

          {/* Grid Layout - Masonry style approximation using flex grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {sortedCerts.map((cert, index) => (
              <CertTile 
                key={cert.id} 
                cert={cert} 
                index={index} 
                onClick={handleOpenModal} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Renders modal physically outside standard flow via fixed positioning */}
      <CertModal 
        cert={activeCert}
        isOpen={activeCert !== null}
        onClose={handleCloseModal}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </>
  )
}

export default Certifications
