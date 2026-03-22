const MachinerySection = () => {
  const [hoveredCard, setHoveredCard] = React.useState(null);

  const machineryItems = [
    { id: 1, nome: 'Molino Pulverizador 400 Super', img: 'assets/img/molino1.jpeg', link: 'producto-molinos.html', icon: 'bi-gear-fill', badge: 'Premium' },
    { id: 2, nome: 'Turbina Pulverizador 200', img: 'assets/img/molino2.jpeg', link: 'producto-turbina-pulverizador.html', icon: 'bi-lightning-fill', badge: 'Premium' },
    { id: 3, nome: 'Molino de Martillos', img: 'assets/img/molino3.png', link: 'producto-molino-martillos.html', icon: 'bi-hammer-fill', badge: 'Premium' },
    { id: 4, nome: 'Molino Coloidal Premium', img: 'assets/img/logo.jpeg', link: 'producto-molinos-coloidal.html', icon: 'bi-star-fill', badge: 'Estrella', featured: true }
  ];

  const handleCardClick = (item) => {
    window.location.href = item.link;
  };

  return (
    <section id="maquinaria" className="py-5">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2 className="section-title">Nuestra Maquinaria Premium</h2>
          <p className="section-subtitle">Equipos de vanguardia para la industria moderna</p>
        </div>

        {/* Video Molino Coloidal */}
        <div className="video-container mb-5" data-aos="zoom-in">
          <div className="video-wrapper">
            <video 
              className="molino-video"
              controls 
              poster="assets/img/Coloidal.png"
            >
              <source src="video/molino-coloidal.mp4" type="video/mp4" />
              Tu navegador no soporta video HTML5
            </video>
          </div>
          <div className="video-badge">Molino Coloidal en Acción</div>
        </div>
        
        <div className="row g-4">
          {machineryItems.map((item, index) => (
            <div key={item.id} className="col-md-6 col-lg-6" data-aos="fade-up" data-aos-delay={index * 100}>
              <div 
                className={`machinery-card ${item.featured ? 'featured' : 'premium'}`}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleCardClick(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleCardClick(item); }}
              >
                <img 
                  src={item.img} 
                  className="card-img" 
                  alt={item.nome}
                  loading="lazy"
                />
                <div className={`card-overlay ${hoveredCard === item.id ? 'active' : ''}`}>
                  <div className="overlay-content">
                    <i className={`bi ${item.icon} overlay-icon`}></i>
                    <h3>{item.nome}</h3>
                    <p>Haz click para ver detalles</p>
                    <button className="cta-button">Dale Click Aquí</button>
                  </div>
                </div>
                <div className="card-cta-text">👆 Dale Click Aquí</div>
                <div className={`card-badge ${item.featured ? 'featured' : ''}`}>{item.badge}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        #maquinaria {
          background: linear-gradient(135deg, #0f3460 0%, #16213e 50%, #0f3460 100%);
          position: relative;
          overflow: hidden;
          padding: 60px 0;
        }

        #maquinaria::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.03"><path d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/></g></g></svg>');
          pointer-events: none;
        }

        .section-header {
          position: relative;
          z-index: 2;
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: 3.5rem;
          font-weight: 900;
          background: linear-gradient(120deg, #00d4ff, #0099ff, #00d4ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -2px;
          margin-bottom: 1rem;
          animation: titleGlow 3s ease-in-out infinite;
        }

        @keyframes titleGlow {
          0%, 100% { filter: drop-shadow(0 0 10px rgba(0, 212, 255, 0.3)); }
          50% { filter: drop-shadow(0 0 20px rgba(0, 212, 255, 0.6)); }
        }

        .section-subtitle {
          font-size: 1.3rem;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 300;
          letter-spacing: 1px;
        }

        /* Video Container - Responsive & Vertical */
        .video-container {
          position: relative;
          max-width: 500px;
          margin: 0 auto 4rem;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 212, 255, 0.3);
          backdrop-filter: blur(10px);
          aspect-ratio: 9/16;
        }
        }

        .video-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .molino-video {
          width: 100%;
          height: 100%;
          display: block;
          border-radius: 24px;
          object-fit: cover;
        }

        .video-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          background: linear-gradient(120deg, #00d4ff, #0099ff);
          color: white;
          padding: 12px 24px;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          box-shadow: 0 8px 25px rgba(0, 212, 255, 0.4);
          z-index: 10;
        }

        /* Machinery Cards - Interactive */
        .machinery-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
          transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
          height: 400px;
          background: #1a1a1a;
          border: 2px solid transparent;
          background-clip: padding-box;
          background-image: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%), 
                            linear-gradient(120deg, #00d4ff, #0099ff, #00d4ff);
          background-clip: padding-box, border-box;
          background-origin: padding-box, border-box;
        }

        .machinery-card.featured {
          border-color: #ffb700;
          background-image: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%), 
                            linear-gradient(120deg, #ffb700, #ff9500, #ffb700);
        }

        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.320, 1);
        }

        .machinery-card:hover .card-img {
          transform: scale(1.12) rotate(1.5deg);
        }

        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.95) 0%, rgba(0, 153, 255, 0.95) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.4s cubic-bezier(0.23, 1, 0.320, 1);
          z-index: 5;
        }

        .machinery-card.featured .card-overlay {
          background: linear-gradient(135deg, rgba(255, 183, 0, 0.95) 0%, rgba(255, 149, 0, 0.95) 100%);
        }

        .card-overlay.active {
          opacity: 1;
        }

        .overlay-content {
          text-align: center;
          color: white;
          padding: 2rem;
          animation: slideUp 0.5s cubic-bezier(0.23, 1, 0.320, 1);
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .overlay-icon {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          display: block;
          animation: iconBounce 0.6s cubic-bezier(0.23, 1, 0.320, 1);
        }

        @keyframes iconBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        .overlay-content h3 {
          font-size: 1.8rem;
          font-weight: 800;
          margin-bottom: 0.8rem;
          letter-spacing: -0.5px;
          line-height: 1.2;
        }

        .overlay-content p {
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .cta-button {
          background: white;
          color: #0099ff;
          border: none;
          padding: 12px 28px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
          box-shadow: 0 8px 20px rgba(255, 255, 255, 0.2);
        }

        .cta-button:hover {
          transform: scale(1.08);
          box-shadow: 0 12px 30px rgba(255, 255, 255, 0.3);
        }

        .card-cta-text {
          position: absolute;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
          color: white;
          font-weight: 700;
          font-size: 1rem;
          opacity: 0.9;
          animation: bounce 2s infinite;
          z-index: 4;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
        }

        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-8px); }
        }

        .machinery-card:hover .card-cta-text {
          opacity: 0;
        }

        .card-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background: linear-gradient(120deg, #00d4ff, #0099ff);
          color: white;
          padding: 8px 16px;
          border-radius: 30px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          z-index: 4;
          letter-spacing: 1.5px;
          box-shadow: 0 4px 15px rgba(0, 212, 255, 0.4);
          transition: all 0.3s ease;
        }

        .card-badge.featured {
          background: linear-gradient(120deg, #ffb700, #ff9500);
          box-shadow: 0 4px 15px rgba(255, 183, 0, 0.4);
          animation: badgePulse 2s ease-in-out infinite;
        }

        @keyframes badgePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }

        .machinery-card:hover {
          transform: translateY(-25px) scale(1.02);
          box-shadow: 0 25px 70px rgba(0, 212, 255, 0.4);
        }

        .machinery-card:focus {
          outline: 2px solid #0099ff;
          outline-offset: 4px;
        }

        /* Responsive Design */
        @media (max-width: 992px) {
          .section-title {
            font-size: 2.8rem;
            letter-spacing: -1px;
          }

          .machinery-card {
            height: 380px;
          }

          .overlay-icon {
            font-size: 3rem;
          }

          .overlay-content h3 {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          #maquinaria {
            padding: 40px 0;
          }

          .section-header {
            padding: 0 10px;
          }

          .section-title {
            font-size: 2rem;
            margin-bottom: 0.5rem;
            letter-spacing: 0px;
          }

          .section-subtitle {
            font-size: 1.1rem;
          }

          .video-container {
            border-radius: 16px;
            margin-bottom: 2.5rem;
          }

          .video-badge {
            padding: 10px 16px;
            font-size: 0.75rem;
            letter-spacing: 1px;
            top: 12px;
            left: 12px;
          }

          .machinery-card {
            height: 320px;
            border-radius: 16px;
          }

          .machinery-card:hover {
            transform: translateY(-15px) scale(1.01);
            box-shadow: 0 15px 45px rgba(0, 212, 255, 0.25);
          }

          .overlay-icon {
            font-size: 2.5rem;
            margin-bottom: 0.8rem;
          }

          .overlay-content {
            padding: 1.5rem;
          }

          .overlay-content h3 {
            font-size: 1.3rem;
            margin-bottom: 0.5rem;
          }

          .overlay-content p {
            font-size: 0.9rem;
          }

          .card-badge {
            padding: 6px 12px;
            font-size: 0.65rem;
            right: 10px;
            top: 10px;
          }
        }

        @media (max-width: 576px) {
          .section-header {
            margin-bottom: 2rem;
            padding: 0 10px;
          }

          .section-title {
            font-size: 1.6rem;
            letter-spacing: 0px;
          }

          .section-subtitle {
            font-size: 0.95rem;
          }

          .video-container {
            margin-bottom: 2rem;
          }

          .machinery-card {
            height: 280px;
          }

          .overlay-content h3 {
            font-size: 1.1rem;
          }

          .overlay-icon {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

