import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';
import logoImg from '../../assets/images/logo-tugani.png';

export const Header: React.FC = () => {
  // O estado 'isTransparent' e o useEffect foram removidos, pois não são mais necessários.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open);
  };

  return (
    <>
      {/* O className agora é fixo, sem lógica condicional */}
      <header className="header-fixed">
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
             {/* Usando a classe global que já criamos */}
            <a href="#agendamento" className="btn-primary">
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
              <a href="#agendamento" className="mobile-nav-cta" onClick={toggleMenu}>
                Agendar Sua Jornada
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};