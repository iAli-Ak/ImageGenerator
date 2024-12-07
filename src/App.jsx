import './index.css'
import ParticlesDemo from "./components/ParticlesDemo";
import ImageSlider from './components/ImageSlider';
import Body from './components/Body'
const App = () => {

  return (
    <div className='bg-zinc-800 '>
      <ParticlesDemo />
      <ImageSlider />
      <Body />
    </div>
  )
}

export default App;
