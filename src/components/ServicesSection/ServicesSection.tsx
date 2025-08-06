import React from 'react';
import { motion } from 'framer-motion';
import './ServicesSection.css';

const services = [
  {
    id: 1,
    category: 'Odontologia',
    title: 'Odontologia Estética',
    description: 'Transforme seu sorriso com tratamentos modernos e personalizados',
    icon: '',
    features: [
      'Odontologia Estética',
      'Clínico Geral',
      'Tratamento de Canal',
      'Implantes dentários',
      'Prótese total (dentadura) e parcial',
      'Ortodontia (aparelhos ortodônticos)',
      'Distúrbio do sono e bruxismo',
      'Odontopediatria',
      'Atendimento a pacientes com necessidades especiais(transtorno do espectro autista e outras condições que afetam o neurodesenvoleimento)',   ],
  },
  {
    id: 2,
    category: 'Harmonização',
    title: 'Harmonização Facial e Corporal',
    description: 'Realce sua beleza natural com procedimentos avançados',
    features: [
      'Gerenciamento de pele',
      'Rejuvenecimento facial e corporal',
      'Harmonização facial',
      'Preenchimento labial',
      'Bioestímulo de colágeno',
      'Estética Regenerativa',
      'Suplementação natural personalizada',
      'Prescrição de biocosméticos personalizados',
      'Tratamento de flacidez',
      'Tratamento de cicatrizes e manchas',
      'Harmonização do bumbum',
    ],
  },
  {
    id: 3,
    category: 'Spa e Terapia ',
    title: 'Tratamentos Corporais',
    description: 'Cuide do seu corpo com técnicas inovadoras e resultados comprovados',
    features: [
      'Massagem relaxante',
      'Massagem terapêutica',
      'Aromaterapia',
      'Spa dos pés',
      'Ventosaterapia',
      'Drenagem linfática',
      'Pós-operatório',
      'Massagem modeladora',
      'Liberação miofascial',
    ],
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
              <div className='service-icon' style={{ }}>
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
            href='https://whatsapp.faleconosco.chat/redirect/731235a3f'
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