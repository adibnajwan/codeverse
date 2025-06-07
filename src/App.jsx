import 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import TeamInfo from './components/TeamInfo';

function App() {
  return (
    <div className="min-h-screen">
      <TeamInfo />
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
