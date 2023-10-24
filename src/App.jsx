import Test from "./Test";
import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";

const App = () => {
  return (
    <div>
      {/* <Cursor /> */}
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>{/* <Services /> */}</section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      {/* <Portfolio /> */}
      <section id="Contact">{/* <Contact /> */}</section>
      {/* Framer Motion Crash Course */}
      {/* <Test/>
  <Test/> */}
    </div>
  );
};

export default App;
