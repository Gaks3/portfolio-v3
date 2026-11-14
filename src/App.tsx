import "@fontsource-variable/geist";

import LenisScrollProvider from "./provider/lenis-provider";
import Slide from "./components/slide";
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Works from "./components/works";
import KnightEngineer from "./components/knight-engineer";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <LenisScrollProvider>
      <Slide />
      <Header />
      <Hero />
      <main className="min-h-screen relative z-2 w-dvw bg-background">
        <About />
        <Works />
        <KnightEngineer />
        <Contact />
        <Footer />
      </main>
    </LenisScrollProvider>
  );
}

export default App;
