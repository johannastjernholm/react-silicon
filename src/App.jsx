import "./assets/css/main.css";
import Header from "./components/header";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import AppFeatures from "./components/AppFeatures";
import HowDoesItWork from "./components/HowDoesItWork";
import FeaturesDesktop from "./components/FeaturesDesktop";
import ClientReviews from "./components/ClientReviews";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Brands />
      <AppFeatures />
      <HowDoesItWork />
      <FeaturesDesktop />
      <ClientReviews />
    </>
  );
}

export default App;
