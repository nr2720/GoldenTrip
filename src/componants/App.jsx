import { useState } from 'react'
import Header from './Header'
import FirstPresentation from './FirstPresentation'
import ExplanationPresentation from './ExplanationPresentation'
import Choices from './Choices'
import Team from './Team'
import GetIn from './GetIn'
import '../css/App.css'

function App() {

  return (
    <div className="container">
       <Header name='Golden Trip &#x2708;'/>
       <FirstPresentation />
       <ExplanationPresentation />
       <Choices />
       <Team />
       <GetIn />
    </div>
  )
}

export default App
