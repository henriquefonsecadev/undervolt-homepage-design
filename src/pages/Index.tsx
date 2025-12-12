import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ValueProposition from '@/components/ValueProposition';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import DevelopmentSection from '@/components/DevelopmentSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ValueProposition />
        <ServicesSection />
        <AboutSection />
        <DevelopmentSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
