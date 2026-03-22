const ServicesSection = () => {
  const services = [
    { 
      icon: 'wrench-adjustable', 
      name: 'Mantenimiento Preventivo', 
      description: 'Alargamos la vida útil de tus molinos y mezcladoras con servicio técnico especializado.',
      details: 'Programas de mantenimiento preventivo mensuales, trimestrales o anuales. Técnicos certificados, repuestos originales, diagnóstico completo de equipos.'
    },
    { 
      icon: 'pencil-square', 
      name: 'Fabricación a Medida', 
      description: 'Diseñamos maquinaria específica para las necesidades de tu planta.',
      details: 'Ingeniería personalizada, consultoría técnica, diseño según especificaciones de producción, adaptación a tus procesos únicos.'
    },
    { 
      icon: 'box-seam', 
      name: 'Venta de Refacciones', 
      description: 'Contamos con stock de turbinas, martillos y piezas de desgaste para entrega inmediata.',
      details: 'Turbinas originales, martillos pulverizadores, cuchillas, rodamientos, motores, componentes eléctricos. Stock garantizado y envío rápido.'
    },
    { 
      icon: 'chat-dots', 
      name: 'Asesoría Técnica', 
      description: 'Optimizamos tus procesos con consultoría especializada en pulverización industrial.',
      details: 'Evaluación de necesidades, recomendación de equipos, diseño de plantas, optimización de procesos, apoyo post-venta.'
    }
  ];

  const handleCardClick = (item) => {
    window.location.href = '#contacto';
  };

  return (
    <section id="servicios" className="py-5 section-servicios">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">¿Qué Hacemos?</h2>
          <p className="section-subtitle">Más que vender maquinaria: acompañamos tu proceso industria</p>
        </div>
        <div className="row g-4">
          {services.map((item, index) => {
            const animations = ['fade-up', 'fade-left', 'fade-right', 'fade-left'];
            const animation = animations[index % animations.length];
            return (
            <div key={index} className="col-md-6 col-lg-6" data-aos={animation} data-aos-delay={index * 100}>
              <div className="service-info-card">
                <div className="service-icon-box">
                  <i className={`bi bi-${item.icon}`}></i>
                </div>
                <div className="service-info-content">
                  <h5 className="service-title">{item.name}</h5>
                  <p className="service-description">{item.description}</p>
                  <p className="service-details">{item.details}</p>
                  <a href="#contacto" className="service-link">Solicitar Información →</a>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
      <style>{`
        .section-servicios {
          background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
          position: relative;
          overflow: hidden;
          padding: 80px 0;
        }

        .section-servicios::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(0, 212, 255, 0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .section-servicios .section-title {
          position: relative;
          z-index: 2;
          font-size: 3rem;
          color: #0f3460;
          margin-bottom: 1rem;
        }

        .section-servicios .section-subtitle {
          position: relative;
          z-index: 2;
          color: #667085;
          font-size: 1.2rem;
          font-weight: 400;
          margin-bottom: 3rem;
        }

        .service-info-card {
          position: relative;
          z-index: 2;
          display: flex;
          gap: 20px;
          padding: 30px;
          background: white;
          border-radius: 16px;
          border-left: 5px solid #0066cc;
          box-shadow: 0 8px 24px rgba(0, 102, 204, 0.08);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          height: 100%;
        }

        .service-info-card:hover {
          transform: translateX(8px);
          box-shadow: 0 16px 40px rgba(0, 102, 204, 0.15);
          border-left-color: #0099ff;
        }

        .service-icon-box {
          flex-shrink: 0;
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #0066cc 0%, #0099ff 100%);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(0, 102, 204, 0.2);
        }

        .service-icon-box i {
          font-size: 2rem;
          color: white;
        }

        .service-info-content {
          flex-grow: 1;
        }

        .service-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #0f3460;
          margin: 0 0 0.5rem 0;
        }

        .service-description {
          font-size: 1rem;
          color: #0066cc;
          font-weight: 600;
          margin: 0 0 0.8rem 0;
          line-height: 1.4;
        }

        .service-details {
          font-size: 0.95rem;
          color: #667085;
          margin: 0;
          line-height: 1.6;
        }

        .service-link {
          display: inline-block;
          margin-top: 12px;
          color: #0066cc;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .service-link:hover {
          color: #0099ff;
          transform: translateX(4px);
        }

        /* Responsive */
        @media (max-width: 992px) {
          .section-servicios .section-title {
            font-size: 2.3rem;
          }

          .service-info-card {
            padding: 25px;
            gap: 15px;
          }

          .service-icon-box {
            width: 60px;
            height: 60px;
          }

          .service-icon-box i {
            font-size: 1.7rem;
          }

          .service-title {
            font-size: 1.15rem;
          }
        }

        @media (max-width: 768px) {
          .section-servicios {
            padding: 60px 0;
          }

          .section-servicios .section-title {
            font-size: 2rem;
          }

          .section-servicios .section-subtitle {
            font-size: 1rem;
          }

          .service-info-card {
            flex-direction: column;
            align-items: flex-start;
            padding: 20px;
          }

          .service-icon-box {
            width: 55px;
            height: 55px;
          }

          .service-icon-box i {
            font-size: 1.5rem;
          }

          .service-title {
            font-size: 1.05rem;
          }

          .service-description {
            font-size: 0.95rem;
          }

          .service-details {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 576px) {
          .section-servicios::before {
            width: 300px;
            height: 300px;
          }

          .section-servicios .section-title {
            font-size: 1.6rem;
          }

          .service-info-card {
            padding: 18px;
          }

          .service-icon-box {
            width: 50px;
            height: 50px;
          }

          .service-icon-box i {
            font-size: 1.3rem;
          }

          .service-title {
            font-size: 1rem;
          }

          .service-description {
            font-size: 0.9rem;
          }

          .service-details {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
};
