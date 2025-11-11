import Head from 'next/head'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import WhatsAppFloat from '../src/components/WhatsAppFloat'
import Home from '../src/pages/Home'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Telas & Redes Paranavaí - Soluções em Telas e Redes de Proteção</title>
        <meta name="description" content="Telas & Redes Paranavaí - Soluções em Telas e Redes de Proteção em Paranavaí e região. Especialistas em telas mosquiteiras, redes de proteção e soluções sob medida." />
        <meta name="keywords" content="telas paranavaí, redes de proteção paranavaí, telas mosquiteiras, redes de proteção, telas sob medida, proteção para janelas, proteção infantil, telas anti-insetos" />
        <meta name="author" content="Telas & Redes Paranavaí" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://telaseredes.vercel.app/" />
        
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://telaseredes.vercel.app/" />
        <meta property="og:title" content="Telas & Redes Paranavaí - Soluções em Telas e Redes de Proteção" />
        <meta property="og:description" content="Especialistas em telas mosquiteiras, redes de proteção e soluções sob medida em Paranavaí e região. Qualidade e segurança para seu lar." />
        <meta property="og:image" content="https://telaseredes.vercel.app/assets/img/logo.png" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Telas & Redes Paranavaí" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://telaseredes.vercel.app/" />
        <meta name="twitter:title" content="Telas & Redes Paranavaí - Soluções em Telas e Redes de Proteção" />
        <meta name="twitter:description" content="Especialistas em telas mosquiteiras, redes de proteção e soluções sob medida em Paranavaí e região." />
        <meta name="twitter:image" content="https://telaseredes.vercel.app/assets/img/logo.png" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Portuguese" />
        <meta name="revisit-after" content="7 days" />
        <meta name="geo.region" content="BR-PR" />
        <meta name="geo.placename" content="Paranavaí" />
      </Head>
      
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
