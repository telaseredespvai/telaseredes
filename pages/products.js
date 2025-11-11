import Head from 'next/head'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import WhatsAppFloat from '../src/components/WhatsAppFloat'
import Products from '../src/pages/Products'

export default function ProductsPage() {
  return (
    <>
      <Head>
        <title>Produtos - Telas & Redes Paranavaí | Catálogo Completo</title>
        <meta name="description" content="Catálogo completo de telas mosquiteiras, redes de proteção, telas plissadas e soluções de proteção. Produtos de alta qualidade com garantia em Paranavaí e região." />
        <meta name="keywords" content="produtos telas paranavaí, catálogo redes proteção, telas mosquiteiras preço, redes proteção infantil, telas plissadas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://telaseredes.vercel.app/products" />
        
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://telaseredes.vercel.app/products" />
        <meta property="og:title" content="Produtos - Telas & Redes Paranavaí" />
        <meta property="og:description" content="Catálogo completo de telas mosquiteiras, redes de proteção e soluções sob medida." />
        <meta property="og:image" content="https://telaseredes.vercel.app/assets/img/logo.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://telaseredes.vercel.app/products" />
        <meta name="twitter:title" content="Produtos - Telas & Redes Paranavaí" />
        <meta name="twitter:description" content="Catálogo completo de telas e redes de proteção." />
        <meta name="twitter:image" content="https://telaseredes.vercel.app/assets/img/logo.png" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
      </Head>
      
      <Header />
      <main>
        <Products />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
