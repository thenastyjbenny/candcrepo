'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { Play, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const featuredMedia = [
  {
    id: 1,
    type: 'video',
    title: 'Brand Showcase Video',
    thumbnail: '/sample-images/video-thumb-1.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: 'A cinematic showcase of our latest brand campaign',
  },
  {
    id: 2,
    type: 'image',
    title: 'Creative Photography',
    thumbnail: '/sample-images/creative-photo-1.jpg',
    description: 'Professional photography that captures the essence of your brand',
  },
  {
    id: 3,
    type: 'video',
    title: 'Event Coverage',
    thumbnail: '/sample-images/event-thumb-1.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: 'Comprehensive coverage of corporate events and conferences',
  },
  {
    id: 4,
    type: 'image',
    title: 'Product Photography',
    thumbnail: '/sample-images/product-photo-1.jpg',
    description: 'High-quality product photography for e-commerce and marketing',
  },
]

export function FeaturedMedia() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredMedia.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredMedia.length) % featuredMedia.length)
  }

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
            Featured Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of professional video production and creative content
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Media Display */}
          <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
            <Image
              src={featuredMedia[currentIndex].thumbnail}
              alt={featuredMedia[currentIndex].title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
            
            {/* Video Overlay */}
            {featuredMedia[currentIndex].type === 'video' && (
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <Button
                  size="lg"
                  className="rounded-full w-16 h-16 bg-accent hover:bg-accent/90"
                  onClick={() => window.open(featuredMedia[currentIndex].videoUrl, '_blank')}
                >
                  <Play className="h-6 w-6 ml-1" />
                </Button>
              </div>
            )}
            
            {/* Media Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {featuredMedia[currentIndex].title}
              </h3>
              <p className="text-white/80">
                {featuredMedia[currentIndex].description}
              </p>
            </div>
          </div>

          {/* Navigation Controls */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center space-x-4 mt-8">
          {featuredMedia.map((media, index) => (
            <button
              key={media.id}
              onClick={() => setCurrentIndex(index)}
              className={`relative w-16 h-16 rounded-lg overflow-hidden transition-all ${
                index === currentIndex
                  ? 'ring-2 ring-accent scale-110'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <Image
                src={media.thumbnail}
                alt={media.title}
                fill
                className="object-cover"
                sizes="64px"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
