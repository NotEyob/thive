import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    // Check if already subscribed
    const { data: existing } = await supabase
      .from('subscribers')
      .select('email')
      .eq('email', email)
      .single()

    if (existing) {
      return NextResponse.json({ error: 'Already subscribed' }, { status: 400 })
    }

    // Save to Supabase
    const { error: dbError } = await supabase
      .from('subscribers')
      .insert([{ email }])

    if (dbError) throw dbError

    // Send welcome email
    await resend.emails.send({
      from: 'THIVE <onboarding@resend.dev>',
      to: email,
      subject: 'You\'re in. — THIVE',
      html: `
        <div style="background:#080808; color:#f0ede6; padding:60px 40px; font-family:monospace; max-width:600px; margin:0 auto;">
          <h1 style="font-size:48px; letter-spacing:0.3em; margin-bottom:8px;">THIVE</h1>
          <div style="width:40px; height:2px; background:#c8001a; margin-bottom:40px;"></div>
          <h2 style="font-size:24px; letter-spacing:0.1em; margin-bottom:16px;">You're in.</h2>
          <p style="font-size:13px; line-height:2; color:rgba(240,237,230,0.6); margin-bottom:40px;">
            Drop alerts. New releases. Nothing else.<br/>
            When we drop, you'll be the first to know.
          </p>
          <div style="border-top:1px solid #2e2e2e; padding-top:24px; font-size:11px; color:rgba(240,237,230,0.25); letter-spacing:0.15em; text-transform:uppercase;">
            © 2026 THIVE — Made for people who dress smart and think smart.
          </div>
        </div>
      `
    })

    return NextResponse.json({ success: true })

  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}