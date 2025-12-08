"use client"

//Icones
import {
    User, 
    Lock
} from 'lucide-react' 

const estilosdoincone = {
    size: 20,
    strokeWidth: 2.5
}

export default function Login(){
    return(
        <div className="w-screen h-screen bg-fundo1 flex justify-center items-center">

            {/* container grande */}
            <div className="container h-130 w-200 shadow-xl rounded-xl flex flex-row"> 

                {/* container amarelo */}
                <div className="container bg-amarelo h-130 w-90 rounded-l-xl flex flex-col items-center justify-center">
                    <h1 className="font-bold text-xl mb-8">Bem-vindo de volta!</h1>
                    <p className="mb-3">Acesse sua conta</p>
                    <input
                    type="button"
                    value="Entrar"
                    className="font-bold w-40 h-8 bg-white cursor-pointer rounded-md shadow-md hover:shadow-xl"
                    />
                </div>

                {/* container brando  */}
                <div className="container bg-white h-130 w-120 rounded-r-xl flex flex-col items-center justify-center">
                    <img
                    src="/logo_manut.png"
                    className='h-28'
                    />
                    <h1 className="font-bold p-5 text-xl">CRIE SUA CONTA</h1>

                    {/* campos de preenchimento */}
                    <div className="bg-cinza w-80 h-10 rounded-md shadow-sm flex flex-row items-center mt-7">
                        <div className='ml-3'>
                            <User
                            size={estilosdoincone.size}
                            />
                        </div>
                        <input
                        type="string"
                        value=""
                        placeholder='E-MAIL'
                        className="text-xs text-center focus:outline-none w-full flex items-center mr-6"
                        />
                    </div>  
                    
                    <div className="bg-cinza w-80 h-10 rounded-md shadow-sm flex flex-row items-center mt-5">
                        <div className='ml-3'>
                            <Lock
                            size={estilosdoincone.size}
                            />
                        </div>
                        <input
                        type="int"
                        value=""
                        placeholder='SENHA'
                        className="text-xs text-center focus:outline-none w-full flex items-center mr-6"
                        />
                    </div>

                    {/* botão de cadastro */}
                    <input
                    type='button'
                    value="Cadastrar"
                    className='font-bold w-40 h-8 bg-white text-vermelho cursor-pointer rounded-md shadow-lg border border-cinza hover:shadow-md hover:shadow-vermelho mt-7'
                    />
                </div>
            </div>
        </div>
    )
}