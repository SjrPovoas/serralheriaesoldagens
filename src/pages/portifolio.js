import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

// Simulação de autenticação (Substituir pelo Clerk depois)
const isAdmin = true;

export default function Portifolio() {
    const router = useRouter();
    const [filtro, setFiltro] = useState('todos');
    const [showModal, setShowModal] = useState(false);
    const [showWpp, setShowWpp] = useState(false);

    // --- ESTADOS PARA O HEADER (IDÊNTICO À HOME) ---
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Estado do formulário de nova foto
    const [novaFoto, setNovaFoto] = useState({ src: '', alt: '', categoria: 'portoes' });

    // Monitor de Rolagem (Efeito do Header)
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        const scrolled = window.scrollY > 50;
        setIsScrolled(scrolled);
        setShowWpp(window.scrollY > 300); // Aparece após rolar 300px
    };

    useEffect(() => {
        if (router.query.categoria) {
            setFiltro(router.query.categoria);
        }
    }, [router.query.categoria]);

    const [fotosPortifolio, setFotosPortifolio] = useState([
        { id: 1, categoria: 'grades', src: '/images/grades.jpg', alt: 'Grade Residencial' },
        { id: 2, categoria: 'estruturas', src: '/images/mezanino-metalico.jpg', alt: 'Mezanino Residencial' },
        { id: 3, categoria: 'portoes', src: '/images/portao-eletronico.jpg', alt: 'Portão Eletrônico Residencial' },
        { id: 4, categoria: 'pergolados', src: '/images/pergolado.jpg', alt: 'Pergolado' },
        { id: 5, categoria: 'grades', src: '/images/grades.jpg', alt: 'Grade Residencial' },
        { id: 6, categoria: 'estruturas', src: '/images/mezanino-metalico.jpg', alt: 'Mezanino Residencial' },
        { id: 7, categoria: 'portoes', src: '/images/portao-eletronico.jpg', alt: 'Portão Eletrônico Residencial' },
        { id: 8, categoria: 'pergolados', src: '/images/pergolado.jpg', alt: 'Pergolado' },
        { id: 9, categoria: 'grades', src: '/images/grades.jpg', alt: 'Grade Residencial' },
        { id: 10, categoria: 'estruturas', src: '/images/mezanino-metalico.jpg', alt: 'Mezanino Residencial' },
        { id: 11, categoria: 'portoes', src: '/images/portao-eletronico.jpg', alt: 'Portão Eletrônico Residencial' },
        { id: 12, categoria: 'pergolados', src: '/images/pergolado.jpg', alt: 'Pergolado' },
    ]);

    const handleAddFoto = (e) => {
        e.preventDefault();
        setFotosPortifolio([...fotosPortifolio, { ...novaFoto, id: Date.now() }]);
        setShowModal(false);
        alert("Foto adicionada com sucesso!");
    };

    const categorias = [
        { id: 'todos', nome: 'Todos' },
        { id: 'portoes', nome: 'Portões' },
        { id: 'estruturas', nome: 'Estruturas' },
        { id: 'pergolados', nome: 'Pergolados' },
        { id: 'grades', nome: 'Grades' },
    ];

    const fotosFiltradas = filtro === 'todos'
        ? fotosPortifolio
        : fotosPortifolio.filter(foto => foto.categoria === filtro);

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-blue-500/30">

            <Head>
                {/* SEO COMPLETO */}
                <meta charSet="UTF-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="title" content="Serralheria e Soldagens | Portifólio" />
                <meta name="author" content="SjrPovoaS" />
                <meta name="description" content="Melhor serralheria de Cidade Ocidental. Somos especialistas em estruturas metálicas, incluindo a fabricação e instalação de portões basculantes e deslizantes, pergolados, mezaninos, esquadrias modernas, portas e janelas sob medida." />
                <meta name="Keywords" content="serralheria, serralheiro, serralheria em Cidade Ocidental, serralheiro Cidade Ocidental, melhor serralheria em cidade ocidental, soldas em Cidade Ocidental" />
                <meta name="skype_toolbar" content="skype_toolbar_parser_compatible" />
                <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
                <meta name="googlebot" content="all" />
                <meta name="google-site-verification" content="------" />

                <link rel="icon" sizes="32x32" href="/favicon.ico" />
                <link rel="icon" sizes="192x192" href="/favicon.ico" />
                <link rel="apple-touch-icon" type="/x-icon" href="/favicon.ico" />
                <link rel="shortcut icon" type="/x-icon" href="/favicon.ico" />
                <link rel="mask-icon" href="/favicon.ico" />

                {/* Meta Tags para WhatsApp / Facebook (Open Graph) */}
                <meta property="og:locale" content="pt_BR" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Serralheria e Soldagens | Portifólio" />
                <meta property="og:url" content="https://serralheriaesoldagens.vercel.app" />
                <meta property="og:image" content="https://serralheriaesoldagens.vercel.app/favicon.png" />
                <meta name="og:image:width" content="1200" />
                <meta name="og:image:height" content="630" />
                <meta property="og:title" content="Serralheria e Soldagens" />
                <meta property="og:description" content="Melhor serralheria de Cidade Ocidental. Somos especialistas em estruturas metálicas, incluindo a fabricação e instalação de portões basculantes e deslizantes, pergolados, mezaninos, esquadrias modernas, portas e janelas sob medida." />

                <title>Portifólio | Serralheria e Soldagens | A melhor serralheria em Cidade Ocidental</title>

                {/* Fontes e Estilos Externos */}
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lobster&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
                <link rel="canonical" href="https://serralheriaesoldagens.vercel.app/portifolio" />
                <link rel="profile" href="https://gmpg.org/xfn/11" />

            </Head>

            {/* --- HEADER (IGUAL À PÁGINA PRINCIPAL) --- */}
            <header className={`fixed top-0 w-full z-[1000] transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-2 border-b border-blue-500/30' : 'bg-transparent py-6'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <Link href="/" className="relative flex items-center gap-4 group">
                        <div className="relative w-12 h-12 md:w-16 md:h-16 transition-transform group-hover:scale-110">
                            <Image src="/logo2-serralheriaesoldagens.png" alt="Símbolo Serralheria" fill className="object-contain drop-shadow-[0_0_8px_rgba(0,123,255,0.8)]" />
                        </div>
                        <div className="hidden lg:block relative w-64 h-12">
                            <Image src="/logo3-serralheriaesoldagens.png" alt="Serralheria e Soldagens" fill className="object-contain" />
                        </div>
                    </Link>

                    {/* Menu Desktop */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {['Sobre', 'Materiais', 'Servicos', 'Contato', 'Duvidas', 'Portifolio'].map((item) => (
                            <Link
                                key={item}
                                href={item === 'Portifolio' ? '/portifolio' : `/#${item.toLowerCase()}`}
                                className="text-sm uppercase font-bold tracking-[2px] text-gray-300 hover:text-blue-400 transition-colors relative group"
                            >
                                {item}
                                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
                            </Link>
                        ))}
                        {/* Link de Orçamento Externo */}
                        <a
                            href="https://wa.me/5561993294211"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 px-6 py-2 border-2 border-blue-500 text-blue-500 font-bold uppercase text-xs tracking-widest rounded-full hover:bg-blue-500 hover:text-white transition-all"
                        >
                            Orçamento
                        </a>
                    </nav>

                    {/* Botão Mobile */}
                    <button className="lg:hidden text-3xl text-blue-500" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        <i className={`bi ${mobileMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
                    </button>
                </div>

                {/* Overlay do Menu Mobile */}
                {mobileMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 border-b border-blue-500/30 py-8 px-6 animate-in fade-in slide-in-from-top-4">
                        <nav className="flex flex-col gap-6 text-center">
                        {['Sobre', 'Materiais', 'Servicos', 'Contato', 'Duvidas', 'Portifolio'].map((item) => (
                            <Link
                                key={item}
                                href={item === 'Portifolio' ? '/portifolio' : `/#${item.toLowerCase()}`}
                                className="text-sm uppercase font-bold tracking-[2px] text-gray-300 hover:text-blue-400 transition-colors relative group"
                            >
                                {item}
                                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
                            </Link>
                        ))}
                        </nav>
                    </div>
                )}
            </header>

            {/* CONTEÚDO PRINCIPAL (Ajustado com padding-top para não ficar sob o header fixo) */}
            <main className="flex-grow pt-32 pb-20">
                <div className="text-center mb-10">
                    <h1 className="text-5xl font-bold italic uppercase tracking-tighter text-white drop-shadow-sm">Portifólio</h1>
                    <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 mb-6"></div>

                    {isAdmin && (
                        <button onClick={() => setShowModal(true)}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold text-xs uppercase transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                        > + Adicionar Nova Foto de Serviço Prestado
                        </button>
                    )}
                </div>

                <section className="container mx-auto px-6 py-12">
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categorias.map((cat) => (
                            <button key={cat.id} onClick={() => setFiltro(cat.id)}
                                className={`px-6 py-2 rounded-full font-bold uppercase text-xs transition-all
                                    ${filtro === cat.id ? 'bg-blue-primary text-white shadow-blue-glow' : 'bg-industrial-gray text-zinc-400 border border-zinc-700'}`}
                            > {cat.nome}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {fotosFiltradas.map((foto) => (
                            <div key={foto.id} className="relative h-72 w-full overflow-hidden rounded-lg border-2 border-zinc-800 hover:border-blue-primary transition-all">
                                <Image src={foto.src} alt={foto.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-2 text-center text-[10px] uppercase tracking-widest">
                                    {foto.alt}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* MODAL DE CADASTRO */}
            {showModal && (
                <div className="fixed inset-0 bg-black/90 z-[200] flex items-center justify-center p-4">
                    <div className="bg-industrial-gray border-2 border-blue-primary p-8 rounded-xl w-full max-w-md shadow-2xl">
                        <h2 className="text-2xl font-bold mb-6 italic uppercase tracking-tighter">Adicionar ao Portifólio</h2>
                        <form onSubmit={handleAddFoto} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold uppercase text-zinc-400 mb-1">URL da Foto (ou nome do arquivo)</label>
                                <input
                                    type="text" required
                                    className="w-full bg-metal-dark border border-zinc-700 p-2 rounded text-white"
                                    onChange={(e) => setNovaFoto({ ...novaFoto, src: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase text-zinc-400 mb-1">Descrição/Nome do Serviço</label>
                                <input
                                    type="text" required
                                    className="w-full bg-metal-dark border border-zinc-700 p-2 rounded text-white"
                                    onChange={(e) => setNovaFoto({ ...novaFoto, alt: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase text-zinc-400 mb-1">Categoria</label>
                                <select
                                    className="w-full bg-metal-dark border border-zinc-700 p-2 rounded text-white"
                                    onChange={(e) => setNovaFoto({ ...novaFoto, categoria: e.target.value })}
                                >
                                    <option value="portoes">Portões</option>
                                    <option value="estruturas">Estruturas/Mezaninos</option>
                                    <option value="pergolados">Pergolados</option>
                                    <option value="grades">Grades e Proteção</option>
                                </select>
                            </div>
                            <div className="flex gap-4 mt-8">
                                <button type="submit" className="flex-1 bg-blue-primary py-3 rounded font-bold uppercase text-sm">Salvar Foto</button>
                                <button type="button" onClick={() => setShowModal(false)} className="flex-1 bg-zinc-700 py-3 rounded font-bold uppercase text-sm">Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* FOOTER */}
            <footer className="py-12 bg-black border-t-2 border-blue-primary text-silver-text">
                <div className="container mx-auto px-6">
                    {/* Grid principal: 2 colunas no mobile, 3 no desktop */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-10 items-start">

                        {/* COLUNA 1 / LINHA 1 (Mobile): LOGO E DESCRIÇÃO */}
                        {/* col-span-2 faz com que esta div ocupe a largura total no mobile */}
                        <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start">
                            <Link href="/" className="relative w-32 h-24 mb-4 block">
                                <Image
                                    src="/logo2-serralheriaesoldagens.png" // Usando a logo símbolo consistente com o topo
                                    alt="Logo Serralheria e Soldagens"
                                    fill
                                    sizes="128px"
                                    className="object-contain"
                                />
                            </Link>
                            <p className="text-xs md:text-sm text-center md:text-left leading-relaxed opacity-70 max-w-xs">
                                Especialistas em estruturas metálicas e soldagens de alta precisão.
                                Qualidade e durabilidade para o seu projeto em Cidade Ocidental - GO e entorno.
                            </p>
                        </div>

                        {/* COLUNA 1 / LINHA 2 (Mobile): MAPA DO SITE */}
                        <div className="col-span-1 flex flex-col items-center md:items-center">
                            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-5 border-b border-blue-primary pb-2">
                                Mapa do Site
                            </h3>
                            <div className="flex flex-col gap-3 text-left">
                                {['Sobre', 'Materiais', 'Servicos', 'Contato', 'Duvidas', 'Portifolio'].map((item) => (
                                    <Link
                                        key={item}
                                        href={item === 'Portifolio' ? '/portifolio' : `/#${item.toLowerCase()}`}
                                        className="text-xs md:text-sm text-silver-text no-underline hover:text-blue-glow transition-all flex items-center gap-2 group">
                                        <i className="bi bi-chevron-double-right text-blue-primary group-hover:translate-x-1 transition-transform"></i>
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* COLUNA 2 / LINHA 2 (Mobile): FALE CONOSCO */}
                        <div className="col-span-1 flex flex-col items-center md:items-end">
                            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-5 border-b border-blue-primary pb-2">
                                Fale Conosco
                            </h3>

                            <div className="flex flex-col gap-4 w-full">
                                {/* Horário */}
                                <div className="flex flex-col items-center md:items-end gap-1">
                                    <div className="flex items-center gap-2 text-blue-primary mb-1">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-white hover:text-blue-glow transition-all">Atendimento</span>
                                        <i className="bi bi-clock text-base"></i>
                                    </div>
                                    <div className="text-center md:text-right text-[12px] opacity-70 hover:text-blue-glow transition-all">
                                        <p className="m-0">Seg - Sex | 08:00 às 17:30</p>
                                        <p className="m-0 italic">Sáb - Dom - Feriado | Fechado</p>
                                    </div>
                                </div>

                                {/* Links de Contato */}
                                <div className="flex flex-col gap-3 items-center md:items-end">
                                    <a href="tel:061993294211" className="flex items-center gap-2 text-xs no-underline hover:text-blue-glow transition-all">
                                        <span className="font-bold tracking-tighter">(61) 9 9329-4211</span>
                                        <i className="bi bi-telephone text-blue-primary text-base"></i>
                                    </a>

                                    <a href="https://www.google.com/maps/@-16.0950528,-47.9501867,87m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI2MDQyOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" className="flex items-center gap-2 text-xs no-underline hover:text-blue-glow transition-all text-center md:text-right">
                                        <span className="font-bold tracking-tighter">Rua Oswaldo Cruz, Residencial Flores do Cerrado II, Casa 44 - Mansões Recreio Mossoró. Cidade Ocidental-GO</span>
                                        <i className="bi bi-geo-alt text-blue-primary text-base"></i>
                                    </a>

                                    <a href="https://www.instagram.com/serralheriaesoldagens" target="_blank" className="flex items-center gap-2 text-xs no-underline hover:text-blue-glow transition-all">
                                        <span className="font-bold tracking-tighter">@serralheriaesoldagens</span>
                                        <i className="bi bi-instagram text-blue-primary text-base"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* LINHA 3 e 4 (Mobile): CRÉDITOS */}
                    <div className="mt-12 pt-6 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest opacity-90">
                        {/* Terceira linha no celular */}
                        <p className="text-center">© 2026 Serralheria e Soldagens - Todos os direitos reservados.</p>
                        {/* Quarta linha no celular */}
                        <p className="text-center"> Desenvolvido por{' '}
                            <Link href="https://sjrpovoas.vercel.app/" target="_blank" className="text-blue-primary hover:text-blue-glow no-underline font-bold">
                                SjrPovoaS
                            </Link></p>
                        <p className="text-center"></p>
                        <p className="text-center"></p>
                    </div>
                </div>
            </footer>

            {/* BOTÕES FLUTUANTES */}
            <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-[500] items-end">
                {/* Botão Seta para o Topo */}
                {isScrolled && (
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="w-12 h-12 bg-zinc-800/80 backdrop-blur-md border border-blue-500/50 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition-all shadow-lg flex items-center justify-center group"
                        title="Voltar ao topo">
                        <i className="bi bi-arrow-up text-xl group-hover:-translate-y-1 transition-transform"></i>
                    </button>
                )}

                {/* Botão WhatsApp - Agora visível por padrão ou baseado no scroll */}
                <a href="https://wa.me/5561993294211" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-3 bg-[#25D366] text-white rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#20ba5a] no-underline group"
                    style={{ boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)' }}>
                    <i className="bi bi-whatsapp text-2xl"></i>
                    <span className="font-bold text-sm md:text-base whitespace-nowrap">
                        Solicite um Orçamento
                    </span>
                </a>
            </div>

        </div>
    );
}