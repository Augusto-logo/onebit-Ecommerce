export default function Footer() {
  return (
    <footer className="w-full bg-black text-white flex flex-col gap-2 items-center justify-center py-8">
      <div className="w-11/12 py-2 flex flex-row flex-wrap  justify-between gap-4">
        <div className="max-w-48">
          <p className="text-orange-600 font-bold text-2xl">RUNMAX</p>
          <p className="font-extralight text-gray-400">Mais do que tênis, performance e estilo em cada passo.</p>
        </div>
        <div>
          <ul className="flex flex-col gap-2 ">
            <li className="font-bold text-lg mb-2">Institucional</li>
            <li className="font-extralight text-gray-400">Sobre nós</li>
            <li className="font-extralight text-gray-400">Política de privacidade</li>
            <li className="font-extralight text-gray-400">Trocas e Devoluções</li>
            <li className="font-extralight text-gray-400">FAQ</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            <li className="font-bold text-lg mb-2">Contato</li>
            <li className="font-extralight text-gray-400">(31) 99999-9999</li>
            <li className="font-extralight text-gray-400">contato@runmax.com</li>
            <li className="font-extralight text-gray-400">São João Evangelista - MG</li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-lg mb-4">Pagamento</p>
          <div className="flex flex-wrap gap-2">
            <div className="p-3 bg-white rounded-lg text-black font-bold">VISA</div>
            <div className="p-3 bg-white rounded-lg text-black font-bold">PIX</div>
            <div className="p-3 bg-white rounded-lg text-black font-bold">BOLETO</div>
            </div>
        </div>
      </div>
      <div className=" w-11/12 border border-gray-200 border-t" />
        <p className="text-gray-400 text-sm">© 2026 RUNMAX. Todos os direitos reservados.</p>
    </footer>
  )
}
