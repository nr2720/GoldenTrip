import { useState , useEffect } from 'react'
import Header from './Header'
import FirstPresentation from './FirstPresentation'
import ExplanationPresentation from './ExplanationPresentation'
import Choices from './Choices'
import Team from './Team'
import GetIn from './GetIn'
import { useScrollHandler } from '../useScrollHandler';
import '../../css/App.css'

function App() {

  const [scroll, setScroll] = useState(0)
  const [growChoice, setGrowChoice] = useState(false);


  return (
    <div className="container">
       <Header name='FlashTrip' className='header'/>
       <FirstPresentation />
       <ExplanationPresentation />
       <Choices grow={growChoice}/>
       <Team />
       <GetIn />
    </div>
  )
}

export default App
