import { useEffect } from 'react'
import BlobBg       from './components/BlobBg'
import Nav          from './components/Nav'
import Hero         from './components/Hero'
import Stats        from './components/Stats'
import Gatos        from './components/Gatos'
import ComoFunciona from './components/ComoFunciona'
import Cardapio     from './components/Cardapio'
import Reservas     from './components/Reservas'
import Footer       from './components/Footer'

export default function App() {
  useEffect(() => {
    const paws = ['🐾', '🐱', '✨', '🐈', '💕']
    const handleClick = e => {
      const el = document.createElement('div')
      el.className = 'paw-float'
      el.textContent = paws[Math.floor(Math.random() * paws.length)]
      el.style.left = `${e.clientX - 12}px`
      el.style.top  = `${e.clientY - 12}px`
      document.body.appendChild(el)
      setTimeout(() => el.remove(), 1200)
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <>
      <BlobBg />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Gatos />
        <ComoFunciona />
        <Cardapio />
        <Reservas />
      </main>
      <Footer />
    </>
  )
}
