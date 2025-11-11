import React, { useState, useEffect, useRef } from 'react';

const ProductsCarousel = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);

  // Configuração da integração com Google Drive
  const DRIVE_FOLDERS = {
    destaques: process.env.NEXT_PUBLIC_DRIVE_FOLDER_DESTAQUES
  };
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_DRIVE_API_KEY;

  // Função para buscar imagens do Google Drive
  const fetchDriveImages = async (folderId) => {
    try {
      const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+mimeType+contains+'image/'&key=${API_KEY}&fields=files(id,name,webViewLink,webContentLink)`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      const data = await response.json();

      if (data.error) {
        console.error("Erro na API do Google Drive:", data.error);
        return { error: data.error };
      }

      return { files: data.files || [] };
    } catch (error) {
      console.error("Erro ao buscar imagens:", error);
      return { error: error.message };
    }
  };

  // Função para gerar URL de visualização direta
  const getDirectImageUrl = (fileId) => {
    return `https://lh3.googleusercontent.com/d/${fileId}=s500`;
  };

  // Carregar produtos
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const destaquesResult = await fetchDriveImages(DRIVE_FOLDERS.destaques);

        if (destaquesResult.error || !destaquesResult.files || destaquesResult.files.length === 0) {
          console.warn("Nenhuma imagem de destaques encontrada no Google Drive");
          setProducts([]);
        } else {
          const produtosDestaque = destaquesResult.files.map((image) => ({
            id: image.id,
            name: image.name.replace(/\.[^/.]+$/, ""),
            image: getDirectImageUrl(image.id)
          }));
          setProducts(produtosDestaque);
        }
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
        setProducts([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  // Função para obter quantos produtos mostrar
  const getProductsToShow = () => {
    const width = window.innerWidth;
    if (width < 576) return 1;
    if (width < 768) return 2;
    if (width < 992) return 3;
    if (width < 1200) return 4;
    return 5;
  };

  // Navegação do carrossel
  const nextSlide = () => {
    const productsToShow = getProductsToShow();
    const maxIndex = Math.max(products.length - productsToShow, 0);
    
    setCurrentIndex(prevIndex => 
      prevIndex < maxIndex ? prevIndex + 1 : 0
    );
  };

  const prevSlide = () => {
    const productsToShow = getProductsToShow();
    const maxIndex = Math.max(products.length - productsToShow, 0);
    
    setCurrentIndex(prevIndex => 
      prevIndex > 0 ? prevIndex - 1 : maxIndex
    );
  };

  // Auto-play
  const startAutoPlay = () => {
    autoPlayRef.current = setInterval(nextSlide, 4000);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  useEffect(() => {
    if (products.length > 0) {
      startAutoPlay();
    }

    return () => stopAutoPlay();
  }, [products]);

  // Atualizar posição do carrossel
  useEffect(() => {
    if (carouselRef.current && products.length > 0) {
      const cardWidth = carouselRef.current.children[0]?.offsetWidth || 0;
      const gap = 20;
      const translateX = -currentIndex * (cardWidth + gap);
      carouselRef.current.style.transform = `translateX(${translateX}px)`;
    }
  }, [currentIndex, products]);

  // Redimensionamento da janela
  useEffect(() => {
    const handleResize = () => {
      setCurrentIndex(0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isLoading) {
    return (
      <div className="products-carousel">
        <div className="carousel-container">
          <div className="loading-carousel">
            <i className="fas fa-spinner fa-spin"></i>
            <p>Carregando destaques...</p>
          </div>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="products-carousel">
        <div className="carousel-container">
          <div className="loading-carousel">
            <i className="fas fa-info-circle"></i>
            <p>Nenhum destaque disponível no momento</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="products-carousel">
      <div 
        className="carousel-container"
        ref={carouselRef}
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
      >
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <div 
              className="product-image" 
              style={{ backgroundImage: `url('${product.image}')` }}
            ></div>
            <div className="product-name">{product.name}</div>
          </div>
        ))}
      </div>

      <button 
        className="carousel-arrow arrow-prev"
        onClick={prevSlide}
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button 
        className="carousel-arrow arrow-next"
        onClick={nextSlide}
        onMouseEnter={stopAutoPlay}
        onMouseLeave={startAutoPlay}
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default ProductsCarousel;
