import '@styles/globals.css'
import Nav from './../components/Nav'
import Provider from './../components/Provider'
import Head from 'next/head'

export const metadata = {
  title: 'Promtopia',
  description: 'Discover & Share AI Prompts',
  icons: {
    icon: '/icon.png',
  },
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Provider>
          <div className='main'>
            <div className='gradient'></div>
          </div>

          <main className='app'>
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout
