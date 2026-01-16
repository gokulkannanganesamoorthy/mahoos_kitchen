import { motion } from 'framer-motion';
import heroImg from '../assets/south_indian_corporate_lunch_1768579651323.png';

const Hero = () => {
  return (
    <section
      className="hero-section"
      style={{
        minHeight: '100vh',
        position: 'relative',
        background: 'var(--color-bg-light)',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px', // Default (Desktop)
        overflow: 'hidden',
      }}
    >
      <style>{`
            @media (max-width: 992px) {
                .hero-section { padding-top: 140px !important; } /* More padding for mobile nav */
                .hero-img { 
                    aspect-ratio: 1/1 !important; 
                    object-fit: cover !important;
                    width: 100% !important;
                }
            }
        `}</style>

      {/* Background Blob/Grain (Optional CSS effect) */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '60vw',
          height: '60vw',
          background:
            'radial-gradient(circle, rgba(0,184,148,0.15) 0%, rgba(255,255,255,0) 70%)',
          borderRadius: '50%',
          zIndex: 0,
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr)',
          gap: '4rem',
          alignItems: 'center',
        }}
      >
        <style>{`
                    @media (min-width: 992px) {
                        .hero-grid { grid-template-columns: 1.2fr 1fr !important; }
                    }
                `}</style>
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr)',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span
              style={{
                display: 'inline-block',
                padding: '0.5rem 1rem',
                background: 'rgba(0, 184, 148, 0.1)',
                color: 'var(--color-primary-dark)',
                borderRadius: '50px',
                fontWeight: 600,
                fontSize: '0.9rem',
                marginBottom: '1.5rem',
                letterSpacing: '0.5px',
              }}
            >
              POWERED BY NUTRITION
            </span>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                color: 'var(--color-secondary)',
                marginBottom: '1.5rem',
                lineHeight: 1.1,
              }}
            >
              Smarter Meals,
              <br />
              <span className="text-gradient">Better Work.</span>
            </h1>
            <p
              style={{
                fontSize: '1.25rem',
                color: 'var(--color-text-light)',
                marginBottom: '2.5rem',
                maxWidth: '540px',
                lineHeight: 1.6,
              }}
            >
              Where great work starts with great nutrition. We provide fresh,
              balanced, chef-crafted meals tailored for modern corporate
              environments.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#menu" className="btn-primary">
                View Daily Menu
              </a>
              <a
                href="#company-profile"
                style={{
                  padding: '1rem 2rem',
                  border: '2px solid var(--color-secondary)',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: 600,
                  color: 'var(--color-secondary)',
                  textDecoration: 'none',
                }}
              >
                Corporate Plans
              </a>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            <img
              src={heroImg}
              alt="Healthy Corporate Meal"
              className="hero-img"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-xl)',
                transform: 'perspective(1000px) rotateY(-5deg)',
              }}
            />
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                bottom: '10%',
                left: '-10%',
                background: 'white',
                padding: '1rem 1.5rem',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-lg)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <div style={{ fontSize: '2rem' }}>🥗</div>
              <div>
                <div
                  style={{ fontWeight: 700, color: 'var(--color-secondary)' }}
                >
                  100% Macro
                </div>
                <div
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-text-light)',
                  }}
                >
                  Balanced Meals
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
