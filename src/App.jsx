import './index.css'
import ParticlesDemo from "./components/ParticlesDemo";
import ImageSlider from './components/ImageSlider';
import Body from './components/Body'
const App = () => {

  return (
    <div className='bg-zinc-900 '>
      <ParticlesDemo />
      <ImageSlider />
      <div className='relative flex h-[500px] w-full flex-col items-center justify-center'>
        <span className='pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-neutral-600 to-gray-300/80
         bg-clip-text text-center text-2xl font-semibold text-transparent dark:from-white dark:to-slate-600/10'>
         Bringing creativity and precision together through AI-powered image generation and detection.</span>
      </div>
      <Body />
    </div>
  )
}

export default App;
