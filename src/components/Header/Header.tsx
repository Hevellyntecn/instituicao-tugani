import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';
import logoImg from '../../assets/images/logo-tugani.png';

export const Header: React.FC = () => {
  const [isTransparent, setIsTransparent] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // O header só fica transparente no topo da página
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
      <header className={`header-fixed ${isTransparent ? 'header-transparent' : 'header-solid'}`}>
        <div className="header-container">
          <a href="#" className="logo">
            <img src={logoImg} alt="TUGANI Cosméticos Veganos" />
          </a>
          <nav className="navigation-desktop">
            <a href="#services">Serviços</a>
            <a href="#products">Produtos</a>
            <a href="#testimonials">Depoimentos</a>
            <a href="#contact">Contato</a>
          </nav>
          <div className="header-actions-desktop">
            <a href="#contact" className="header-cta">
              Agende uma consulta
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
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-nav-panel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav className="mobile-nav-links">
              <a href="#services" onClick={toggleMenu}>Serviços</a>
              <a href="#products" onClick={toggleMenu}>Produtos</a>
              <a href="#testimonials" onClick={toggleMenu}>Depoimentos</a>
              <a href="#contact" onClick={toggleMenu}>Contato</a>
              <a href="#contact" className="mobile-nav-cta" onClick={toggleMenu}>
                Agendar Sua Jornada
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};