export default function FirstSection() {
  return (
    <div>

      <section className="bg-black text-white p-5 w-full">
        {/* lembre-se de configurar a largura do container. DE TODOS OS CONTAINERS (w-full, w-11/12, w-10/12, etc) */}
        {/* utilizar mediaquery, md: / lg: / xl: */}
        {/* Flexbox / MediaQuery / Definir largura dos containers */}
        <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
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
          <button className="bg-orange-500 p-3 rounded">
            COMPRAR AGORA
          </button>
          <button className="border border-white p-3 rounded">
            VER COLEÇÃO
          </button>
        </div>
        </div>
        <div className="w-auto md:flex-row">
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop"
          alt="Tênis"
          className="w-full mt-8 rounded"
        />
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
      </section>
    </div>
  )
}