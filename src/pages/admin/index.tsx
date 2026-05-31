import { useState } from 'react';
import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function UploadPage() {
  // --- ESTADOS ---
  const [isScrolled] = useState(false);
  const [estaAutenticado, setEstaAutenticado] = useState(false);
  const [senhaDigitada, setSenhaDigitada] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ title: '', categoria: '', imageName: '', imageUrl: '' });
  const [isUploading, setIsUploading] = useState(false); // Estado para controlar o loading

  // --- FUNÇÕES ---
  const handleLogin = () => {
    // Acessa a variável de ambiente pública
    if (senhaDigitada === process.env.NEXT_PUBLIC_PAINEL_UPLOAD_PASS) {
      setEstaAutenticado(true);
    } else {
      alert('Senha incorreta!');
    }
  };

  const handleLogout = () => {
    setEstaAutenticado(false);
    setSenhaDigitada('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.imageUrl || !formData.title || !formData.categoria) {
      alert("Erro: Todos os campos são obrigatórios!");
      return;
    }

    setIsUploading(true); // Ativa o loading

    try {
      const res = await fetch('/api/enviar-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('Dados enviados com sucesso!');
        setFormData({ title: '', categoria: '', imageName: '', imageUrl: '' });
      } else {
        alert('Erro ao enviar. Tente novamente.');
      }
    } catch (error) {
      alert('Erro de conexão.');
    } finally {
      setIsUploading(false); // Desativa o loading independente do resultado
    }
  };

  // --- TELA DE LOGIN ---
  if (!estaAutenticado) {
    return (
      <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-white">
        <Head>
          {/* VERIFICAÇÕES */}
          <meta name="google-site-verification" content="QEJB4-_lTioDmLOiM6cCKYrnc9AGBFMMOUfRFAnUsbs" />
          <meta name="ahrefs-site-verification" content="b3bf5b6aa98bea70da2fde3847d7843db33283b82f85e4656c9564b9d393680a" />
          <link rel="icon" sizes="32x32" href="/favicon.ico" />
          <link rel="icon" sizes="192x192" href="/favicon.ico" />
          <link rel="apple-touch-icon" type="/x-icon" href="/favicon.ico" />
          <link rel="shortcut icon" type="/x-icon" href="/favicon.ico" />
          <link rel="mask-icon" href="/favicon.ico" />
          {/* Meta Tags para WhatsApp / Facebook (Open Graph) */}
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Painel de Upload da Serralheria e Soldagens" />
          <meta property="og:url" content="https://serralheriaesoldagens.com.br" />
          <meta property="og:image" content="https://serralheriaesoldagens.com.br/favicon.png" />
          <meta name="og:image:width" content="1200" />
          <meta name="og:image:height" content="630" />
          <meta property="og:title" content="Painel de Upload da Serralheria e Soldagens" />
          <meta property="og:description" content="Painel de Upload da Serralheria e Soldagens" />
          {/* FONTES E ESTILOS EXTERNOS */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lobster&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
          <link rel="canonical" href="https://serralheriaesoldagens.com.br/admin" />
          <link rel="profile" href="https://gmpg.org/xfn/11" />

          <title>Painel de Upload da Serralheria e Soldagens</title>
        </Head>

        {/* HEADER */}
        <header className={`fixed top-0 w-full z-[1000] transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-2 border-b border-blue-500/30' : 'bg-transparent py-6'}`}>
          <div className="container mx-auto px-6 flex justify-between items-center">
            <Link href="/" className="relative flex items-center gap-4">
              <div className="relative w-12 h-12 md:w-16 md:h-16"><Image src="/logo2-serralheriaesoldagens.png" alt="Logo" fill className="object-contain" /></div>
              <div className="hidden lg:block relative w-64 h-12"><Image src="/logo3-serralheriaesoldagens.png" alt="Serralheria e Soldagens" fill priority className="object-contain" /></div>
            </Link>
          </div>
        </header>

        <main className="flex-grow pt-32 p-8 flex items-center justify-center">
          <div className="max-w-md w-full bg-gray-900 p-8 rounded-lg text-center border border-gray-800 shadow-xl space-y-6">
            <h1 className="text-xl font-bold text-blue-500">Acesso Restrito</h1>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full p-3 rounded bg-black border border-blue-500 text-white text-center"
                placeholder="Digite a senha"
                value={senhaDigitada}
                onChange={e => setSenhaDigitada(e.target.value)}
              />
              <button type="button" className="absolute right-3 top-3" onClick={() => setShowPassword(!showPassword)}>
                <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}></i>
              </button>
            </div>
            <button onClick={handleLogin} className="w-full py-3 bg-blue-600 rounded font-bold">Logar Painel</button>
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

  // --- TELA AUTENTICADA COM CLOUDINARY ---
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-white p-8">
      <Head>          
        <title>Logado no Painel de Upload da Serralheria e Soldagens</title>
      </Head>

      {/* HEADER */}
      <header className={`fixed top-0 w-full z-[1000] transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-2 border-b border-blue-500/30' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="relative flex items-center gap-4">
            <div className="relative w-12 h-12 md:w-16 md:h-16"><Image src="/logo2-serralheriaesoldagens.png" alt="Logo" fill className="object-contain" /></div>
            <div className="hidden lg:block relative w-64 h-12"><Image src="/logo3-serralheriaesoldagens.png" alt="Serralheria e Soldagens" fill priority className="object-contain" /></div>
          </Link>
        </div>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-blue-500 font-bold">Painel de Upload</div>
          <button onClick={handleLogout} className="flex bg-red-900 px-4 py-2 rounded text-xs uppercase gap-4">Deslogar</button>
        </div>
      </header>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 bg-gray-900 px-8 py-25 rounded border border-gray-800">
        <CldUploadWidget
          uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
          onSuccess={(result: any) => {
            setFormData({
              ...formData,
              imageUrl: result.info.secure_url,
              imageName: result.info.original_filename
            });
            alert('Foto processada!');
          }}
        >
          {({ open }) => (
            <button type="button" onClick={() => open()} className="p-3 bg-green-600 w-full rounded font-bold">
              1. Clique e selecione sua Foto
            </button>
          )}
        </CldUploadWidget>

        {formData.imageUrl && <p className="text-green-500 text-sm">Foto carregada: {formData.imageName}</p>}

        <select className="w-full p-3 bg-black border border-gray-700" onChange={e => setFormData({ ...formData, categoria: e.target.value })}>
          <option value="">Selecione Categoria</option>
          <option value="grades">Grades</option>
          <option value="pergolados">Pergolados</option>
          <option value="estruturas">Estruturas</option>
          <option value="portoes">Portões</option>
        </select>

        <input required
          placeholder="EX: nome_da_foto_letras_minusculas.png"
          className="w-full p-3 bg-black border border-gray-700"
          value={formData.title}
          onChange={e => setFormData({ ...formData, title: e.target.value })}
        />

        {/* BOTÃO COM ESTADO DE CARREGAMENTO */}
        <button
          type="submit"
          disabled={isUploading}
          className={`w-full p-3 rounded font-bold transition-all ${isUploading ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          {isUploading ? "ENVIANDO AGUARDE..." : "2. Clique para Enviar os dados"}
        </button>
      </form>

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