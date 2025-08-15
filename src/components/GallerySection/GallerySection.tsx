import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './GallerySection.css';

// ... (suas importações de imagens e vídeos permanecem as mesmas)
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


type GalleryItem = {
  src: string;
  alt: string;
  type: 'image' | 'video';
};

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
  // MUDANÇA 1: Renomeamos a ref para clareza
  const viewportRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (viewportRef.current) {
        // MUDANÇA 2: Acessamos o scrollWidth do container interno (o primeiro filho)
        const container = viewportRef.current.children[0] as HTMLDivElement;
        if (container) {
          setWidth(container.scrollWidth - viewportRef.current.offsetWidth);
        }
      }
    };
    
    const timer = setTimeout(handleResize, 300); // Aumentado um pouco para garantir
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  const scrollAmount = 300;

  const scrollLeft = () => {
    if (viewportRef.current) {
      viewportRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (viewportRef.current) {
      viewportRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h2 className="gallery-title">Nosso espaço</h2>
        <p className="gallery-subtitle">Conforto, segurança e bem-estar reunidos em um espaço criado para cuidar de você.</p>
      </div>
      
      <div className="gallery-carousel-wrapper">
        <button className="carousel-arrow prev" onClick={scrollLeft} aria-label="Slide anterior">&#8249;</button>
        <button className="carousel-arrow next" onClick={scrollRight} aria-label="Próximo slide">&#8250;</button>

        <motion.div ref={viewportRef} className="gallery-viewport" whileTap={{ cursor: "grabbing" }}>
          <motion.div 
            className="gallery-container" 
            drag="x" 
            dragConstraints={{ right: 0, left: -width }}
            dragElastic={0.1}
          >
            {galleryItems.map((item, index) => (
              <motion.div key={index} className="gallery-item">
                {item.type === 'video' ? (
                  <video src={item.src} autoPlay loop muted playsInline />
                ) : (
                  <img src={item.src} alt={item.alt} loading="lazy" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};