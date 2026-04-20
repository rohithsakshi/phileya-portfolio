import type { Metadata } from 'next'
import { Playfair_Display, Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${cormorant.variable} ${jost.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
