import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  
  // Aqui você faria a troca do 'code' pelo 'token' via fetch para o GitHub
  // Mas para facilitar, vamos usar o fluxo simplificado:
  return NextResponse.redirect('/admin');
}