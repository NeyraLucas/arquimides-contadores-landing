import { useState, useEffect } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import Partners from "./components/Partners"
import Footer from "./components/Footer"
import ContactUs from "./components/ContactUs"
import FloatingWhatsApp from "./components/FloatingWhatsApp"
import Loader from "./components/Loader"

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    // Check if the page is already loaded
    if (document.readyState === "complete") {
      // Add a small delay to ensure smooth transition even if loaded instantly
      setTimeout(() => setIsLoading(false), 1000);
    } else {
      window.addEventListener("load", handleLoad);
      // Fallback timeout in case load event doesn't fire or takes too long
      const timeoutId = setTimeout(() => setIsLoading(false), 3000);

      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(timeoutId);
      };
    }
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="bg-[var(--primary-color)] text-[var(--contrast-color)] min-h-screen flex flex-col animate-fade-in">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Partners />
      </main>
      <ContactUs />
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
