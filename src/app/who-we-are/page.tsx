import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Who We Are - Content on Cue Media',
  description: 'Learn about our team, mission, and the values that drive our creative work.',
}

export default function WhoWeArePage() {
  return (
    <div className="section-padding">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Who We Are
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Learn about our team, mission, and the values that drive our creative work.
          </p>
          <div className="bg-muted/50 rounded-lg p-8">
            <p className="text-muted-foreground">
              This page is coming soon. We&apos;re working on creating compelling content about our team and company story.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
