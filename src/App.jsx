import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Starter from "./components/Starter";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fff6e3] text-gray-900">
      
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main content grows to push footer down */}
      <main className="pt-16 flex-1">
        
        <section id="home">
          <Starter />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>

      </main>

      {/* Footer sticks to bottom */}
      <Footer />

    </div>
  );
}

export default App;
