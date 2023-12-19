import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar'
import Headbar from './components/headbar'
import ContentBox from './components/contentBox'

export const metadata = {
  // METATAG API
  // https://nextjs.org/docs/app/api-reference/functions/generate-metadata
  title: 'Miikatti.js'
}

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <div className='bg-gradient-to-b from-yellow-300 from-10% via-white via-20% to-sky-400 to-100%'>
          <div id="navigation" className='md:px-12'>
            <Navbar />
          </div>
          <div id="body" className='md:px-36'>
            <Headbar />
            <ContentBox id="hobbies" />
          </div>
        </div>
      </body>
    </html>
  )
}
