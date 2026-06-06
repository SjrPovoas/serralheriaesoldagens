import { useState } from 'react';
import Link from 'next/link';

export default function ResumoCobranças() {
    const [copiadoIndex, setCopiadoIndex] = useState(null);
    // 1. Estado para controlar se a lista está aberta ou fechada
    const [estaAberto, setEstaAberto] = useState(true);
    const chavePix = "61981885715";

    // --- ARRAY COM TODAS AS PARCELAS ---
    const parcelas = [
        { id: 1, numero: "01 de 10", dataVenc: "10/06/2026", status: "Pago", dataPagto: "05/06/2026", valor: "150,00" },
        { id: 2, numero: "02 de 10", dataVenc: "10/07/2026", status: "Aberto", valor: "150,00" },
        { id: 3, numero: "03 de 10", dataVenc: "10/08/2026", status: "Aberto", valor: "150,00" },
        { id: 4, numero: "04 de 10", dataVenc: "10/09/2026", status: "Aberto", valor: "150,00" },
        { id: 5, numero: "05 de 10", dataVenc: "10/10/2026", status: "Aberto", valor: "150,00" },
        { id: 6, numero: "06 de 10", dataVenc: "10/11/2026", status: "Aberto", valor: "150,00" },
        { id: 7, numero: "07 de 10", dataVenc: "10/12/2026", status: "Aberto", valor: "150,00" },
        { id: 8, numero: "08 de 10", dataVenc: "10/01/2027", status: "Aberto", valor: "150,00" },
        { id: 9, numero: "09 de 10", dataVenc: "10/02/2027", status: "Aberto", valor: "150,00" },
        { id: 10, numero: "10 de 10", dataVenc: "10/03/2027", status: "Aberto", valor: "150,00" },
    ];

    const handleCopiarPix = (text, index) => {
        navigator.clipboard.writeText(text);
        setCopiadoIndex(index);
        setTimeout(() => setCopiadoIndex(null), 2000);
    };

    return (
        <div className="w-full max-w-3xl mx-auto bg-[#121212] border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
            {/* TOPO DO CARD */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                <Link href="/assets/docs/contrato-de-servico.pdf" target="_blank" className="p-4 bg-black border border-gray-700 rounded hover:border-blue-500 transition text-center font-bold">
                    <i className="bi bi-file-earmark-pdf-fill text-[1.4rem] text-blue-primary"></i>
                    Contrato de Serviço de Criação do Site em pdf
                    <i className="bi bi-arrow-right-short seta-icon text-[1rem]"></i>
                </Link>

                <button
                    onClick={() => setEstaAberto(!estaAberto)}
                    className="bg-[#121212] px-6 py-4 flex items-center gap-3 w-full text-left hover:bg-zinc-900/50 transition-colors focus:outline-none"
                >
                    <i className={`bi bi-list text-white text-xl transition-transform duration-200 ${estaAberto ? 'rotate-90 text-blue-400' : ''}`}></i>
                    <h3 className="text-white font-bold text-lg flex-1">Resumo de cobranças e pagamentos</h3>
                    <i className={`bi ${estaAberto ? 'bi-chevron-up' : 'bi-chevron-down'} text-zinc-500 text-sm`}></i>
                </button>
            </div>

            {/* LISTA DE PARCELAS */}
            {estaAberto && (
                <div className="divide-y divide-zinc-800/60">
                    {parcelas.map((parcela, index) => (
                        <div key={parcela.id} className="grid grid-cols-[auto_1fr_auto] items-center p-5 gap-4 hover:bg-zinc-900/40 transition-colors">

                            {/* COLUNA 1: ÍCONES DE STATUS */}
                            <div className="flex items-center justify-center">
                                {parcela.status === "Pago" ? (
                                    <div className="w-10 h-10 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center text-green-500">
                                        <i className="bi bi-check-lg text-xl"></i>
                                    </div>
                                ) : (
                                    <div className="w-10 h-10 bg-blue-500/10 border border-blue-500/30 rounded-full flex items-center justify-center text-blue-500">
                                        <i className="bi bi-x-lg text-lg"></i>
                                    </div>
                                )}
                            </div>

                            {/* COLUNA 2: DETALHES DO PEDIDO / LINKS DINÂMICOS */}
                            <div className="flex flex-col gap-1">
                                <span className="text-white font-bold text-sm md:text-base">
                                    Parcela {parcela.numero} - Vencimento: {parcela.dataVenc}
                                </span>

                                {parcela.status === "Pago" ? (
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-1">
                                        <span className="text-zinc-400 text-xs md:text-sm">
                                            Pagamento: {parcela.dataPagto} via Pix
                                        </span>

                                        <span className="hidden sm:inline text-zinc-600">|</span>

                                        <div className="flex items-center gap-3">
                                            {/* Link do Comprovante Ajustado */}
                                            <a
                                                href={`/assets/comprovantes/pagamentos/pagamento-p${parcela.id}.png`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-blue-400 transition-colors group"
                                                title="Ver Comprovante de Pagamento"
                                            >
                                                <i className="bi bi-file-earmark-check text-[1.1rem] text-zinc-500 group-hover:text-blue-400 transition-colors"></i>
                                                <span>Comprovante</span>
                                            </a>

                                            {/* Link do Recibo Ajustado */}
                                            <a
                                                href={`/assets/comprovantes/recibos/recibo-p${parcela.id}.pdf`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-green-400 transition-colors group"
                                                title="Ver Recibo de Pagamento"
                                            >
                                                <i className="bi bi-receipt text-[1.1rem] text-zinc-500 group-hover:text-green-400 transition-colors"></i>
                                                <span>Recibo</span>
                                            </a>
                                        </div>
                                    </div>
                                ) : (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleCopiarPix(chavePix, index);
                                        }}
                                        className="flex items-center gap-2 self-start text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-300 px-3 py-1.5 rounded-lg border border-zinc-700 transition-all group"
                                    >
                                        <i className={`bi ${copiadoIndex === index ? 'bi-check-all text-green-400' : 'bi-copy group-hover:text-blue-400'} text-xs`}></i>
                                        <span>{copiadoIndex === index ? 'Copiado!' : 'Copiar Chave Pix Celular'}</span>
                                    </button>
                                )}
                            </div>

                            {/* COLUNA 3: PREÇO E STATUS TEXTUAL */}
                            <div className="text-right flex flex-col gap-1">
                                <span className="text-white font-black text-sm md:text-base tracking-tight">
                                    R$ {parcela.valor}
                                </span>
                                {parcela.status === "Pago" ? (
                                    <span className="text-green-500 font-bold text-xs md:text-sm uppercase tracking-wider">
                                        Pago
                                    </span>
                                ) : (
                                    <span className="text-blue-500 font-bold text-xs md:text-sm uppercase tracking-wider">
                                        Em Aberto
                                    </span>
                                )}
                            </div>

                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}