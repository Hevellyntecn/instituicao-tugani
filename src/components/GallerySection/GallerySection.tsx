import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './GallerySection.css';

import img1 from '../../assets/images/tugani-principal.jpg';
import img2 from '../../assets/images/tugani-frente.jpg';
import img3 from '../../assets/images/clinica-consultorio.jpg';
import img4 from '../../assets/images/tugani-recepcao.jpg';
import img5 from '../../assets/images/clinica-tratamento-2.jpg';
import img6 from '../../assets/images/clinica-tratamento-3.jpg';

const galleryImages = [
  { src: img1, alt: 'Recepção do Instituto TUGANI' },
  { src: img2, alt: 'Escritório da clínica' },
  { src: img3, alt: 'Consultório do Instituto TUGANI' },
  { src: img4, alt: 'Sala de tratamento do Instituto TUGANI' },
  { src: img5, alt: 'Paciente recebendo tratamento corporal' },
  { src: img6, alt: 'Paciente recebendo tratamento estético' },
];

export const GallerySection: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
      }
    };
    
    handleResize(); // Executa na montagem
    window.addEventListener('resize', handleResize); // Adiciona listener para redimensionamento

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h2 className="gallery-title">Espaço Tugani</h2>
        <p className="gallery-subtitle">Conforto, segurança e bem-estar reunidos em um espaço criado para cuidar de você.</p>
      </div>
      
      <motion.div ref={carouselRef} className="gallery-carousel-wrapper" whileTap={{ cursor: "grabbing" }}>
        <motion.div 
          className="gallery-container" 
          drag="x" 
          dragConstraints={{ right: 0, left: -width }}
          // ... props de animação
        >
          {galleryImages.map((image, index) => (
            <motion.div key={index} className="gallery-item">
              <img src={image.src} alt={image.alt} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};