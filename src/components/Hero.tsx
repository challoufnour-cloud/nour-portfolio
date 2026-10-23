import heroImg from '../assets/hero.webp'

export default function Hero() {
  return (
    <section className="hero">
      <div className="row mono">
        <span>Welcome to my world</span>
        <span>Based in Sfax →</span>
      </div>
      <div className="tagwrap">
        <p className="tag">Close to the metal.</p>
        <a className="lets" href="#contact">
          Let’s talk →
        </a>
      </div>
      <div className="stage">
        <div className="outline" aria-hidden="true">
          NOUR
        </div>
        <img className="portrait" src={heroImg} alt="Nour Challouf" width={524} height={755} />
        <div className="stat glass">
          <div>
            <b>C · STM32</b>
            <span className="mono">Firmware to AI</span>
          </div>
          <div>
            <b>IEEE</b>
            <span className="mono">Lead · Speak · Team</span>
          </div>
        </div>
        <span className="mono rose">From firmware to fault detection</span>
      </div>
      <div className="copy">
        <span className="mono rose cl">From firmware to fault detection</span>
        <h1>
          Embedded software engineer building <em>smarter hardware.</em>
        </h1>
        <p>STM32 firmware, embedded Linux and CAN/LIN on one side, test automation and machine learning on the other. Open to embedded development and validation roles in Tunis or Sfax.</p>
        <a className="btn" href="#work">
          Explore my work <span>⟶</span>
        </a>
        <div className="foot mono">
          <span>Nour Challouf</span>
          <span>Scroll to discover ↓</span>
        </div>
      </div>
    </section>
  )
}
