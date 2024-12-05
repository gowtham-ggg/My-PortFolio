import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero"
import About from "./components/About/About";
import Services from "./components/Servicess/Services";
import { MyWork } from "./components/My Work/MyWork";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
