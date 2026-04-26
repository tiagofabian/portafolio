import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

type EmailRequest = {
  email: string;
  message: string;
};

const RATE_LIMIT_WINDOW = "1 m";
const RATE_LIMIT_SECONDS = 60;

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(1, RATE_LIMIT_WINDOW),
});

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
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "anonymous";

  const { success, reset } = await ratelimit.limit(ip);

  if (!success) {
    const retryAfter = Math.ceil((reset - Date.now()) / 1000);
    return NextResponse.json(
      { error: "rate_limit", retryAfter },
      { status: 429 }
    );
  }

  try {
    const { email, message } = (await req.json()) as EmailRequest;

    if (!email || !message) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    await transporter.sendMail({
      from: `"Portafolio" <${process.env.GMAIL_USER}>`,
      to: process.env.OUTLOOK_DESTINATION,
      replyTo: email,
      subject: "Nuevo mensaje de contacto",
      text: `De: ${email}\n\nMensaje:\n${message}`,
    });

    await transporter.sendMail({
      from: `"Tiago Fabian" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Recibí tu mensaje",
      text: `Hola,\n\nGracias por escribirme. Recibí tu mensaje y te responderé a la brevedad.\n\nEste es un correo automático, por favor no respondas a este mensaje.\n\nSaludos,\nTiago`,
    });

    return NextResponse.json(
      { success: true, retryAfter: RATE_LIMIT_SECONDS },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return NextResponse.json(
      { error: "Error al enviar el correo" },
      { status: 500 }
    );
  }
};