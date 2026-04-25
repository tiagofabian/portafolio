import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tiagoFabian195@gmail.com",
    pass: "cghhtdrcytparszz",
  },
});

try {
  await transporter.verify()
  console.log("✅ Conexión exitosa")
} catch (e) {
  console.error("❌ Error:", e.message)
}