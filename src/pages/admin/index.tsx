import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function UploadPage() {
  const [isScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ title: '', categoria: '', imageName: '' });
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simulação de envio
    console.log("Enviando...", formData);

    // Mensagem de sucesso
    alert('Upload realizado com sucesso!');

    // Limpar formulário (reseta para estado inicial)
    setFormData({ title: '', categoria: '', imageName: '' });

    // Se quiser atualizar a página inteira:
    // window.location.reload();
  };

  // --- TELA DE LOGIN ---
  if (password !== 'SUA_SENHA_SECRETA') {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0a0a] text-white">
        {/* HEADER */}
        <header className={`fixed top-0 w-full z-[1000] transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-2 border-b border-blue-500/30' : 'bg-transparent py-6'}`}>
          <div className="container mx-auto px-6 flex justify-between items-center">
            <Link href="/" className="relative flex items-center gap-4">
              <div className="relative w-12 h-12 md:w-16 md:h-16"><Image src="/logo2-serralheriaesoldagens.png" alt="Logo" fill className="object-contain" /></div>
              <div className="hidden lg:block relative w-64 h-12"><Image src="/logo3-serralheriaesoldagens.png" alt="Serralheria e Soldagens" fill priority className="object-contain" /></div>
            </Link>
            <button className="lg:hidden text-3xl text-blue-500" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <i className={`bi ${mobileMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
            </button>
          </div>
        </header>
        <h1 className="mb-6 text-2xl font-bold">Acesso Restrito</h1>
        <input
          type="password"
          className="p-3 rounded bg-gray-900 border border-blue-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Digite a senha"
          onChange={e => setPassword(e.target.value)}
        />
        {/* FOOTER */}
        <footer className="py-12 bg-black text-silver-text border-t border-zinc-800">
          <div className="container mx-auto px-6 text-center text-[10px] uppercase tracking-widest opacity-90">
            <p>© 2026 Serralheria e Soldagens - Todos os direitos reservados.</p>
            <a href="https://github.com/SjrPovoas/" target="_blank" className="text-blue-primary font-bold mt-2 block">Desenvolvido por SjrPovoaS</a>
          </div>
        </footer>
      </div>
    );
  }

  // --- TELA AUTENTICADA ---
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-white">

      {/* HEADER */}
      <header className={`fixed top-0 w-full z-[1000] transition-all duration-500 ${isScrolled ? 'bg-black/90 py-2' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="relative flex items-center gap-4">
            <div className="relative w-12 h-12 md:w-16 md:h-16"><Image src="/logo2-serralheriaesoldagens.png" alt="Logo" fill className="object-contain" /></div>
            <div className="hidden lg:block relative w-64 h-12"><Image src="/logo3-serralheriaesoldagens.png" alt="Serralheria e Soldagens" fill priority className="object-contain" /></div>
          </Link>
          <button className="lg:hidden text-3xl text-blue-500" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <i className={`bi ${mobileMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
          </button>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="flex-grow pt-32 p-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="mb-8 text-3xl font-bold text-center text-blue-500">Painel de Upload</h1>

          <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-lg border border-gray-800 shadow-xl space-y-6">
            <div>
              <label className="block text-sm font-bold mb-2">Título do Projeto</label>
              <input
                className="w-full p-3 rounded bg-black border border-gray-700 text-white"
                value={formData.title} // Adicionado value para controle
                placeholder="Ex: Portão Moderno"
                onChange={e => setFormData({ ...formData, title: e.target.value })}
              />
            </div>

            {/* SELECT DE CATEGORIAS */}
            <div>
              <label className="block text-sm font-bold mb-2">Categoria</label>
              <select
                className="w-full p-3 rounded bg-black border border-gray-700 text-white"
                value={formData.categoria}
                onChange={e => setFormData({ ...formData, categoria: e.target.value })}
              >
                <option value="">Selecione uma opção</option>
                <option value="grades">Grades</option>
                <option value="pergolados">Pergolados</option>
                <option value="estruturas">Estruturas</option>
                <option value="portoes">Portões</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2">Selecione a Foto</label>
              <input
                type="file"
                accept="image/*"
                className="w-full p-3 rounded bg-black border border-gray-700 text-white"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) setFormData({ ...formData, imageName: f.name });
                }}
              />
            </div>

            <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded transition-all">
              Enviar para meu E-mail
            </button>
          </form>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="py-12 bg-black text-silver-text border-t border-zinc-800">
        <div className="container mx-auto px-6 text-center text-[10px] uppercase tracking-widest opacity-90">
          <p>© 2026 Serralheria e Soldagens - Todos os direitos reservados.</p>
          <a href="https://github.com/SjrPovoas/" target="_blank" className="text-blue-primary font-bold mt-2 block">Desenvolvido por SjrPovoaS</a>
        </div>
      </footer>
    </div>
  );
}