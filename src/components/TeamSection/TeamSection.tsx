import React from 'react';
import { motion } from 'framer-motion';
import './TeamSection.css';

import draWanessaImg from '../../assets/images/team/dra-wanessa-costa.jpg';
import draFernandaImg from '../../assets/images/team/dra-fernanda.jpg';
import draMaryaImg from '../../assets/images/team/dra-marya.jpg';
import ericaAlmeidaImg from '../../assets/images/team/dra-érica.jpg';

type TeamMember = {
  image: string;
  name: string;
  title: string;
  bio: string;
};

// 3. ATUALIZE O ARRAY COM OS DADOS REAIS DA EQUIPE
const teamData: TeamMember[] = [
  {
    image: draWanessaImg,
    name: 'Dra. Wanessa Costa Silva Faria',
    title: 'Cirurgiã Dentista (CRO-MT 11535) e Farmacêutica (CRF-MT 4429)',
    bio: 'CEO, Fundadora e Doutora pela UNICAMP. Especialista em Estética e Saúde Regenerativa, unindo ciência e cuidado integral.'
  },
  {
    image: draFernandaImg,
    name: 'Dra. Fernanda Gonzaga',
    title: 'Nutricionista (CRN 42910)',
    bio: 'Especialista em Nutrição de Pacientes Renais, focada em promover saúde e bem-estar através da alimentação consciente.'
  },
  {
    image: draMaryaImg,
    name: 'Dra. Marya de Fátima C. Souza',
    title: 'Cirurgiã Dentista (CRO-MT 11395)',
    bio: 'Com aperfeiçoamento em pediatria e crianças com necessidades especiais, dedicada a cuidar de sorrisos com carinho e atenção.'
  },
  {
    image: ericaAlmeidaImg,
    name: 'Érica Cristina S. Almeida',
    title: 'Esteticista',
    bio: 'Com aperfeiçoamento em micropigmentação nano, é especialista em realçar a beleza natural com técnicas precisas e artísticas.'
  },
];

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="team-section">
      <div className="team-container">
        <div className="team-header">
          <h2 className="team-title">Nossa equipe</h2>
          <p className="team-subtitle">
            Conheça os profissionais dedicados a transformar sua autoestima com cuidado, ciência e paixão.
          </p>
        </div>

        <div className="team-grid">
          {teamData.map((member, index) => (
            <motion.div
              key={index}
              className="team-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="team-member-photo-wrapper">
                <img src={member.image} alt={member.name} className="team-member-photo" />
              </div>
              <h3 className="team-member-name">{member.name}</h3>
              <h4 className="team-member-title">{member.title}</h4>
              <p className="team-member-bio">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};