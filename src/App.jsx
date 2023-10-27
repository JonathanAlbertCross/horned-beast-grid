import "./App.css";
import HeaderofHorns from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import beastArr from "./components/Data.json";
import { useState } from "react";
import Modal from "./components/Modal";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  const [showModal, setShowModel] = useState(false);
  const [modalBeast, setModalBeast] = useState({});

  function handleShowModal(currentBeast) {
    setModalBeast(currentBeast);
    setShowModel(!showModal);
  }

  return (
    <BrowserRouter>
      <div className="Gallery">
        <header>
          <h1>React Router Dom</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <HeaderofHorns />
        <main>
          <Gallery
            hornedBeastsData={beastArr}
            handleShowModal={handleShowModal}
          />
          {/* Short Circuiting -  */}
          {showModal && (
            <Modal
              handleShowModal={handleShowModal}
              currentBeast={modalBeast}
            />
          )}
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
