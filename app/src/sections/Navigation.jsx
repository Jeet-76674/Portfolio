import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '../data/portfolio'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1))
      
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      setIsMobileMenuOpen(false)
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          isScrolled 
            ? 'py-4 bg-[#0d0d0d]/85 backdrop-blur-[20px] border-b border-white/5 shadow-lg shadow-black/20' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, '#home')}
            className="text-3xl font-display font-bold text-white flex items-center tracking-tighter group outline-none"
          >
            JT<span className="text-accent animate-pulse-dot group-hover:animate-none group-hover:scale-125 transition-transform">•</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="relative group py-2"
              >
                <div className={`flex items-baseline gap-1.5 text-[0.8rem] font-mono tracking-wider transition-colors ${
                  activeSection === link.href.substring(1) ? 'text-white' : 'text-txt-secondary hover:text-white'
                }`}>
                  <span className="text-accent-muted font-number">{link.num}</span>
                  <span>{link.name}</span>
                </div>
                {/* Active Indicator Underline */}
                {activeSection === link.href.substring(1) && (
                  <motion.div 
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-accent"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {/* Hover Underline */}
                <div className={`absolute -bottom-1 left-0 w-full h-[2px] bg-white/20 origin-left scale-x-0 transition-transform duration-300 ${
                 activeSection !== link.href.substring(1) ? 'group-hover:scale-x-100' : '' 
                }`} />
              </a>
            ))}
          </div>

          {/* Hire Me Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a 
              href="#contact" 
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="hidden sm:flex relative items-center justify-center w-[90px] h-[90px] rounded-full group outline-none"
            >
              {/* Rotating Border */}
              <div className="absolute inset-0 border border-white/20 rounded-full group-hover:border-accent/40 transition-colors pointer-events-none" />
              <div className="absolute inset-0 rounded-full border-t border-r border-accent animate-rotate-border opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <span className="text-[0.7rem] font-bold tracking-widest text-white group-hover:text-accent transition-colors flex flex-col items-center gap-0.5">
                HIRE ME
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-1 transition-transform">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden text-white p-2 outline-none"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[101] lg:hidden"
            />
            
            {/* Drawer */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-[400px] bg-bg-secondary border-l border-white/5 shadow-2xl z-[102] lg:hidden pr-4 flex flex-col"
            >
              <div className="flex justify-between items-center p-6 border-b border-white/5">
                <span className="text-xl font-display font-bold">MENU</span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-accent bg-accent/10 rounded-full hover:bg-accent/20 transition-colors outline-none"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="flex items-center gap-4 text-xl font-display font-bold group outline-none"
                  >
                    <span className="text-accent text-sm font-mono tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">{link.num}</span>
                    <span className={`${activeSection === link.href.substring(1) ? 'text-white' : 'text-txt-secondary group-hover:text-white'} transition-colors`}>
                      {link.name}
                    </span>
                  </motion.a>
                ))}
              </div>

              <div className="p-6 border-t border-white/5 text-sm text-txt-muted font-mono">
                hello@jeettetar.dev
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
