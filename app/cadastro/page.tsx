"use client"

import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Cadastro(){

    const [nome,setNome] = useState("")
    const [email,setEmail] = useState("")
    const [senha,setSenha] = useState("")

    function cadastrar(){
        alert("Usuario cadastrado com sucesso")
    }   

    return(

    <main className="min-h-screen flex items-center justify-center bg-[#1a0505] p-6">
        <form
            onSubmit={cadastrar}
            className="w-full max-w-md rounded-2xl border-2 border-[#b30000] bg-[#0d0d0d] p-8 shadow-[0_0_25px_rgba(179,0,0,0.35)] flex flex-col items-center gap-4"
        >

            <h1 className="mb-4 text-3xl font-bold text-[#e63939]">
                   Cadastre-se
            </h1>
        
            <input type="text"
            placeholder="Nome"
            onChange={(e) => setNome(e.target.value)}
            required
            className="w-full max-w-md rounded-xl border-2 border-[#8b0000] bg-[#0d0d0d] p-3 text-[#f5e6d3] outline-none placeholder-[#b89b8b] focus:border-[#e63939]"
            />

            <input type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full max-w-md rounded-xl border-2 border-[#8b0000] bg-[#0d0d0d] p-3 text-[#f5e6d3] outline-none placeholder-[#b89b8b] focus:border-[#e63939]"
            />

            <input type="password"
            placeholder="Senha"
            onChange={(e) => setSenha(e.target.value)}
            required
            className="w-full max-w-md rounded-xl border-2 border-[#8b0000] bg-[#0d0d0d] p-3 text-[#f5e6d3] outline-none placeholder-[#b89b8b] focus:border-[#e63939]"
            />

            <button
                type="submit"
                className="w-full max-w-md rounded-xl bg-[#b30000] py-3 font-semibold text-[#f5e6d3] hover:bg-[#e63939] transition">
                Criar conta
            </button>

        </form>

        </main>
    )

}