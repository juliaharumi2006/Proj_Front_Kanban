"use client"

//Ícones
import{
  Search,
  FolderKanban,
  Plus
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
  return(
    <div className="bg-white">
      {/* sidebar */}
      <div className="container h-screen w-80 bg-cinza border-r border-r-gray-200 shadow-md">  
        <h1 className="pt-6 pl-5 font-bold text-lg">noteManut</h1>
        
        <div className='flex flex-col items-center'>
          {/* caixa de pesquisa */}
          <div className="bg-white w-70 h-10 rounded-md shadow-sm flex flex-row items-center mt-5">
            <div className='ml-3'>
                <Search
                size={inconepeq.size}
                />
            </div>
            <input
            type="string"
            value=""
            placeholder='Pesquisar'
            className="text-sm focus:outline-none w-full flex items-center ml-3"
            />
          </div>

          {/* Kanban */}
          <div className='container ml-20 flex flex-row mt-12 gap-5'>
            <FolderKanban
            color={coresdeicone.vermelho}
            />

            <h1 className='font-sans font-medium text-base'>Kanban</h1>

            <button
              onClick={() => console.log("Clicou!")}
              className="group ml-27  " 
            >
              <Plus 
                size={inconemed.size}
                className="text-cinza2 group-hover:text-vermelho transition cursor-pointer"
              />
            </button>

            {/* Config e logout */}
            <div>
              <input 
              type='button'
              value='Configuração'
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

