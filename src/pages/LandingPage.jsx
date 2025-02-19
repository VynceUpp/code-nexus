import Footer from "../components/LandingPage/Footer";
import Header from "../components/LandingPage/Header";
import HeroSection from "../components/LandingPage/HeroSection";
import InformationSection from "../components/LandingPage/InfoSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header/>
      <HeroSection />
      <InformationSection />
      <Footer />
    </div>
  );
}
