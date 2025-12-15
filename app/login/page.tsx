// "use client"

// import {useRouter} from "next/navigation"
// import { useState } from "react"

// //Icones
// import {
//     User, 
//     Lock
// } from 'lucide-react' 


// const estilosdoincone = {
//     size: 20,
//     strokeWidth: 2.5
// }

// export default function Login(){
//     const router = useRouter()

//     const[email, setEmail] = useState("");
//     const[senha,setSenha] = useState("");
//     const[erro,setErro] = useState("");

//     function handleLogin(){
//         const Email = "user@gmail.com"
//         const Senha = "12345"

//         if(email == Email && senha==Senha){
//             setErro("");
//             router.push("/");
//             return;
//         }else{
//             setErro("Email ou Senha inválidos. Tente novamente")
//         }
//     }
    
//     return(
//         <div className="w-screen h-screen bg-fundo1 flex justify-center items-center">

//             {/* container grande */}
//             <div className="container h-130 w-200 shadow-xl rounded-xl flex flex-row"> 

//                 {/* container amarelo */}
//                 <div className="container bg-amarelo h-130 w-90 rounded-l-xl flex flex-col items-center justify-center">
//                     <h1 className="font-bold text-xl mb-4">Ainda não possui conta?</h1>
//                     <p className="mb-3">Crie sua conta aqui</p>
//                     <button
//                     type="button"
//                     value="Entrar"
//                     className="font-bold w-40 h-8 bg-white cursor-pointer rounded-md shadow-md hover:shadow-xl"
//                     >
//                         Cadastrar
//                     </button>
//                 </div>

//                 {/* container branco  */}
//                 <div className="container bg-white h-130 w-120 rounded-r-xl flex flex-col items-center justify-center">
//                     <img
//                     src="/logo_manut.png"
//                     className='h-28'
//                     />
//                     <h1 className="font-bold p-5 text-xl">BEM-VINDO DE VOLTA!</h1>

//                     campos de preenchimento
//                     <div className="bg-cinza w-80 h-10 rounded-md shadow-sm flex flex-row items-center mt-7">
//                         <div className='ml-3'>
//                             <User
//                             size={estilosdoincone.size}
//                             />
//                         </div>
//                         <input
//                         onChange={(e) => setEmail(e.target.value)}
//                         type="string"
//                         placeholder='E-MAIL'
//                         className="text-xs text-center focus:outline-none w-full flex items-center mr-6"
//                         />
//                     </div>  
                    
//                     <div className="bg-cinza w-80 h-10 rounded-md shadow-sm flex flex-row items-center mt-5 mb-4">
//                         <div className='ml-3'>
//                             <Lock
//                             size={estilosdoincone.size}
//                             />
//                         </div>
//                         <input
//                         onChange={(e) => setSenha(e.target.value)}
//                         type="int"
//                         placeholder='SENHA'
//                         className="text-xs text-center focus:outline-n one w-full flex items-center mr-6"
//                         />
//                     </div>

//                     {erro &&(
//                         <p className="text-red-500 text-sm mb-3">{erro}</p>
//                     )}

//                     {/* botão de cadastro */}
//                     <button
//                     onClick={handleLogin}
//                     type='button'
//                     value="Cadastrar"
//                     className='font-bold w-40 h-8 bg-white text-vermelho cursor-pointer rounded-md shadow-lg border border-cinza hover:shadow-md hover:shadow-vermelho mt-7'
//                     >
//                         Entrar
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { User, Lock } from "lucide-react";

import CampoPreenchimento from "../componentes/CampoPreenchimento";
import Botao from "../componentes/Botao";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  function handleLogin() {
    const Email = "user@gmail.com";
    const Senha = "12345";

    if (email === Email && senha === Senha) {
      setErro("");
      router.push("/");
    } else {
      setErro("Email ou Senha inválidos. Tente novamente.");
    }
  }

  return (
    <div className="w-screen h-screen bg-fundo1 flex justify-center items-center">
      <div className="container h-130 w-200 shadow-xl rounded-xl flex flex-row">

        {/* lado amarelo */}
        <div className="bg-amarelo h-130 w-90 rounded-l-xl flex flex-col items-center justify-center">
          <h1 className="font-bold text-xl mb-4">Ainda não possui conta?</h1>
          <p className="mb-3">Crie sua conta aqui</p>

          <Botao
            
            text="Cadastrar"
            className="bg-white hover:shadow-xl"
          />
        </div>

        {/* lado branco */}
        <div className="bg-white h-130 w-120 rounded-r-xl flex flex-col items-center justify-center">
          <img src="/logo_manut.png" className="h-28" />
          <h1 className="font-bold p-5 text-xl">BEM-VINDO DE VOLTA!</h1>

          <CampoPreenchimento
            icon={User}
            type="email"
            placeholder="E-MAIL"
            onChange={(e) => setEmail(e.target.value)}
          />

          <CampoPreenchimento
            icon={Lock}
            type="password"
            placeholder="SENHA"
            onChange={(e) => setSenha(e.target.value)}
          />

          {erro && <p className="text-red-500 text-sm mt-2">{erro}</p>}

          <Botao
            text="Entrar"
            onClick={handleLogin}
            className="bg-white text-vermelho border border-cinza hover:shadow-vermelho mt-7"
          />
        </div>
      </div>
    </div>
  );
}
