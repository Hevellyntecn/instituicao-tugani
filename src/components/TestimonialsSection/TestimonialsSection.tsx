import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './TestimonialsSection.css';

import resultado1 from '../../assets/images/harmonizacao/harmonizacao01.jpg';
import resultado2 from '../../assets/images/harmonizacao/harmonizacao02.jpg';
import resultado3 from '../../assets/images/harmonizacao/harmonizacao03.jpg';
import resultado4 from '../../assets/images/harmonizacao/harmonizacao04.jpg';
import resultado5 from '../../assets/images/harmonizacao/harmonizacao05.jpg';
import resultado6 from '../../assets/images/harmonizacao/harmonizacao06.jpg';
import resultado7 from '../../assets/images/harmonizacao/harmonizacao07.jpg';
import resultado8 from '../../assets/images/harmonizacao/harmonizacao08.jpg';
import resultado9 from '../../assets/images/harmonizacao/harmonizacao09.jpg';
import resultado10 from '../../assets/images/harmonizacao/harmonizacao10.jpg';
import resultado11 from '../../assets/images/harmonizacao/harmonizacao11.jpg';
import resultado12 from '../../assets/images/harmonizacao/harmonizacao12.jpg';
import resultado13 from '../../assets/images/harmonizacao/harmonizacao13.jpg';
import resultado14 from '../../assets/images/harmonizacao/harmonizacao14.jpg';
import resultado15 from '../../assets/images/harmonizacao/harmonizacao15.jpg';
import resultado16 from '../../assets/images/harmonizacao/harmonizacao17.jpg';
import produtoTugani1 from '../../assets/images/produto-tugani/produto-tugani-01.jpg';
import produtoTugani2 from '../../assets/images/produto-tugani/produto-tugani-02.jpg';
import produtoTugani3 from '../../assets/images/produto-tugani/produto-tugani-03.jpg';
import produtoTugani4 from '../../assets/images/produto-tugani/produto-tugani-04.jpg';
import odonto1 from '../../assets/images/odonto/odonto01.jpg';
import odonto2 from '../../assets/images/odonto/odonto02.jpg';
import spa02 from '../../assets/images/spa/spa02.mp4';

type ResultItem = {
  id: number;
  type: 'image' | 'video';
  category: 'Odontologia' | 'Harmonização' | 'Spa e Terapia' | 'Produtos Tugani';
  src: string;
  alt: string;
};

const resultsData: ResultItem[] = [
  { id: 1, type: 'image', category: 'Produtos Tugani', src: produtoTugani1, alt: 'Produto da linha Tugani' },
  { id: 2, type: 'image', category: 'Produtos Tugani', src: produtoTugani2, alt: 'Outro produto da linha Tugani' },
  { id: 3, type: 'image', category: 'Produtos Tugani', src: produtoTugani3, alt: 'Produto da linha Tugani' },
  { id: 4, type: 'image', category: 'Produtos Tugani', src: produtoTugani4, alt: 'Outro produto da linha Tugani' },
  { id: 5, type: 'image', category: 'Harmonização', src: resultado4, alt: 'Resultado de harmonização facial' },
  { id: 6, type: 'image', category: 'Harmonização', src: resultado1, alt: 'Resultado de harmonização facial' },
  { id: 7, type: 'image', category: 'Harmonização', src: resultado2, alt: 'Resultado de preenchimento labial' },
  { id: 8, type: 'image', category: 'Harmonização', src: resultado3, alt: 'Resultado de clareamento dental' },
  { id: 9, type: 'image', category: 'Harmonização', src: resultado15, alt: 'Foto harmonização facial' },
  { id: 10, type: 'image', category: 'Harmonização', src: resultado8, alt: 'Foto harmonização facial' },
  { id: 11, type: 'image', category: 'Harmonização', src: resultado9, alt: 'Foto harmonização facial' },
  { id: 12, type: 'image', category: 'Harmonização', src: resultado10, alt: 'Foto harmonização facial' },
  { id: 13, type: 'image', category: 'Harmonização', src: resultado11, alt: 'Foto harmonização facial' },
  { id: 14, type: 'image', category: 'Harmonização', src: resultado12, alt: 'Foto harmonização facial' },
  { id: 15, type: 'image', category: 'Harmonização', src: resultado13, alt: 'Foto harmonização facial' },
  { id: 16, type: 'image', category: 'Harmonização', src: resultado14, alt: 'Foto harmonização facial' },
  { id: 17, type: 'image', category: 'Harmonização', src: resultado16, alt: 'Foto harmonização facial' },
  { id: 18, type: 'image', category: 'Harmonização', src: resultado7, alt: 'Foto harmonização facial' },
  { id: 20, type: 'image', category: 'Harmonização', src: resultado5, alt: 'Foto harmonização facial' },
  { id: 21, type: 'image', category: 'Harmonização', src: resultado6, alt: 'Foto harmonização facial' },
  { id: 22, type: 'image', category: 'Odontologia', src: odonto1, alt: 'Tratamento odontológico' },
  { id: 23, type: 'image', category: 'Odontologia', src: odonto2, alt: 'Tratamento odontológico' },
  { id: 25, type: 'video', category: 'Spa e Terapia', src: spa02, alt: 'Tratamento de spa' },
];

const filterCategories: string[] = ['Todos', 'Odontologia', 'Harmonização', 'Spa e Terapia', 'Produtos Tugani'];
const INITIAL_ITEMS_LIMIT = 6;

export const TestimonialsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Todos');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const filteredResults: ResultItem[] = activeFilter === 'Todos'
    ? resultsData
    : resultsData.filter(result => result.category === activeFilter);

  const itemsToShow = isExpanded
    ? filteredResults
    : filteredResults.slice(0, INITIAL_ITEMS_LIMIT);

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
              onClick={() => {
                setActiveFilter(category);
                setIsExpanded(false);
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="testimonials-grid">
          <AnimatePresence>
            {itemsToShow.map((result) => (
              <motion.div
                key={result.id}
                className={`testimonial-card ${result.type === 'video' ? 'testimonial-card--video' : ''}`}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
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
          </AnimatePresence>
        </div>

        {filteredResults.length > INITIAL_ITEMS_LIMIT && (
          <div className="load-more-container">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="load-more-button"
            >
              {isExpanded ? 'Ver Menos' : 'Ver Mais'}
            </button>
          </div>
        )}

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