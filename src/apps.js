// The catalogue. Order is the periodic-table order: atomic numbers are
// assigned from it, so a new app goes at the end of its group.
//
// Every link must answer before it goes live. Two hosts have been found dead
// with nothing noticing: conditionals.mrbell.app (never deployed) and
// salesman.mrbell.app (DNS record missing) - which is why Salesman points at
// its vercel.app address until that record is put back.

export const groups = [
  { id: 'b2', name: 'B2 First', colour: 'var(--orange)' },
  { id: 'engb', name: 'IB English B', colour: 'var(--green)' },
  { id: 'langlit', name: 'IB Lang & Lit', colour: 'var(--lilac)' },
  { id: 'texts', name: 'Reading & writing', colour: 'var(--yellow)' },
  { id: 'tools', name: 'Classroom tools', colour: 'var(--cyan)' },
];

export const apps = [
  { group: 'b2', symbol: 'Uo', name: 'Use of English', blurb: 'Paper 1, Parts 1–4', link: 'https://uoe.mrbell.app' },
  { group: 'b2', symbol: 'Id', name: 'Idioms', blurb: '114 idioms, three ways', link: 'https://idioms.mrbell.app' },
  { group: 'b2', symbol: 'Nt', name: 'Narrative tenses', blurb: 'Four past forms', link: 'https://tenses.mrbell.app' },
  { group: 'b2', symbol: 'Rc', name: 'Relative clauses', blurb: 'The comma that matters', link: 'https://clauses.mrbell.app' },
  { group: 'engb', symbol: 'Tt', name: 'Text types', blurb: 'Paper 1: pick the right one', link: 'https://texttypes.mrbell.app' },
  { group: 'engb', symbol: 'Io', name: 'Individual Oral', blurb: 'HL practice, real extracts', link: 'https://io.mrbell.app', signin: true },
  { group: 'langlit', symbol: 'Mo', name: 'Four-Minute Oral', blurb: 'Extract, approval, clock', link: 'https://langlit.mrbell.app', signin: true },
  { group: 'langlit', symbol: 'Cr', name: 'Criteria', blurb: 'What examiners look for', link: 'https://criteria.mrbell.app' },
  { group: 'langlit', symbol: 'Fm', name: 'Formative tracker', blurb: 'Your marks out of 7', link: 'https://formative.mrbell.app', signin: true },
  { group: 'texts', symbol: 'Lf', name: 'Lord of the Flies', blurb: 'Reading companion', link: 'https://lotf.mrbell.app', signin: true },
  { group: 'texts', symbol: 'Ds', name: 'Death of a Salesman', blurb: 'Reading companion', link: 'https://salesman-app-live.vercel.app' },
  { group: 'texts', symbol: 'Ps', name: 'Paragraph Studio', blurb: 'Analytical paragraphs', link: 'https://paragraph.mrbell.app', signin: true },
  { group: 'tools', symbol: 'Tc', name: 'Theme Clock', blurb: 'Clock and exam timer', link: 'https://themeclock.app' },
].map((app, i) => ({ ...app, number: i + 1 }));
