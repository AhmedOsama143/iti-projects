import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Button from "./components/Button/Button";
import CardSection from "./Components/CardSection/CardSection";
import About from "./Components/About/About";
import SecCard from "./Components/SecCard/SecCard";
import Footer from "./Components/Footer/Footer";
import img7 from "./assets/b1.jpg";
import img8 from "./assets/b2.jpg";
import img9 from "./assets/b3.jpg";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CardSection />
      <About />
      <section className="sec-cards-container">
        <SecCard
          image={img7}
          title="Looking for a website design for your business?"
          description="We build a Furniture website for you to showcase your products and sell them online and reach a larger audience. "
          buttonText="Learn More"
          buttonLink="#web"
        />
        <SecCard
          image={img8}
          title="AnyThing you want to be built on the web"
          description="We build a Furniture website for you to showcase your products and sell them online and reach a larger audience. "
          buttonText="See Details"
          buttonLink="#apps"
        />
        <SecCard
          image={img9}
          title="Clean Designs and Interfaces"
          description="We build a Furniture website for you to showcase your products and sell them online and reach a larger audience. "
          buttonText="Explore"
          buttonLink="#design"
        />
      </section>
      <Footer />
    </>
  );
}

export default App;
