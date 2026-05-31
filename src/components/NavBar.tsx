export default function NavBar() {
  return (
    <div className="flex flex-row w-full sticky top-0 z-50">
      <nav className=" bg-black text-white p-4 flex flex-row w-full justify-between ">
        <div>

          <h1 className="text-orange-500 text-2xl font-extrabold">
            RUNMAX
          </h1>
          <p className="text-gray-400 text-sm">
            SNEAKERS
          </p>
        </div>

        <div className="hidden md:flex flex-row gap-8 items-center flex-wrap">
          <a href="#inicio" className="font-semibold cursor-pointer hover:text-orange-500 transition-colors duration-300">Inicio</a>
          <a href="#produtos" className="font-semibold cursor-pointer hover:text-orange-500 transition-colors duration-300">Produtos</a>
          <a href="#diferenciais" className="font-semibold cursor-pointer hover:text-orange-500 transition-colors duration-300">Diferenciais</a>
          <a href="#depoimentos" className="font-semibold cursor-pointer hover:text-orange-500 transition-colors duration-300">Depoimentos</a>
          <a href="#contato" className="font-semibold cursor-pointer hover:text-orange-500 transition-colors duration-300">Contato</a>
        </div>

        <button className="bg-orange-500 p-2 rounded-xl font-bold hover:bg-orange-600 cursor-pointer transition-colors duration-300">
          COMPRAR
        </button>
      </nav>
    </div>
  )
}
