import React from 'react';
import './TestimonialsSection.css';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      role: "Paciente",
      content: "A Dra. Wanessa transformou minha autoestima! O tratamento foi incrível e os resultados superaram minhas expectativas. Recomendo para todas!",
      rating: 5,
      imageName: "testimonial-maria-silva.jpg"
    },
    {
      id: 2,
      name: "Ana Costa",
      role: "Paciente",
      content: "Profissionalismo e excelência! A Dra. Wanessa é muito atenciosa e os resultados são naturais e duradouros. Estou muito satisfeita!",
      rating: 5,
      imageName: "testimonial-ana-costa.jpg"
    },
    {
      id: 3,
      name: "Juliana Santos",
      role: "Paciente",
      content: "Incrível como um pequeno ajuste pode fazer toda diferença! A Dra. Wanessa tem mãos de fada. Meu nariz ficou perfeito!",
      rating: 5,
      imageName: "testimonial-juliana-santos.jpg"
    },
    {
      id: 4,
      name: "Fernanda Lima",
      role: "Paciente",
      content: "Atendimento excepcional desde o primeiro contato. A Dra. Wanessa é muito profissional e os resultados são fantásticos!",
      rating: 5,
      imageName: "testimonial-fernanda-lima.jpg"
    },
    {
      id: 5,
      name: "Patrícia Oliveira",
      role: "Paciente",
      content: "Finalmente encontrei uma profissional que entende o que eu queria! A Dra. Wanessa é sensacional e os resultados são incríveis.",
      rating: 5,
      imageName: "testimonial-patricia-oliveira.jpg"
    },
    {
      id: 6,
      name: "Camila Rodrigues",
      role: "Paciente",
      content: "Super recomendo! A Dra. Wanessa é muito competente e atenciosa. O procedimento foi tranquilo e os resultados são maravilhosos!",
      rating: 5,
      imageName: "testimonial-camila-rodrigues.jpg"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            Histórias de Sucesso Reais
          </h2>
          <p className="testimonials-subtitle">
            Depoimentos de pacientes que transformaram suas vidas com a Dra. Wanessa. Veja como pequenos ajustes podem fazer toda diferença!
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  {/* Aqui você pode adicionar as imagens reais */}
                  <div className="avatar-placeholder">
                    {testimonial.name.charAt(0)}
                  </div>
                  {/* 
                  Para adicionar as imagens reais, substitua o div acima por:
                  <img 
                    src={`/src/assets/images/${testimonial.imageName}`}
                    alt={testimonial.name}
                    className="testimonial-image"
                  />
                  */}
                </div>
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-role">{testimonial.role}</p>
                  <div className="testimonial-rating">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              <div className="testimonial-content">
                <p>"{testimonial.content}"</p>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-cta">
          <h3>Quer fazer parte das nossas histórias de sucesso?</h3>
          <p>Agende sua avaliação e descubra como podemos transformar sua autoestima. Sua história de sucesso pode começar hoje!</p>
          <a 
            href="https://whatsapp.faleconosco.chat/redirect/731235a3f?utm_campaign=20365251335&utm_source=adwords&utm_medium=172629053681&utm_term=estetica%20facial&matchtype=b&device=m&network=g&loc=9101900&placement&gad_source=1&gad_campaignid=20365251335&gbraid=0AAAAAp7dcV0mLiaO9f3Ni2Z18sebrFa65&gclid=Cj0KCQjws4fEBhD-ARIsACC3d2_TNE0lfJJ1YUXaUes66Rrp72vr62YnZWTkduDhB5YHcDvJ4dypS84aAq5BEALw_wcB"
            target="_blank"
            rel="noopener noreferrer"
            className="testimonials-button"
          >
            Agendar Avaliação
          </a>
        </div>
      </div>
    </section>
  );
}; 