const Element = ({ number, symbol, name, blurb, link, signin, colour, dimmed }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={dimmed ? 'element dim' : 'element'}
    style={{ '--c': colour }}
    tabIndex={dimmed ? -1 : 0}
    aria-hidden={dimmed || undefined}
  >
    <span className="num">{number}</span>
    {signin && <span className="key">sign in</span>}
    <span className="sym">{symbol}</span>
    <span className="name">{name}</span>
    <span className="blurb">{blurb}</span>
  </a>
);

export default Element;
