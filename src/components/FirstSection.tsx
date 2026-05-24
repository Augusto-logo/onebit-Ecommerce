export default function FirstSection() {
  return (
    <div>

      <section className="bg-black text-white p-5">
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
        <div className="mt-6 flex flex-col gap-3">
          <button className="bg-orange-500 p-3 rounded">
            COMPRAR AGORA
          </button>
          <button className="border border-white p-3 rounded">
            VER COLEÇÃO
          </button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop"
          alt="Tênis"
          className="w-full mt-8 rounded"
        />
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div>
            <h4 className="text-orange-500">
              Frete Grátis
            </h4>
            <p className="text-gray-400 text-sm">
              Acima de R$199
            </p>
          </div>
          <div>
            <h4 className="text-orange-500">
              10x sem juros
            </h4>
            <p className="text-gray-400 text-sm">
              No cartão
            </p>
          </div>
          <div>
            <h4 className="text-orange-500">
              Troca Fácil
            </h4>
            <p className="text-gray-400 text-sm">
              Até 7 dias
            </p>
          </div>
          <div>
            <h4 className="text-orange-500">
              Compra Segura
            </h4>
            <p className="text-gray-400 text-sm">
              100% protegida
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}