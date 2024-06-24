'use client'

import Link from "next/link";
import Layout from "./components/Layout";

export default function Home() {
  const validar = (e: any) => {
    e.preventDefault()

    alert('Hello')
  } 

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-96 text-center text-2xl h-auto rounded-t-xl bg-blue-700 p-3">
          Login
        </div>

        <div className="w-auto h-auto bg-blue-500 p-10 rounded-b-xl">
          <form action="" className="flex flex-col gap-3">
            <input type="text" className="outline-none p-3 rounded-md text-xl text-black font-bold h-10" placeholder="E-mail" />
            <input type="password" className="outline-none p-3 rounded-md text-xl text-black font-bold h-10" placeholder="Senha" />
            <button className="p-3 rounded md bg-blue-600 text-white hover:bg-blue-500" onClick={validar}>Entrar</button>
            <Link href="/cadastro" className="p-3 rounded md bg-slate-600 text-white hover:bg-slate-500 text-center">Cadastrar</Link>
          </form>
        </div>
      </div>
    </Layout>
  );
}
