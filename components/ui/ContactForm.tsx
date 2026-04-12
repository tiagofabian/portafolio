"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-hot-toast";
import "@/assets/styles/ui/contact-form.css";

const formSchema = z.object({
  email: z
    .string()
    .min(1, "El email es requerido")
    .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i, "Email inválido"),
  message: z.string().min(15, "(mín. 15 caracteres)"),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
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
        email: "no-reply@rsworkcontact.site",
        message: "",
      });
    } catch (err) {
      console.log("Error interno del servidor", err);
      toast.error("Error al enviar el mensaje");
    }
  };

  return (
    <div className="
      contactform-container
      gap-2xs px-sm py-5xs rounded-sm
      flex-grow
      sm:flex-grow-0 sm:px-4xs sm:py-6xs sm:basis-[18vw]
      lg:flex-grow-0 lg:px-3xs lg:py-5xs lg:basis-[18vw]
    ">
      <strong className="
        contactform-title
        text-9xl
        sm:text-4xs
        lg:text-4xs
      ">
        Deja un mensaje
      </strong>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="
          contactform-form
          gap-3xs
          sm:gap-5xs
          lg:gap-5xs
        "
      >
        {/* EMAIL */}
        <div className="contactform-input-container relative gap-7xs">
          <input
            {...register("email")}
            value="no-reply@rsworkcontact.site"
            disabled
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
        <div className="contactform-textarea-container relative gap-7xs">
          <textarea
            {...register("message")}
            placeholder="Mensaje"
            rows={2}
            className="
              text-8xl rounded-sm px-6xs py-6xs bg-background
              placeholder:text-muted-foreground
              sm:text-3xs
              lg:text-3xs
            "
          />

          {errors.message && (
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center">
              <div className="relative group">
                <svg
                  className="
                    text-[#cd5f5f]
                    w-[3vw]
                    sm:w-[1.3vw]
                    lg:w-[1.3vw]
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
                  right-full mr-1 top-1/2 -translate-y-1/2
                  text-5xl
                  sm:text-4xs
                  lg:text-4xs
                ">
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