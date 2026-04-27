"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import EmailIcon from "@/assets/icons/email.png"
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import styles from "@/assets/styles/ui/contact-form.module.css";

type FormData = {
  email: string;
  message: string;
};

const ContactForm = () => {
  const [showError, setShowError] = useState<string | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);
  const emailErrorRef = useRef<HTMLDivElement>(null);
  const messageErrorRef = useRef<HTMLDivElement>(null);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm<FormData>({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        emailErrorRef.current && !emailErrorRef.current.contains(e.target as Node) &&
        messageErrorRef.current && !messageErrorRef.current.contains(e.target as Node)
      ) {
        setShowError(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!countdown) return;
    const interval = setInterval(() => {
      setCountdown(prev => {
        if (prev && prev <= 1) {
          clearInterval(interval);
          return null;
        }
        return prev ? prev - 1 : null;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [countdown]);

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.status === 429) {
        const { retryAfter } = await response.json();
        setCountdown(retryAfter);
        toast.error("Demasiados intentos");
        return;
      }

      if (!response.ok) throw new Error("Error en el servidor");

      const { retryAfter } = await response.json();
      setCountdown(retryAfter);
      toast.success("Mensaje enviado");
      reset({ email: "", message: "" });
    } catch (err) {
      console.error("Error interno del servidor", err);
      toast.error("Error al enviar el mensaje");
    }
  };

  return (
    <div className={`
      ${styles["contactform-container"]}
      gap-2xl px-16xl pt-10xl pb-sm rounded-sm
      basis-[94%] order-1
      sm:flex-grow-0 sm:px-4xs sm:py-6xs sm:basis-[18vw] sm:gap-5xs sm:order-2
      lg:flex-grow-0 lg:px-3xs lg:py-5xs lg:basis-[18vw]
    `}>
      <strong className={`
        ${styles["contactform-title"]}
        flex flex-row items-center gap-4xs
        text-13xl leading-normal
        sm:text-4xs sm:gap-6xs
      `}>
        Deja un mensaje
        <Image
          src={EmailIcon}
          alt="email"
          width={200}
          height={200}
          className="
            object-cover w-[3.2vw] h-auto
            sm:w-[0.8vw]
            lg:w-[0.8vw]
          "
        />
      </strong>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`
          ${styles["contactform-form"]}
          grid grid-cols-1 justify-items-center
          gap-lg sm:gap-5xs lg:gap-5xs
        `}
      >
        {/* EMAIL */}
        <div className={`${styles["contactform-input-container"]} relative`}>
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
              text-12xl rounded-sm px-sm py-sm placeholder:opacity-60
              sm:text-3xs sm:px-6xs sm:py-6xs
              lg:text-3xs
            "
          />
          {errors.email && watch("email") && (
            <div className="absolute inset-y-0 right-0 flex items-stretch w-[9%] sm:w-[12%]">
              <div className="relative group flex items-center w-full" ref={emailErrorRef}>
                <button
                  type="button"
                  onClick={() => setShowError(prev => prev === "email" ? null : "email")}
                  className="
                    flex items-center justify-center bg-transparent w-full
                    border-none sm:pointer-events-none self-stretch
                    transition-transform duration-100 ease-in-out active:scale-75
                  "
                  aria-label="Ver error"
                >
                  <svg className="text-[#cd5f5f] w-[3.8vw] h-[3.8vw] sm:w-[1.3vw] sm:h-[1.3vw] lg:w-[1.3vw] lg:h-[1.3vw] block" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className={`
                  absolute z-10 bg-[#cd5f5f] text-white
                  rounded px-2xs py-7xs whitespace-nowrap
                  right-full mr-1 top-1/2 -translate-y-1/2
                  text-9xl sm:text-4xs lg:text-4xs
                  transition-all duration-200 ease-in-out
                  sm:px-6xs sm:py-[0.1vw]
                  sm:opacity-0 sm:invisible sm:group-hover:opacity-100 sm:group-hover:visible
                  ${showError === "email" ? "max-sm:opacity-100 max-sm:visible" : "max-sm:opacity-0 max-sm:invisible"}
                `}>
                  {errors.email.message}
                  <div className="absolute right-0 top-1/2 w-2 h-2 bg-[#cd5f5f] translate-x-1/2 -translate-y-1/2 rotate-45" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* MESSAGE */}
        <div className={`${styles["contactform-textarea-container"]} flex relative`}>
          <textarea
            {...register("message", {
              required: "El mensaje es requerido",
              minLength: {
                value: 30,
                message: "mín. 30 caracteres",
              },
            })}
            placeholder="Mensaje"
            rows={3}
            className="
              text-12xl rounded-sm px-sm py-sm placeholder:opacity-60
              sm:text-3xs sm:px-6xs sm:py-6xs
              lg:text-3xs
            "
          />
          {errors.message && watch("message") && (
            <div className="absolute inset-y-0 right-0 flex items-stretch w-[9%] sm:w-[12%]">
              <div className="relative group flex items-center w-full" ref={messageErrorRef}>
                <button
                  type="button"
                  onClick={() => setShowError(prev => prev === "message" ? null : "message")}
                  className="
                    flex items-center justify-center bg-transparent w-full
                    border-none sm:pointer-events-none self-stretch
                    transition-transform duration-100 ease-in-out active:scale-75
                  "
                  aria-label="Ver error"
                >
                  <svg className="text-[#cd5f5f] w-[3.8vw] h-[3.8vw] sm:w-[1.3vw] sm:h-[1.3vw] lg:w-[1.3vw] lg:h-[1.3vw] block" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className={`
                  absolute z-10 bg-[#cd5f5f] text-white
                  rounded px-2xs py-7xs whitespace-nowrap
                  right-full mr-1 top-1/2 -translate-y-1/2
                  text-9xl sm:text-4xs lg:text-4xs
                  transition-all duration-200 ease-in-out
                  sm:px-6xs sm:py-[0.1vw]
                  sm:opacity-0 sm:invisible sm:group-hover:opacity-100 sm:group-hover:visible
                  ${showError === "message" ? "max-sm:opacity-100 max-sm:visible" : "max-sm:opacity-0 max-sm:invisible"}
                `}>
                  {errors.message.message}
                  <div className="absolute right-0 top-1/2 w-2 h-2 bg-[#cd5f5f] translate-x-1/2 -translate-y-1/2 rotate-45" />
                </div>
              </div>
            </div>
          )}
        </div>

        <div 
          className="
            flex flex-col items-center justify-center gap-5xs
             sm:gap-7xs
          "
        >
          {/* COUNTDOWN */}
          {countdown && (
            <span 
              className="
                text-[#dedede] text-9xl break-words 
                -mt-4xs
                sm:text-5xs sm:-mt-[0.3vw]
              "
            >
              Podrás enviar un mensaje en{": "}
              {Math.floor(countdown / 60)}:{String(countdown % 60).padStart(2, "0")} s
            </span>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            disabled={!isValid || isSubmitting || !!countdown}
            className={`
              flex items-center justify-center  font-semibold
              rounded-sm text-[#dedede] w-fit text-10xl px-8xl py-3xs
              transition-transform duration-100 ease-in-out active:scale-85
              sm:text-4xs sm:px-4xs sm:py-7xs
              ${!isValid || !!countdown
                ? "pointer-events-none opacity-40 bg-[#1a1a1a]"
                : isSubmitting
                  ? "pointer-events-none opacity-50 bg-[#1a1a1a]"
                  : "bg-[#2b2b2b]"}
            `}
          >
            {isSubmitting ? (
              <>
                Enviando &nbsp;
                <span className={styles.dot}>.</span>
                <span className={styles.dot}>.</span>
                <span className={styles.dot}>.</span>
              </>
            ) : (
              "Enviar"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export { ContactForm };