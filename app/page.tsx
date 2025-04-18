import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Works from './components/Works';
import Blog from './components/Blog';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Home />
        <AboutUs />
        <Philosophy />
        <Services />
        <Works />
        <Blog />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
