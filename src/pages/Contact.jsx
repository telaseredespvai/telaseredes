import React, { useState } from 'react';
import Link from 'next/link';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    setTimeout(() => {
      // Criar mensagem para WhatsApp
      const serviceText = formData.service ? 
        document.querySelector(`option[value="${formData.service}"]`)?.textContent || formData.service 
        : '';

      const whatsappMessage =
        `Olá, Telas & Redes Paranavaí! Meu nome é ${formData.name}.\n\n` +
        `E-mail: ${formData.email}\n` +
        `Telefone: ${formData.phone}\n\n` +
        `Serviço de interesse: ${serviceText}\n\n` +
        `Mensagem: ${formData.message}\n`;

      // Codificar a mensagem para URL
      const encodedMessage = encodeURIComponent(whatsappMessage);

      // Redirecionar para WhatsApp
      window.location.href = `https://wa.me/5544999094232?text=${encodedMessage}`;

      // Resetar formulário
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container hero-content">
          <span className="hero-subtitle">ENTRE EM CONTATO</span>
          <h1 className="hero-title">Entre em Contato Através do Formulário</h1>
          <p className="hero-description">
            Nossa equipe está pronta para ajudar você a encontrar a melhor solução
            em telas e proteções para sua casa. Solicite um orçamento gratuito
          </p>
          <div className="hero-buttons">
            <Link href="/services" className="btn-primary">Nossos Serviços</Link>
            <Link href="/products" className="btn-secondary">Ver Produtos</Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact section-padding" id="contact">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Entre em Contato</span>
            <h2 className="section-title">Solicite um Orçamento</h2>
          </div>

          <div className="contact-content">
            <div className="contact-info">
              <p>
                Estamos prontos para atender suas necessidades e transformar sua
                casa em um ambiente mais seguro e confortável.
              </p>
              <p>
                Preencha o formulário ao lado ou entre em contato conosco através
                de um dos canais abaixo:
              </p>

              <div className="footer-contact" style={{ marginTop: '30px' }}>
                <p><i className="fas fa-phone"></i> (44) 9909-4232</p>
                <p><i className="fas fa-envelope"></i> telaseredes.paranavai@gmail.com</p>
                <p><i className="fas fa-map-marker-alt"></i> Paranavaí - PR</p>
                <p>
                  <i className="fas fa-clock"></i> Seg a Sex: 8h às 18h | Sáb: 8h às 12h
                </p>
              </div>
            </div>

            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nome Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="form-control" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="form-control" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Telefone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="form-control" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Serviço de Interesse</label>
                  <select 
                    id="service" 
                    className="form-control" 
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="telas-mosquiteiras">Telas Mosquiteiras</option>
                    <option value="rede-protecao">Rede de Proteção</option>
                    <option value="porta-mosquiteira">Porta Mosquiteira</option>
                    <option value="manutencao-rede">Manutenção de Rede</option>
                    <option value="conserto-tela">Conserto de Tela Mosquiteiro</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mensagem</label>
                  <textarea 
                    id="message" 
                    className="form-control" 
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials section-padding" id="testimonials">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Avaliações</span>
            <h2 className="section-title">O que nossos clientes dizem</h2>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "Contratei o serviço de rede de proteção e fiquei muito
                  satisfeita. Profissionais extremamente competentes e preço
                  justo. Recomendo!"
                </p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">M</div>
                  <div className="testimonial-info">
                    <h4>Maria Silva</h4>
                    <p>Paranavaí - PR</p>
                    <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "Ótimo atendimento e produtos de qualidade. Instalaram as telas
                  mosquiteiras com perfeição e agora posso manter as janelas
                  abertas sem preocupação."
                </p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">J</div>
                  <div className="testimonial-info">
                    <h4>João Santos</h4>
                    <p>Maringá - PR</p>
                    <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "Serviço de qualidade e profissionais muito atenciosos. Fizeram
                  a instalação rapidamente e ficou perfeito. Super indico!"
                </p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">A</div>
                  <div className="testimonial-info">
                    <h4>Ana Oliveira</h4>
                    <p>Paranavaí - PR</p>
                    <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
