const ContactSection = () => {
  const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contacto" className="py-5 text-white" style={{ backgroundColor: 'var(--dark-bg)' }}>
      <div className="container">
        <h2 className="section-title text-center text-white mb-5">Contáctanos</h2>
        <div className="row g-5">
          <div className="col-lg-6" data-aos="flip-right">
            <div className="mb-4">
              <h4 className="mb-3"><i className="bi bi-envelope me-2"></i>Información de Contacto</h4>
              <p><i className="bi bi-envelope-fill me-2"></i><a href="mailto:info@innommx.com" className="text-white">info@innommx.com</a></p>
              <p><i className="bi bi-telephone-fill me-2"></i><a href="tel:+525584690433" className="text-white">+52 55 8469 0433</a></p>
              <div className="mt-4">
                <a href="https://wa.me/525584690433?text=Hola%2C%20me%20interesa%20informaci%C3%B3n%20sobre%20sus%20servicios%20y%20productos.%20Gracias." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" aria-label="Contactar por WhatsApp al +52 55 8469 0433">Contactar por WhatsApp</a>
              </div>
            </div>
            <div className="mt-5">
              <h5 className="mb-4">Síguenos en Redes Sociales</h5>
              <div className="d-flex gap-3">
                <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a>
                <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
                <a href="#" className="social-icon"><i className="bi bi-tiktok"></i></a>
                <a href="https://wa.me/525584690433?text=Hola%2C%20me%20interesa%20informaci%C3%B3n%20sobre%20sus%20servicios%20y%20productos.%20Gracias." className="social-icon"><i className="bi bi-whatsapp"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="flip-left">
            <form onSubmit={handleSubmit} className="needs-validation">
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input 
                  type="email" 
                  className="form-control" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Mensaje</label>
                <textarea 
                  className="form-control" 
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                {submitted ? 'Enviado ✓' : 'Enviar'}
              </button>
            </form>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-5 pt-5" data-aos="zoom-in">
          <h4 className="text-center text-white mb-4">Nuestra Ubicación</h4>
          <div className="map-container">
            <a href="https://maps.app.goo.gl/ApT4MioK4P2EV3DJ9" target="_blank" rel="noopener noreferrer" className="map-link" aria-label="Abrir ubicación en Google Maps">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.289387147316!2d-99.04950823210498!3d19.327821968701747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce3d3d3d3d3d3d%3A0x3d3d3d3d3d3d3d3d!2sINNOMMX!5e0!3m2!1ses!2smx!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '12px', pointerEvents: 'none' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación INNOMMX"
              ></iframe>
              <div className="map-overlay">👆 Click aquí para ver en Google Maps</div>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .map-container {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 212, 255, 0.2);
          background: white;
          padding: 8px;
          position: relative;
          cursor: pointer;
          transition: all 0.4s ease;
        }

        .map-container:hover {
          box-shadow: 0 30px 80px rgba(0, 102, 204, 0.35);
          transform: translateY(-4px);
        }

        .map-link {
          display: block;
          position: relative;
          text-decoration: none;
        }

        .map-container iframe {
          display: block;
          border-radius: 8px;
          width: 100% !important;
        }

        .map-overlay {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(90deg, #0066cc, #0099ff);
          color: white;
          padding: 12px 24px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1rem;
          box-shadow: 0 8px 20px rgba(0, 102, 204, 0.3);
          animation: mapBounce 2s infinite;
          z-index: 20;
          pointer-events: none;
        }

        @keyframes mapBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-8px); }
        }

        .map-container:hover .map-overlay {
          animation: none;
          transform: translateX(-50%) translateY(-8px);
        }

        @media (max-width: 768px) {
          .map-container {
            height: 300px !important;
          }

          .map-container iframe {
            height: 300px !important;
          }

          .map-overlay {
            padding: 10px 16px;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 576px) {
          .map-container {
            height: 250px !important;
          }

          .map-container iframe {
            height: 250px !important;
          }

          .map-overlay {
            padding: 8px 12px;
            font-size: 0.8rem;
            bottom: 12px;
          }
        }
      `}</style>
    </section>
  );
};
