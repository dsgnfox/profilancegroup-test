import { useEffect, useRef } from 'react';

const Modal = ({ show, setShow, children }) => {
  const modalRef = useRef();

  useEffect(() => {
    const clickOutsideContent = (e) => {
        if (e.target === modalRef.current) {
            setShow(false);
        }
    };
    window.addEventListener('click', clickOutsideContent);
    return () => {
        window.removeEventListener('click', clickOutsideContent);
    };
  }, [setShow]);

  return (
    <div ref={modalRef} className={`modal ${show ? 'active' : ''}`}>
      <div className="modal__content">
          {<span onClick={() => setShow(false)} className="modal__close">&times;</span>}
          {children}
      </div>
    </div>
  );
};

export default Modal;