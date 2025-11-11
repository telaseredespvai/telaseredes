import Head from 'next/head'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import WhatsAppFloat from '../src/components/WhatsAppFloat'
import Services from '../src/pages/Services'

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Serviços - Telas & Redes Paranavaí | Instalação e Manutenção</title>
        <meta name="description" content="Serviços completos em telas mosquiteiras e redes de proteção: instalação, manutenção e fabricação sob medida. Atendemos Paranavaí e região com qualidade garantida." />
        <meta name="keywords" content="serviços telas paranavaí, instalação redes proteção, manutenção telas mosquiteiras, telas sob medida, instalação telas janelas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://telaseredes.vercel.app/services" />
        
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://telaseredes.vercel.app/services" />
        <meta property="og:title" content="Serviços - Telas & Redes Paranavaí" />
        <meta property="og:description" content="Serviços completos em telas mosquiteiras e redes de proteção com qualidade garantida." />
        <meta property="og:image" content="https://telaseredes.vercel.app/assets/img/logo.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://telaseredes.vercel.app/services" />
        <meta name="twitter:title" content="Serviços - Telas & Redes Paranavaí" />
        <meta name="twitter:description" content="Serviços completos em telas mosquiteiras e redes de proteção." />
        <meta name="twitter:image" content="https://telaseredes.vercel.app/assets/img/logo.png" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
      </Head>
      
      <Header />
      <main>
        <Services />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
