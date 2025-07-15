"use client"

import React, { useState } from 'react'
import { Modal } from "@/components/reusable/Modal";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { useDevice } from '@/lib/hooks/useDevice';
import { certs } from "@/lib/list/certs";
import Image from "next/image";
import "@/assets/styles/dashboard/certs.css"



const Certs = () => {
  const { isMobile, isDesktop } = useDevice();
  const [isOpen, setIsOpen] = useState(false);
  const [ certsState, setCertsState ] = useState(
    certs.map(cert => ({ ...cert, modalState: false }))
  );
  
  const openModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = e.currentTarget.dataset.id;
    setCertsState(prev =>
      prev.map(cert =>
        cert.id === id ? { ...cert, modalState: true } : { ...cert, modalState: false }
      )
    );
    setIsOpen(true);
  };

  const closeModal = (id: string) => {
    setIsOpen(false);
    setCertsState(certs =>
      certs.map(cert =>
        cert.id === id ? { ...cert, modalState: false } : cert
      )
    );
  };

  return (
    <div className='certs-container d-container gap-4xl px-12xl py-6xl tb:px-8xl tb:py-4xl mb:gap-16xl mb:px-12xl mb:py-12xl'>
      <h2 className='certs-title text-xs font-medium mb:text-12xl'>Certificados</h2>
      <Splide
        className='certs-splide gap-xs mb:gap-xl'
        options={{
          direction: 'ltr',
          type: 'loop',
          drag: 'free',
          focus: 0,
          gap: isDesktop ? '1.5vw' : isMobile ? '4vw' : '3vw',
          arrows: false, 
          pagination: isDesktop ? true : isMobile ? false : true,
          perPage: isDesktop ? 4 : isMobile ? 2 : 4,
          speed: 5000,
          autoScroll: {
            speed: 0.6,   // Ajusta la velocidad de desplazamiento automático
          },
        }}
        extensions={{ AutoScroll }}
      >
        {certsState.map((cert) => (
          <SplideSlide className='certs-splidecard max-h-[12vw] mb:max-h-[25vw]' key={cert.id}>
            <button 
              onClick={(e) => openModal(e)}
              data-id={cert.id}
              tabIndex={cert.modalState ? -1 : 0}
            >
              <Image 
                src={cert.urlIMG} 
                alt={cert.alt}
              />
            </button>
          </SplideSlide>
        ))}
      </Splide>
      {isOpen &&
        certsState.map((cert) =>
          cert.modalState ? (
            <Modal key={cert.id} isOpen={isOpen} onClose={closeModal} idToClose={cert.id}>
              <Image src={cert.urlIMG} alt={cert.alt} className='rounded-md outline outline-1 outline-[#c8cdd1]' /> 
            </Modal>
          ) : null
        )
      }
    </div>
  )
}

export { Certs }
