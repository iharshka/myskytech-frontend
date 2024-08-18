import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl pt-20 mx-auto px-6">
        <Hero />
        <Services />
        <Testimonials />
        <Footer />
      </div>
    </>
  )
}