import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container">
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">C</span>
              </div>
              <span className="font-bold text-xl text-foreground">Content on Cue Media</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Professional video production services that bring your vision to life.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <nav className="space-y-2">
              <Link href="/who-we-are" className="block text-muted-foreground hover:text-foreground transition-colors">
                Who We Are
              </Link>
              <Link href="/video-packages" className="block text-muted-foreground hover:text-foreground transition-colors">
                Video Packages
              </Link>
              <Link href="/work" className="block text-muted-foreground hover:text-foreground transition-colors">
                Our Work
              </Link>
              <Link href="/get-in-touch" className="block text-muted-foreground hover:text-foreground transition-colors">
                Get in Touch
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Services</h3>
            <nav className="space-y-2">
              <span className="block text-muted-foreground">Promotional Videos</span>
              <span className="block text-muted-foreground">Event Coverage</span>
              <span className="block text-muted-foreground">Social Media Content</span>
              <span className="block text-muted-foreground">Cinematic Production</span>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span className="text-sm">hello@contentoncue.example</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span className="text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Your City, State</span>
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Content on Cue Media. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
