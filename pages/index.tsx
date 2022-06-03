import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { useEffect, useState } from 'react'

import Head from '../components/Head'
import IPFSDownload from '../components/IpfsDownload'
import Navbar from '../components/Navbar'
import type { NextPage } from 'next'
import { Product } from '@models/product'
import { ProductsCollection } from '../components/Products'

const Home: NextPage = () => {
  const { publicKey, connected } = useWallet()
  const { connection } = useConnection()
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    if (connected && publicKey) {
      fetch('/api/fetchProducts')
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((err) => console.error(`Failed to fetch products:`, err))
    }

    if (!connected) {
      setProducts([])
    }
  }, [publicKey, connected])

  return (
    <>
      <Head />
      <div className="bg-gray-900 text-slate-200">
        <Navbar />
        <div className="container m-auto">
          <IPFSDownload hash="<CID>" filename="<filename>" />
        </div>
        <div className="container m-auto">
          {!connected && (
            <p className="text-center">
              Connect with you wallet to see all available products
            </p>
          )}
          {!!connected && (
            <>
              <ProductsCollection category="Emojis" products={products} />
              <ProductsCollection category="Goods" products={[]} />
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Home
