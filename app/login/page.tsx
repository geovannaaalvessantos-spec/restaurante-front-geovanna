"use client"

import { useRouter } from "next/navigation"

import { useState } from "react"

import Swal from "sweetalert2"

export default function Login(){

        const router = useRouter()

        const [usuario,setUsuario] = useState("")

        const [senha,setSenha] = useState("")

        function entrar(){

            if(usuario === "Geovanna" && senha === "123456789"){

            localStorage.setItem("admin_logado","true")

            router.push("/admin")

            return

            }

            Swal.fire({

                title:"Login inválido!",

                text:"Usuário ou senha incorretos",

                icon:"error",

                confirmButtonText:"Tentar novamente"

            })

        }

        return(

        <main className="flex min-h-screen items-center justify-center bg-[#1a0505]">

            <div className="w-full max-w-md rounded-2xl border-2 border-[#8b0000] bg-[#0d0d0d] p-8 shadow-[0_0_25px_rgba(179,0,0,0.35)]">

                <h1 className="mb-8 text-center text-3xl font-bold text-[#e63939]">Área administrativa</h1>

                <p className="mb-8 text-center text-[#b89b8b]">Faça login para acessar o painel</p>

                <div>

                    <label>Usuario</label>

                    <input type="text"
                    value={usuario}
                    onChange={(e)=>setUsuario(e.target.value)}
                    placeholder="Informe seu usuário"
                    className="w-full rounded-xl border-2 border-[#8b0000] bg-[#1a0a0a] p-3 text-[#f5e6d3] outline-none placeholder-[#b89b8b] focus:border-[#e63939]"
                    />

                </div>

                <div>

                    <label>Senha</label>

                    <input type="password"
                    value={senha}
                    onChange={(e)=>setSenha(e.target.value)}
                    placeholder="Informe sua senha"
                    className="w-full rounded-xl border-2 border-[#8b0000] bg-[#1a0a0a] p-3 text-[#f5e6d3] outline-none placeholder-[#b89b8b] focus:border-[#e63939]"
                    />

                </div>

                <button onClick={entrar} className="mt-6 w-full cursor-pointer rounded-xl bg-[#b30000] py-3 font-semibold text-[#f5e6d3] hover:bg-[#e63939]">

                    Entrar

                </button>

            </div>

        </main>

    )

}