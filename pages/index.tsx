import Head from '../components/Head'
import IPFSDownload from '../components/IpfsDownload'
import Navbar from '../components/Navbar'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Head />
      <div className="bg-gray-900 text-slate-200">
        <Navbar />
        <div className="container m-auto">
          <IPFSDownload hash="<CID>" filename="<filename>" />
        </div>
      </div>
    </>
  )
}

export default Home
