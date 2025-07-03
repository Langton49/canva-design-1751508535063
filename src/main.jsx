import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import HeroSection from "../components/HeroSection";
import SpeakersSection from "../components/SpeakersSection";
import ContactSection from "../components/ContactSection";

function App() {
  return (
    <>
      <HeroSection />
      <SpeakersSection />
      <ContactSection />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
