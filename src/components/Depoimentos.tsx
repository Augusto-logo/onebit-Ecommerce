export default function Depoimentos() {
  return (
    <section id="depoimentos" className="bg-white text-black px-5 py-20 w-full flex flex-col items-center">

      <div className="flex flex-col flex-wrap gap-4 mb-4 w-full items-center justify-center">
        
        <p className="text-orange-500 font-bold uppercase text-sm lg:text-4xl">
          Depoimentos
        </p>

        <p className="text-4xl font-black text-center lg:text-7xl ">
          O que nossos clientes dizem
        </p>

      </div>

      <div className="flex flex-wrap gap-10 mt-8 w-full items-center justify-center">

        <div className="border rounded-3xl p-6 shadow-lgl">

          <p className="text-orange-500 text-xl mb-4">
            ★★★★★
          </p>

          <p className="text-gray-600">
            “Tênis incrível. Muito confortável e chegou rápido.”
          </p>

          <div className="mt-5">

            <p className="font-bold">
              Lucas Almeida
            </p>

            <p className="text-gray-500 text-sm">
              São Paulo - SP
            </p>

          </div>

        </div>

        <div className="border rounded-3xl p-6 shadow-lg flex flex-col">

          <p className="text-orange-500 text-xl mb-4">
            ★★★★★
          </p>

          <p className="text-gray-600">
            “Excelente qualidade e muito bonito.”
          </p>

          <div className="mt-5 flex flex-col">

            <p className="font-bold">
              Juliana Pereira
            </p>

            <p className="text-gray-500 text-sm">
              Rio de Janeiro - RJ
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}