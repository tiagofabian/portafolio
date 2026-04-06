import React from 'react';
import Image from "next/image";
import CloseIco from '@/assets/icons/close.png';
import "@/assets/styles/shared/modal.css"

interface ModalProps {
  isOpen: boolean;
  onClose: (id: string) => void;
  idToClose: string;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, idToClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div 
      className="modal-overlay"
      onClick={() => onClose(idToClose)}
    >
      <div 
        className={`
          modal-content
          max-h-[100%]
          max-w-[84%]
          sm:max-w-[60%]
          lg:max-w-[55%]
        `}
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
            className="
              w-[20px] h-[20px]
              sm:w-[22px] sm:h-[22px]
              lg:w-[24px] lg:h-[24px]
            "
          />
        </button>

        {children}
      </div>
    </div>
  );
};

export { Modal };