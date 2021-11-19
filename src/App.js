import "./styling/App.scss";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Modal from "./components/Modal";

import { useState } from "react";
import { UserRegButton } from "./components/UserRegButton";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({ type: null, key: null });
  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const setModal = (modalData) => {
    setModalData(modalData);
    toggleModal();
  };

  return (
    <div className="App">
      <Header />
      {localStorage.token ? null : <UserRegButton action="signin" />}
      <LandingPage setModal={setModal} />
      {showModal && <Modal data={modalData} toggleModal={toggleModal} />}
    </div>
  );
}

export default App;
