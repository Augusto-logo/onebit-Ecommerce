import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Contatos() {
  return (
    <section id="contato" className="bg-[#09090B] text-white w-full py-16">
      <div className="w-10/12 max-w-200 m-auto border border-orange-600 rounded-2xl p-8">

        <div className="flex flex-col items-center gap-2 mb-8">
          <p className="text-xs text-orange-500 font-bold uppercase lg:text-2xl ">Entre em Contato</p>
          <p className="font-bold text-3xl lg:text-5xl">Fale Conosco</p>
        </div>

        <div className="flex flex-col items-center gap-8 md:flex-row">

          <div className="w-full max-w-64 md:max-w-none md:w-1/2">
            <form className="flex flex-row flex-wrap gap-2">
              <div className="flex gap-2">
                <input 
                className="w-full p-2 max-w-64 bg-[#18181B] border border-[#3F3F46] rounded-xl" 
                name="name" type="text" placeholder="Nome" />
                <input 
                className="w-full p-2 max-w-64 bg-[#18181B] border border-[#3F3F46] rounded-xl" 
                name="email" type="text" placeholder="Email" />
              </div>
              <textarea 
              className="w-full min-h-38 p-2 bg-[#18181B] border border-[#3F3F46] rounded-2xl" 
              name="message" placeholder="Mensagem" />
              <button type="submit" className="w-full bg-orange-600 text-white font-bold py-2 px-4 rounded-xl hover:bg-orange-700 cursor-pointer">
                ENVIAR MENSAGEM
              </button>
            </form>
          </div>
          <div className="flex flex-col gap-5 md:w-1/2">
            <div className="bg-[#18181B] rounded-2xl p-4 max-w-64 md:max-w-none">
              <p className="text-1xl font-bold">WhatsApp</p>
              <p className="text-xs text-gray-400 font-light pt-2 pb-3">Clique no botão abaixo e fale com nossa equipe.</p>
              <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-2xl hover:bg-green-600 cursor-pointer">
                CHAMAR NO WHATSAPP
              </button>
            </div>
            <div className="bg-[#18181B] rounded-2xl p-4 max-w-64 md:max-w-none">
              <p className="text-1xl font-bold pb-2">Redes Sociais</p>
              <div className="flex flex-row gap-4 flex-wrap">
                <button className="bg-blue-500 text-white font-bold p-2 rounded-2xl hover:bg-blue-600 cursor-pointer"><FaFacebook /></button>
                <button className="bg-pink-500 text-white font-bold p-2 rounded-2xl hover:bg-pink-600 cursor-pointer"><FaInstagram /></button>
                <button className="bg-blue-400 text-white font-bold p-2 rounded-2xl hover:bg-blue-500 cursor-pointer"><FaTwitter /></button>
                <button className="bg-blue-700 text-white font-bold p-2 rounded-2xl hover:bg-blue-800 cursor-pointer"><FaLinkedin /></button>
                <button className="bg-red-500 text-white font-bold p-2 rounded-2xl hover:bg-red-600 cursor-pointer"><FaYoutube /></button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
