import Hero from "../components/Hero";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Main />
      <Footer />
    </main>
  );
}
