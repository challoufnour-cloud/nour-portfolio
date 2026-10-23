import { education, extras } from '../data'
import type { Entry } from '../data'

export function Why() {
  return (
    <section>
      <span className="mono rose">Why work with me</span>
      <h2 style={{ marginTop: 22 }}>
        You bring the hardware. <em>I bring the firmware.</em>
      </h2>
      <div className="why">
        <div className="wc glass">
          <span className="mono rose">Embedded and integration teams</span>
          <h3>
            For <em>firmware.</em>
          </h3>
          <p>An engineer who writes STM32 firmware in C, connects modules over CAN and LIN, and documents every message in DBC files.</p>
          <div className="pills">
            <span>STM32</span>
            <span>CAN / LIN</span>
            <span>Embedded Linux</span>
          </div>
          <a className="btn out" href="#contact">
            Hire me <span>→</span>
          </a>
        </div>
        <div className="wc glass">
          <span className="mono rose">Validation and AI teams</span>
          <h3>
            For <em>quality.</em>
          </h3>
          <p>Test automation with Robot Framework and Jenkins, plus machine learning that picks up faults before they become failures.</p>
          <div className="pills">
            <span>Robot Framework</span>
            <span>Jenkins</span>
            <span>XGBoost</span>
          </div>
          <a className="btn out" href="#contact">
            Let’s talk <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export function Systems() {
  return (
    <section id="systems">
      <span className="mono rose">What I’ve built</span>
      <h2 style={{ marginTop: 22 }}>
        Beyond the <em>firmware.</em>
      </h2>
      <p style={{ color: 'var(--mute)' }}>The systems around every board.</p>
      <div className="sys">
        <div className="sc glass">
          <div>
            <span className="mono rose">C / STM32</span>
            <h3>Firmware</h3>
            <p>Embedded control software and a multi-sensor test bench on STM32, with CAN and LIN communication between modules.</p>
          </div>
          <b>Embedded</b>
        </div>
        <div className="sc glass">
          <div>
            <span className="mono rose">Robot Framework / Jenkins</span>
            <h3>Tests and CI</h3>
            <p>A Python GUI for payment-terminal test delivery, plugged into Jenkins and validated with Robot Framework.</p>
          </div>
          <b>Validation</b>
        </div>
        <div className="sc glass">
          <div>
            <span className="mono rose">XGBoost / Isolation Forest</span>
            <h3>Fault detection</h3>
            <p>An 8-class fault taxonomy, with XGBoost, Random Forest, 1D-CNN and Informer benchmarked on public and custom datasets.</p>
          </div>
          <b>Machine learning</b>
        </div>
      </div>
    </section>
  )
}

function Rows({ items }: { items: Entry[] }) {
  return (
    <>
      {items.map((e) => (
        <div className="bgrow" key={e.title}>
          <span className="mono">{e.when}</span>
          <b>{e.title}</b>
          {e.detail && <p>{e.detail}</p>}
        </div>
      ))}
    </>
  )
}

export function Background() {
  return (
    <section id="background">
      <span className="mono rose">Background</span>
      <h2 style={{ marginTop: 22 }}>
        Studied, certified, <em>competing.</em>
      </h2>
      <div className="bg2">
        <div className="bk glass">
          <h3>Education</h3>
          <Rows items={education} />
        </div>
        <div className="bk glass">
          <h3>Certifications and activities</h3>
          <Rows items={extras} />
        </div>
      </div>
    </section>
  )
}
