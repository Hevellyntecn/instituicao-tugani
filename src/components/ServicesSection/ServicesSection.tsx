import React from 'react';
import { motion } from 'framer-motion';
import './ServicesSection.css';

const services = [
  {
    id: 1,
    title: 'Odontologia',
    description: 'Transforme seu sorriso com tratamentos modernos e personalizados',
    features: [
      'Odontologia Estética',
      'Clínico Geral',
      'Tratamento de Canal',
      'Implantes dentários',
      'Prótese total (dentadura) e parcial',
      'Ortodontia (aparelhos ortodônticos)',
      'Distúrbio do sono e bruxismo',
      'Odontopediatria',
      'Atendimento a pacientes com necessidades especiais'
    ]
  },
  {
    id: 2,
    title: 'Harmonização Facial e Corporal',
    description: 'Realce sua beleza natural com procedimentos avançados',
    features: [
      'Gerenciamento de pele',
      'Rejuvenescimento facial e corporal',
      'Harmonização facial',
      'Preenchimento labial',
      'Bioestímulo de colágeno',
      'Estética Regenerativa',
      'Suplementação natural personalizada',
      'Prescrição de biocosméticos personalizados',
      'Tratamento de flacidez',
      'Tratamento de cicatrizes e manchas',
      'Harmonização do bumbum'
    ]
  },
  {
    id: 3,
    title: 'Spa e Terapias Corporais',
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
      'Tratamentos para estrias e flacidez',
      'Terapias para celulites'
    ]
  },
  {
    id: 4,
    title: 'Estética Facial e Terapias Combinadas',
    description: 'Tecnologia de ponta para cuidados com a pele e bem-estar',
    features: [
      'Limpeza de pele',
      'Peeling',
      'Revitalização facial com cosméticos veganos',
      'Design de sobrancelhas',
      'Micro e nano pigmentação de sobrancelhas',
      'Terapia capilar',
      'Microagulhamento drug-delivery',
      'Carboxiterapia',
      'Peelings bioativos regenerativos',
      'Terapia regenerativa de sobrancelhas'
    ]
  },
  {
    id: 5,
    title: 'Saúde Integrada',
    description: 'Alcance seus objetivos de saúde com acompanhamento nutricional personalizado',
    features: [
      'Consulta nutricional',
      'Psicologia',
      'Psicoterapia',
      'Cuidados com a saúde de forma integral'
    ]
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        {/* Header Section */}
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="services-title">
            Nossos serviços especializados
          </h2>
          <p className="services-subtitle">
            Oferecemos tratamentos completos em odontologia, estética facial e corporal,
            sempre com a excelência e profissionalismo que você merece
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="service-title">{service.title}</div>
              
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Quer conhecer todos os nossos tratamentos?</h3>
          <p>Agende uma avaliação personalizada e descubra qual é o melhor tratamento para você</p>
          <a
            href="https://wa.me/556592841136?text=Olá! Gostaria de agendar uma consulta no Instituto Tugani."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Agende uma consulta
          </a>
        </motion.div>
      </div>
    </section>
  );
};