import Head from 'next/head'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import WhatsAppFloat from '../src/components/WhatsAppFloat'
import About from '../src/pages/About'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Sobre - Telas & Redes Paranavaí | Nossa História e Missão</title>
        <meta name="description" content="Conheça a história, missão e valores do Telas & Redes Paranavaí. Empresa especializada em soluções de proteção para seu lar e empresa em Paranavaí e região." />
        <meta name="keywords" content="sobre telas paranavaí, história empresa telas, missão telas e redes, valores empresa proteção" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://telaseredes.vercel.app/about" />
        
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://telaseredes.vercel.app/about" />
        <meta property="og:title" content="Sobre - Telas & Redes Paranavaí" />
        <meta property="og:description" content="Conheça a história e missão do Telas & Redes Paranavaí. Qualidade e compromisso com a segurança." />
        <meta property="og:image" content="https://telaseredes.vercel.app/assets/img/logo.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://telaseredes.vercel.app/about" />
        <meta name="twitter:title" content="Sobre - Telas & Redes Paranavaí" />
        <meta name="twitter:description" content="Conheça a história e missão do Telas & Redes Paranavaí." />
        <meta name="twitter:image" content="https://telaseredes.vercel.app/assets/img/logo.png" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
      </Head>
      
      <Header />
      <main>
        <About />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
