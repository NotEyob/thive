

export default function Terms() {
  return (
    <main style={{ background: 'var(--black)', minHeight: '100vh', color: 'var(--white)' }}>
      
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '140px 24px 80px' }}>

        <p style={{ fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '16px' }}>Legal</p>
        <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(48px, 6vw, 80px)', letterSpacing: '0.05em', marginBottom: '48px' }}>Terms & Conditions</h1>

        <div style={{ borderTop: '1px solid var(--mid)', paddingTop: '48px', display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {[
            {
              title: 'Returns & Refunds',
              body: 'We accept returns within 14 days of delivery. Items must be unworn, unwashed, and in original condition with tags attached. Sale items are final sale and cannot be returned. To initiate a return, contact us at returns@thive.com with your order number.'
            },
            {
              title: 'Shipping',
              body: 'Orders are processed within 3-5 business days. Shipping times vary by location. We are not responsible for delays caused by carriers or customs. Once an order has shipped, we cannot modify or cancel it.'
            },
            {
              title: 'Payment',
              body: 'We accept all major credit cards and PayPal. All prices are listed in USD. Payment is charged at the time of purchase. We reserve the right to cancel any order at our discretion and issue a full refund.'
            },
            {
              title: 'Intellectual Property',
              body: 'All content on this site including logos, graphics, product designs, and text is the property of THIVE and may not be reproduced, copied, or used without express written permission.'
            },
            {
              title: 'Limitation of Liability',
              body: 'THIVE is not liable for any indirect, incidental, or consequential damages arising from the use of our products or website. Our liability is limited to the purchase price of the product in question.'
            },
            {
              title: 'Changes to Terms',
              body: 'We reserve the right to update these terms at any time. Continued use of the site after changes are posted constitutes your acceptance of the revised terms. If you have questions, contact us at legal@thive.com.'
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