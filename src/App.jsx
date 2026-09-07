import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Reservations from './pages/Reservations'
import Contact from './pages/Contact'
import './styles.css'

export default function App() {
  return <BrowserRouter basename="/Restaurent-page"><Navbar /><main><Routes><Route path="/" element={<Home />} /><Route path="/menu" element={<Menu />} /><Route path="/about" element={<About />} /><Route path="/reservations" element={<Reservations />} /><Route path="/contact" element={<Contact />} /></Routes></main><Footer /></BrowserRouter>
}
