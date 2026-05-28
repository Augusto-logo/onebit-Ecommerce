import FirstSection from './components/FirstSection'
import NavBar from './components/NavBar'
import SecondSeciton from './components/SecondSection'
import ThirdSection from './components/ThirdSection'
import Depoimentos from './components/Depoimentos'

function App() {

  return (
    <div className='h-screen w-screen flex flex-col items-center align-middle bg-gray-400'>
      <NavBar />
      <FirstSection />
      <SecondSeciton />
      <ThirdSection />
      <Depoimentos />
    </div>
  )
}

export default App
