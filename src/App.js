import React, { useState } from 'react'
import Nav from './Components/Nav'
import TeamMembers from './Components/TeamMembers'
import Footer from './Components/Footer'
import Insights from './Components/Insights'
import Home from './Components/Home'
import AboutUs from './Components/AboutUs'
import Clients from './Components/Clients'
import Contact from './Components/Contact'

const App = () => {
  const [nav, setNav] = useState(false)
  window.addEventListener("scroll", () => {
    const scroll = document.documentElement.scrollTop
    if (scroll > 905) {
      setNav(true)
    }
    else {
      setNav(false)
    }
  })

  return (
    <div className='App'>
      <Nav nav={nav} />
      <Home />
      <AboutUs />
      <Clients />
      <Insights />
      <TeamMembers />
      <Contact/>
      <Footer nav={nav} />
    </div>
  )
}

export default App