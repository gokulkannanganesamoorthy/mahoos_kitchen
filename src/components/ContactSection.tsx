import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <footer
      id="contact"
      style={{
        background: 'var(--color-primary)',
        color: 'white',
        paddingTop: '5rem',
        paddingBottom: '2rem',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            marginBottom: '4rem',
          }}
        >
          {/* Brand */}
          <div>
            <h3
              style={{
                fontSize: '2rem',
                marginBottom: '1rem',
                color: 'white',
              }}
            >
              Mahoo's Kitchen
            </h3>
            <p
              style={{
                color: 'rgba(255,255,255,0.9)',
                lineHeight: '1.6',
                marginBottom: '2rem',
              }}
            >
              Smarter meals, Powered by nutrition. Where great work starts with
              great nutrition.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {/* Socials placeholder */}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              style={{
                fontSize: '1.2rem',
                marginBottom: '1.5rem',
                borderBottom: '2px solid rgba(255,255,255,0.3)',
                display: 'inline-block',
                paddingBottom: '0.5rem',
                color: 'white',
              }}
            >
              Get in Touch
            </h4>
            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              <li
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'white',
                }}
              >
                <div
                  style={{
                    background: 'rgba(255,255,255,0.2)',
                    padding: '10px',
                    borderRadius: '50%',
                  }}
                >
                  <Phone size={20} color="white" />
                </div>
                <span>+91 95001 59180</span>
              </li>
              <li
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'white',
                }}
              >
                <div
                  style={{
                    background: 'rgba(255,255,255,0.2)',
                    padding: '10px',
                    borderRadius: '50%',
                  }}
                >
                  <Mail size={20} color="white" />
                </div>
                <span>mahooskitchen25@gmail.com</span>
              </li>
              <li
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'white',
                }}
              >
                <div
                  style={{
                    background: 'rgba(255,255,255,0.2)',
                    padding: '10px',
                    borderRadius: '50%',
                  }}
                >
                  <MapPin size={20} color="white" />
                </div>
                <span>Chennai, Tamilnadu, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.2)',
            paddingTop: '2rem',
            textAlign: 'center',
            fontSize: '0.9rem',
            color: 'rgba(255,255,255,0.8)',
          }}
        >
          <p>
            &copy; {new Date().getFullYear()} Mahoo's Kitchen. All rights
            reserved.
          </p>
          <p style={{ marginTop: '0.5rem' }}>
            Designed & Built with ❤️ by{' '}
            <a
              href="https://gokulkannanganesamoorthy.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'white',
                textDecoration: 'underline',
                fontWeight: 600,
              }}
            >
              Gokul Kannan Ganesamoorthy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
