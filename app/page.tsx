import Header from "@/components/Header";
import Home from "@/components/Home";
import AboutMe from "@/components/About";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <AboutMe />
      </main>
    </>
  );
}
