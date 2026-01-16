import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseSection from './components/WhyChooseSection';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <>
      <Helmet>
        <title>Mahoo's Kitchen | Smarter Meals, Powered by Nutrition</title>
        <meta
          name="description"
          content="Mahoo's Kitchen provides fresh, balanced, chef-crafted corporate meals in Chennai. Authentic taste met with nutrition science."
        />
        <meta name="theme-color" content="#00B894" />
      </Helmet>

      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <WhyChooseSection />
          <MenuSection />
          <AboutSection />
        </main>
        <ContactSection />
      </div>
    </>
  );
}

export default App;
