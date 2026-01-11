import Header from "@/components/Header";
import Home from "@/components/Home";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-20 sm:pt-24 md:pt-28">
        <Home />
      </main>
    </>
  );
}
