import { motion } from 'framer-motion';
import { Leaf, Clock, BrainCircuit, Users } from 'lucide-react';

const FEATURE_DATA = [
  {
    icon: BrainCircuit,
    title: 'Enhanced Focus',
    desc: 'Meals that boost focus, reduce fatigue, and support overall employee well-being.',
  },
  {
    icon: Leaf,
    title: 'Scientific Nutrition',
    desc: 'Expert-designed meals with optimal nutrition and portion sizes.',
  },
  {
    icon: Clock,
    title: 'Reliable Service',
    desc: 'Punctual, consistent, and adaptable to corporate schedules.',
  },
  {
    icon: Users,
    title: 'Seamless Integration',
    desc: 'Hassle-free onboarding, flexible plans, and smooth facility coordination.',
  },
];

const WhyChooseSection = () => {
  return (
    <section className="section-padding" style={{ background: 'white' }}>
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
            Why Choose Us
          </span>
          <h2
            style={{
              fontSize: '2.5rem',
              color: 'var(--color-secondary)',
              marginTop: '0.5rem',
            }}
          >
            Elevate Workplace Wellness
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          {FEATURE_DATA.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              style={{
                padding: '2rem',
                background: 'var(--color-bg-light)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(0,0,0,0.05)',
                transition: 'all 0.3s',
              }}
              whileHover={{ y: -5, boxShadow: 'var(--shadow-lg)' }}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  background: 'rgba(0, 184, 148, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-primary)',
                  marginBottom: '1.5rem',
                }}
              >
                <feature.icon size={28} />
              </div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>
                {feature.title}
              </h3>
              <p
                style={{ color: 'var(--color-text-light)', lineHeight: '1.6' }}
              >
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
