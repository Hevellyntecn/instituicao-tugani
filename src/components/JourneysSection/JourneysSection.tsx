import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './JourneysSection.css';

const journeys = [
  { portal: 'A Expressão', services: [ 'Limpeza de pele', 'Peelings', 'Revitalização facial com cosméticos veganos', 'Microagulhamento drug-delivery', 'Gerenciamento de pele', 'Harmonização facial', 'Preenchimento labial', 'Bioestímulo de colágeno', ] },
  { portal: 'O Sorriso', services: [ 'Odontologia estética', 'Clínico geral', 'Tratamento de canal', 'Implante dentário', 'Ortodontia (aparelhos ortodônticos)', 'Odontopediatria' ] },
  { portal: 'A Forma', services: [ 'Massagem relaxante', 'Massagem terapêutica', 'Drenagem linfática', 'Pós-operatório', 'Massagem modeladora', 'Harmonização do bumbum' ] },
  { portal: 'O Equilíbrio', services: [ 'Consulta nutricional', 'Psicologia', 'Psicoterapia', 'Suplementação natural personalizada', 'Cuidados com a saúde de forma integral' ] },
  { portal: 'A Matéria', services: [ 'Cosméticos Veganos TUGANI', 'Prescrição de biocosméticos personalizados' ] }
];

export const JourneysSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeJourney = journeys[activeIndex];

  return (
    <section id="journeys" className="journeys-section">
      <div className="portals-nav">
        {journeys.map((journey, index) => (
          <button key={journey.portal} className={`portal-button ${index === activeIndex ? 'active' : ''}`} onClick={() => setActiveIndex(index)}>
            {journey.portal}
          </button>
        ))}
      </div>
      <div className="services-display">
        <AnimatePresence mode="wait">
          <motion.div key={activeIndex} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} className="services-list">
            <ul>
              {activeJourney.services.map(service => ( <li key={service}>{service}</li> ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};