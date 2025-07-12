import React from 'react';
import Image from "next/image";
import CloseIco from '@/assets/icons/close.png';
import "@/assets/styles/reusable/modal.css"

interface ModalProps {
  isOpen: boolean;
  onClose: (id: string) => void;
  idToClose: string;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, idToClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={() => onClose(idToClose)}>
      <div 
        className="modal-content max-h-[100%] max-w-[55%] tb:max-w-[60%] mb:max-w-[84%]" 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="modal-close"
          onClick={() => onClose(idToClose)}
        >
          <Image 
            src={CloseIco} 
            alt="close-icon" 
            width={24} 
            height={24}
          />
        </button>
        {children}
      </div>
    </div>
  );
};

export { Modal };