import About from "./components/About";
import Contact from "./components/Contact";
import Games from "./components/Games";
import Header from "./components/Header";
import Technics from "./components/Technics";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Technics />
      <Games />
      <Contact />
    </main>
  );
}
