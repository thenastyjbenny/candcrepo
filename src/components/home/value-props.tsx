'use client'

import { motion } from 'framer-motion'
import { Camera, Users, Zap, Award } from 'lucide-react'

const valueProps = [
  {
    icon: Camera,
    title: 'Professional Equipment',
    description: 'We use state-of-the-art cameras, lighting, and audio equipment to ensure the highest quality production values for your content.',
  },
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'Our team of skilled videographers, editors, and creative professionals brings years of experience to every project.',
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description: 'We understand the importance of timely delivery and work efficiently to get your content to you when you need it.',
  },
  {
    icon: Award,
    title: 'Award-Winning Quality',
    description: 'Our work has been recognized by industry professionals and has helped our clients achieve their business goals.',
  },
]

export function ValueProps() {
  return (
    <section className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose Content on Cue Media?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine technical expertise with creative vision to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <prop.icon className="h-8 w-8" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {prop.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {prop.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
