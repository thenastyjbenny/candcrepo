import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get in Touch - Content on Cue Media',
  description: 'Contact us to discuss your video production needs and get a custom quote for your project.',
}

export default function GetInTouchPage() {
  return (
    <div className="section-padding">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us to discuss your video production needs and get a custom quote for your project.
          </p>
          <div className="bg-muted/50 rounded-lg p-8">
            <p className="text-muted-foreground">
              This page is coming soon. We&apos;re working on creating a comprehensive contact form and information.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
