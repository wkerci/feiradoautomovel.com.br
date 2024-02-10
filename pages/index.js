import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Ola seja bem vido" />
        <p className="description">
          se quiser comprar esse domínio me made em wkerci@gmail.com<code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
