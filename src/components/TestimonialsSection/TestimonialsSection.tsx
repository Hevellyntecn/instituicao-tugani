import React from 'react';
import { motion } from 'framer-motion';
import './TestimonialsSection.css';

// Importando as imagens
import resultado1 from '../../assets/images/resultado-01.jpg';
import resultado2 from '../../assets/images/resultado-02.jpg';

import resultado4 from '../../assets/images/resultado-04.jpg';

// Importando os vídeos
import video1 from '../../assets/images/resultado-video-01.mp4';
import video2 from '../../assets/images/resultado-video-02.mp4';
import video3 from '../../assets/images/resultado-video-03.mp4';

// Nova estrutura de dados que inclui um tipo para cada item
const resultsData = [
  { id: 1, type: 'image', src: resultado1, alt: 'Resultado de tratamento facial 1' },
  { id: 2, type: 'image', src: resultado2, alt: 'Resultado de tratamento facial 2' },
  { id: 3, type: 'image', src: resultado4, alt: 'Resultado de tratamento facial 4' },
  { id: 4, type: 'video', src: video1, alt: 'Resultado de tratamento em vídeo 1' },
  { id: 5, type: 'video', src: video2, alt: 'Resultado de tratamento em vídeo 2' },
  { id: 6, type: 'video', src: video3, alt: 'Resultado de tratamento em vídeo 3' }
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            Resultados que Falam por Si
          </h2>
          <p className="testimonials-subtitle">
            Acreditamos na transformação real e visível. Veja alguns exemplos do nosso trabalho.
          </p>
        </div>

        <div className="testimonials-grid">
          {resultsData.map((result, index) => (
            <motion.div
              key={result.id}
              className="testimonial-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Lógica para renderizar imagem ou vídeo */}
              {result.type === 'image' ? (
                <img src={result.src} alt={result.alt} className="testimonial-media" />
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
          className="testimonials-button"
          >
            Agendar Avaliação
          </a>
        </div>
      </div>
    </section>
  );
};