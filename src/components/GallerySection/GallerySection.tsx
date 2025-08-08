import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './GallerySection.css';

import img1 from '../../assets/images/clinica/tugani-principal.jpg';
import img2 from '../../assets/images/clinica/tugani-frente.jpg';
import img3 from '../../assets/images/clinica/clinica-consultorio.jpg';
import img4 from '../../assets/images/clinica/tugani-recepcao.jpg';
import img5 from '../../assets/images/clinica/clinica-tratamento-2.jpg';
import img6 from '../../assets/images/clinica/clinica-tratamento-3.jpg';
import img7 from '../../assets/images/clinica/clinica-odonto03.jpg';
import video8 from '../../assets/images/clinica/clinica-odonto.mp4';
import video9 from '../../assets/images/clinica/clinica-odonto02.mp4';
import video10 from '../../assets/images/clinica/recepcao-dra.mp4';

// 1. GARANTIR A QUALIDADE DOS DADOS
type GalleryItem = {
  src: string;
  alt: string;
  type: 'image' | 'video';
};

// 2. GARANTIR QUE TODOS OS OBJETOS TENHAM O CAMPO 'type'
const galleryItems: GalleryItem[] = [
  { src: img1, alt: 'Recepção do Instituto TUGANI', type: 'image' },
  { src: img2, alt: 'Escritório da clínica', type: 'image' },
  { src: img4, alt: 'Sala de tratamento do Instituto TUGANI', type: 'image' },
  { src: img3, alt: 'Consultório do Instituto TUGANI', type: 'image' },
  { src: video10, alt: 'Vídeo da recepção com a Dra. Wanessa', type: 'video' },
  { src: video8, alt: 'Vídeo da recepção do Instituto TUGANI', type: 'video' },
  { src: video9, alt: 'Vídeo do consultório odontológico', type: 'video' },

  { src: img5, alt: 'Paciente recebendo tratamento corporal', type: 'image' },
  { src: img6, alt: 'Paciente recebendo tratamento estético', type: 'image' },
  { src: img7, alt: 'Tratamento odontológico no Instituto TUGANI', type: 'image' },
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
    
    // Pequeno timeout para garantir que os elementos tenham sido renderizados
    const timer = setTimeout(handleResize, 100);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h2 className="gallery-title">Nosso Espaço</h2>
        <p className="gallery-subtitle">Conforto, segurança e bem-estar reunidos em um espaço criado para cuidar de você.</p>
      </div>
      
      <motion.div ref={carouselRef} className="gallery-carousel-wrapper" whileTap={{ cursor: "grabbing" }}>
        <motion.div 
          className="gallery-container" 
          drag="x" 
          dragConstraints={{ right: 0, left: -width }}
          dragElastic={0.1}
        >
          {galleryItems.map((item, index) => (
            <motion.div key={index} className="gallery-item">
              {/* 3. LÓGICA PARA RENDERIZAR IMAGEM OU VÍDEO */}
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline // Essencial para autoplay em celulares
                />
              ) : (
                <img 
                  src={item.src} 
                  alt={item.alt}
                  loading="lazy"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};