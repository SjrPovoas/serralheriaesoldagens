import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

export default function Portifolio() {
    const router = useRouter();
    
    // --- ESTADOS ---
    const [filtro, setFiltro] = useState('todos');
    const [showWpp, setShowWpp] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [fotosPortifolio, setFotosPortifolio] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // Estado para os dados do formulário de orçamento
    const [dados, setDados] = useState({
        nome: '', telefone: '', endereco: '',
        tipo: 'Personalizado', servico: 'Portão', local: ''
    });

    const categorias = [
        { id: 'todos', nome: 'Todos' },
        { id: 'portoes', nome: 'Portões' },
        { id: 'grades', nome: 'Grades' },
        { id: 'pergolados', nome: 'Pergolados' },
        { id: 'estruturas', nome: 'Estruturas/Mezaninos' }
    ];

    // --- EFEITOS ---
    
    // Efeito para carregar os dados do JSON (deve estar na pasta /public)
    useEffect(() => {
        fetch('/portfolio-data.json')
            .then(res => res.json())
            .then(data => {
                // Acessa o array 'projetos' conforme estruturado no JSON
                setFotosPortifolio(data.servicos || []);
            })
            .catch(err => console.error("Erro ao carregar JSON:", err));
    }, []);

    // Efeito para monitorar o scroll e efeito de header/whatsapp
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            setShowWpp(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lógica de filtro: filtra as fotos baseadas na categoria
    const fotosFiltradas = filtro === 'todos' 
        ? fotosPortifolio 
        : fotosPortifolio.filter(item => item.categoria === filtro);

    const enviarWhatsApp = (e) => {
        e.preventDefault();
        const fone = "5561993294211";
        const texto = `Olá! Gostaria de um orçamento para a *Serralheria e Soldagens*.
        *MEUS DADOS:*
        • Nome: ${dados.nome}
        • Telefone: ${dados.telefone}
        • Endereço: ${dados.endereco}
        *DETALHES DO SERVIÇO:*
        • Tipo: ${dados.tipo}
        • Serviço: ${dados.servico}
        • Local: ${dados.local}`;

        window.open(`https://wa.me/${fone}?text=${encodeURIComponent(texto)}`, '_blank');
        setIsModalOpen(false);
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-blue-500/30">

            <Head>
                {/* SEO COMPLETO */}
                <meta charSet="UTF-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="title" content="Nosso Portfólio de Projetos | Serralheria e Soldagens" />
                <meta name="author" content="SjrPovoaS" />
                <meta name="description" content="Confira nossos projetos realizados em Cidade Ocidental e DF. Fotos de portões, estruturas metálicas, mezaninos e esquadrias de alto padrão fabricadas pela Serralheria e Soldagens." />
                <meta name="Keywords" content="projetos de serralheria, serralheiro, fotos de portões, serviços realizados, serralheria em Cidade Ocidental, serralheiro Cidade Ocidental, melhor serralheria em cidade ocidental, soldas em Cidade Ocidental" />
                <meta name="skype_toolbar" content="skype_toolbar_parser_compatible" />
                {/* VERIFICAÇÕES E ROBOTS */}
                <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
                <meta name="googlebot" content="all" />
                <meta name="google-site-verification" content="QEJB4-_lTioDmLOiM6cCKYrnc9AGBFMMOUfRFAnUsbs" />
                <meta name="ahrefs-site-verification" content="b3bf5b6aa98bea70da2fde3847d7843db33283b82f85e4656c9564b9d393680a" />
                {/* ìcones */}
                <link rel="icon" sizes="32x32" href="/favicon.ico" />
                <link rel="icon" sizes="192x192" href="/favicon.ico" />
                <link rel="apple-touch-icon" type="/x-icon" href="/favicon.ico" />
                <link rel="shortcut icon" type="/x-icon" href="/favicon.ico" />
                <link rel="mask-icon" href="/favicon.ico" />
                {/* Meta Tags para WhatsApp / Facebook (Open Graph) */}
                <meta property="og:locale" content="pt_BR" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Serralheria e Soldagens | Portifólio" />
                <meta property="og:url" content="https://serralheriaesoldagens.com.br" />
                <meta property="og:image" content="https://serralheriaesoldagens.com.br/favicon.png" />
                <meta name="og:image:width" content="1200" />
                <meta name="og:image:height" content="630" />
                <meta property="og:title" content="Serralheria e Soldagens" />
                <meta property="og:description" content="Melhor serralheria de Cidade Ocidental. Somos especialistas em estruturas metálicas, incluindo a fabricação e instalação de portões basculantes e deslizantes, pergolados, mezaninos, esquadrias modernas, portas e janelas sob medida." />
                {/* FONTES E ESTILOS EXTERNOS */}
                <link rel="canonical" href="https://serralheriaesoldagens.com.br/portifolio" />
                <link rel="profile" href="https://gmpg.org/xfn/11" />

                <title>Nosso Portfólio de Projetos | Serralheria e Soldagens</title>

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
                        {/* Link de Orçamento */}
                        <button onClick={() => setIsModalOpen(true)}
                            className="ml-4 px-6 py-2 border-2 border-blue-500 text-blue-500 font-bold uppercase text-xs tracking-widest rounded-full hover:bg-blue-500 hover:text-white transition-all">
                            Orçamento
                        </button>
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
                            {['Sobre', 'Materiais', 'Servicos', 'Contato', 'Duvidas', 'Portifolio', 'Orcamento'].map((item) => (
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

            {/* CONTEÚDO PRINCIPAL */}
            <main className="flex-grow pt-32 pb-20">
                <div className="text-center mb-10">
                    <h1 className="text-5xl font-bold italic uppercase tracking-tighter text-white drop-shadow-sm">Portifólio</h1>
                    <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 mb-6"></div>
                </div>

                <section className="container mx-auto px-6 py-12">
                    {/* Botões de Filtro */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categorias.map((cat) => (
                            <button key={cat.id} onClick={() => setFiltro(cat.id)}
                                className={`px-6 py-2 rounded-full font-bold uppercase text-xs transition-all ${filtro === cat.id ? 'bg-blue-600 text-white' : 'bg-zinc-800 text-zinc-400'}`}>
                                {cat.nome}
                            </button>
                        ))}
                    </div>

                    {/* Grid de Fotos Corrigido */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {fotosFiltradas.length > 0 ? (
                            fotosFiltradas.map((foto, index) => (
                                <div key={index} className="relative aspect-square overflow-hidden rounded-xl group">
                                    <Image
                                        src={foto.image} // Nome correto do campo no JSON
                                        alt={foto.title} // Nome correto do campo no JSON
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            ))
                        ) : (
                            <p className="text-center col-span-3">Nenhum projeto encontrado nesta categoria.</p>
                        )}
                    </div>
                </section>
            </main>

            {/* FOOTER */}
            <footer className="py-12 bg-black border-t-2 border-blue-primary text-silver-text">
                <div className="container mx-auto px-6">
                    {/* Grid principal: 2 colunas no mobile, 3 no desktop */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-10 items-start">
                        {/* COLUNA 1 / LINHA 1 (Mobile): LOGO E DESCRIÇÃO */}
                        {/* col-span-2 faz com que esta div ocupe a largura total no mobile */}
                        <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start">
                            <Link href="/" className="relative w-32 h-30 mb-4 block">
                                <Image src="/logo-serralheriaesoldagens.png" alt="Logo Serralheria e Soldagens"
                                    fill sizes="128px" className="object-contain" />
                            </Link>
                            <p className="text-xs md:text-sm text-center md:text-left leading-relaxed opacity-70 max-w-xs">
                                Fabricação e Instalação de portões basculantes, pivoltantes e deslizantes, escadas, estruturas metálicas, mezaninos e pergolados em Cidade Ocidental - GO e entorno.
                            </p>
                        </div>
                        {/* COLUNA 1 / LINHA 2 (Mobile): MAPA DO SITE */}
                        <div className="col-span-1 flex flex-col items-center md:items-center">
                            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-5 border-b border-blue-primary pb-2">
                                Mapa do Site
                            </h3>
                            <div className="flex flex-col gap-3 uppercase text-left">
                                {['Sobre', 'Materiais', 'Servicos', 'Contato', 'Duvidas', 'Portifolio', 'Orcamento'].map((item) => (
                                    <Link key={item} href={item === 'Portifolio' ? '/portifolio' : `/#${item.toLowerCase()}`}
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
                                    <div className="flex items-center gap-2 text-blue-primary mb-1" title="Atendimento">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-white hover:text-blue-glow transition-all">Atendimento</span>
                                        <i className="bi bi-clock text-base"></i>
                                    </div>
                                    <div className="text-center md:text-right text-[12px] opacity-70 hover:text-blue-glow transition-all">
                                        <p className="m-0">Seg - Qui | 07:30 às 17:30</p>
                                        <p className="m-0">Sex | 07:30 às 16:30</p>
                                        <p className="m-0 italic">Sáb - Dom - Feriado | Fechado</p>
                                    </div>
                                </div>
                                {/* Links de Contato */}
                                <div className="flex flex-col gap-3 items-center md:items-end">
                                    <a href="tel:061993294211" title="Telefone" className="flex items-center gap-2 text-xs no-underline hover:text-blue-glow transition-all">
                                        <span className="font-bold uppercase tracking-tighter">(61) 9 9329-4211</span>
                                        <i className="bi bi-telephone text-blue-primary text-base"></i>
                                    </a>
                                    <a href="https://www.google.com/maps/@-16.0950528,-47.9501867,87m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI2MDQyOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" title="GoogleMap" className="flex items-center gap-2 text-xs no-underline hover:text-blue-glow transition-all text-center md:text-right">
                                        <span className="font-bold uppercase tracking-tighter">R. Oswaldo Cruz, Residencial Flores do Cerrado II, Casa 44 - Recreio Mossoró. Cidade Ocidental-GO</span>
                                        <i className="bi bi-geo-alt text-blue-primary text-base"></i>
                                    </a>
                                    <a href="https://www.instagram.com/serralheriaesoldagens" target="_blank" title="Instagram" className="flex items-center gap-2 text-xs no-underline hover:text-blue-glow transition-all">
                                        <span className="font-bold uppercase tracking-tighter">@serralheriaesoldagens</span>
                                        <i className="bi bi-instagram text-blue-primary text-base"></i>
                                    </a>
                                    <a href="https://linktr.ee/serralheriaesoldagens" target="_blank" title="Linktr.ee" className="flex items-center gap-2 text-xs no-underline hover:text-blue-glow transition-all">
                                        <span className="font-bold uppercase tracking-tighter">Linktr.ee</span>
                                        <i className="bi bi-tree text-blue-primary text-base"></i>
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
                        <p className="text-center">
                            <a href="https://github.com/SjrPovoas/" target="_blank" className="text-blue-primary hover:text-blue-glow no-underline font-bold">
                                Desenvolvido por SjrPovoaS
                            </a></p>
                        <p className="text-center"></p>
                        <p className="text-center"></p>
                    </div>
                </div>
            </footer>

            {/* BOTÕES FLUTUANTES */}
            <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-[500] items-end">
                {/* Botão Seta para o Topo */}
                {isScrolled && (
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="fixed bottom-23 w-12 h-12 bg-zinc-800/80 backdrop-blur-md border border-blue-500/50 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition-all shadow-lg flex items-center justify-center group"
                        title="Voltar ao topo">
                        <i className="bi bi-arrow-up text-xl group-hover:-translate-y-1 transition-transform"></i>
                    </button>
                )}

                {/* BOTÃO FLUTUANTE WHATSAPP (MODAL) */}
                <div className={`fixed bottom-6 right-6 z-[999] transition-all duration-500 ${showWpp ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                    <button onClick={() => setIsModalOpen(true)}
                        className="flex items-center gap-1 px-3 py-3 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-all animate-pulse-subtle">
                        <i className="bi bi-whatsapp text-2xl"></i>
                        <span className="font-bold md:inline">Orçamento Rápido</span>
                    </button>
                </div>

                {/* MODAL DE ORÇAMENTO */}
                {isModalOpen && (
                    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
                        <div className="bg-[#121212] border border-blue-500/30 p-8 rounded-3xl w-full max-w-md relative animate-in fade-in zoom-in duration-300">
                            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors">
                                <i className="bi bi-x-lg text-xl"></i>
                            </button>

                            <h3 className="text-2xl font-black text-white mb-6 uppercase italic border-b border-blue-600 pb-2">Solicitar Orçamento</h3>

                            <form onSubmit={enviarWhatsApp} className="space-y-4">
                                <input type="text" placeholder="Nome Completo" required className="w-full bg-black border border-zinc-800 p-4 rounded-xl text-white focus:border-blue-600 outline-none transition-all"
                                    onChange={e => setDados({ ...dados, nome: e.target.value })} />

                                <input type="text" placeholder="Telefone com DDD" required className="w-full bg-black border border-zinc-800 p-4 rounded-xl text-white focus:border-blue-600 outline-none transition-all"
                                    onChange={e => setDados({ ...dados, telefone: e.target.value })} />

                                <div className="grid grid-cols-2 gap-4">
                                    <select className="bg-black border border-zinc-800 p-4 rounded-xl text-white outline-none" onChange={e => setDados({ ...dados, tipo: e.target.value })}>
                                        <option value="Personalizado">Serv. Personalizado</option>
                                        <option value="Projetado">Serv. Projetado</option>
                                    </select>
                                    <select className="bg-black border border-zinc-800 p-4 rounded-xl text-white outline-none" onChange={e => setDados({ ...dados, servico: e.target.value })}>
                                        <option value="Portão">Portão</option>
                                        <option value="Grade">Grade</option>
                                        <option value="Escada">Escada</option>
                                        <option value="Estrutura/Mezanino">Estrutura/Mezanino</option>
                                        <option value="Pergolado">Pergolado</option>
                                    </select>
                                </div>

                                <input type="text" placeholder="Endereço da Obra" required className="w-full bg-black border border-zinc-800 p-4 rounded-xl text-white focus:border-blue-600 outline-none transition-all"
                                    onChange={e => setDados({ ...dados, endereco: e.target.value })} />

                                <input type="text" placeholder="Onde será o serviço? (Ex: Casa, Lote, Aptº)" required className="w-full bg-black border border-zinc-800 p-4 rounded-xl text-white focus:border-blue-600 outline-none transition-all"
                                    onChange={e => setDados({ ...dados, local: e.target.value })} />

                                <button type="submit" className="w-full bg-[#25D366] text-black font-black py-4 rounded-2xl hover:bg-[#20ba5a] transition-all flex items-center justify-center gap-2 mt-4 uppercase tracking-tighter">
                                    <i className="bi bi-whatsapp text-xl"></i>
                                    Enviar Orçamento
                                </button>
                            </form>
                        </div>
                    </div>

                )}

                <style jsx global>{`
                @keyframes pulse-subtle {
                    0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(37, 211, 102, 0.4); }
                    50% { transform: scale(1.05); box-shadow: 0 0 35px rgba(37, 211, 102, 0.6); }
                }
                .animate-pulse-subtle { animation: pulse-subtle 3s infinite ease-in-out; }
                  `}</style>
            </div>
        </div>
    );
}