import "./assets/css/main.css";
import Header from "./components/header";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import AppFeatures from "./components/AppFeatures";
import HowDoesItWork from "./components/HowDoesItWork";
import FeaturesDesktop from "./components/FeaturesDesktop";
import ClientReviews from "./components/ClientReviews";
import Faq from "./components/Faq";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import DarkThemeProvider from "./contexts/ThemeContext";

function App() {
  return (
    <DarkThemeProvider>
      <Header />
      <Hero />
      <Brands />
      <AppFeatures />
      <HowDoesItWork />
      <FeaturesDesktop />
      <ClientReviews />
      <Faq />
      <Newsletter />
      <Footer />
    </DarkThemeProvider>
  );
}

export default App;
