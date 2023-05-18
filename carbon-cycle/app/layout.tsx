import './globals.css'
import { Inter } from 'next/font/google'
import { MantineProvider } from "@mantine/core"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Carbon Cycle',
  description: 'This is about the carbon cycle',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              /** Put your mantine theme override here */
              colorScheme: 'light',
            }}>
            {children}
          </MantineProvider>
      </body>
    </html>
  )
}
