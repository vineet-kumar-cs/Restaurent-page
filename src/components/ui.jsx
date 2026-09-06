import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export function Button({ children, to, variant = 'primary', type = 'button', onClick, className = '' }) {
  const classes = `button button-${variant} ${className}`
  if (to) return <Link to={to} className={classes}>{children}<ArrowUpRight size={16} strokeWidth={1.8} /></Link>
  return <button type={type} onClick={onClick} className={classes}>{children}{variant !== 'text' && <ArrowUpRight size={16} strokeWidth={1.8} />}</button>
}

export function SectionHeading({ eyebrow, title, body, align = 'left', light = false }) {
  return <div className={`section-heading align-${align} ${light ? 'is-light' : ''}`}>
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <h2>{title}</h2>
    {body && <p>{body}</p>}
  </div>
}

export function PageIntro({ eyebrow, title, body }) {
  return <section className="page-intro container"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{body}</p></section>
}

export function FoodCard({ item, featured = false }) {
  return <article className={`food-card ${featured ? 'food-card-featured' : ''}`}>
    <div className="food-image-wrap"><img src={item.image} alt={item.name} loading="lazy" /><span className="food-tag">{item.tag}</span><span className="food-category">{item.category}</span></div>
    <div className="food-card-content"><div><h3>{item.name}</h3><p>{item.description}</p></div><strong>₹{item.price.toLocaleString('en-IN')}</strong></div>
  </article>
}

export function TestimonialCard({ testimonial }) {
  return <article className="testimonial-card"><div className="quote-mark">“</div><p>{testimonial.quote}</p><div className="testimonial-person"><span>{testimonial.initials}</span><div><strong>{testimonial.name}</strong><small>{testimonial.role}</small></div></div></article>
}

export function Toast({ children, onClose }) {
  return <div className="toast" role="status"><span className="toast-dot" />{children}<button onClick={onClose} aria-label="Close notification">×</button></div>
}
