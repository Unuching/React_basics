const Modal = ({ isOpen, onclose, rating }) => {
  if (!isOpen) return null;
  return (
    <div className='modal-overlay'>
      <div className='modal'>
        <h2>Thank You</h2>
        <p>
          You rate us {rating} star{rating > 1 ? 's' : ''}
        </p>
        <button className='close-btn' onClick={onclose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
