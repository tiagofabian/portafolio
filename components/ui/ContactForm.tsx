"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import styles from "@/assets/styles/ui/contact-form.module.css";

type FormData = {
  email: string;
  message: string;
};

const ContactForm = () => {
  const [showError, setShowError] = useState<string | null>(null);
  const errorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (errorRef.current && !errorRef.current.contains(e.target as Node)) {
        setShowError(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Error en el servidor");

      toast.success("Mensaje enviado");

      reset({
        email: "",
        message: "",
      });
    } catch (err) {
      console.log("Error interno del servidor", err);
      toast.error("Error al enviar el mensaje");
    }
  };

  return (
    <div className={`
      ${styles['contactform-container']}
      gap-sm px-sm py-xs rounded-sm
      flex-grow
      sm:flex-grow-0 sm:px-4xs sm:py-6xs sm:basis-[18vw] sm:gap-5xs
      lg:flex-grow-0 lg:px-3xs lg:py-5xs lg:basis-[18vw]
    `}>
      <strong className={`
        ${styles['contactform-title']}
        text-9xl
        sm:text-4xs
        lg:text-4xs
      `}>
        Deja un mensaje
      </strong>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`
          ${styles['contactform-form']}
          gap-2xs
          sm:gap-5xs
          lg:gap-5xs
        `}
      >
        {/* EMAIL */}
        <div className={`${styles['contactform-input-container']} relative`}>
          <input
            {...register("email", {
              required: "El email es requerido",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                message: "Email inválido",
              },
            })}
            autoComplete="email"
            placeholder="Tu email"
            className="
              text-8xl rounded-sm px-6xs py-6xs
              placeholder:text-muted-foreground
              sm:text-3xs
              lg:text-3xs
            "
          />

          {errors.email && (
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center">
              <div className="relative group">
                <svg
                  className="
                    text-[#cd5f5f]
                    w-[3vw]
                    sm:w-[1.8vw]
                    lg:w-[1.8vw]
                  "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>

                <div className="
                  absolute z-10 hidden group-hover:block
                  bg-[#cd5f5f] text-white
                  rounded px-6xs py-[0.1vw]
                  whitespace-nowrap
                  right-full mr-2 top-1/2 -translate-y-1/2
                  text-5xl
                  sm:text-xs
                  lg:text-xs
                ">
                  {errors.email.message}
                  <div className="absolute right-0 top-1/2 w-2 h-2 bg-[#cd5f5f] translate-x-1/2 -translate-y-1/2 rotate-45" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* MESSAGE */}
        <div className={`${styles['contactform-textarea-container']} flex relative`}>

          <textarea
            {...register("message", {
              required: "El mensaje es requerido", 
              minLength: {
                value: 15,
                message: "mín. 15 caracteres",
              },
            })}
            placeholder="Mensaje"
            rows={3}
            className="
              text-8xl rounded-sm px-6xs py-6xs bg-background
              placeholder:text-muted-foreground
              sm:text-3xs
              lg:text-3xs
            "
          />

          {errors.message && (
            <div className="absolute inset-y-0 right-0 flex items-stretch w-[15%]">
              <div className="relative group flex items-center w-full" ref={errorRef}>
                <button
                  type="button"
                  onClick={() => setShowError(prev => prev === 'message' ? null : 'message')}
                  className="
                    flex items-center justify-center bg-transparent w-full 
                    border-none sm:pointer-events-none
                    self-stretch
                    transition-transform duration-100 ease-in-out 
                    active:scale-75
                  "
                  aria-label="Ver error"
                >
                  <svg
                    className="text-[#cd5f5f] w-[3.5vw] h-[3.5vw] sm:w-[1.3vw] sm:h-[1.3vw] lg:w-[1.3vw] lg:h-[1.3vw] block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <div className={`
                  absolute z-10
                  bg-[#cd5f5f] text-white
                  rounded px-4xs py-7xs
                  whitespace-nowrap
                  right-[90%] mr-1 top-1/2 -translate-y-1/2
                  text-5xl sm:text-4xs lg:text-4xs

                  transition-all duration-200 ease-in-out

                  sm:px-6xs sm:py-[0.1vw]
                  sm:opacity-0 sm:invisible sm:group-hover:opacity-100 sm:group-hover:visible
                  ${showError === 'message'
                    ? 'max-sm:opacity-100 max-sm:visible'
                    : 'max-sm:opacity-0 max-sm:invisible'
                  }
                `}>
                  {errors.message.message}
                  <div className="absolute right-0 top-1/2 w-2 h-2 bg-[#cd5f5f] translate-x-1/2 -translate-y-1/2 rotate-45" />
                </div>

              </div>
            </div>
          )}

        </div>

        {/* BUTTON */}
        <button
          type="submit"
          disabled={!isValid}
          className={`
            text-8xl
            sm:text-4xs
            lg:text-4xs
            ${!isValid ? "pointer-events-none opacity-50" : ""}
          `}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export { ContactForm };