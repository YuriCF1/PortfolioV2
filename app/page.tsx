import Header from "@/components/Header";
import Home from "@/components/Home";
import AboutMe from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Courses from "@/components/Courses";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
        <Courses />
        <div className={styles.contactGradient}>
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}
