"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

interface Produto {
  id: number
  descricao: string
  categoria: string
  preco: number
  imagem: string
}

export default function CardapioPage() {

  const [produtos, setProdutos] = useState<Produto[]>([])
  const [loading, setLoading] = useState(true)
  async function mostrarProdutos() {

    try {
      const response = await fetch(`${process.env.API_URL}/produtos`)

      if (!response.ok) {
        throw new Error("Erro ao buscar produtos")
      }

      const data = await response.json()

      console.log(data)
      setProdutos(data)

    } catch (error) {
      console.error("Erro:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    mostrarProdutos()
  }, [])

  return (
    <main className="min-h-screen bg-[#1a0505] p-8">
      <h1 className="mb-6 text-3xl font-bold text-[#e63939]">
        Cardápio
      </h1>

      {loading ? (<p className="text-[#f5e6d3]">Carregando produtos...</p>) : (

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {produtos.map((produto) => (
            <div
              key={produto.id}
              className="rounded-xl border-2 border-[#8b0000] bg-[#0d0d0d] p-4 shadow-[0_0_15px_rgba(179,0,0,0.25)]"
            >

              <Image
                src={produto.imagem}
                alt={produto.descricao}
                width={400}
                height={250}
                className="h-40 w-full rounded-xl bg-[#1a0a0a] object-contain"
              />

              <h2 className="mt-3 text-xl font-semibold text-[#f5e6d3]">
                {produto.descricao}
              </h2>

              <p className="mt-2 text-sm text-[#b89b8b]">
                {produto.categoria}
              </p>

              <p className="mt-2 text-lg font-bold text-[#e63939]">
                R$ {Number(produto.preco).toFixed(2)}
              </p>

              <button
                className="mt-4 w-full cursor-pointer rounded-xl bg-[#b30000] py-2 font-semibold text-[#f5e6d3] hover:bg-[#e63939]"
              >
                Fazer pedido
              </button>

            </div>
          ))}
        </div>
      )}
    </main>
  )
}