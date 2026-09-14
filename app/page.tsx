"use client"

import Image from "next/image";

export default function Home() {

  async function Cadastrar(e:any) {
    e.preventDefault()
    alert("Lanche cadastrado com sucesso!")
  }

  return (
    <main className="min-h-screen bg-[#1a0505] flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-[#0d0d0d] rounded-xl border-2 border-[#b30000] shadow-[0_0_25px_rgba(179,0,0,0.4)] p-8 grid grid-cols-1 gap-4">
        <Image
        src="/logo_restaurante_geo.png"
        alt="Logo"
        width={200}
        height={200}
        className="mx-auto mb-4"
         />

        <h1 className="text-2xl font-bold mb-6 text-center text-[#e63939]">
          Restaurante - <span className="text-[#f5e6d3]">comeu morreu</span>
        </h1>

        <input
          type="text"
          placeholder="Digite a descrição"
          className="w-full rounded-xl border-2 border-[#8b0000] bg-[#1a0a0a] px-4 py-3 text-sm text-[#f5e6d3] placeholder-[#b89b8b] focus:outline-none focus:border-[#e63939]"
        />

        <input
          type="number"
          placeholder="Digite o preço"
          className="w-full rounded-xl border-2 border-[#8b0000] bg-[#1a0a0a] px-4 py-3 text-sm text-[#f5e6d3] placeholder-[#b89b8b] focus:outline-none focus:border-[#e63939]"
        />

        <input
          type="text"
          placeholder="Digite a categoria"
          className="w-full rounded-xl border-2 border-[#8b0000] bg-[#1a0a0a] px-4 py-3 text-sm text-[#f5e6d3] placeholder-[#b89b8b] focus:outline-none focus:border-[#e63939]"
        />

        <input
          type="text"
          placeholder="O lanche está disponível?"
          className="w-full rounded-xl border-2 border-[#8b0000] bg-[#1a0a0a] px-4 py-3 text-sm text-[#f5e6d3] placeholder-[#b89b8b] focus:outline-none focus:border-[#e63939]"
        />

        <button
        onClick={Cadastrar}
        className="w-full rounded-xl bg-[#b30000] px-4 py-3 font-medium text-[#f5e6d3] hover:bg-[#e63939] transition"
        >
          Cadastrar
        </button>

      </div>
    </main>
  );
}