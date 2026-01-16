import { motion, AnimatePresence } from 'framer-motion';
import { UtensilsCrossed, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '1rem 0', // Reduced padding
        background:
          scrolled || isMobileMenuOpen
            ? 'rgba(255, 255, 255, 0.95)'
            : 'transparent',
        backdropFilter: scrolled || isMobileMenuOpen ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 4px 6px -1px rgba(0,0,0,0.1)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            textDecoration: 'none',
          }}
        >
          <div
            style={{
              background: 'var(--color-primary)',
              padding: '8px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
            }}
          >
            <UtensilsCrossed size={20} />
          </div>
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '1.25rem', // Slightly smaller on mobile
              color:
                scrolled || isMobileMenuOpen
                  ? 'var(--color-text-main)'
                  : 'var(--color-primary)',
            }}
          >
            Mahoo's Kitchen
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="desktop-menu" style={{ display: 'flex', gap: '2rem' }}>
          {['About', 'Menu', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                style={{
                  fontWeight: 500,
                  color: scrolled
                    ? 'var(--color-text-main)'
                    : 'var(--color-text-main)',
                }}
                className="nav-link"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color:
              scrolled || isMobileMenuOpen
                ? 'var(--color-text-main)'
                : 'var(--color-primary)',
          }}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: 'white',
              borderTop: '1px solid #eee',
              overflow: 'hidden',
            }}
          >
            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '1rem 0',
              }}
            >
              {['About', 'Menu', 'Contact'].map((item) => (
                <li key={item} style={{ padding: '1rem 2rem' }}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      display: 'block',
                      fontSize: '1.2rem',
                      fontWeight: 600,
                      color: 'var(--color-secondary)',
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
          .desktop-menu { display: flex; }
          .mobile-toggle { display: none; }
          
          @media (max-width: 768px) {
              .desktop-menu { display: none !important; }
              .mobile-toggle { display: block !important; }
          }

            .nav-link {
                color: 'var(--color-text-main)' !important;
                transition: color 0.3s;
            }
            .nav-link:hover {
                color: var(--color-primary) !important;
            }
        `}</style>
    </motion.nav>
  );
};

export default Navbar;
