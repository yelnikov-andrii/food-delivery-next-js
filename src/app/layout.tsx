import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import styles from './layout.module.scss';
import { UpButton } from '@/components/ui/upbuttonComponents/UpButton';
import SessionProviderWrapper from '@/components/provider/SessionProviderWrapper';
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: 'Food delivery',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SessionProviderWrapper>
          <Header />
          <div className={styles.container}>
            {children}
          </div>
          <UpButton />
          <Footer />
          <Analytics />
        </SessionProviderWrapper>
      </body>
    </html>
  )
}
