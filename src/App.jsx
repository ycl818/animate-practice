import Test from "./Test";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
      </section>
      <section>parallax</section>
      <section id="Services">services</section>
      <section>parallax</section>
      <section id="Portfolio">portfolio1</section>
      <section>portfolio2</section>
      <section>portfolio3</section>
      <section id="Contact">Contact</section>
      {/* <Test /> */}
    </div>
  );
};

export default App;
