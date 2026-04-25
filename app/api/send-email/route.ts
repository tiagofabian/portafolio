import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type EmailRequest = {
  email: string;
  message: string;
};

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export const POST = async (req: NextRequest) => {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Método no permitido" }, { status: 405 });
  }

  try {
    const { email, message } = (await req.json()) as EmailRequest;

    if (!email || !message) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    // Correo que te llega a ti
    await transporter.sendMail({
      from: `"Portafolio" <${process.env.GMAIL_USER}>`,
      to: process.env.OUTLOOK_DESTINATION,
      replyTo: email,
      subject: "Nuevo mensaje de contacto",
      text: `De: ${email}\n\nMensaje:\n${message}`,
    });

    // Correo de confirmación al reclutador
    await transporter.sendMail({
      from: `"Tiago Fabian" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Recibí tu mensaje",
      text: `Hola,\n\nGracias por escribirme. Recibí tu mensaje y te responderé a la brevedad.\n\nEste es un correo automático, por favor no respondas a este mensaje.\n\nSaludos,\nTiago`,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return NextResponse.json(
      { error: "Error al enviar el correo" },
      { status: 500 }
    );
  }
};