import ProductList from '@containers/ProductList'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>NextJs Shop</title>
      </Head>
      <ProductList />
    </>
  )
}
