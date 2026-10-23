import { useEffect, useState } from 'react'
import { gallery, ieeeRoles, ieeeSkills, ieeeStats } from '../data'
import tsypManager from '../assets/photos/tsyp12-manager.webp'

export function Ieee() {
  return (
    <section id="ieee" className="ieee">
      <span className="mono rose">Beyond the code</span>
      <h2 style={{ marginTop: 22 }}>
        How IEEE changed my life <em>for the better.</em>
      </h2>
      <div className="ieeegrid">
        <img className="ieeeimg" src={tsypManager} alt="Nour Challouf, Sessions Manager at TSYP12" loading="lazy" />
        <div>
          <p>Before IEEE, I was an engineering student who loved firmware but kept her ideas to herself. Joining the community pushed me out of my comfort zone, one role at a time.</p>
          <p>Each role below taught me something no course could: how to lead, how to speak, how to work as a team under pressure, and how to keep going when a robot refuses to move.</p>
          <p>That mix of technical depth and human skills is what I want to bring to my next team.</p>
        </div>
      </div>
      <div className="ieeestats">
        {ieeeStats.map((s) => (
          <div className="glass" key={s.b}>
            <b>{s.b}</b>
            <span className="mono">{s.t}</span>
          </div>
        ))}
      </div>
      <div className="roles">
        {ieeeRoles.map((r) => (
          <article className="role glass" key={r.role}>
            <img src={r.photo} alt={r.alt} loading="lazy" />
            <div>
              <span className="mono rose">{r.when}</span>
              <h3>{r.role}</h3>
              <p>{r.text}</p>
            </div>
          </article>
        ))}
      </div>
      <h3 className="softh">What I took away</h3>
      <div className="softgrid">
        {ieeeSkills.map((s) => (
          <div className="sk soft" key={s.t}>
            <h3>{s.t}</h3>
            <span>{s.d}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Moments() {
  const [open, setOpen] = useState<number | null>(null)
  useEffect(() => {
    if (open === null) return
    const fn = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null)
      if (e.key === 'ArrowRight') setOpen((i) => (i === null ? i : (i + 1) % gallery.length))
      if (e.key === 'ArrowLeft') setOpen((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length))
    }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [open])
  const cur = open === null ? null : gallery[open]
  return (
    <section id="moments">
      <span className="mono rose">Moments</span>
      <h2 style={{ marginTop: 22 }}>
        Life around the <em>lab.</em>
      </h2>
      <p style={{ color: 'var(--mute)' }}>Projects, competitions, stages and graduation day, with the story behind each photo.</p>
      <div className="masonry">
        {gallery.map((p, i) => (
          <figure className="ph" key={p.src}>
            <button onClick={() => setOpen(i)} aria-label={'Open photo: ' + p.caption}>
              <img src={p.src} alt={p.alt} loading="lazy" />
            </button>
            <figcaption>
              <small className="mono">{p.tag}</small>
              <b>{p.caption}</b>
              <span>{p.desc}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      {cur && (
        <div className="lb" role="dialog" aria-modal="true" aria-label={cur.caption} onClick={() => setOpen(null)}>
          <button className="glass lbx" onClick={() => setOpen(null)} aria-label="Close photo">
            ✕
          </button>
          <img src={cur.src} alt={cur.alt} onClick={(e) => e.stopPropagation()} />
          <p onClick={(e) => e.stopPropagation()}>
            <b>{cur.caption}</b>
            <br />
            {cur.desc}
          </p>
        </div>
      )}
    </section>
  )
}
