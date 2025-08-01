import React from 'react';
import { motion } from 'framer-motion';
import './ServicesSection.css';

const services = [
  {
    id: 1,
    category: 'Odontologia',
    title: 'Odontologia Estética',
    description: 'Transforme seu sorriso com tratamentos modernos e personalizados',
    icon: '🦷',
    features: [
      'Clareamento dental profissional',
      'Lentes de contato dentais',
      'Aparelho invisível',
      'Implantes dentários',
      'Ortodontia estética'
    ],
    color: 'var(--color-primary)'
  },
  {
    id: 2,
    category: 'Estética Facial',
    title: 'Harmonização Facial',
    description: 'Realce sua beleza natural com procedimentos avançados',
    icon: '✨',
    features: [
      'Rinomodelação com fios permanentes',
      'Preenchimento labial',
      'Botox e toxina botulínica',
      'Bioestimulador de colágeno',
      'Peelings e microagulhamento'
    ],
    color: 'var(--color-verde)'
  },
  {
    id: 3,
    category: 'Estética Corporal',
    title: 'Tratamentos Corporais',
    description: 'Cuide do seu corpo com técnicas inovadoras e resultados comprovados',
    icon: '💪',
    features: [
      'Lipoaspiração de papada',
      'Massagem modeladora',
      'Drenagem linfática',
      'Carboxiterapia',
      'Harmonização do bumbum'
    ],
    color: '#d4af37'
  }
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
          <h2 className='services-title'>
            Nossos Serviços Especializados
          </h2>
          <p className='services-subtitle'>
            Oferecemos tratamentos completos em odontologia, estética facial e corporal, 
            sempre com a excelência e profissionalismo que você merece
          </p>
        </motion.div>

        <div className='services-grid'>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className='service-card'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className='service-icon' style={{ backgroundColor: service.color }}>
                <span>{service.icon}</span>
              </div>
              
              <div className='service-category'>{service.category}</div>
              <h3 className='service-title'>{service.title}</h3>
              <p className='service-description'>{service.description}</p>
              
              <ul className='service-features'>
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className='feature-icon'>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href='https://wa.me/5565981703400?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos%20do%20Instituto%20Tugani.'
                target='_blank'
                rel='noopener noreferrer'
                className='service-cta'
              >
                Agendar Consulta
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className='services-cta'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Quer conhecer todos os nossos tratamentos?</h3>
          <p>Agende uma avaliação personalizada e descubra qual é o melhor tratamento para você</p>
          <a 
            href='https://wa.me/5565981703400?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos%20do%20Instituto%20Tugani'
            target='_blank'
            rel='noopener noreferrer'
            className='services-button'
          >
            Agendar Avaliação Gratuita
          </a>
        </motion.div>
      </div>
    </section>
  );
};