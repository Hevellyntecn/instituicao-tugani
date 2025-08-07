import React from 'react';
import { motion } from 'framer-motion';
import './ServicesSection.css';

// 1. IMPORTE AS 5 IMAGENS QUE VOCÊ ENVIOU
import servicoOdontologia from '../../assets/images/servico-odontologia.jpg';
import servicoHarmonizacao from '../../assets/images/servico-harmonizacao.jpg';
import servicoSpa from '../../assets/images/servico-spa.jpg';
import servicoEstetica from '../../assets/images/servico-estetica.jpg';
import servicoSaude from '../../assets/images/servico-saude-integrada.jpg';

const services = [
  { id: 1, title: 'Odontologia', imageSrc: servicoOdontologia },
  { id: 2, title: 'Harmonização Facial e Corporal', imageSrc: servicoHarmonizacao },
  { id: 3, title: 'Spa e Terapias Corporais', imageSrc: servicoSpa },
  { id: 4, title: 'Estética Facial e Terapias Combinadas', imageSrc: servicoEstetica },
  { id: 5, title: 'Saúde Integrada', imageSrc: servicoSaude }
];

export const ServicesSection: React.FC = () => {
  return (
    <section id='services' className='services-section'>
      <div className='services-container'>
        <motion.div 
          className='services-header'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='services-title'> Nossos Serviços Especializados </h2>
          <p className='services-subtitle'> Oferecemos tratamentos completos em odontologia, estética facial e corporal, sempre com a excelência e profissionalismo que você merece </p>
        </motion.div>

        <div className='services-grid'>
          {services.map((service, index) => (
            // MUDANÇA 2: O link agora aponta para o nosso novo alvo "#agendamento"
            <motion.a
              key={service.id}
              href="#agendamento" 
              className='service-card'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <img 
                src={service.imageSrc} 
                alt={service.title} 
                className="service-card-image" 
                loading="lazy" 
              />
            </motion.a>
          ))}
        </div>

        {/* MUDANÇA 1: Adicionamos o id="agendamento" aqui, na área do botão */}
        <motion.div 
          id="agendamento"
          className='services-cta'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Quer conhecer todos os nossos tratamentos?</h3>
          <p>Agende uma avaliação personalizada e descubra qual é o melhor tratamento para você</p>
          <a 
            href='https://whatsapp.faleconosco.chat/redirect/731235a3f'
            target='_blank'
            rel='noopener noreferrer'
            className='btn-primary'
          >
            Agendar com Especialista
          </a>
        </motion.div>
      </div>
    </section>
  );
};