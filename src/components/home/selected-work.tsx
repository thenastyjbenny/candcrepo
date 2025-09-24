'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Play, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

const selectedWork = [
  {
    id: 1,
    title: 'Corporate Brand Video',
    category: 'Branding',
    thumbnail: '/sample-images/work-1.jpg',
    type: 'video',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 2,
    title: 'Product Launch Campaign',
    category: 'Marketing',
    thumbnail: '/sample-images/work-2.jpg',
    type: 'video',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 3,
    title: 'Event Documentation',
    category: 'Events',
    thumbnail: '/sample-images/work-3.jpg',
    type: 'image',
  },
  {
    id: 4,
    title: 'Social Media Content',
    category: 'Digital',
    thumbnail: '/sample-images/work-4.jpg',
    type: 'video',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 5,
    title: 'Testimonial Series',
    category: 'Testimonials',
    thumbnail: '/sample-images/work-5.jpg',
    type: 'video',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 6,
    title: 'Creative Photography',
    category: 'Photography',
    thumbnail: '/sample-images/work-6.jpg',
    type: 'image',
  },
]

export function SelectedWork() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Selected Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of our recent projects across various industries and formats
          </p>
          <Button asChild variant="outline">
            <Link href="/work">
              View All Work
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedWork.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg bg-background shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={work.thumbnail}
                  alt={work.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Video Overlay */}
                {work.type === 'video' && (
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="lg"
                      className="rounded-full w-16 h-16 bg-accent hover:bg-accent/90"
                      onClick={() => window.open(work.videoUrl, '_blank')}
                    >
                      <Play className="h-6 w-6 ml-1" />
                    </Button>
                  </div>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-background/80 text-foreground">
                    {work.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {work.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {work.type === 'video' ? 'Video Production' : 'Photography'}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
