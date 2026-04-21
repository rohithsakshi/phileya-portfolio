import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Phileya Susan Koruth | Biomedical Engineer',
  description:
    'M.Sc. Biomedical Engineering at Heidelberg University. Clinical engineer focused on critical care technology, medical device safety, and healthcare systems.',
  keywords: [
    'Biomedical Engineering',
    'Medical Devices',
    'Clinical Engineer',
    'Heidelberg University',
    'ICU Technology',
    'Patient Safety',
  ],
  authors: [{ name: 'Phileya Susan Koruth' }],
  openGraph: {
    title: 'Phileya Susan Koruth | Biomedical Engineer',
    description:
      'Clinical engineer focused on critical care technology, medical device safety, and healthcare systems.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} scroll-smooth`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
