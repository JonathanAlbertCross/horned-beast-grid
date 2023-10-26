import "./App.css";
import HeaderofHorns from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import beastArr from "./components/Data";
import { useState } from "react";

export default function App() {
  const [showModal, setShowModel] = useState(false);

  function handleShowModal() {
    setShowModel(!showModal);
  }
  return (
    <div className="Gallery">
      <HeaderofHorns />
      <main>
        <Gallery
          hornedBeastsData={beastArr}
          handleShowModal={handleShowModal}
        />
      </main>
      <Footer />
      {showModal && <p>I am a modal</p>}
    </div>
  );
}
