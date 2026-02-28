import Navbar from '@/components/Navbar'

export default function Privacy() {
  return (
    <main style={{ background: 'var(--black)', minHeight: '100vh', color: 'var(--white)' }}>
      <Navbar />
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '140px 24px 80px' }}>

        <p style={{ fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '16px' }}>Legal</p>
        <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(48px, 6vw, 80px)', letterSpacing: '0.05em', marginBottom: '48px' }}>Privacy Policy</h1>

        <div style={{ borderTop: '1px solid var(--mid)', paddingTop: '48px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {[
            {
              title: 'Information We Collect',
              body: 'When you place an order or sign up for our newsletter, we collect personal information including your name, email address, shipping address, and payment details. Payment information is processed securely and never stored on our servers.'
            },
            {
              title: 'How We Use Your Information',
              body: 'We use the information we collect to fulfill orders, send order confirmations and shipping updates, and occasionally send newsletter emails if you have opted in. We do not sell your personal information to third parties.'
            },
            {
              title: 'Third Parties',
              body: 'We use trusted third-party services to operate our store, including Shopify for order processing, Stripe for payments, and Klaviyo for email marketing. These services have their own privacy policies governing the use of your information.'
            },
            {
              title: 'Cookies',
              body: 'Our website uses cookies to improve your browsing experience, remember your cart, and analyze site traffic. You can disable cookies in your browser settings, though this may affect certain features of the site.'
            },
            {
              title: 'Your Rights',
              body: 'You have the right to request access to, correction of, or deletion of your personal data at any time. To make a request, contact us at privacy@thive.com. We will respond within 30 days.'
            },
            {
              title: 'Changes to This Policy',
              body: 'We may update this privacy policy from time to time. Any changes will be posted on this page with an updated date. Continued use of the site after changes constitutes acceptance of the new policy.'
            },
          ].map(({ title, body }) => (
            <div key={title} style={{ borderBottom: '1px solid var(--mid)', paddingBottom: '40px' }}>
              <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.6rem', letterSpacing: '0.05em', marginBottom: '16px' }}>{title}</h2>
              <p style={{ fontSize: '0.7rem', lineHeight: 2, color: 'rgba(240,237,230,0.6)', letterSpacing: '0.03em' }}>{body}</p>
            </div>
          ))}
        </div>

        <p style={{ fontSize: '0.55rem', letterSpacing: '0.15em', color: 'rgba(240,237,230,0.25)', textTransform: 'uppercase', marginTop: '40px' }}>Last updated: February 2026</p>
      </div>
    </main>
  )
}