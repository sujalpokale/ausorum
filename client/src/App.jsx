import { useState } from 'react';

const services = [
  { number: '01', title: 'Web Development', text: 'Fast, responsive and maintainable web platforms designed around real business goals.', tag: 'React · Node.js' },
  { number: '02', title: 'AI & Automation', text: 'Practical AI systems that reduce repetitive work, surface insights and improve decisions.', tag: 'AI · APIs' },
  { number: '03', title: 'Product Engineering', text: 'From idea to production: architecture, interfaces, APIs and reliable deployment workflows.', tag: 'Full Stack' },
  { number: '04', title: 'Custom Software', text: 'Purpose-built software for workflows and products that off-the-shelf tools cannot solve.', tag: 'Tailored' },
];

const tech = ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'AI / ML', 'GitHub', 'Cloud'];

function Arrow() { return <span className="arrow" aria-hidden="true">↗</span>; }

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const submitContact = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">A</span> AUSORUM</a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">☰</button>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#approach" onClick={closeMenu}>Approach</a>
            <a href="#technology" onClick={closeMenu}>Technology</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Start a project <Arrow /></a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section container">
          <div className="hero-copy">
            <p className="eyebrow"><span className="dot" /> SOFTWARE · AI · DIGITAL PRODUCTS</p>
            <h1>Build what<br /><span>matters.</span></h1>
            <p className="hero-text">Ausorum creates focused software solutions that turn ambitious ideas into dependable digital products.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Start a project <Arrow /></a>
              <a className="text-link" href="#services">Explore services <Arrow /></a>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="orb orb-one" /><div className="orb orb-two" />
            <div className="grid-mark"><span /><span /><span /><span /></div>
            <div className="hero-card"><small>AUSORUM / 001</small><strong>Ideas → Systems → Impact</strong><i>///</i></div>
          </div>
        </section>

        <section id="services" className="section dark-section">
          <div className="container">
            <div className="section-heading"><p className="eyebrow">WHAT WE DO</p><h2>Technology with<br /><span>purpose.</span></h2></div>
            <div className="service-grid">
              {services.map((service) => <article className="service-card" key={service.number}><div className="service-top"><span>{service.number}</span><span>{service.tag}</span></div><h3>{service.title}</h3><p>{service.text}</p><a href="#contact" aria-label={`Discuss ${service.title}`}>Discuss this <Arrow /></a></article>)}
            </div>
          </div>
        </section>

        <section id="approach" className="section container approach">
          <div className="section-heading"><p className="eyebrow">OUR APPROACH</p><h2>Simple process.<br /><span>Strong outcomes.</span></h2></div>
          <div className="process-grid">
            {[['01', 'Understand', 'We define the problem, users, constraints and measurable outcome.'], ['02', 'Design', 'We shape a clear product experience and technical architecture before building.'], ['03', 'Build', 'We develop in focused iterations with quality, testing and useful feedback loops.'], ['04', 'Improve', 'We launch, learn from real usage and keep improving the product.']].map(([n, t, d]) => <div className="process-item" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}
          </div>
        </section>

        <section id="technology" className="section tech-section">
          <div className="container tech-layout"><div><p className="eyebrow">TECHNOLOGY</p><h2>Modern stack.<br /><span>Built to last.</span></h2><p className="muted">We choose technologies for maintainability, performance and the needs of the product—not because they are trendy.</p></div><div className="tech-list">{tech.map((item) => <span key={item}>{item}</span>)}</div></div>
        </section>

        <section id="about" className="section container about">
          <div className="about-label"><p className="eyebrow">ABOUT AUSORUM</p><div className="about-number">A<span>/</span>01</div></div>
          <div><h2>We believe good software should feel <span>inevitable.</span></h2><p>Ausorum is a software company focused on building useful, thoughtful digital products. We combine product thinking, engineering discipline and a practical approach to AI.</p><p>Our goal is straightforward: create technology that solves a real problem and keeps delivering value after launch.</p></div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-layout"><div><p className="eyebrow">LET'S TALK</p><h2>Have an idea?<br /><span>Let's build it.</span></h2><p className="muted">Tell us what you are working on. We will come back with the right next step.</p></div>
            <form className="contact-form" onSubmit={submitContact}>
              <label>Name<input required name="name" placeholder="Your name" /></label>
              <label>Email<input required type="email" name="email" placeholder="you@company.com" /></label>
              <label>Message<textarea required name="message" rows="5" placeholder="Tell us a little about your project..." /></label>
              <button className="button button-primary" type="submit">Send enquiry <Arrow /></button>
              {submitted && <p className="form-note">Thanks — your enquiry is ready to connect to the Ausorum API.</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer"><div className="container footer-inner"><a className="brand" href="#home"><span className="brand-mark">A</span> AUSORUM</a><span>Software · AI · Digital Products</span><span>© {new Date().getFullYear()} Ausorum</span></div></footer>
    </div>
  );
}

export default App;
