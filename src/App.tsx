import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
// import Services from "./components/Services"
// import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
import FloatingWhatsApp from "./components/FloatingWhatsApp"

function App() {
  return (
    <div className="bg-[var(--primary-color)] text-[var(--contrast-color)] min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        {/* <Services />
        <Testimonials /> */}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
