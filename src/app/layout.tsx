import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import './assets/css/patterns.css'
import { CoverProvider } from './components/coverContext'

export const metadata: Metadata = {
  title: '磊记拾微 封面生成器',
  description: '免费、漂亮的封面生成器',
  keywords: ['ThisCover', '封面生成器', 'Cover Generator', '免费设计', '公众号封面', '文章配图', '设计工具', '在线设计', 'weizwz', '唯知笔记', '唯知为之'],
  icons: {
    icon: 'https://dh.073877.xyz:88/uploads/2026/6/3/a677911a2e410179959cdc821deefbf0.png',
    shortcut: 'https://dh.073877.xyz:88/uploads/2026/6/3/a677911a2e410179959cdc821deefbf0.png',
    apple: [{ url: 'https://dh.073877.xyz:88/uploads/2026/6/3/a677911a2e410179959cdc821deefbf0.png', sizes: '180x180', type: 'https://dh.073877.xyz:88/uploads/2026/6/3/a677911a2e410179959cdc821deefbf0.png' }],
    other: [
      {
        rel: 'icon',
        type: 'https://dh.073877.xyz:88/uploads/2026/6/3/a677911a2e410179959cdc821deefbf0.png',
        sizes: '192x192',
        url: 'https://dh.073877.xyz:88/uploads/2026/6/3/a677911a2e410179959cdc821deefbf0.png'
      }
    ]
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`antialiased`}>
        <CoverProvider>{children}</CoverProvider>
        {/* cloudflare analytics，不用请注释 */}
        {process.env.NODE_ENV === 'production' && (
          <Script
            defer
            src='https://static.cloudflareinsights.com/beacon.min.js'
            data-cf-beacon={`{"token": "${process.env.NEXT_PUBLIC_CLOUDFLARE_ANALYTICS_TOKEN}"}`}
          />
        )}
      </body>
    </html>
  )
}
