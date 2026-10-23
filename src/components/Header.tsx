import { useEffect, useState } from 'react'
import { EMAIL, LINKEDIN } from '../data'

const links: [string, string][] = [
  ['about', 'About'],
  ['work', 'Work'],
  ['skills', 'Expertise'],
  ['ieee', 'IEEE'],
  ['moments', 'Moments'],
  ['mood', 'Mood'],
  ['background', 'Background'],
  ['contact', 'Contact'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const els = links.map(([id]) => document.getElementById(id)).filter((e): e is HTMLElement => !!e)
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    els.forEach((e) => io.observe(e))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <header>
        <a className="logo" href="#top">
          <i>Nc</i>Nour Challouf
        </a>
        <nav className="dnav glass" aria-label="Main">
          {links.map(([id, label]) => (
            <a key={id} href={'#' + id} className={active === id ? 'on' : undefined}>
              {label}
            </a>
          ))}
        </nav>
        <div className="socials">
          <a href={LINKEDIN} aria-label="LinkedIn" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9.75h4V21H3zM9.5 9.75h3.8v1.6h.06c.53-1 1.82-2.05 3.75-2.05 4 0 4.74 2.63 4.74 6.05V21h-4v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.33-1.96 2.7V21h-4z" />
            </svg>
          </a>
          <a href={`mailto:${EMAIL}`} aria-label="Email">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 5h18a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zm9 7.2L4.6 7H4v.6l8 5.4 8-5.4V7h-.6L12 12.2z" />
            </svg>
          </a>
        </div>
        <button className="menu-btn glass" onClick={() => setOpen(true)} aria-label="Open menu">
          Menu <span>☰</span>
        </button>
      </header>
      <div className={'menu' + (open ? ' open' : '')}>
        <button className="glass" onClick={() => setOpen(false)}>
          Close ✕
        </button>
        {links.map(([id, label]) => (
          <a key={id} href={'#' + id} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </div>
    </>
  )
}
