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

        <form onSubmit={cadastrar}>
            <input type="text"
            placeholder="Nome"
            onChange={(e) => setNome(e.target.value)}
            required
            />

            <input type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
            />

            <input type="password"
            placeholder="Senha"
            onChange={(e) => setSenha(e.target.value)}
            required
            />

            <button type="submit">
                Criar conta
            </button>

        </form>
    )
}