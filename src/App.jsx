import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/Hello.jsx';
import ProfileCard from './components/ProfileCard.jsx';
function App() {

  return (
    <>
   <ProfileCard username="Rushaid" bio="developer" location="Manjeri"/>
    </>
  )
}

export default App
