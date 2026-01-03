import Header from "@/components/Header";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20 sm:pt-24 md:pt-28">
        <About />
      </main>
    </>
  );
}
