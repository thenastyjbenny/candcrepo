import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Work - Content on Cue Media',
  description: 'Browse our portfolio of professional video production and creative content across various industries.',
}

export default function WorkPage() {
  return (
    <div className="section-padding">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Our Work
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Browse our portfolio of professional video production and creative content across various industries.
          </p>
          <div className="bg-muted/50 rounded-lg p-8">
            <p className="text-muted-foreground">
              This page is coming soon. We&apos;re working on creating a comprehensive portfolio showcase.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
