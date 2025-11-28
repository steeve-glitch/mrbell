import { useState } from 'react'
import './index.css'

function App() {
  const apps = [
    {
      id: 1,
      name: "Theme Clock",
      description: "A beautiful digital clock with customizable themes.",
      url: "https://themeclock.app", // Placeholder or actual if known
      icon: "⏰"
    },
    {
      id: 2,
      name: "Exam Timer",
      description: "Keep track of your exam time with precision.",
      url: "#",
      icon: "⏱️"
    },
    {
      id: 3,
      name: "Flashcards",
      description: "Master any subject with digital flashcards.",
      url: "#",
      icon: "🗂️"
    }
  ];

  return (
    <div className="app-container">
      {/* Hero Section */}
      <header className="hero">
        <div className="container">
          <nav className="navbar animate-fade-in">
            <div className="logo">Mr. Bell's Apps</div>
          </nav>
          
          <div className="hero-content animate-fade-in" style={{animationDelay: '0.2s'}}>
            <h1>
              Educational Tools <br />
              <span className="text-gradient">Reimagined</span>
            </h1>
            <p className="hero-subtitle">
              A suite of powerful, beautiful web applications designed to enhance learning and productivity.
            </p>
          </div>
        </div>
      </header>

      {/* Apps Grid */}
      <section className="apps-section">
        <div className="container">
          <h2 className="section-title animate-fade-in" style={{animationDelay: '0.4s'}}>Explore Apps</h2>
          <div className="apps-grid">
            {apps.map((app, index) => (
              <a 
                key={app.id} 
                href={app.url} 
                className="app-card animate-fade-in"
                style={{animationDelay: `${0.5 + (index * 0.1)}s`}}
              >
                <div className="app-icon">{app.icon}</div>
                <h3 className="app-name">{app.name}</h3>
                <p className="app-description">{app.description}</p>
                <div className="app-arrow">→</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Mr. Bell's Apps. All rights reserved.</p>
        </div>
      </footer>

      <style>{`
        .app-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .hero {
          padding: var(--spacing-lg) 0;
          text-align: center;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-lg);
        }

        .logo {
          font-weight: 700;
          font-size: 1.5rem;
          background: var(--gradient-main);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-content h1 {
          font-size: 3.5rem;
          line-height: 1.2;
          margin-bottom: var(--spacing-sm);
          font-weight: 800;
        }

        .text-gradient {
          background: var(--gradient-main);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .apps-section {
          padding: var(--spacing-lg) 0;
          background: var(--bg-secondary);
          flex-grow: 1;
        }

        .section-title {
          font-size: 2rem;
          margin-bottom: var(--spacing-md);
          text-align: center;
        }

        .apps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-md);
        }

        .app-card {
          background: var(--bg-primary);
          padding: var(--spacing-md);
          border-radius: var(--radius-md);
          transition: transform 0.3s, box-shadow 0.3s;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          border: 1px solid rgba(255,255,255,0.05);
          position: relative;
          overflow: hidden;
        }

        .app-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          border-color: var(--accent-primary);
        }

        .app-icon {
          font-size: 2.5rem;
          margin-bottom: var(--spacing-sm);
        }

        .app-name {
          font-size: 1.5rem;
          margin-bottom: var(--spacing-xs);
          font-weight: 600;
        }

        .app-description {
          color: var(--text-secondary);
          margin-bottom: var(--spacing-md);
          flex-grow: 1;
        }

        .app-arrow {
          color: var(--accent-primary);
          font-weight: 700;
          font-size: 1.2rem;
          align-self: flex-end;
          transition: transform 0.3s;
        }

        .app-card:hover .app-arrow {
          transform: translateX(5px);
        }

        .footer {
          padding: var(--spacing-md) 0;
          text-align: center;
          color: var(--text-secondary);
          font-size: 0.9rem;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  )
}

export default App
