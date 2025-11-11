import Head from 'next/head'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import WhatsAppFloat from '../src/components/WhatsAppFloat'
import Contact from '../src/pages/Contact'

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contato - Telas & Redes Paranavaí | Orçamento Gratuito</title>
        <meta name="description" content="Entre em contato com Telas & Redes Paranavaí e solicite um orçamento gratuito. Atendemos Paranavaí e região. WhatsApp, telefone e formulário de contato disponíveis." />
        <meta name="keywords" content="contato telas paranavaí, orçamento telas grátis, solicitar orçamento redes proteção, telefone telas paranavaí, whatsapp telas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://telaseredes.vercel.app/contact" />
        
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://telaseredes.vercel.app/contact" />
        <meta property="og:title" content="Contato - Telas & Redes Paranavaí" />
        <meta property="og:description" content="Entre em contato e solicite um orçamento gratuito. Atendemos Paranavaí e região." />
        <meta property="og:image" content="https://telaseredes.vercel.app/assets/img/logo.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://telaseredes.vercel.app/contact" />
        <meta name="twitter:title" content="Contato - Telas & Redes Paranavaí" />
        <meta name="twitter:description" content="Entre em contato e solicite um orçamento gratuito." />
        <meta name="twitter:image" content="https://telaseredes.vercel.app/assets/img/logo.png" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
      </Head>
      
      <Header />
      <main>
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
