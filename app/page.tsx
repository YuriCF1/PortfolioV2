import Header from "@/components/Header";
import Home from "@/components/Home";
import AboutMe from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <AboutMe />
        <Skills />
        <Projects/>
        <Contact />
      </main>
    </>
  );
}
