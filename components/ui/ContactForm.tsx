"use client"

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-hot-toast';
import "@/assets/styles/ui/contact-form.css"

const formSchema = z.object({
  email: z.string().min(1, "El email es requerido").regex(
    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i, 
    "Email inválido"
  ),
  message: z.string().min(15, '(mín. 15 caracteres)'),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    reValidateMode: 'onChange'
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Error en el servidor');
      toast.success('Mensaje enviado');
      reset({ 
        email: "no-reply@rsworkcontact.site", // Mantenemos el email fijo
        message: "" // Limpiamos el mensaje
      });
    } catch (err) {
      console.log("Error interno del servidor", err)
      toast.error('Error al enviar el mensaje');
    }
  };

  return (
    <div className='contactform-container gap-6xs px-4xs py-5xs rounded-sm mb:px-md mb:py-2xs mb: mb:flex-grow'>
      <strong className='contactform-title text-4xs mb:text-9xl'>Deja un mensaje</strong>
      <form onSubmit={handleSubmit(onSubmit)} className="contactform-form gap-5xs mb:gap-xs">
        <div className='contactform-input-container relative gap-7xs'>
          <input
            {...register('email')}
            value="no-reply@rsworkcontact.site"
            disabled={true}
            placeholder="Tu email"
            className={`
              text-5xs rounded-sm px-6xs py-6xs placeholder:text-muted-foreground mb:text-8xl
            `}
          />
          {errors.email && (
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center">
              <div className="relative group">
                <svg className="w-[0.9vw] mb:w-[1.8vw] text-[#cd5f5f]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div className="absolute z-10 hidden group-hover:block bg-[#cd5f5f] text-white text-6xs rounded px-6xs py-[0.1vw] whitespace-nowrap right-full mr-2 top-1/2 transform -translate-y-1/2 mb:text-lg">
                  {errors.email.message}
                  <div className="absolute right-0 top-1/2 w-2 h-2 bg-[#cd5f5f] transform translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className='contactform-textarea-container relative gap-7xs'>
          <textarea
            {...register('message')}
            placeholder="Mensaje"
            className={`
              text-5xs rounded-sm px-6xs py-6xs bg-background placeholder:text-muted-foregroun mb:text-8xl
            `}
            rows={2}
          />
          {errors.message && (
            <div className="absolute right-[0.4vw] top-1/2 transform -translate-y-1/2 flex items-center">
              <div className="relative group">
                <svg className="w-[0.9vw] text-[#cd5f5f] mb:w-[3vw]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div className="absolute z-10 hidden group-hover:block bg-[#cd5f5f] text-white text-6xs rounded px-6xs py-[0.1vw] whitespace-nowrap right-full mr-2 top-1/2 transform -translate-y-1/2 mb:text-5xl">
                  {errors.message.message}
                  <div className="absolute right-0 top-1/2 w-2 h-2 bg-[#cd5f5f] transform translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        <button type="submit" className={`text-5xs ${!isValid ? "pointer-events-none disabled:bg-gray-700" : ""} mb:text-8xl`} disabled={!isValid}>
          Enviar
        </button>
      </form>
    </div>
  );
}

export { ContactForm }