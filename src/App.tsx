import FirstSection from './components/Inicio'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import SecondSeciton from './components/Products'
import ThirdSection from './components/Diferenciais'
import Depoimentos from './components/Depoimentos'
import Contatos from './components/Contatos'

function App() {

  return (
    <div className='h-full w-full flex flex-col items-center align-middle bg-gray-400'>
      <NavBar />
      <FirstSection />
      <SecondSeciton />
      <ThirdSection />
      <Depoimentos />
      <Contatos />
      <Footer />
    </div>
  )
}

export default App
