
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WorkCarousel from '../components/WorkCarousel';

import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Credentials from '../components/Credentials';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WorkCarousel />
      <Credentials/>
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;