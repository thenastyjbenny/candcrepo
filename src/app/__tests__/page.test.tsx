import { render, screen } from '@testing-library/react'
import HomePage from '@/app/page'

// Mock the components to avoid complex dependencies
jest.mock('@/components/home/hero', () => ({
  Hero: () => <div data-testid="hero">Hero Component</div>
}))
jest.mock('@/components/home/featured-media', () => ({
  FeaturedMedia: () => <div data-testid="featured-media">Featured Media Component</div>
}))
jest.mock('@/components/home/value-props', () => ({
  ValueProps: () => <div data-testid="value-props">Value Props Component</div>
}))
jest.mock('@/components/home/selected-work', () => ({
  SelectedWork: () => <div data-testid="selected-work">Selected Work Component</div>
}))
jest.mock('@/components/home/lead-capture', () => ({
  LeadCapture: () => <div data-testid="lead-capture">Lead Capture Component</div>
}))

describe('HomePage', () => {
  it('renders all home page sections', () => {
    render(<HomePage />)
    
    expect(screen.getByTestId('hero')).toBeInTheDocument()
    expect(screen.getByTestId('featured-media')).toBeInTheDocument()
    expect(screen.getByTestId('value-props')).toBeInTheDocument()
    expect(screen.getByTestId('selected-work')).toBeInTheDocument()
    expect(screen.getByTestId('lead-capture')).toBeInTheDocument()
  })
})
