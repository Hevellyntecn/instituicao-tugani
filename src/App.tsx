import { Header } from './components/Header/Header';
import { HeroSlider } from './components/HeroSlider/HeroSlider';
import { ServicesSection } from './components/ServicesSection/ServicesSection';
import { ProductsShowcase } from './components/ProductsShowcase/ProductsShowcase';
import { TestimonialsSection } from './components/TestimonialsSection/TestimonialsSection';
import { GallerySection } from './components/GallerySection/GallerySection';
import { PlansSection } from './components/PlansSection/PlansSection';
import { TeamSection } from './components/TeamSection/TeamSection';
import { Footer } from './components/Footer/Footer';
import { WhatsAppButton } from './components/WhatsAppButton/WhatsAppButton';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <ServicesSection />
        <ProductsShowcase />
        <PlansSection />
        <TestimonialsSection />
        <TeamSection />
        <GallerySection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;