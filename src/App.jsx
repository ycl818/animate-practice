import Test from "./Test";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section>parallax</section>
      <section>services</section>
      <section>parallax</section>
      <section>portfolio1</section>
      <section>portfolio2</section>
      <section>portfolio3</section>
      <section>Contact</section>
      {/* <Test /> */}
    </div>
  );
};

export default App;
