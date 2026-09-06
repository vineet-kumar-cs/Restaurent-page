import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { FoodCard, PageIntro } from '../components/ui'
import { menuCategories, menuItems } from '../data/restaurantData'

export default function Menu() {
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')
  const filteredItems = useMemo(() => menuItems.filter(item => (category === 'All' || item.category === category) && `${item.name} ${item.description}`.toLowerCase().includes(query.toLowerCase())), [category, query])
  return <><PageIntro eyebrow="From our kitchen" title="The Savoria menu" body="Modern European cooking, rooted in the seasons and made for the middle of the table." /><section className="menu-section section-pad"><div className="container"><div className="menu-toolbar"><div className="category-list" role="tablist">{menuCategories.map(item => <button key={item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>)}</div><label className="search-box"><Search size={17} /><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search the menu" aria-label="Search the menu" /></label></div>{filteredItems.length ? <div className="food-grid menu-grid">{filteredItems.map(item => <FoodCard key={item.id} item={item} />)}</div> : <div className="empty-state"><h3>Nothing on the pass just yet.</h3><p>Try a different search or browse another category.</p></div>}</div></section></>
}
