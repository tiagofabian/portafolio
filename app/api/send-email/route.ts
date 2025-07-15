import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type EmailRequest = {
  email: string;
  message: string;
}

export const POST = async (
  req: NextRequest,
) => {
  if (req.method !== 'POST') {
    return NextResponse.json({ error: 'Método no permitido' }, { status: 405});
  }

  try {
    const { email, message } = await req.json() as EmailRequest;

    if (!email || !message) {
      return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400});
    }

    await resend.emails.send({
      from: email,
      to: 'tiagofabian195@outlook.com',
      subject: 'Formulario de contacto',
      text: `De: ${email}\n\nMensaje: ${message}`,
    });

    return NextResponse.json({ success: true }, {status: 200});
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return NextResponse.json({ error: 'Error al enviar el correo' }, { status: 500 });
  }
}