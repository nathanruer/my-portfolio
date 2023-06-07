import Footer from './components/Footer'
import Navbar from './components/navbar/Navbar'
import Provider from './context/ThemeProvider'
import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio - Nathan Ruer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-light dark:bg-dark text-dark dark:text-light`}>
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
