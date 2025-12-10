"use client"

import{useRouter} from 'next/navigation'

//Ícones
import{
  Search,
  FolderKanban,
  Plus,
  ArrowLeftToLine,
  Settings
} from 'lucide-react'

const inconepeq = {
    size: 18,
    strokeWidth: 2.5
}

const inconemed = {
    size: 20,
    strokeWidth: 2.5
}

const coresdeicone = {
  vermelho: '#FF464C',
  cinza2: '#B0B0B0'
}

export default function Home(){ 

    const router = useRouter() 
        const redireciona = ()=>{
        router.push("/login")
    }

  return(
    <div className="bg-white">
    {/* Side bar */}
    <div className="h-screen w-[21vw] bg-cinza flex flex-col p-5">

      {/* Container principal */}
      <div className="flex flex-col h-full">

        <h1 className="font-bold text-lg">noteManut</h1>

        {/* Barra de pesquisa */}
        <div className="bg-white w-70 h-10 rounded-md shadow-sm flex flex-row items-center mt-5">
          <div className='ml-3'>
            <Search size={inconepeq.size} />
          </div>
          <input
            type="string"
            placeholder="Pesquisar"
            className="text-sm focus:outline-none w-full ml-3"
          />
        </div>

        {/* Kanban */}
        <div className="flex flex-row mt-12 ml-5">
          <FolderKanban color={coresdeicone.vermelho} />
          <h1 className="font-sans font-medium text-base ml-4">Kanban</h1>

          <button
            onClick={() => console.log("Clicou!")}
            className="group ml-35"
          >
            <Plus
              size={inconemed.size}
              className="text-cinza2 group-hover:text-vermelho transition cursor-pointer"
            />
          </button>
        </div>

        {/* Configuração e LogOut */}
        <div className="flex flex-col gap-3 mt-auto pb-5">

          <div className="flex flex-row items-center">
            <Settings 
              size={inconemed.size}
            />
            <button 
              className="ml-3 hover:bg-gray-300 rounded-md p-1"
            >
              Configuração
            </button>
          </div>

          <div className="flex flex-row items-center">
            <ArrowLeftToLine 
              size={inconemed.size} 
            />
            <button 
              onClick={redireciona}
              className="ml-3 hover:bg-gray-300 rounded-md p-1"
            >
              LogOut
            </button>
          </div>

        </div>
      </div>
    </div>
  </div>
    // // fundo
    // <div className='bg-white'>
    //   {/* Side bar */}
    //   <div className='h-screen w-80 bg-cinza flex flex-col justify-center items-center p-5'>
    //     <div className='container h-170 justify-start'>
    //       <h1 className="font-bold text-lg">noteManut</h1>

    //       <div className="bg-white w-70 h-10 rounded-md shadow-sm flex flex-row items-center mt-5">
    //         <div className='ml-3'>
    //             <Search
    //           size={inconepeq.size}
    //           />
    //         </div>
    //         <input
    //           type="string"
    //           defaultValue=""
    //           placeholder='Pesquisar'
    //           className="text-sm focus:outline-none w-full flex items-center ml-3"
    //         />
    //       </div>

    //       {/* Kanban */}
    //       <div className='flex flex-row mt-12 ml-5'>
    //         <FolderKanban
    //         color={coresdeicone.vermelho}
    //         />

    //         <h1 className='font-sans font-medium text-base ml-4'>Kanban</h1>

    //         <button
    //           onClick={() => console.log("Clicou!")}
    //           className="group ml-35" 
    //         >
    //           <Plus 
    //             size={inconemed.size}
    //             className="text-cinza2 group-hover:text-vermelho transition cursor-pointer"
    //           />
    //         </button>
    //       </div>

          
    //       {/* Configuração e LogOut */}
    //       <div className='flex flex-col h-full justify-end gap-3 pb-5'>
    //         <div className='flex flex-row items-center'>
    //           <Settings
    //             size={inconemed.size}   
    //           />
    //           <button 
    //             type='button' 
    //             value='Configuração'
    //             className='ml-3'
    //           >
    //             Configuração
    //           </button>
    //         </div>

    //         <div className='flex flex-row items-center'>
    //           <ArrowLeftToLine
    //             size={inconemed.size}
    //           />
    //           <button 
    //             type='button' 
    //             value=''
    //             className='ml-3'
    //           >
    //             LogOut
    //           </button>
    //         </div>
    //       </div>
          
    //     </div>
    //   </div>
    // </div>





















    // <div className="bg-white">
    //   {/* sidebar */}
    //   <div className="container h-screen w-80 bg-cinza border-r border-r-gray-200 shadow-md">  
    //     <h1 className="mt-6 ml-5 font-bold text-lg">noteManut</h1>
        
    //     <div className='flex flex-col items-center'>
    //       {/* caixa de pesquisa */}
    //       <div className="bg-white w-70 h-10 rounded-md shadow-sm flex flex-row items-center mt-5">
    //         <div className='ml-3'>
    //             <Search
    //             size={inconepeq.size}
    //             />
    //         </div>
    //         <input
    //         type="string"
    //         defaultValue=""
    //         placeholder='Pesquisar'
    //         className="text-sm focus:outline-none w-full flex items-center ml-3"
    //         />
    //       </div>

    //       {/* Kanban */}
    //       <div className='container ml-20 flex flex-row mt-12 gap-5'>
    //         <FolderKanban
    //         color={coresdeicone.vermelho}
    //         />

    //         <h1 className='font-sans font-medium text-base'>Kanban</h1>

    //         <button
    //           onClick={() => console.log("Clicou!")}
    //           className="group ml-27  " 
    //         >
    //           <Plus 
    //             size={inconemed.size}
    //             className="text-cinza2 group-hover:text-vermelho transition cursor-pointer"
    //           />
    //         </button>
    //       </div>

    //       {/* Config e logout */}
    //       <div className='flex flex-row items-end judtify-start w-full ml-11 text-black'>
    //         <Settings
    //           size={inconemed.size}
    //         />
    //         <button 
    //           type='button' 
    //           value='Configuração'
    //           className='ml-3'
    //         >
    //           Configuração
    //         </button>
    //       </div>

    //       <div className='flex flex-row items-end judtify-start w-full ml-11 text-black'>
    //         <ArrowLeftToLine
    //           size={inconemed.size}
    //         />
    //         <button 
    //           type='button' 
    //           value='Configuração'
    //           className='ml-3'
    //         >
    //           LogOut
    //         </button>
    //       </div>

    //     </div>
    //   </div>
    // </div>
  )
}

