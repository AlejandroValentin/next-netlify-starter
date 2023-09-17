import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>STARTING!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="jujuujuj TRYING THISSSS" />
        <p className="description">
          Absolutely doing <code>it!!!!</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
