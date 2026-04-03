"use client"

import React, { useState } from 'react'
import { Modal } from "@/components/shared/Modal";
import { EmblaCarousel, EmblaCarouselContent, EmblaCarouselItem, EmblaCarouselDots } from "@/components/shared/EmblaCarousel"
// import { useDevice } from '@/lib/hooks/useDevice';
import { certs } from "@/lib/list/certs";
import Image from "next/image";
import styles from '@/assets/styles/dashboard/certs.module.css'
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
    <div className={`${styles['certs-container']} g-container glass gap-4xl px-12xl py-6xl tb:px-8xl tb:py-4xl mb:gap-16xl mb:px-12xl mb:py-12xl`}>
      <h2 className={`${styles['certs-title']} g-title text-xs font-medium mb:text-15xl`}>Certificados</h2>
      <EmblaCarousel autoScroll gap={isMobile ? '4.5vw' : isTablet ? '3.5vw' : '2.5vw'} className={`${styles['embla-carousel']} p-xs tb:p-sm mb:p-0`}>
        <EmblaCarouselContent className={styles['embla-carousel-content']}>
          {certsState.map((cert) => (
            <EmblaCarouselItem basis={isMobile ? "50%" : isTablet ? "25%": "20%"} key={cert.id} className={`${styles['embla-carousel-item']} mx-4xs tb:mx-3xs mb:mx-2xs`}>
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
          className={`${styles['embla-carousel-dots']} gap-5xs tb:gap-3xs mb:gap-xs`}
        />
      </EmblaCarousel>
      {isOpen &&
        certsState.map((cert) =>
          cert.modalState ? (
            <Modal key={cert.id} isOpen={isOpen} onClose={closeModal} idToClose={cert.id}>
              <Image src={cert.urlIMG} alt={cert.alt} className='rounded-md' /> 
            </Modal>
          ) : null
        )
      }
    </div>
  )
}

export { Certs }
