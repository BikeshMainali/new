import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import Link from 'next/link';
import DigitalSolutions from "./components/services/DigitalSolutions";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
       
        {/* Welcome Section */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Welcome to Our Digital Agency
          </h1>
          <p className="text-lg text-gray-600 text-center">
            We build responsive, modern websites with Next.js and Tailwind CSS.
            Our solutions adapt seamlessly to mobile, tablet, and desktop screens.
          </p>
        </div>
        <div>
          <DigitalSolutions />
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
}