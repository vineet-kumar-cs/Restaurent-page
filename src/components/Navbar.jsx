import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from './ui'

const links = [['/', 'Home'], ['/menu', 'Menu'], ['/about', 'Our story'], ['/reservations', 'Reservations'], ['/contact', 'Contact']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return <header className="navbar"><div className="container nav-inner">
    <Link to="/" className="brand" onClick={() => setOpen(false)}><span className="brand-mark">S</span><span>Savoria<small>Good food. Great moments.</small></span></Link>
    <nav className={`nav-links ${open ? 'nav-open' : ''}`} aria-label="Main navigation">{links.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}>{label}</NavLink>)}<Button to="/reservations" className="nav-cta">Book a table</Button></nav>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? <X size={23} /> : <Menu size={23} />}</button>
  </div></header>
}
