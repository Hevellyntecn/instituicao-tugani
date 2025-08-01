import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';
import logoImg from '../../assets/images/logo-tugani.png';

export const Header: React.FC = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isTransparent, setIsTransparent] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Pega a altura da primeira seção (HeroSlider)
      const heroSection = document.querySelector('.hero-section') as HTMLElement;
      const heroHeight = heroSection ? heroSection.offsetHeight : 100;
      
      // Header fica visível no início e some quando sair da primeira seção
      setIsHeaderVisible(window.scrollY < heroHeight - 100);
      
      // Header fica transparente apenas no início
      setIsTransparent(window.scrollY < 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open);
  };

  return (
    <>
      <AnimatePresence>
        {isHeaderVisible && (
          <motion.header
            className={`header-fixed ${isTransparent ? 'header-transparent' : 'header-solid'}`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <div className="header-container">
              <div className="logo">
                <img src={logoImg} alt="TUGANI Cosméticos Veganos" />
              </div>
              <nav className="navigation-desktop">
                <a href="#services">Serviços</a>
                <a href="#products">Produtos</a>
                <a href="#testimonials">Depoimentos</a>
                <a href="#contact">Contato</a>
              </nav>
              <div className="header-actions-desktop">
                <a href="#contact" className="header-cta">
                  Agendar Sua Jornada
                </a>
              </div>
              <button
                className={`hamburger-button ${isMenuOpen ? 'open' : ''}`}
                onClick={toggleMenu}
                aria-label="Abrir menu"
              >
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
              </button>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-nav-panel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="mobile-nav-links">
              <a href="#services" onClick={toggleMenu}>
                Serviços
              </a>
              <a href="#journeys" onClick={toggleMenu}>
                Jornadas
              </a>
              <a href="#products" onClick={toggleMenu}>
                Produtos
              </a>
              <a href="#testimonials" onClick={toggleMenu}>
                Depoimentos
              </a>
              <a href="#contact" onClick={toggleMenu}>
                Contato
              </a>
              <a
                href="#contact"
                className="mobile-nav-cta"
                onClick={toggleMenu}
              >
                Agendar Sua Jornada
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
