import './App.css';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About'
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import ProgressBar from './sections/ProgressBar/ProgressBar';

function App() {
  return (
    <>
      <ProgressBar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
