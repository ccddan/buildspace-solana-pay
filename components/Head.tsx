import Head from 'next/head'

export default function HeadComponent() {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#000000" />

      <title>Solana Pay Store</title>
      <meta name="title" content="Solana Pay Store" />
      <meta
        name="description"
        content="Buy items on my store using Solana Pay!"
      />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://twitter.com/ccddanx2" />
      <meta property="twitter:title" content="Solana Pay Store" />
      <meta
        property="twitter:description"
        content="Buy items on my store using Solana Pay!"
      />
      <meta
        property="twitter:image"
        content="https://cdn.buildspace.so/courses/solana-pay/metadata.png"
      />
    </Head>
  )
}
