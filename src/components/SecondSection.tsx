import CorridaImage from '../assets/secondSection/tenis-corrida.png'
import TreinoImage from '../assets/secondSection/tenis-treino.png'
import CasualImage from '../assets/secondSection/tenis-casual.png'
import BasqueteImage from '../assets/secondSection/tenis-basquete.png'

type CarrosellItem = {
  id: number
  name: string
  description: string
  image: string
  bgColor: string
}

const carrosellData: CarrosellItem[] = [
  {
    id: 1,
    name: 'Corrida',
    description: 'Leves e tecnológicos para máxima performance',
    image: CorridaImage,
    bgColor: 'bg-red-700',
  },
  {
    id: 2,
    name: 'Treino',
    description: 'Estabilidade e conforto para seus treinos.',
    image: TreinoImage,
    bgColor: 'bg-gray-700',
  },
  {
    id: 3,
    name: 'Casual',
    description: 'Estilo e conforto para o dia a dia.',
    image: CasualImage,
    bgColor: 'bg-blue-700'
  },  
  {
    id: 4,
    name: 'Basquete',
    description: 'Segurança e aderência para dominar as quadras.',
    image: BasqueteImage,
    bgColor: 'bg-green-700'
  }
]

const Carrosell = () => {
  return (
    <div className='flex flex-row justify-evenly flex-wrap gap-4'>
      {carrosellData.map(item => (
        <div key={item.id} className='flex flex-col gap-4 p-4 border border-gray-300 rounded-lg shadow-md w-full max-w-52 '>
          <div className={`h-20 w-32 md:h-28 md:w-42 ${item.bgColor} p-2 rounded-lg`}>
            <img className='w-full h-full object-contain' src={item.image} alt='error' />
          </div>
          <div>
            <p className='font-bold text-lg'>{item.name}</p>
            <p className='text-gray-600 font-light text-sm'>{item.description}</p>
          </div>
          <button className='border border-black p-2 rounded-lg w-full mt-auto cursor-pointer'>
            <span className='font-semibold'>VER MODELOS</span>
          </button>
        </div>
      ))}
    </div>
  )
}

export default function SecondSection() {
  return (
    <div className='bg-white w-full'>
      <div className='bg-white w-11/12 flex flex-col gap-4 m-auto'>
        <div className='flex flex-row gap-2 justify-between items-center'>
          <div>
            <span className='text-orange-500 font-semibold'>ESCOLHA O SEU</span>
            <h2 className='text-3xl font-bold pt-2'>Nossos Tênis</h2>
          </div>
          <div className='p-2 border border-black rounded-lg cursor-pointer'>
            <span className='font-semibold text-sm'>VER TODOS</span>
          </div>
        </div>
        <div className='mb-6'>
          <Carrosell />
        </div>
      </div>
    </div>
  )
}
