import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/Hello.jsx';
import ProfileCard from './components/ProfileCard.jsx';
import Fruits from './components/Fruits.jsx';
import Conditional from './components/Conditional.jsx';
import CondicompoT from './components/CondicompoT.jsx';
import CondicompoF from './components/CondicompoF.jsx';
function App() {
const display=false;
if(display){
  return(
    <CondicompoT/>
  )
}
else{
  return(
    <CondicompoF/>
  )
}
}

export default App
