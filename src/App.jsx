import "./assets/css/main.css";
import Header from "./components/header";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import AppFeatures from "./components/AppFeatures";
import HowDoesItWork from "./components/HowDoesItWork";
import FeaturesDesktop from "./components/FeaturesDesktop";
import ClientReviews from "./components/ClientReviews";
import Faq from "./components/Faq";

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
      <Faq />
    </>
  );
}

export default App;
