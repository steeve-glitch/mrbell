import { useState } from 'react';
import { apps, groups } from './apps';
import Element from './components/Element';

function App() {
  // null = show every group; otherwise the id of the one being shown
  const [only, setOnly] = useState(null);
  const colourOf = Object.fromEntries(groups.map((g) => [g.id, g.colour]));

  return (
    <div className="page">
      <header>
        <p className="kicker">Mr. Bell&rsquo;s</p>
        <h1>
          Periodic Table <span>of Apps</span>
        </h1>
        <p className="lede">
          English practice, one element at a time. {apps.length} elements and counting.
        </p>
      </header>

      <nav className="legend" aria-label="Filter by course">
        <button className={only === null ? 'chip on' : 'chip'} onClick={() => setOnly(null)}>
          All
        </button>
        {groups.map((g) => (
          <button
            key={g.id}
            className={only === g.id ? 'chip on' : 'chip'}
            style={{ '--c': g.colour }}
            aria-pressed={only === g.id}
            onClick={() => setOnly(only === g.id ? null : g.id)}
          >
            <span className="swatch" />
            {g.name}
          </button>
        ))}
      </nav>

      <main className="table">
        {apps.map((app) => (
          <Element
            key={app.symbol}
            {...app}
            colour={colourOf[app.group]}
            dimmed={only !== null && only !== app.group}
          />
        ))}
      </main>

      <footer>
        <p>
          <span className="key">sign in</span> = uses your school Google account
        </p>
        <p>&copy; {new Date().getFullYear()} Mr. Bell&rsquo;s Apps</p>
      </footer>
    </div>
  );
}

export default App;
