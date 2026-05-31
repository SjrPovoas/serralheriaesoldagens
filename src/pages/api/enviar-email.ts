// src/pages/api/enviar-email.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // 1. Validação de método
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Apenas método POST é permitido' });
  }

  // 2. Extração dos dados do corpo da requisição
  const { title, categoria, imageName, imageUrl } = req.body;

  // 3. Configuração do transportador
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // 4. Lógica de envio
  try {
    await transporter.sendMail({
      from: '"Painel de Upload da Serralheria e Soldagens" <painelupload@serralheriaesoldagens.com.br>',
      to: 'sjrpovoas@gmail.com',
      subject: `Upload de Foto: ${title}`,
      text: `Novo Serviço da Serralheria e Soldagens: Título: ${title}, Categoria: ${categoria}, Arquivo: ${imageName}`,
      html: `
        <h1>Foto de Serviço da Serralheria e Soldagens - Dados para portifolio-data.json</h1>
        <p>Copie e cole o objeto abaixo no seu arquivo:</p>
        <pre style="background: #222; color: #fff; padding: 15px; border-radius: 5px;">
        {
          "id": "${Date.now()}",
          "title": "${title}",
          "categoria": "${categoria}",
          "image": "${imageUrl}"
        },
        </pre>
        <p><b>Arquivo original:</b> ${imageName}</p>
      `,
    });

    res.status(200).json({ message: 'E-mail enviado com sucesso!' });
  } catch (error) {
    console.error("Erro no envio de e-mail:", error);
    res.status(500).json({ message: 'Erro ao enviar e-mail' });
  }
}