export default function Modal({ handleShowModal, currentBeast }) {
  return (
    <div className="modal">
      <h2>{currentBeast.title}</h2>
      <button onClick={handleShowModal}>Close</button>
    </div>
  );
}
