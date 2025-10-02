import Navigation from '@/components/Navigation'
import PricingHeader from '@/components/feat/pricing/PricingHeader'
import PricingCards from '@/components/feat/pricing/PricingCards'
import PricingFAQ from '@/components/feat/pricing/PricingFAQ'
import PricingContact from '@/components/feat/pricing/PricingContact'

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-blue-100">
      <Navigation variant="minimal" />
      <div className="container mx-auto px-4 py-16">
        <PricingHeader />
        <PricingCards />
        <PricingFAQ />
        <PricingContact />
      </div>
    </div>
  )
}
