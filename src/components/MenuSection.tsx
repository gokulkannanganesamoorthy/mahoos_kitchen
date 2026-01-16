import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import menuPdf from '../assets/menu.pdf';
import breakfastImg from '../assets/modern_breakfast_spread_1768577704405.png';
import lunchImg from '../assets/premium_biryani_lunch_1768577722124.png';

const MenuSection = () => {
  return (
    <section
      id="menu"
      className="section-padding"
      style={{ background: 'var(--color-bg-light)' }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span
            style={{
              color: 'var(--color-primary)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            Daily Menus
          </span>
          <h2
            style={{
              fontSize: '3rem',
              color: 'var(--color-secondary)',
              marginTop: '0.5rem',
            }}
          >
            Curated for Wellness
          </h2>
        </div>

        <div style={{ display: 'grid', gap: '6rem' }}>
          {/* Breakfast Section */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr)',
              gap: '3rem',
              alignItems: 'center',
            }}
            className="menu-grid"
          >
            <style>{`
                            @media (min-width: 992px) {
                                .menu-grid { grid-template-columns: 1fr 1fr !important; }
                                .order-last-mobile { order: -1; }
                            }
                            @media (max-width: 992px) {
                                .menu-img { 
                                    aspect-ratio: 1/1 !important; 
                                    object-fit: cover !important;
                                    width: 100% !important;
                                }
                            }
                        `}</style>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={breakfastImg}
                alt="Breakfast Spread"
                className="menu-img"
                style={{
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-xl)',
                  width: '100%',
                }}
              />
            </motion.div>

            <div>
              <h3
                style={{
                  fontSize: '2rem',
                  color: 'var(--color-secondary)',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                Breakfast Combo
                <span
                  style={{
                    fontSize: '1rem',
                    background: 'var(--color-accent)',
                    color: 'white',
                    padding: '0.2rem 0.8rem',
                    borderRadius: '20px',
                  }}
                >
                  Morning Fuel
                </span>
              </h3>
              <div
                style={{
                  background: 'white',
                  padding: '2rem',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-md)',
                }}
              >
                <ul style={{ display: 'grid', gap: '1rem' }}>
                  {[
                    'Pineapple kesari / Apple kesari / Mixed fruit kesari',
                    'Medhu vada',
                    'Idly (2 pcs)',
                    'Mini masala dosa',
                    'Ghee ven pongal',
                    'Poori & Aloo masala / White kuruma',
                    'Murungakkai sambar & White chutney',
                    'Coffee / Tea',
                  ].map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        borderBottom: '1px dashed #eee',
                        paddingBottom: '0.5rem',
                      }}
                    >
                      <span
                        style={{
                          fontWeight: 500,
                          color: 'var(--color-text-main)',
                        }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Lunch Section */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr)',
              gap: '3rem',
              alignItems: 'center',
            }}
            className="menu-grid"
          >
            <div className="order-last-mobile">
              <h3
                style={{
                  fontSize: '2rem',
                  color: 'var(--color-secondary)',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                Lunch Combos
                <span
                  style={{
                    fontSize: '1rem',
                    background: 'var(--color-primary)',
                    color: 'white',
                    padding: '0.2rem 0.8rem',
                    borderRadius: '20px',
                  }}
                >
                  Power Lunch
                </span>
              </h3>

              <div style={{ display: 'grid', gap: '2rem' }}>
                {/* Combo 1 */}
                <div
                  style={{
                    background: 'white',
                    padding: '2rem',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-md)',
                    borderLeft: '4px solid var(--color-primary)',
                  }}
                >
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
                    LUNCH COMBO – 1
                  </h4>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--color-text-light)',
                      marginBottom: '1rem',
                    }}
                  >
                    Bread halwa • Phulka (2) • Chicken Biriyani • Boiled Egg •
                    Fish Fry • Curd Rice • Pickle
                  </p>
                  <p style={{ fontWeight: 600 }}>Choice of Gravy:</p>
                  <p style={{ color: 'var(--color-text-light)' }}>
                    Chicken sukka / Chettinad Chicken / Pepper chicken
                  </p>
                </div>

                {/* Combo 2 */}
                <div
                  style={{
                    background: 'white',
                    padding: '2rem',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-md)',
                    borderLeft: '4px solid var(--color-accent)',
                  }}
                >
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
                    LUNCH COMBO – 2
                  </h4>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--color-text-light)',
                      marginBottom: '1rem',
                    }}
                  >
                    Payasam • White Rice & Chicken Kulambu • Prawn Masala / Fish
                    Fry • Boiled Egg • Rasam • Curd • Pickle • Chips
                  </p>
                  <p style={{ fontWeight: 600 }}>Sides:</p>
                  <p style={{ color: 'var(--color-text-light)' }}>
                    Chicken 65 / Chicken Gravy • Aloo Masala / White Puttu •
                    Carrot Beans Poriyal
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={lunchImg}
                alt="Lunch Combo"
                className="menu-img"
                style={{
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-xl)',
                  width: '100%',
                }}
              />
            </motion.div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '5rem' }}>
          <motion.a
            href={menuPdf}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <Download size={20} />
            Download Full Menu Brochure
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
