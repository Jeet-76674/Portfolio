import { motion } from 'framer-motion'
import { services } from '../data/portfolio'

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-accent" />
            <span className="text-sm font-mono tracking-widest text-accent uppercase">
              About Me
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2.5rem,5vw,4rem)] font-display font-bold leading-[1.1] text-white tracking-[-0.02em]"
          >
            I create <span className="text-accent">digital experiences</span> that make an impact.
          </motion.h2>
        </div>

        {/* Content Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-txt-secondary leading-relaxed"
          >
            <p className="mb-6">
              My journey in web development started with a curiosity about how websites and applications work. As a Computer Science student, I have been actively learning and building projects using modern web technologies.
            </p>
            <p className="mb-6">
              I specialize in creating responsive and user-friendly web applications using HTML, CSS, JavaScript, and React. I focus on writing clean code and building practical projects that solve real-world problems.
            </p>
            <p>
              Currently, I am learning Java Full Stack development to strengthen my backend skills and work towards becoming a complete full stack developer.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-txt-secondary leading-relaxed"
          >
            <p className="mb-6">
              I enjoy solving problems, exploring new technologies, and continuously improving my development skills. I believe in consistency, learning by building projects, and writing maintainable code.
            </p>
            <p>
              In the future, I aim to grow as a full stack developer and expand my knowledge in DevOps and AWS to build scalable and efficient applications.
            </p>
          </motion.div>
        </div>

        {/* Services / Capabilities Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-8 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="glass-card p-8 rounded-2xl group relative overflow-hidden"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="text-3xl font-mono text-white/20 font-bold mb-6 group-hover:text-accent/30 transition-colors duration-500">
                {service.num}
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-txt-muted text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default About
