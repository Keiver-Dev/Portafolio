//Funciones

//Components
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="flex flex-col bg-zinc-900 h-auto w-full text-white">
      <Header />
      <Home />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
