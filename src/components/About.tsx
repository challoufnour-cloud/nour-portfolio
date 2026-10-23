import { useState } from 'react'
import cardImg from '../assets/card.jpg'
import { LINKEDIN } from '../data'

export default function About() {
  const [on, setOn] = useState(false)
  return (
    <section className="about" id="about">
      <span className="mono rose">About Nour</span>
      <h2 style={{ marginTop: 22 }}>
        Where code meets <em>hardware.</em>
      </h2>
      <div className="about3">
        <div>
          <h3>Hi, I’m Nour.</h3>
          <p>I’m an Electronics and Communication Systems engineer (ENET’Com, class of 2026) with hands-on experience in embedded C/C++: STM32 firmware, embedded Linux on Raspberry Pi, and CAN/LIN communication.</p>
          <p>I also bring a strong background in test automation, validation and CI, as well as applied machine learning for fault detection.</p>
          <p>I’m looking for an embedded development or integration and validation position in Tunis or Sfax.</p>
          <a className="btn out" href={LINKEDIN} target="_blank" rel="noreferrer">
            LinkedIn <span>↗</span>
          </a>
        </div>
        <div className="idwrap">
          <button className={'flip' + (on ? ' on' : '')} onClick={() => setOn((v) => !v)} aria-label="Flip the engineer ID card">
            <div className="clip">
              <i></i>
            </div>
            <div className="in">
              <div className="face front">
                <div className="fhead">
                  <span className="mono">Engineer ID</span>
                  <span>✳</span>
                </div>
                <div className="fph">
                  <img src={cardImg} alt="Nour Challouf" />
                  <div className="stick">
                    LET’S
                    <br />
                    BUILD
                  </div>
                </div>
                <div className="fbody">
                  <h3>Nour Challouf</h3>
                  <p>Embedded software engineer</p>
                </div>
                <div className="kv">
                  <span>Based in</span>
                  <b>Sfax</b>
                  <span>Stack</span>
                  <b>STM32 + C</b>
                </div>
                <div className="code">
                  <div className="bar"></div>
                  <i>Nour.</i>
                </div>
                <div className="hint mono">Hover or tap to flip ↻</div>
              </div>
              <div className="face back">
                <span className="mono">The firmware behind the story</span>
                <div className="badge">
                  <b>✳</b>
                </div>
                <h3>Code that connects.</h3>
                <ul>
                  <li>Embedded software engineer</li>
                  <li>C / C++ on STM32</li>
                  <li>CAN, LIN and DBC files</li>
                  <li>Embedded Linux on Raspberry Pi</li>
                  <li>Robot Framework and Jenkins</li>
                </ul>
                <i className="sg">Nour.</i>
              </div>
            </div>
          </button>
          <span className="cap mono">A little personality. A lot of firmware.</span>
        </div>
        <div className="afacts">
          <div className="mono rose alabel">A little more about me</div>
          <div className="facts">
            <div>
              Based in<b>Sfax, Tunisia</b>
            </div>
            <div>
              Languages<b>Arabic, French, English</b>
            </div>
            <div>
              Focus<b>Embedded C/C++ and validation</b>
            </div>
            <div>
              Looking for<b>Embedded roles in Tunis or Sfax</b>
            </div>
          </div>
          <span className="q">“Firmware that works, and tests that prove it.”</span>
        </div>
      </div>
    </section>
  )
}
