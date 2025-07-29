import Button from './button';
const Modal = ({ isOpen, rating, closeBTN }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className='modal-overlay'>
      <div className='modal'>
        <h2>Thank You</h2>
        <p>
          You Rated us {rating} star{rating > 1 ? 's' : ''}
        </p>
        <Button className='close-btn' onClick={closeBTN}>
          Close
        </Button>
      </div>
    </div>
  );
};

export default Modal;
