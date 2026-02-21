import { BrowserRouter, NavLink, Route, Routes, Outlet } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import MainStuff from './pages/MainStuff.jsx'

function Layout() {
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
        <button className="cta">Get early access</button>
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
