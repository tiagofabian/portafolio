"use client"

import React, { useState } from 'react'
import { Modal } from "@/components/shared/Modal";
import { EmblaCarousel, EmblaCarouselContent, EmblaCarouselItem, EmblaCarouselDots } from "@/components/shared/EmblaCarousel"
import { certs } from "@/lib/list/certs";
import Image from "next/image";
import styles from '@/assets/styles/dashboard/certs.module.css'

const Certs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [certsState, setCertsState] = useState(
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
    <div className={`
      ${styles['certs-container']}
      g-container glass
      gap-16xl px-12xl py-12xl
      sm:gap-8xl sm:px-8xl sm:py-4xl
      lg:gap-4xl lg:px-12xl lg:py-6xl
    `}>
      <h2 className={`
        ${styles['certs-title']}
        g-title font-medium
        text-15xl
        sm:text-xl
        lg:text-xs
      `}>
        Certificados
      </h2>

      <EmblaCarousel
        autoScroll
        className={`
          ${styles['embla-carousel']}
          flex flex-col
          gap-2xl p-2xs
          bg-[#8e8e8e1e]
          sm:gap-4xl sm:p-sm
          lg:gap-6xl lg:p-xs
        `}
      >
        <EmblaCarouselContent className={styles['embla-carousel-content']}>
          {certsState.map((cert) => (
            <EmblaCarouselItem
              key={cert.id}
              className={`
                ${styles['embla-carousel-item']}
                basis-3/5
                sm:basis-1/5
                mx-2xs
                sm:mx-3xs
                lg:mx-4xs
              `}
            >
              <button
                onClick={openModal}
                data-id={cert.id}
                tabIndex={cert.modalState ? -1 : 0}
              >
                <Image
                  src={cert.urlIMG}
                  alt={cert.alt}
                  width={920}
                  height={1166}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  className="rounded-md"
                  priority={cert.id === certs[0].id}
                />
              </button>
            </EmblaCarouselItem>
          ))}
        </EmblaCarouselContent>

        <EmblaCarouselDots
          className={`
            ${styles['embla-carousel-dots']}
            hidden
            sm:flex
            sm:gap-4xs sm:mt-md sm:mb-[0.15vw]
          `}
          dotClassName="
            sm:w-[0.8vw] sm:h-[0.8vw] lg:w-[0.7vw] lg:h-[0.7vw]
          "
        />
      </EmblaCarousel>

      {isOpen &&
        certsState.map((cert) =>
          cert.modalState ? (
            <Modal key={cert.id} isOpen={isOpen} onClose={closeModal} idToClose={cert.id}>
              <Image src={cert.urlIMG} alt={cert.alt} className="rounded-md" />
            </Modal>
          ) : null
        )
      }
    </div>
  )
}

export { Certs }