import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProductsShowcase.css';

import saboneteImg from '../../assets/images/produto-tugani/produto-sabonete.png';
import aguaMicelarImg from '../../assets/images/produto-tugani/produto-agua-micelar.png';
import dermaComplexImg from '../../assets/images/produto-tugani/produto-derma-complex.png';
import rollonImg from '../../assets/images/produto-tugani/produto-rollon.png';
import kitCompletoImg from '../../assets/images/produto-tugani/kit-completo.png';

const products = [
  { 
    image: saboneteImg, 
    label: 'Sabonete Facial',
    description: 'Limpeza profunda e suave para todos os tipos de pele.',
    benefits: ["Revitaliza a pele", "Remove impurezas", "Uniformiza o tom", "Mantém a hidratação"],
    ingredients: "Extrato de Aloe Vera, Vitamina E, Óleo de Coco"
  },
  { 
    image: aguaMicelarImg, 
    label: 'Água Micelar',
    description: 'Limpeza e hidratação em uma única e refrescante etapa.',
    benefits: ["Limpa e purifica", "Tonifica e equilibra", "Hidrata e nutre", "Remove maquiagem"],
    ingredients: "Água Termal, Glicerina Vegetal, Pantenol"
  },
  { 
    image: dermaComplexImg, 
    label: 'Derma Complex',
    description: 'Tratamento avançado para firmeza e elasticidade da pele.',
    benefits: ["Melhora a firmeza", "Pele mais macia", "Suaviza linhas de expressão", "Estimula colágeno"],
    ingredients: "Ácido Hialurônico, Peptídeos, Vitamina C"
  },
  { 
    image: rollonImg, 
    label: 'Roll-on Área dos Olhos',
    description: 'Cuidado específico para a delicada área dos olhos.',
    benefits: ["Suaviza olheiras", "Reduz linhas finas", "Diminui bolsas", "Ilumina o olhar"],
    ingredients: "Cafeína, Vitamina K, Ácido Hialurônico"
  },
  { 
    image: kitCompletoImg, 
    label: 'Kit Completo Tugani',
    description: 'A solução completa para sua rotina de skincare, unindo todos os nossos produtos.',
    benefits: ["Cuidado integral", "Resultados potencializados", "Melhor custo-benefício", "Rotina de beleza simplificada"],
    ingredients: "Todos os ativos da linha Tugani Cosméticos"
  },
];

const createProductWhatsAppLink = (productName: string) => {
  const message = `Olá! Tenho interesse no ${productName} da linha Tugani.`;
  return `https://wa.me/556592841136?text=${encodeURIComponent(message)}`;
};

export const ProductsShowcase: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToNext = () => {
    setDirection(1);
    setIndex(prevIndex => (prevIndex + 1) % products.length);
  };

  const goToPrev = () => {
    setDirection(-1);
    setIndex(prevIndex => (prevIndex - 1 + products.length) % products.length);
  };

  const goToIndex = (newIndex: number) => {
    setDirection(newIndex > index ? 1 : -1);
    setIndex(newIndex);
  };

  const currentProduct = products[index];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 30 : -30,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 30 : -30,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section id="products" className="showcase-final-section">
      <div className="showcase-final-container">
        <div className="product-stage-final">
          <button className="carousel-arrow.prev" onClick={goToPrev}>&#8249;</button>
          
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={index}
              className="product-image-container"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <img src={currentProduct.image} alt={currentProduct.label} className="product-image" />
              <div className="product-glow"></div>
            </motion.div>
          </AnimatePresence>

          <button className="carousel-arrow.next" onClick={goToNext}>&#8250;</button>
          
          <div className="carousel-dots">
            {products.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === index ? 'active' : ''}`}
                onClick={() => goToIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-info-final">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="product-content"
            >
              <h2 className="product-info-main-title">Nossa linha completa</h2>
              <div className="product-details">
                <h3 className="product-title">{currentProduct.label}</h3>
                <p className="product-description">{currentProduct.description}</p>
                <div className="benefits-section">
                  <h4 className="benefits-title">Principais benefícios</h4>
                  <ul className="benefits-list">
                    {currentProduct.benefits.map((benefit) => (
                      <li key={benefit} className="benefit-item">
                        <span className="benefit-icon">✦</span>{benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="ingredients-section">
                  <h4 className="ingredients-title">Ingredientes principais</h4>
                  <p className="ingredients-text">{currentProduct.ingredients}</p>
                </div>
                <div className="product-cta">
                  <a href={createProductWhatsAppLink(currentProduct.label)} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    {currentProduct.label === 'Kit Completo Tugani' ? 'Quero o kit completo' : 'Saber mais'}
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};