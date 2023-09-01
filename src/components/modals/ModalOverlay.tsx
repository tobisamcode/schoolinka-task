function ModalOverlay({
  toggleModal,
}: {
  showModal: boolean;
  toggleModal: () => void;
}) {
  return (
    <>
      {/* OVERLAY */}
      <div onClick={toggleModal} className="overlay overflow-hidden "></div>
    </>
  );
}

export default ModalOverlay;
