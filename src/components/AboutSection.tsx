import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section
      id="company-profile"
      className="section-padding"
      style={{
        background: 'var(--color-bg-light)',
        color: 'var(--color-secondary)',
      }}
    >
      <div className="container">
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}
        >
          <style>{`
             @media (min-width: 992px) {
               .about-grid { grid-template-columns: 1.5fr 1fr !important; }
             }
          `}</style>

          <div
            className="about-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr)',
              gap: '4rem',
              alignItems: 'start',
            }}
          >
            {/* Left Column */}
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                style={{ fontSize: '3rem', marginBottom: '2rem' }}
              >
                <span style={{ color: 'var(--color-secondary)' }}>
                  About Us
                </span>
              </motion.h2>
              <p
                style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.8',
                  color: 'var(--color-primary-dark)', // Light gray for text on dark bg
                  marginBottom: '3rem',
                }}
              >
                At Mahoo's Kitchen, we believe that wellness drives
                productivity. We specialize in providing nutritious,
                chef-crafted meals tailored for modern corporate environments,
                where sustained energy and mental clarity are essential.
              </p>

              <div style={{ marginBottom: '2rem' }}>
                <h3
                  style={{
                    fontSize: '1.5rem',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <span style={{ color: 'var(--color-primary)' }}>✦</span>{' '}
                  Mission
                </h3>
                <p style={{ color: 'var(--color-primary-dark)' }}>
                  To make healthy eating effortless for corporate teams by
                  providing fresh, balanced, chef-crafted meals rooted in
                  nutrition science, premium ingredients, and uncompromising
                  service.
                </p>
              </div>

              <div>
                <h3
                  style={{
                    fontSize: '1.5rem',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <span style={{ color: 'var(--color-primary)' }}>✦</span>{' '}
                  Vision
                </h3>
                <p style={{ color: 'var(--color-primary-dark)' }}>
                  To become the most trusted corporate nutrition partner by
                  delivering clean, balanced meals that elevate workplace
                  wellness, productivity, and happiness.
                </p>
              </div>
            </div>

            {/* Right Column: Our Promise Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              style={{
                background: '#fff', // Light BG
                padding: '2.5rem',
                borderRadius: 'var(--radius-lg)',
                height: 'fit-content',
                color: 'var(--color-text-main)', // Dark Text
                boxShadow: 'var(--shadow-xl)',
                borderTop: '6px solid var(--color-primary)',
              }}
            >
              <h3
                style={{
                  fontSize: '1.5rem',
                  marginBottom: '1.5rem',
                  color: 'var(--color-secondary)',
                  fontWeight: 700,
                }}
              >
                Our Promise
              </h3>
              <p
                style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.6',
                  fontStyle: 'italic',
                  color: 'var(--color-primary-dark)',
                  marginBottom: '2rem',
                }}
              >
                "To nourish your workforce with meals that elevate performance &
                support wellness."
              </p>

              <div>
                <h4
                  style={{
                    fontSize: '0.85rem',
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    fontWeight: 700,
                    color: 'var(--color-text-light)',
                  }}
                >
                  What We Offer
                </h4>
                <ul style={{ display: 'grid', gap: '0.8rem' }}>
                  {[
                    'Daily Corporate Meal Programs',
                    'Custom Meal Plans',
                    'Clean, Fresh Ingredients',
                    'Reliable Delivery & Service',
                    'Gourmet Taste + Health',
                  ].map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.8rem',
                        fontSize: '1rem',
                        color: 'var(--color-text-main)',
                      }}
                    >
                      <div
                        style={{
                          width: '6px',
                          height: '6px',
                          background: 'var(--color-primary)',
                          borderRadius: '50%',
                          flexShrink: 0,
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
