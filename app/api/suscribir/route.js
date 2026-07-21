import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

export const runtime = 'nodejs';

// Transporte SMTP de Hostinger (datos en variables de entorno)
function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.hostinger.com',
    port: Number(process.env.SMTP_PORT) || 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function POST(request) {
  try {
    const { email, score, tag, recomendado } = await request.json();

    // Validación básica
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Correo inválido' }, { status: 400 });
    }

    // 1) Guardar en CSV (respaldo local de la lista)
    try {
      const linea = `${new Date().toISOString()},${email},${score},"${tag}","${recomendado}"\n`;
      fs.appendFileSync(path.join(process.cwd(), 'suscriptores.csv'), linea);
    } catch (e) {
      // Si el filesystem es de solo lectura en el host, no detenemos el flujo.
      console.error('No se pudo escribir el CSV:', e.message);
    }

    const from = process.env.SMTP_USER || 'hola@juanhojita.com';
    const notifyTo = process.env.NOTIFY_TO || from;
    const transporter = getTransporter();

    // 2) Aviso PARA TI
    await transporter.sendMail({
      from: `"Diagnóstico" <${from}>`,
      to: notifyTo,
      subject: `Nuevo diagnóstico: ${score}/10 — ${email}`,
      text: `Nuevo suscriptor del diagnóstico.

Correo: ${email}
Puntaje: ${score}/10
Estado: ${tag}
Producto recomendado: ${recomendado}`,
    });

    // 3) PDF PARA EL SUSCRIPTOR
    const attachments = [];
    const pdfPath = path.join(process.cwd(), 'public', 'diagnostico-operativo.pdf');
    if (fs.existsSync(pdfPath)) {
      attachments.push({ filename: 'diagnostico-operativo.pdf', path: pdfPath });
    }

    await transporter.sendMail({
      from: `"Juan Hojita" <${from}>`,
      to: email,
      subject: 'Tu diagnóstico operativo completo',
      text: `Gracias por completar el diagnóstico.

Tu resultado: ${score}/10 — ${tag}
Tu siguiente paso recomendado: ${recomendado}

${attachments.length ? 'Adjunto encontrarás el PDF completo con la interpretación detallada.' : 'En breve recibirás el PDF completo con la interpretación detallada.'}`,
      attachments,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Error en /api/suscribir:', err);
    return NextResponse.json({ error: 'Error del servidor' }, { status: 500 });
  }
}
