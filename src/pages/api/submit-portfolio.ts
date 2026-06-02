// src/pages/api/submit-portfolio.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).send('Método não permitido');

  const { title, categoria, imageName } = req.body;

  // 1. Gera o JSON formatado conforme o seu pedido
  const jsonOutput = {
    id: Date.now(),
    title: title,
    categoria: categoria,
    image: `/assets/images/${imageName}`
  };

  // 2. Configura o envio de e-mail (Exemplo com Gmail)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Configure na Vercel
      pass: process.env.EMAIL_PASS  // Use uma "App Password" do Google
    }
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Você envia para você mesmo
      subject: 'Novo item para o portfólio',
      text: `Copie este JSON:\n\n${JSON.stringify(jsonOutput, null, 2)}`
    });

    res.status(200).json({ success: true, data: jsonOutput });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Erro ao enviar e-mail' });
  }
}