import { Header } from './components/Header/Header';
import { HeroSlider } from './components/HeroSlider/HeroSlider';
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
        {/* O HeroSlider agora é a primeira seção visível abaixo do Header */}
        <HeroSlider />
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