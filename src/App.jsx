//Components
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="h-auto w-full bg-zinc-900 text-white">
      <section className="flex flex-col">
        <Header />
        <Home />
        <About />
        <Projects />
        <Footer />
      </section>
    </main>
  );
}

export default App;
