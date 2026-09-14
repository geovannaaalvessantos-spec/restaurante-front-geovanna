import Link from "next/link";

export default function Navbar(){
    return(
        <header className="w-full bg-[#0d0d0d] border-b-2 border-[#b30000] shadow-[0_2px_10px_rgba(179,0,0,0.3)]">
            <nav className="max-w-7x1 mx-auto px-8 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 text-2x1 font-bold text-[#e63939]">
                Restaurante
                </Link>

                <div className="flex items-center gap-8">
                    <Link href="/" className="text-[#f5e6d3] hover:text-[#e63939] transition"> 
                    Inicio
                    </Link>

                    <Link href="/cardapio" className="text-[#f5e6d3] hover:text-[#e63939] transition">
                    Cardápio
                    </Link>

                    <Link href="/sobre" className="text-[#f5e6d3] hover:text-[#e63939] transition">
                    Sobre nós
                    </Link>

                    <Link href="/pedidos" className="text-[#f5e6d3] hover:text-[#e63939] transition">
                    Fazer pedido
                    </Link>
                </div>

            </nav>
        </header>
    )
}