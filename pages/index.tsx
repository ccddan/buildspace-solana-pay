import Head from '../components/Head'
import Navbar from '../components/Navbar'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Head />
      <div className="bg-gray-900 text-slate-200">
        <Navbar />
        <div className="container m-auto">
          <p className="text-center">content goes here</p>
        </div>
      </div>
    </>
  )
}

export default Home
