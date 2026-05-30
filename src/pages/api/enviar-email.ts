import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Apenas método POST é permitido' });
  }

  const { title, categoria, imageName } = req.body;

  // Configuração do transportador (Exemplo com Gmail)
  // DICA: Se usar Gmail, você precisará de uma "Senha de App" nas configurações da conta
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'SEU_EMAIL@gmail.com',
      pass: 'SUA_SENHA_DE_APP_AQUI', 
    },
  });

  try {
    await transporter.sendMail({
      from: '"Painel Admin" <SEU_EMAIL@gmail.com>',
      to: 'SEU_EMAIL@gmail.com', // O e-mail que vai receber
      subject: `Novo Upload: ${title}`,
      text: `Dados do novo projeto:
             Título: ${title}
             Categoria: ${categoria}
             Nome do Arquivo: ${imageName}`,
      html: `<h1>Novo Projeto Cadastrado</h1>
             <p><b>Título:</b> ${title}</p>
             <p><b>Categoria:</b> ${categoria}</p>
             <p><b>Arquivo:</b> ${imageName}</p>`,
    });

    res.status(200).json({ message: 'E-mail enviado com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao enviar e-mail' });
  }
}