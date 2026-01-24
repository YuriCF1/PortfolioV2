import Header from "@/components/Header";
import Home from "@/components/Home";
import AboutMe from "@/components/About";
import Skills from "@/components/Skills";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <AboutMe />
        <Skills />
      </main>
    </>
  );
}
