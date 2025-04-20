import AboutHero from "../components/about/AboutHero";
import ProcessSection from "../components/about/ProcessSection";
import StorySection from "../components/about/StorySection";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";

export default function AboutPage() {
    return (
        
      <main>
        <Navbar />
        <AboutHero />
        <StorySection />
        <ProcessSection />
       

        <Footer />
      </main>
    );
  }