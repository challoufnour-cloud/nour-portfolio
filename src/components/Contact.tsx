import { EMAIL, LINKEDIN, PHONE, PHONE_LABEL, cvUrl } from '../data'

export default function Contact() {
  return (
    <section id="contact">
      <span className="mono rose">Let’s connect</span>
      <div className="say" aria-hidden="true">
        <svg viewBox="0 0 100 100">
          <defs>
            <path id="say-circle" d="M50 50m-38 0a38 38 0 1 1 76 0a38 38 0 1 1-76 0" />
          </defs>
          <text fontSize="9" letterSpacing="3" fill="currentColor" style={{ fontFamily: 'var(--mono)' }}>
            <textPath href="#say-circle">SAY HELLO · SAY HELLO · SAY HELLO ·</textPath>
          </text>
          <text x="50" y="58" fontSize="26" textAnchor="middle" style={{ fill: 'var(--pur)' }}>
            →
          </text>
        </svg>
      </div>
      <h2 style={{ marginTop: 22 }}>
        No need to <em>overthink it.</em>
      </h2>
      <div className="cbtn">
        <a className="btn" href={`mailto:${EMAIL}?subject=Let%E2%80%99s%20Work%20Together%20%E2%80%94%20Nour%20Challouf`}>
          Email me <span>→</span>
        </a>
        <a className="btn gl" href={`tel:${PHONE}`}>
          Call {PHONE_LABEL} <span>→</span>
        </a>
      </div>
      <div className="tiles">
        <a className="tile glass" href={LINKEDIN} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="tile glass" href={`mailto:${EMAIL}`}>
          Email
        </a>
        <a className="tile glass" href={`tel:${PHONE}`}>
          Phone
        </a>
        <a className="tile glass" href={cvUrl} download="Nour_Challouf_CV.pdf">
          My CV ↓
        </a>
      </div>
    </section>
  )
}
