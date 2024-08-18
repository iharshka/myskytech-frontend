import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl pt-20 mx-auto px-6">
        <Hero />
        <Services />
      </div>
    </>
  )
}