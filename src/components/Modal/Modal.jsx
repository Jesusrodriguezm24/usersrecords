import './Modal.css';

const Modal = ({isVisible, children}) => {

    if (!isVisible) return;
    
  return (
    <section className='modal_container'>
        {children}
    </section>
  )
}

export default Modal