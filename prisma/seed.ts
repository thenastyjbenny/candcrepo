import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create sample media items
  const mediaItems = await Promise.all([
    prisma.mediaItem.upsert({
      where: { slug: 'hero-video-1' },
      update: {},
      create: {
        title: 'Brand Video Showcase',
        slug: 'hero-video-1',
        type: 'VIDEO',
        provider: 'YOUTUBE',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        thumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        isFeatured: true,
        order: 1,
        tags: ['hero', 'brand', 'showcase'],
      },
    }),
    prisma.mediaItem.upsert({
      where: { slug: 'portfolio-image-1' },
      update: {},
      create: {
        title: 'Creative Photography',
        slug: 'portfolio-image-1',
        type: 'IMAGE',
        provider: 'MINIO',
        url: '/sample-images/creative-photo-1.jpg',
        thumbnailUrl: '/sample-images/creative-photo-1-thumb.jpg',
        isFeatured: true,
        order: 2,
        tags: ['photography', 'creative', 'portfolio'],
      },
    }),
    prisma.mediaItem.upsert({
      where: { slug: 'portfolio-image-2' },
      update: {},
      create: {
        title: 'Event Coverage',
        slug: 'portfolio-image-2',
        type: 'IMAGE',
        provider: 'MINIO',
        url: '/sample-images/event-coverage-1.jpg',
        thumbnailUrl: '/sample-images/event-coverage-1-thumb.jpg',
        isFeatured: true,
        order: 3,
        tags: ['event', 'coverage', 'portfolio'],
      },
    }),
  ])

  // Create sample packages
  const packages = await Promise.all([
    prisma.package.upsert({
      where: { slug: 'starter-package' },
      update: {},
      create: {
        name: 'Starter Package',
        slug: 'starter-package',
        price: 150000, // $1,500.00
        description: 'Perfect for small businesses looking to establish their online presence',
        features: [
          '2-3 minute promotional video',
          'Basic color correction',
          'Social media optimized versions',
          '1 revision round',
        ],
        isFeatured: true,
        order: 1,
      },
    }),
    prisma.package.upsert({
      where: { slug: 'professional-package' },
      update: {},
      create: {
        name: 'Professional Package',
        slug: 'professional-package',
        price: 350000, // $3,500.00
        description: 'Comprehensive video production for growing businesses',
        features: [
          '5-7 minute professional video',
          'Advanced color grading',
          'Motion graphics and animations',
          'Multiple format delivery',
          '3 revision rounds',
          'Behind-the-scenes content',
        ],
        isFeatured: true,
        order: 2,
      },
    }),
    prisma.package.upsert({
      where: { slug: 'premium-package' },
      update: {},
      create: {
        name: 'Premium Package',
        slug: 'premium-package',
        price: 750000, // $7,500.00
        description: 'Full-service video production with premium features',
        features: [
          '10+ minute cinematic video',
          'Professional color grading',
          'Custom motion graphics',
          'Drone footage (if applicable)',
          'Multiple format delivery',
          'Unlimited revisions',
          'Extended warranty',
          'Priority support',
        ],
        isFeatured: true,
        order: 3,
      },
    }),
  ])

  console.log('Seed data created successfully!')
  console.log('Media items:', mediaItems.length)
  console.log('Packages:', packages.length)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
