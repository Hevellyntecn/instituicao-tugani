import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './TestimonialsSection.css';

import resultado1 from '../../assets/images/resultado-01.jpg';
import resultado2 from '../../assets/images/resultado-02.jpg';
import resultado3 from '../../assets/images/resultado-03.jpg';
import resultado4 from '../../assets/images/harmonização-01.jpg';
import resultado5 from '../../assets/images/harmonização-02.jpg';
import resultado6 from '../../assets/images/harmonização-03.jpg';

// Supondo que você adicionou as imagens dos produtos na pasta de assets
import produtoTugani1 from '../../assets/images/produto-tugani-01.jpg';
import produtoTugani2 from '../../assets/images/produto-tugani-02.jpg';
import produtoTugani3 from '../../assets/images/produto-tugani-03.jpg';
import produtoTugani4 from '../../assets/images/produto-tugani-04.jpg';

type ResultItem = {
  id: number;
  type: 'image' | 'video';
  category: 'Odontologia' | 'Harmonização' | 'Spa e Terapia' | 'Produtos Tugani';
  src: string;
  alt: string;
};

const resultsData: ResultItem[] = [
  { id: 1, type: 'image', category: 'Harmonização', src: resultado1, alt: 'Resultado de harmonização facial' },
  { id: 2, type: 'image', category: 'Harmonização', src: resultado2, alt: 'Resultado de preenchimento labial' },
  { id: 3, type: 'image', category: 'Harmonização', src: resultado6, alt: 'Resultado de clareamento dental' },
  { id: 4, type: 'image', category: 'Produtos Tugani', src: produtoTugani1, alt: 'Produto da linha Tugani' },
  { id: 5, type: 'image', category: 'Produtos Tugani', src: produtoTugani2, alt: 'Outro produto da linha Tugani' },
  { id: 6, type: 'image', category: 'Produtos Tugani', src: produtoTugani3, alt: 'Produto da linha Tugani' },
  { id: 7, type: 'image', category: 'Produtos Tugani', src: produtoTugani4, alt: 'Outro produto da linha Tugani' },
  { id: 8, type: 'image', category: 'Harmonização', src: resultado4, alt: 'Foto harmonização facial' },
  { id: 9, type: 'image', category: 'Harmonização', src: resultado3, alt: 'Foto harmonização facial' },
  { id: 10, type: 'image', category: 'Harmonização', src: resultado5, alt: 'Foto harmonização facial' }
];

const filterCategories: string[] = ['Todos', 'Odontologia', 'Harmonização', 'Spa e Terapia', 'Produtos Tugani'];

export const TestimonialsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Todos');

  const filteredResults: ResultItem[] = activeFilter === 'Todos'
    ? resultsData
    : resultsData.filter(result => result.category === activeFilter);

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title" >
            Resultados que Falam por Si
          </h2>
          <p className="testimonials-subtitle">
            Acreditamos na transformação real e visível. Veja alguns exemplos do nosso trabalho.
          </p>
        </div>

        <div className="testimonials-filter-buttons">
          {filterCategories.map(category => (
            <button
              key={category}
              className={`filter-button ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="testimonials-grid">
          {filteredResults.map((result, index) => (
            <motion.div
              key={result.id}
              className="testimonial-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {result.type === 'image' ? (
                <img src={result.src} alt={result.alt} className="testimonial-media" loading="lazy" />
              ) : (
                <video 
                  src={result.src} 
                  className="testimonial-media" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                />
              )}
            </motion.div>
          ))}
        </div>

        <div className="testimonials-cta">
          <h3>Quer fazer parte das nossas histórias de sucesso?</h3>
          <p>Agende sua avaliação e descubra como podemos transformar sua autoestima. Sua história de sucesso pode começar hoje!</p>
          <a
            href="https://wa.me/5565981703400?text=Ol%C3%A1!%20Vi%20os%20resultados%20no%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20para%20conhecer%20mais."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Agendar Avaliação
          </a>
        </div>
      </div>
    </section>
  );
};