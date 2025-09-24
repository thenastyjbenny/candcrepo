import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Video Packages - Content on Cue Media',
  description: 'Explore our video production packages designed to meet your business needs and budget.',
}

export default function VideoPackagesPage() {
  return (
    <div className="section-padding">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Video Packages
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Explore our video production packages designed to meet your business needs and budget.
          </p>
          <div className="bg-muted/50 rounded-lg p-8">
            <p className="text-muted-foreground">
              This page is coming soon. We&apos;re working on creating detailed package information and pricing.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
