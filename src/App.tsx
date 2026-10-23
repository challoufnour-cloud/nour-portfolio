import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Work from './components/Work'
import Skills from './components/Skills'
import { Why, Systems, Background } from './components/Sections'
import { Ieee, Moments } from './components/Ieee'
import Mood from './components/Mood'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Skills />
        <Why />
        <Ieee />
        <Moments />
        <Mood />
        <Systems />
        <Background />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
