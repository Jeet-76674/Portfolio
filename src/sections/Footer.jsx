import { personalInfo } from '../data/portfolio'

const Footer = () => {
  return (
    <footer className="py-12 bg-bg-secondary relative border-t border-accent/20">
      {/* Decorative top line gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent" />
      
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col items-center text-center">
        <p className="text-txt-secondary font-display font-medium mb-2">
          Designed & Built by <span className="text-white">{personalInfo.name}</span>
        </p>
        <p className="text-txt-muted font-mono text-sm">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
