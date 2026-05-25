import FirstSection from './components/FirstSection'
import NavBar from './components/NavBar'
import SecondSeciton from './components/SecondSection'

function App() {

  return (
    <div className='h-screen w-screen flex flex-col items-center align-middle bg-gray-400'>
      <NavBar />
      <FirstSection />
      <SecondSeciton />
    </div>
  )
}

export default App
