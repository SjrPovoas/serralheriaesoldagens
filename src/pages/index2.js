import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    // --- ESTADOS ---
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showWpp, setShowWpp] = useState(false);

    // --- DEFINIÇÕES DE DADOS ---
    const slides = [
        {
            url: '/images/portao-eletronico.jpg',
            titulo: 'Serralheria de Precisão',
            subtitulo: 'Soldagem industrial e residencial com acabamento de alto padrão.'
        },
        {
            url: '/images/mezanino-metalico.jpg',
            titulo: 'Estruturas Metálicas',
            subtitulo: 'Mezaninos e galpões projetados para máxima resistência.'
        },
        {
            url: '/images/pergolado.jpg',
            titulo: 'Design em Ferro',
            subtitulo: 'Pergolados e grades que unem segurança e estética moderna.'
        }
    ];

    const materiais = [
        { nome: 'Ferro', desc: 'Estruturas robustas e tradicionais para segurança e durabilidade.' },
        { nome: 'Aço Carbono', desc: 'Alta resistência mecânica para suporte de grandes cargas e estabilidade.' },
        { nome: 'Alumínio', desc: 'Leve, moderno e resistente à corrosão, ideal para acabamentos finos e esquadrias.' },
    ];

    const categoriasServicos = [
        { 
            id: 'portoes', 
            nome: 'Portões de Alta Performance', 
            desc: 'Fabricação de portões basculantes e deslizantes com motores de alta velocidade.', 
            icon: 'bi-door-open', 
            img: '/images/portao-eletronico.jpg' 
        },
        { 
            id: 'estruturas', 
            nome: 'Mezaninos e Estruturas', 
            desc: 'Soldagem industrial para ampliação de espaços comerciais e residenciais.', 
            icon: 'bi-layers', 
            img: '/images/mezanino-metalico.jpg' 
        },
        { 
            id: 'pergolados', 
            nome: 'Pergolados e Grades', 
            desc: 'Design moderno com resistência contra intempéries para áreas externas.', 
            icon: 'bi-grid-3x3', 
            img: '/images/pergolado.jpg' 
        },
        { 
            id: 'seguranca', 
            nome: 'Grades e Proteções', 
            desc: 'Segurança reforçada com designs personalizados em ferro ou aço carbono.', 
            icon: 'bi-shield-check', 
            img: '/images/grades.jpg' 
        }
    ];

    // --- EFEITOS E HANDLERS ---
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            setShowWpp(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(timer);
        };
    }, [currentIndex]);

    const prevSlide = () => setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
    const nextSlide = () => setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-blue-500/30">
            
            {/* --- HEADER --- */}
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

                    <nav className="hidden lg:flex items-center gap-8">
                        {['Sobre', 'Serviços', 'Materiais', 'Portfólio'].map((item) => (
                            <Link key={item} href={`#${item.toLowerCase()}`} className="text-sm uppercase font-bold tracking-[2px] text-gray-300 hover:text-blue-400 transition-colors relative group">
                                {item}
                                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
                            </Link>
                        ))}
                        <Link href="https://wa.me/5561993294211" className="ml-4 px-6 py-2 border-2 border-blue-500 text-blue-500 font-bold uppercase text-xs tracking-widest rounded-full hover:bg-blue-500 hover:text-white transition-all">
                            Orçamento
                        </Link>
                    </nav>

                    <button className="lg:hidden text-3xl text-blue-500" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        <i className={`bi ${mobileMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
                    </button>
                </div>
            </header>

            {/* --- HERO --- */}
            <section className="relative h-[100vh] w-full overflow-hidden bg-black">
                {slides.map((slide, index) => (
                    <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                        <Image src={slide.url} alt={slide.titulo} fill className="object-cover brightness-[0.3]" priority={index === 0} />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                            <h2 className="text-blue-500 font-black tracking-[4px] uppercase text-sm mb-4">Qualidade Industrial</h2>
                            <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tighter italic uppercase">{slide.titulo}</h1>
                            <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mb-10 font-light">{slide.subtitulo}</p>
                            <div className="flex flex-col md:flex-row gap-4">
                                <Link href="https://wa.me/5561993294211" className="bg-blue-600 text-white px-10 py-4 rounded-sm font-black uppercase tracking-widest hover:bg-blue-500 transition-all">Falar com Especialista</Link>
                                <Link href="/portifolio" className="border border-white/30 text-white px-10 py-4 rounded-sm font-black uppercase tracking-widest hover:border-blue-500 transition-all">Ver Portfólio</Link>
                            </div>
                        </div>
                    </div>
                ))}
                <button onClick={prevSlide} className="absolute left-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-blue-500 z-10"><i className="bi bi-chevron-double-left text-4xl"></i></button>
                <button onClick={nextSlide} className="absolute right-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-blue-500 z-10"><i className="bi bi-chevron-double-right text-4xl"></i></button>
            </section>

            {/* --- SOBRE --- */}
            <section id="sobre" className="py-24 bg-[#0d0d0d] relative">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10 order-2 md:order-1">
                        <Image src="/images/oficina-solda.jpg" alt="Trabalho de Soldagem" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-blue-500 font-black uppercase tracking-[3px] text-sm mb-4">Nossa Essência</h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-8 italic uppercase tracking-tighter">A Força do Metal com a <span className="text-blue-primary">Precisão da Solda.</span></h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">Localizada em **Cidade Ocidental**, entregamos soldagens industriais e residenciais com segurança extrema e design moderno.</p>
                    </div>
                </div>
            </section>

            {/* --- MATERIAIS --- */}
            <section id="materiais" className="py-24 bg-black border-y border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter mb-16">Trabalhamos com <span className="text-blue-500">Matéria-Prima de Elite</span></h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        {materiais.map((m, i) => (
                            <div key={i} className="group p-10 bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-3xl hover:border-blue-500/50 transition-all">
                                <div className="text-blue-500 text-4xl mb-6"><i className={`bi ${i === 0 ? 'bi-hammer' : i === 1 ? 'bi-shield-shaded' : 'bi-droplet-half'}`}></i></div>
                                <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">{m.nome}</h4>
                                <p className="text-gray-500 text-sm">{m.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SERVIÇOS --- */}
            <section id="servicos" className="py-24 bg-[#0d0d0d]">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold italic uppercase mb-16">Conheça Nossas <span className="text-blue-primary">Soluções</span></h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {categoriasServicos.map((s) => (
                            <Link href={`/portifolio?categoria=${s.id}`} key={s.id} className="relative h-[450px] group overflow-hidden rounded-xl border border-white/10">
                                <Image src={s.img} alt={s.nome} fill className="object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.4] group-hover:brightness-[0.6]" />
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <i className={`bi ${s.icon} text-blue-500 text-4xl mb-4`}></i>
                                    <h4 className="text-xl font-bold text-white uppercase mb-2">{s.nome}</h4>
                                    <p className="text-gray-400 text-xs opacity-0 group-hover:opacity-100 transition-all">{s.desc}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FALE CONOSCO */}
            <section id="contato" className="py-24 px-8 bg-industrial-gray border-t border-zinc-800/50">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center uppercase tracking-tighter italic">
                        Fale Conosco
                    </h2>

                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

                        {/* Bloco de Informações */}
                        <div className="bg-metal-dark p-8 rounded-xl border border-zinc-800 shadow-2xl flex flex-col justify-center">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-black border border-blue-primary rounded-full flex items-center justify-center text-blue-glow shadow-blue-glow/20">
                                        <i className="bi bi-whatsapp text-2xl"></i>
                                    </div>
                                    <div>
                                        <p className="text-blue-primary text-xs font-bold uppercase tracking-widest">WhatsApp</p>
                                        <p className="text-white text-xl font-bold">(61) 9 9329-4211</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-black border border-blue-primary rounded-full flex items-center justify-center text-blue-glow shadow-blue-glow/20">
                                        <i className="bi bi-geo-alt text-2xl"></i>
                                    </div>
                                    <div>
                                        <p className="text-blue-primary text-xs font-bold uppercase tracking-widest">Localização</p>
                                        <p className="text-white text-xl font-bold">Cidade Ocidental - GO</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-black border border-blue-primary rounded-full flex items-center justify-center text-blue-glow shadow-blue-glow/20">
                                        <i className="bi bi-briefcase text-2xl"></i>
                                    </div>
                                    <div>
                                        <p className="text-blue-primary text-xs font-bold uppercase tracking-widest">Identificação</p>
                                        <p className="text-white text-xl font-bold">Serralheria e Soldagens. <Link href="https://empresas.serasaexperian.com.br/consulta-gratis/60555397-SILVANO-RIBEIRO-DE-SOUZA-FILHO-ME-60555397000100" target="_blank">CNPJ: 60.555.397/0001-00</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bloco de Ação (CTA) */}
                        <div className="flex flex-col items-center justify-center bg-blue-primary/5 p-10 rounded-xl border-2 border-dashed border-blue-primary/30">
                            <div className="text-center mb-8">
                                <h3 className="text-white text-2xl font-bold mb-4">Pronto para iniciar seu projeto?</h3>
                                <p className="text-silver-text text-sm opacity-80">
                                    Atendimento especializado para estruturas metálicas e soldagens de alta precisão.
                                </p>
                            </div>
                            <Link
                                href="https://wa.me/5561993294211"
                                target="_blank"
                                className="btn-solicitar w-full text-center py-4 text-lg hover:scale-105 transition-transform"
                            >
                                <i className="bi bi-chat-dots-fill mr-2"></i>
                                SOLICITAR ORÇAMENTO AGORA
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ - PERGUNTAS FREQUENTES */}
            <section id="duvidas" className="py-24 bg-black section-divider">
                <div className="container mx-auto px-6">
                    <h2 className="text-white text-center mb-16 text-3xl md:text-5xl font-bold uppercase tracking-tighter italic">
                        Dúvidas Frequentes
                    </h2>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {[
                            {
                                q: "Quais tipos de serviços de serralheria vocês realizam?",
                                a: "Somos especialistas em estruturas metálicas, incluindo a fabricação e instalação de portões (basculantes e deslizantes), pergolados, mezaninos, esquadrias modernas, portas e janelas sob medida."
                            },
                            {
                                q: "Vocês atendem apenas na Cidade Ocidental?",
                                a: "Atendemos com prontidão em Cidade Ocidental - GO e em todo o entorno, garantindo a mesma qualidade e agilidade técnica em toda a região."
                            },
                            {
                                q: "Como posso solicitar um orçamento?",
                                a: "Você pode clicar no botão flutuante do WhatsApp ou entrar em contato direto. Respondemos rapidamente com um orçamento detalhado baseado nas medidas e materiais escolhidos."
                            },
                            {
                                q: "Quais materiais são utilizados nos projetos?",
                                a: "Trabalhamos com materiais de alta resistência, como Ferro, Aço Carbono e Alumínio, selecionados de acordo com a durabilidade e estética de cada estrutura."
                            },
                            {
                                q: "Qual é o prazo médio de entrega?",
                                a: "O prazo varia conforme a complexidade. Após a aprovação, definimos um cronograma claro para garantir entrega e instalação com precisão técnica."
                            }
                        ].map((faq, index) => (
                            <details
                                key={index}
                                className="group border border-zinc-800 bg-[#121212] rounded-xl transition-all duration-300 open:border-blue-primary shadow-lg overflow-hidden"
                            >
                                <summary className="flex items-center justify-between p-6 cursor-pointer list-none bg-white transition-colors group-hover:bg-gray-100">
                                    {/* Pergunta: Fundo Branco e Texto Preto para leitura imediata */}
                                    <span className="text-black font-bold text-base md:text-xl pr-4 leading-tight">
                                        {faq.q}
                                    </span>

                                    {/* Ícone adaptado para o fundo branco */}
                                    <div className="flex-shrink-0 text-blue-primary border-2 border-blue-primary w-10 h-10 rounded-full flex items-center justify-center group-open:bg-blue-primary group-open:text-white transition-all duration-300">
                                        <i className="bi bi-plus-lg group-open:hidden"></i>
                                        <i className="bi bi-dash-lg hidden group-open:block"></i>
                                    </div>
                                </summary>

                                {/* Resposta: Mantendo o estilo industrial escuro original */}
                                <div className="px-6 pb-6 pt-2">
                                    <div className="border-t border-zinc-800 pt-5 text-gray-300 text-sm md:text-lg leading-relaxed antialiased">
                                        {faq.a}
                                    </div>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="py-12 bg-black border-t-2 border-blue-primary text-silver-text">
                <div className="container mx-auto px-6">
                    {/* Grid principal: 2 colunas no mobile, 3 no desktop */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-10 items-start">

                        {/* COLUNA 1 / LINHA 1 (Mobile): LOGO E DESCRIÇÃO */}
                        {/* col-span-2 faz com que esta div ocupe a largura total no mobile */}
                        <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start">
                            <Link href="/" className="relative w-32 h-30 mb-4 block">
                                <Image
                                    src="/logo-serralheriaesoldagens.png"
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
                                {['Sobre', 'Materiais', 'Serviços', 'Contato'].map((item) => (
                                    <Link
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        className="text-xs md:text-sm text-silver-text no-underline hover:text-blue-glow transition-all flex items-center gap-2 group"
                                    >
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
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-white hover:text-blue-glow transition-all">Horário de Atendimento</span>
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

                                    <a href="https://www.google.com/maps/..." target="_blank" className="flex items-center gap-2 text-xs no-underline hover:text-blue-glow transition-all text-center md:text-right">
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
                    <div className="mt-12 pt-6 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest opacity-50">
                        {/* Terceira linha no celular */}
                        <p className="text-center">Serralheria e Soldagens. © 2026 - Todos os direitos reservados</p>
                        {/* Quarta linha no celular */}
                        <p className="text-center">
                            Desenvolvido por{' '}
                            <Link href="https://sjrpovoas.vercel.app/" target="_blank" className="text-blue-primary hover:text-blue-glow no-underline font-bold">
                                SjrPovoaS
                            </Link>
                        </p>
                    </div>
                </div>
            </footer>

            { /* Botão Flutuante do Whastapp  */}
            {showWpp && (
                <a href="https://wa.me/5561993294211" target="_blank" rel="noopener noreferrer"
                    className="fixed bottom-18 right-4 z-95 flex items-center gap-1 px-4 py-3 bg-[#25D366] text-white rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#20ba5a] no-underline group"
                    style={{ boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)' }}>
                    {/* Ícone do WhatsApp do Bootstrap Icons */}
                    <i className="bi bi-whatsapp text-2xl"></i>
                    {/* Texto do Botão */}
                    <span className="font-bold text-sm md:text-base whitespace-nowrap">
                        Solicite um Orçamento
                    </span>
                </a>
            )}
        </div>
    );
}