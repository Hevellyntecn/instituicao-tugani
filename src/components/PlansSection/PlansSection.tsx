import React, { useRef, useState, useEffect } from 'react';
// 'AnimatePresence' foi removido da linha abaixo
import { motion } from 'framer-motion';
import './PlansSection.css';

const plansData = [
    { title: "Plano 1: Design de Sobrancelhas", price: "R$ 67,00", details: "mensais (sem pigmentação)", features: ["2 sessões por mês", "Opção com pigmentação por R$87/mês", "Plano Anual"] },
    { title: "Plano 2: Detox Facial", price: "R$ 187,00", details: "mensais", features: ["1 Limpeza de pele + máscara calmante/mês", "1 Argiloterapia + Revitalização Tugani/mês", "Plano Anual"] },
    { title: "Plano 3: Detox Corporal", price: "R$ 287,00", details: "mensais", features: ["2 Massagens modeladoras + ultrassom/mês", "2 Mantas térmicas + argiloterapia/mês", "Plano Anual"] },
    { title: "Plano 4: Spa Relaxante 1", price: "R$ 197,00", details: "mensais", features: ["1 Massagem relaxante + aromaterapia/mês", "1 Massagem relaxante + ventosaterapia/mês", "Plano Anual"] },
    { title: "Plano 5: Spa Relaxante 2", price: "R$ 217,00", details: "mensais", features: ["2 Massagens relaxantes (aroma/ventosa)", "1 Revitalização facial + drenagem", "1 Spa dos pés por mês"] },
    { title: "Plano 6: Emagrecimento Rápido", price: "R$ 977,00", details: "mensais (Plano de 6 meses)", features: ["Consultas nutricionais e suplementação", "Medicação subcutânea semanal", "Carboxiterapia e Drenagem corporal"] },
    { title: "Plano 7: Emagrecimento Inteligente", price: "R$ 567,00", details: "mensais", features: ["Consultas nutricionais e suplementação", "Medicação intramuscular", "Drenagens e Carboxiterapia"] },
    { title: "Plano 8: Perda de Gordura Localizada", price: "R$ 387,00", details: "mensais", features: ["Consultas nutricionais e suplementação", "Drenagens e eletroterapias", "Carboxiterapia e Intradermoterapia"] },
    { title: "Plano 9: Gerenciamento de Pele", price: "R$ 497,00", details: "mensais", features: ["Microagulhamento, Peelings, Skinbooster", "Botox (2/ano)", "Bioestímulo de colágeno (1/ano)", "PRP (2/ano)"] },
    { title: "Plano 10: Regeneração e Revitalização", price: "R$ 697,00", details: "mensais", features: ["PRP e Peelings", "Skinbooster e Botox", "Bioestímulo de colágeno (2/ano)", "Medicação parenteral e Microagulhamento"] },
    { title: "Plano 11: Odontologia Integrada", price: "R$ 167,00", details: "mensais", features: ["Consultas e Profilaxia (2/ano)", "Raspagem periodontal (2/ano)", "Clareamento (1/ano)"] },
    { title: "Plano 12: Odontologia e Ortodontia", price: "R$ 217,00", details: "mensais", features: ["Consultas e Profilaxia (2/ano)", "Raspagem periodontal (2/ano)", "Ajustes de aparelho ortodôntico (1/mês)"] },
    { title: "Plano 13: Odontopediatria", price: "R$ 197,00", details: "mensais", features: ["Consultas e educação", "Profilaxia com flúor (4/ano)", "Obturação (até 4/ano)", "Urgências (até 2/ano)"] },
    { title: "Plano 14: Terapia Capilar", price: "R$ 197,00", details: "mensais", features: ["Consultas e prescrições", "Intradermoterapia (1/mês)", "Aromaterapia e massagem capilar", "Ledterapia capilar"] }
];

export const PlansSection: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <section id="plans" className="plans-section">
      <div className="plans-header">
        <h2 className="plans-title">Planos de cuidado</h2>
        <p className="plans-subtitle">
          Cuidado contínuo com a qualidade do Instituto TUGANI. Role para o lado para descobrir o plano ideal para você ou crie um personalizado conosco.
        </p>
      </div>

      <motion.div ref={carouselRef} className="plans-carousel-wrapper" whileTap={{ cursor: "grabbing" }}>
        <motion.div
          className="plans-container"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {plansData.map((plan, index) => (
            <motion.div key={index} className="plan-card">
              <h3 className="plan-card-title">{plan.title}</h3>
              <div className="plan-card-price-wrapper">
                <span className="plan-card-price">{plan.price}</span>
                <span className="plan-card-details">{plan.details}</span>
              </div>
              <ul className="plan-card-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
              <a
                href={`https://wa.me/5565981703400?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre o ${plan.title} do Instituto Tugani.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="plan-card-cta"
              >
                Quero saber mais
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};