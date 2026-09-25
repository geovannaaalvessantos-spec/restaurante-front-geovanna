"use client"

import Image from "next/image"

import { useState } from "react"

export default function AdminPage(){

    const[descricao,setDescricao] = useState("")
    const[categoria, setCategoria] = useState("")
    const[preco,setPreco] = useState("")
    const[imagem,setImagem] = useState("")

    async function cadastrarLanche(e) {

        e.preventDefault()
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/produtos`,{
                method:"POST",
                headers: {
                "Content-type":"application/json"
                },

                body:JSON.stringify({
                    descricao,
                    categoria,
                    preco,
                    imagem
                })
            })

            if(response.ok){
                alert("Produto cadastrado com sucesso!")
            }
        } catch (error) {
            console.log(error)
            alert("Erro ao cadastrar")
        }
    }

    return(

        <main className="min-h-screen bg-[#1a0505] p-8">

            <div className="mx-auto max-w-xl rounded-2xl border-2 border-[#b30000] bg-[#0d0d0d] p-8 shadow-[0_0_25px_rgba(179,0,0,0.3)]">

                <h1 className="mb-6 text-3xl font-bold text-[#e63939]">Cadastrar Lanche</h1>

                <form onSubmit={cadastrarLanche} className="space-y-5">


                    <div>

                        <label>Descricao</label>

                        <input type="text"
                        value={descricao}
                        onChange={(e)=> setDescricao(e.target.value)}
                        placeholder="Ex: X-Bacon de salada com carne"
                        className="w-full rounded-xl border-2 border-[#8b0000] bg-[#1a0a0a] p-3 text-[#f5e6d3] placeholder-[#b89b8b] focus:border-[#e63939] focus:outline-none"
                        />

                    </div>

                    <div>

                        <label>Categoria</label>

                        <input type="text"
                        value={categoria}
                        onChange={(e)=> setCategoria(e.target.value)}
                        placeholder="Categoria"
                        className="w-full rounded-xl border-2 border-[#8b0000] bg-[#1a0a0a] p-3 text-[#f5e6d3] placeholder-[#b89b8b] focus:border-[#e63939] focus:outline-none"
                        />

                    </div>

                    <div>

                        <label>Preço</label>

                        <input type="number"
                        value={preco}
                        onChange={(e)=> setPreco(e.target.value)}
                        placeholder="Ex: 10.00"
                        className="w-full rounded-xl border-2 border-[#8b0000] bg-[#1a0a0a] p-3 text-[#f5e6d3] placeholder-[#b89b8b] focus:border-[#e63939] focus:outline-none"
                        />

                    </div>

                    <div>

                        <label>Imagem</label>

                        <input 
                        type="text"
                        value={imagem}
                        onChange={(e)=> setImagem(e.target.value)}
                        placeholder="Insira o link da imagem"
                        className="w-full rounded-xl border-2 border-[#8b0000] bg-[#1a0a0a] p-3 text-[#f5e6d3] file:text-[#e63939] focus:border-[#e63939] focus:outline-none"
                        />

                    </div>

                    <button
                    type="submit"
                    className="w-full rounded-xl bg-[#b30000] py-3 font-semibold text-[#f5e6d3] hover:bg-[#e63939] transition">

                        Cadastrar Lanche

                    </button>

                </form>



            </div>

        </main>

    )

}