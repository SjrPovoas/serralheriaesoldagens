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
            <h1 className="text-xl font-bold text-blue-500">Acesso Restrito <i className="bi bi-key-fill text-[1.6rem] text-blue-primary"></i></h1>
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
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-white">
      <Head>
        <title>Logado na Área Administrativa</title>
      </Head>

      {/* HEADER */}
      <header className={`fixed top-0 w-full z-[1000] bg-black/90 backdrop-blur-md py-4 border-b border-blue-500/30`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="relative flex items-center gap-4">
            <div className="relative w-10 h-10"><Image src="/logo2-serralheriaesoldagens.png" alt="Logo" fill className="object-contain" /></div>
          </Link>
          <div className="text-blue-500 font-bold text-sm">ÁREA ADMINISTRATIVA</div>
          <button onClick={handleLogout} className="bg-red-900 px-4 py-2 rounded text-xs uppercase">Deslogar</button>
        </div>
      </header>

      <main className="pt-32 p-8 max-w-2xl mx-auto w-full">

        {/* SEÇÃO PAINEL ADMINISTRATIVO */}
        <section className="mb-10 p-6 bg-gray-900 rounded border border-gray-800">
          <h2 className="text-lg font-bold text-blue-500 mb-4 uppercase tracking-widest text-center">Painel Administrativo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/assets/docs/contrato-de-servico.pdf" target="_blank" className="p-4 bg-black border border-gray-700 rounded hover:border-blue-500 transition text-center font-bold">
              <i className="bi bi-file-earmark-pdf-fill text-[1.4rem] text-blue-primary"></i>
              Contrato de Serviço de Criação do Site em pdf
              <i className="bi bi-arrow-right-short seta-icon text-[1rem]"></i>
            </Link>
          </div><br />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/assets/docs/cartao-visitas.pdf" target="_blank" className="p-4 bg-black border border-gray-700 rounded hover:border-blue-500 transition text-center font-bold">
              <i className="bi bi-person-vcard-fill text-[1.4rem] text-blue-primary">.</i>
              Cartão de Visitas em pdf
              <i className="bi bi-arrow-right-short seta-icon text-[1rem]"></i>
            </Link>
            <Link href="https://www.canva.com/design/DAHJmKe2iS8/Z8DMBXB98gs9nCQqMknfkg/edit" target='_blank' className="p-4 bg-black border border-gray-700 rounded hover:border-blue-500 transition text-center font-bold">
              <i className="bi bi-person-vcard-fill text-[1.4rem] text-blue-primary">.</i>
              Link do Projeto no canva
              <i className="bi bi-arrow-up-right text-[1rem]"></i>
            </Link>
            <Link href="/assets/docs/uniforme.pdf" target="_blank" className="p-4 bg-black border border-gray-700 rounded hover:border-blue-500 transition text-center font-bold">
              <i className="bi bi-file-earmark-pdf-fill text-[1.4rem] text-blue-primary"></i>
              Uniforme em pdf
              <i className="bi bi-arrow-right-short seta-icon text-[1rem]"></i>
            </Link>
            <Link href="https://www.canva.com/design/DAHJmcml0Qk/U38o8aou9zAnytxlzeVn_Q/edit" target='_blank' className="p-4 bg-black border border-gray-700 rounded hover:border-blue-500 transition text-center font-bold">
            <i className="bi bi-file-earmark-pdf-fill text-[1.4rem] text-blue-primary"></i>
              Link do Projeto no canva
              <i className="bi bi-arrow-up-right text-[1rem]"></i>
            </Link>
          </div>
        </section>

        {/* SEÇÃO PAINEL DE UPLOAD - FORMULÁRIO */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900 p-8 rounded border border-gray-800">
          <h2 className="text-lg font-bold text-blue-500 mb-4 uppercase tracking-widest text-center">Painel de Upload</h2>
          <h3 className="font-bold text-center mb-4">Adicionar Nova Imagem <i className="bi bi-image-fill text-[1.4rem] text-white-800"></i></h3>

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
              <button type="button" onClick={() => open()} className="p-3 bg-green-600 w-full rounded font-bold hover:bg-green-700 transition">
                1. Selecionar Foto
              </button>
            )}
          </CldUploadWidget>

          {formData.imageUrl && <p className="text-green-500 text-sm break-all">✅ {formData.imageName}</p>}

          <select required className="w-full p-3 bg-black border border-gray-700 rounded" onChange={e => setFormData({ ...formData, categoria: e.target.value })}>
            <option value="">Selecione Categoria</option>
            <option value="grades">Grades</option>
            <option value="pergolados">Pergolados</option>
            <option value="estruturas">Estruturas</option>
            <option value="portoes">Portões</option>
          </select>

          <input required
            placeholder="Título (Ex: nome_do_projeto.png)"
            className="w-full p-3 bg-black border border-gray-700 rounded"
            value={formData.title}
            onChange={e => setFormData({ ...formData, title: e.target.value })}
          />

          <button
            type="submit"
            disabled={isUploading}
            className={`w-full p-3 rounded font-bold transition-all ${isUploading ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            {isUploading ? "ENVIANDO AGUARDE..." : "2. Enviar dados"}
          </button>
        </form>
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