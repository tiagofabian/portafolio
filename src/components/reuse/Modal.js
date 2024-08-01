import React from 'react';
import '../../assets/styles/reuse/modal.css';
import { ReactComponent as CloseICO } from '../../assets/img/icon/svg/close-ico.svg';

const Modal = ({ isOpen, onClose, content, props }) => {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={() => onClose(props.name)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={() => onClose(props.name)}>
          <CloseICO width="100%" height="100%" fill="#1c3357"/>
        </button>
        {content ? content(props) : <p>No hay contenido</p>}
      </div>
    </div>
  );
};

export default Modal;