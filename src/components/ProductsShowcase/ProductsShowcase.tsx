import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProductsShowcase.css';

import saboneteImg from '../../assets/images/produto-sabonete.png';
import aguaMicelarImg from '../../assets/images/produto-agua-micelar.png';
import dermaComplexImg from '../../assets/images/produto-derma-complex.png';
import rollonImg from '../../assets/images/produto-rollon.png';

const products = [
  { 
    image: saboneteImg, 
    label: 'Sabonete Facial',
    description: 'Limpeza profunda e suave para todos os tipos de pele',
    benefits: [
      "Revitaliza e regenera a pele",
      "Remove impurezas e excesso de oleosidade",
      "Uniformiza o tom da pele",
      "Mantém a hidratação natural"
    ],
    ingredients: "Extrato de Aloe Vera, Vitamina E, Óleo de Coco"
  },
  { 
    image: aguaMicelarImg, 
    label: 'Água Micelar',
    description: 'Limpeza e hidratação em uma única etapa',
    benefits: [
      "Limpa e purifica profundamente",
      "Tonifica e equilibra o pH",
      "Hidrata e nutre a pele",
      "Remove maquiagem sem ressecar"
    ],
    ingredients: "Água Termal, Glicerina Vegetal, Pantenol"
  },
  { 
    image: dermaComplexImg, 
    label: 'Derma Complex',
    description: 'Tratamento avançado para firmeza e elasticidade',
    benefits: [
      "Melhora significativamente a firmeza",
      "Pele mais macia e aveludada",
      "Suaviza linhas de expressão",
      "Estimula produção de colágeno"
    ],
    ingredients: "Ácido Hialurônico, Peptídeos, Vitamina C"
  },
  { 
    image: rollonImg, 
    label: 'Roll-on Área dos Olhos',
    description: 'Tratamento específico para a delicada área dos olhos',
    benefits: [
      "Suaviza olheiras e inchaços",
      "Reduz linhas de expressão finas",
      "Diminui flacidez e bolsas",
      "Ilumina e rejuvenesce o olhar"
    ],
    ingredients: "Cafeína, Vitamina K, Ácido Hialurônico"
  },
];

const createProductWhatsAppLink = (productName: string) => {
  const message = `Olá! Gostaria de saber mais sobre o produto ${productName}.`;
  return `https://wa.me/5565981703400?text=${encodeURIComponent(message)}`;
};

export const ProductsShowcase: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex: number) => (prevIndex + 1) % products.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentProduct = products[index];

  return (
    <section id="products" className="showcase-final-section">
      <div className="showcase-final-container">
        <div className="product-stage-final">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="product-image-container"
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: 15 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src={currentProduct.image}
                alt={currentProduct.label}
                className="product-image"
              />
              <div className="product-glow"></div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="product-info-final">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="product-content"
            >
              <h2 className="product-info-main-title">Nossa Linha Completa</h2>
              
              <div className="product-details">
                <h3 className="product-title">{currentProduct.label}</h3>
                <p className="product-description">{currentProduct.description}</p>
                
                <div className="benefits-section">
                  <h4 className="benefits-title">Principais Benefícios</h4>
                  <ul className="benefits-list">
                    {currentProduct.benefits.map((benefit, idx) => (
                      <motion.li 
                        key={benefit}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                        className="benefit-item"
                      >
                        <span className="benefit-icon">✦</span>
                        {benefit}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="ingredients-section">
                  <h4 className="ingredients-title">Ingredientes Principais</h4>
                  <p className="ingredients-text">{currentProduct.ingredients}</p>
                </div>

                <div className="product-cta">
                  <a 
                    href={createProductWhatsAppLink(currentProduct.label)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary" 
                  >
                    Saber Mais
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