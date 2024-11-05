import "./assets/css/main.css";
import Header from "./components/header";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import AppFeatures from "./components/AppFeatures";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Brands />;
      <AppFeatures />
    </>
  );
}

export default App;
