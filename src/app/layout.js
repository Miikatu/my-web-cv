import './globals.css'
import Navbar from './components/navigation/navbar'
//import Sidebar from './components/navigation/sidebar'
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
        <div className=' bg-gradient-to-b from-yellow-300 from-10% via-white via-20% to-sky-400 to-100%'>
          <div className='mx-36'>
          <Navbar />
          <Headbar />
          <ContentBox />
          </div>
        </div>
      </body>
    </html>
  )
}
