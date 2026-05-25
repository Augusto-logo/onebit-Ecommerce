export default function FirstSection() {
  

  return (
    <section className="flex flex-col bg-black text-white py-10 w-full border-t border-orange-600 ">
      {/* lembre-se de configurar a largura do container. DE TODOS OS CONTAINERS (w-full, w-11/12, w-10/12, etc) */}
      {/* utilizar mediaquery, md: / lg: / xl: */}
      {/* Flexbox / MediaQuery / Definir largura dos containers */}
      <div className="w-11/12 flex flex-col gap-4 md:flex-row m-auto">
        <div className="w-full">
          <div className="w-auto">
          <p className="text-orange-500">
            NOVA COLEÇÃO
          </p>
          <h2 className="text-4xl mt-4">
            SUPERE
            <span className="text-orange-500"> SEUS </span>
            LIMITES
          </h2>
          <p className="text-gray-400 mt-4">
            Tênis desenvolvidos para máxima performance,
            conforto e estilo.
          </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 w-auto md:flex-row">
            <button className="bg-orange-500 p-3 rounded w-full md:max-w-48">
              COMPRAR AGORA
            </button>
            <button className="border border-white p-3 rounded w-full md:max-w-48">
              VER COLEÇÃO
            </button>
          </div>
          <div className="flex flex-wrap gap-4 mt-8">
            <div>
              <p className="text-orange-500">
                Frete Grátis
              </p>
              <p className="text-gray-400 text-sm">
                Acima de R$199
              </p>
            </div>
            <div>
              <p className="text-orange-500">
                10x sem juros
              </p>
              <p className="text-gray-400 text-sm">
                No cartão
              </p>
            </div>
            <div>
              <p className="text-orange-500">
                Troca Fácil
              </p>
              <p className="text-gray-400 text-sm">
                Até 7 dias
              </p>
            </div>
            <div>
              <p className="text-orange-500">
                Compra Segura
              </p>
              <p className="text-gray-400 text-sm">
                100% protegida
              </p>
            </div>
          </div>
        </div>
        <div className="max-h-72 w-full max-w-140 m-auto md:m-0">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop"
            alt="Tênis"
            className="w-full h-full rounded"
          />
        </div>
      </div>
    </section>
  )
}