import { ReactNode } from 'react'
import { Inter, Rajdhani } from 'next/font/google'
import Header from '@/components/Header'
import { getCssText } from '@/styles'
import { globalStyles } from '@/styles/global'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
})

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-rajdhani',
})

export const metadata = {
  title: 'Desenvolvedora Front-end',
  description:
    'Desenvolvedora Front-end com experiência em React.js, Next.js,JavaScript, TypeScript, Styled Components, Stitches, Material UI, SEO, Google Analytics e consumo de APIs REST.',
}

globalStyles()

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </head>
      <body className={`${inter.variable} ${rajdhani.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
