import { Header } from './components/Header/Header';
import { HeroSlider } from './components/HeroSlider/HeroSlider';
import { ServicesSection } from './components/ServicesSection/ServicesSection.tsx';
import { JourneysSection } from './components/JourneysSection/JourneysSection';
import { ProductsShowcase } from './components/ProductsShowcase/ProductsShowcase';
import { TestimonialsSection } from './components/TestimonialsSection/TestimonialsSection';
import { PlansSection } from './components/PlansSection/PlansSection';
import { GallerySection } from './components/GallerySection/GallerySection';
import { Footer } from './components/Footer/Footer';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <ServicesSection />
        <JourneysSection />
        <ProductsShowcase />
        <TestimonialsSection />
        <PlansSection />
        <GallerySection />
      </main>
      <Footer />
    </>
  );
}

export default App;