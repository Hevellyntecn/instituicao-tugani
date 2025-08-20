import React from 'react';
import './WhatsAppButton.css';
import { FaWhatsapp } from 'react-icons/fa';

export const WhatsAppButton: React.FC = () => {
  const phoneNumber = "556592841136"; // WhatsApp: +55 (65) 92841136
  const message = "Olá! Vim pelo site e gostaria de mais informações.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappLink}
      className="whatsapp-float-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};