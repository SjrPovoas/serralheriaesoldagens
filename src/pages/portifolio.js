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

    // Estado do formulário de nova foto
    const [novaFoto, setNovaFoto] = useState({ src: '', alt: '', categoria: 'portoes' });

    useEffect(() => {
        if (router.query.categoria) {
            setFiltro(router.query.categoria);
        }
    }, [router.query.categoria]);

    // O ideal será salvar isso no MongoDB futuramente
    const [fotosPortifolio, setFotosPortifolio] = useState([
        { id: 1, categoria: 'portoes', src: '/images/portao-1.jpg', alt: 'Portão Basculante Moderno' },
        { id: 2, categoria: 'estruturas', src: '/images/mezanino-1.jpg', alt: 'Mezanino Industrial' },
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
        { id: 'seguranca', nome: 'Grades' },
    ];

    const fotosFiltradas = filtro === 'todos' 
        ? fotosPortifolio 
        : fotosPortifolio.filter(foto => foto.categoria === filtro);

    return (
        <div className="flex flex-col min-h-screen bg-metal-dark text-white">
            
            {/* CONTEÚDO PRINCIPAL */}
            <main className="flex-grow pb-20">
                <div className="bg-black py-10 border-b border-blue-primary text-center">
                    <Link href="/" className="text-blue-glow hover:underline mb-4 inline-block">← Voltar</Link>
                    <h1 className="text-4xl font-bold italic uppercase tracking-tighter">Portfólio</h1>
                    
                    {/* BOTÃO ADM - SÓ APARECE SE LOGADO */}
                    {isAdmin && (
                        <button 
                            onClick={() => setShowModal(true)}
                            className="mt-6 bg-blue-primary hover:bg-blue-700 text-white px-6 py-2 rounded-md font-bold text-xs uppercase"
                        >
                            + Nova Foto
                        </button>
                    )}
                </div>

                <section className="container mx-auto px-6 py-12">
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categorias.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setFiltro(cat.id)}
                                className={`px-6 py-2 rounded-full font-bold uppercase text-xs transition-all
                                    ${filtro === cat.id ? 'bg-blue-primary text-white shadow-blue-glow' : 'bg-industrial-gray text-zinc-400 border border-zinc-700'}`}
                            >
                                {cat.nome}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {fotosFiltradas.map((foto) => (
                            <div key={foto.id} className="relative h-72 w-full overflow-hidden rounded-lg border-2 border-zinc-800 hover:border-blue-primary transition-all">
                                <Image src={foto.src} alt={foto.alt} fill className="object-cover" />
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
                        <h2 className="text-2xl font-bold mb-6 italic uppercase tracking-tighter">Adicionar ao Portfólio</h2>
                        <form onSubmit={handleAddFoto} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold uppercase text-zinc-400 mb-1">URL da Foto (ou nome do arquivo)</label>
                                <input 
                                    type="text" required
                                    className="w-full bg-metal-dark border border-zinc-700 p-2 rounded text-white"
                                    onChange={(e) => setNovaFoto({...novaFoto, src: e.target.value})}
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase text-zinc-400 mb-1">Descrição/Nome do Serviço</label>
                                <input 
                                    type="text" required
                                    className="w-full bg-metal-dark border border-zinc-700 p-2 rounded text-white"
                                    onChange={(e) => setNovaFoto({...novaFoto, alt: e.target.value})}
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase text-zinc-400 mb-1">Categoria</label>
                                <select 
                                    className="w-full bg-metal-dark border border-zinc-700 p-2 rounded text-white"
                                    onChange={(e) => setNovaFoto({...novaFoto, categoria: e.target.value})}
                                >
                                    <option value="portoes">Portões</option>
                                    <option value="estruturas">Estruturas/Mezaninos</option>
                                    <option value="pergolados">Pergolados</option>
                                    <option value="seguranca">Grades e Proteção</option>
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
        </div>
    );
}