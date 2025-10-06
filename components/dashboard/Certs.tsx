"use client"

import React, { useState } from 'react'
import { Modal } from "@/components/reusable/Modal";
import { EmblaCarousel, EmblaCarouselContent, EmblaCarouselItem, EmblaCarouselDots } from "@/components/reusable/EmblaCarousel"
// import { useDevice } from '@/lib/hooks/useDevice';
import { certs } from "@/lib/list/certs";
import Image from "next/image";
import "@/assets/styles/dashboard/certs.css"
import { useDevice } from '@/lib/hooks/useDevice';



const Certs = () => {
  // const { isMobile, isDesktop } = useDevice();
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile, isTablet } = useDevice()
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
      <h2 className='certs-title text-xs font-medium mb:text-15xl'>Certificados</h2>
      <EmblaCarousel autoScroll gap={isMobile ? '4.5vw' : isTablet ? '3.5vw' : '2.5vw'} className='embla-carousel p-xs tb:p-sm mb:p-0'>
        <EmblaCarouselContent className='embla-carousel-content'>
          {certsState.map((cert) => (
            <EmblaCarouselItem basis={isMobile ? "50%" : isTablet ? "25%": "20%"} key={cert.id} className='embla-carousel-item mx-4xs tb:mx-3xs mb:mx-2xs'>
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
            </EmblaCarouselItem>
          ))}
        </EmblaCarouselContent>
        <EmblaCarouselDots 
          dotSize={isMobile ? "1.5vw" : isTablet ? "0.9vw" : "0.6vw"} 
          hidden={isMobile ? true : false}
          className='embla-carousel-dots gap-5xs tb:gap-3xs mb:gap-xs'
        />
      </EmblaCarousel>
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
