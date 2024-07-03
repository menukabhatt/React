import React from 'react'
import Header from './components/Header'
import Displaysection from './pages/home/Displaysection'
import Tech from './pages/home/Tech'
import Whoami from './pages/home/Whoami'
import Footer from './components/Footer'


const App = () => {
  return (
    <div >
      <Header />
      <Displaysection/>
      <Tech/>
      <Whoami/>
      <Footer/>
    

    </div>
  )
}

export default App
