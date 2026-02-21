import { useEffect, useState } from 'react'
import { BrowserRouter, NavLink, Route, Routes, Outlet } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import MainStuff from './pages/MainStuff.jsx'

function Layout() {
  const [visitCount, setVisitCount] = useState(0)
  const [showWelcome, setShowWelcome] = useState(false)
  const visitLabel = visitCount === 1 ? 'time' : 'times'

  useEffect(() => {
    const storedCount = Number(localStorage.getItem('lv-visit-count') || 0)
    const nextCount = storedCount + 1
    localStorage.setItem('lv-visit-count', String(nextCount))
    setVisitCount(nextCount)
    if (storedCount === 0) {
      setShowWelcome(true)
    }
  }, [])

  return (
    <div className="app">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="brand">
          <span className="brand-mark">LV</span>
          <div>
            <p className="brand-title">Last Visited</p>
            <p className="brand-sub">Test project · Placeholder content</p>
          </div>
        </div>
        <nav className="site-nav" aria-label="Primary">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/mainstuff">Main Stuff</NavLink>
        </nav>
        <div className="header-actions">
          <span className="visit-pill">Visit #{visitCount || 1}</span>
          <button className="cta">Get early access</button>
        </div>
      </header>

      <main id="main" className="page">
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>Built as a placeholder site for testing layout decisions.</p>
        <div className="footer-links">
          <NavLink to="/" end>
            Back to top
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/mainstuff">Main Stuff</NavLink>
        </div>
      </footer>

      {showWelcome ? (
        <div className="modal-backdrop" role="dialog" aria-modal="true">
          <div className="modal">
            <p className="eyebrow">Welcome</p>
            <h3>First time here.</h3>
            <p className="lede">
              You have visited this site {visitCount} {visitLabel}. We will increment this
              counter on each return visit in this browser.
            </p>
            <button className="cta" onClick={() => setShowWelcome(false)}>
              Got it
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mainstuff" element={<MainStuff />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
