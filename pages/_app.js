import Head from 'next/head'

// Importar Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css'

// Importar todos os estilos
import '../src/styles/style.css'
import '../src/styles/products.css'
import '../src/styles/products-carrosel.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Global Meta Tags */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#2C5530" />
        <meta name="msapplication-TileColor" content="#2C5530" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Telas & Redes Paranavaí",
              "image": "https://telaseredes.vercel.app/assets/img/logo.png",
              "description": "Especialistas em telas mosquiteiras, redes de proteção e soluções sob medida em Paranavaí e região.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Paranavaí",
                "addressRegion": "PR",
                "addressCountry": "BR"
              },
              "url": "https://telaseredes.vercel.app",
              "telephone": "+55-44-99999-9999",
              "priceRange": "$$",
              "areaServed": {
                "@type": "City",
                "name": "Paranavaí"
              }
            })
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
