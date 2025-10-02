import ContactHeader from '@/components/feat/contact/ContactHeader'
import ContactForm from '@/components/feat/contact/ContactForm'
import SupportInfo from '@/components/feat/contact/SupportInfo'
import CompanyInfo from '@/components/feat/contact/CompanyInfo'
import FAQSection from '@/components/feat/contact/FAQSection'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-yellow-50 to-blue-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <ContactHeader />

          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm />

            <div className="space-y-6">
              <SupportInfo />
              <CompanyInfo />
              <FAQSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
