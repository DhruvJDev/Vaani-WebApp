import './App.css'
import logo from './assets/icon.png'

const highlights = [
  'Reminders, schedules, and important dates',
  'Open apps, sites, files, and basic system tools',
  'Voice input, translation, and multilingual support',
  'Weather, chat help, and knowledge-based answers',
]

const platforms = [
  {
    name: 'Windows',
    label: 'Download for Windows',
    downloadName: 'Vaani-Windows.exe',
    href:
      'data:text/plain;charset=utf-8,This%20is%20a%20placeholder%20Windows%20download%20for%20Vaani.%20Replace%20it%20with%20the%20real%20installer%20build.',
    note: 'Installer placeholder for Windows users',
  },
  {
    name: 'macOS',
    label: 'Download for macOS',
    downloadName: 'Vaani-macOS.dmg',
    href:
      'data:text/plain;charset=utf-8,This%20is%20a%20placeholder%20macOS%20download%20for%20Vaani.%20Replace%20it%20with%20the%20real%20app%20bundle.',
    note: 'App bundle placeholder for Mac users',
  },
]

const aboutPoints = [
  'Built to simplify daily work, home tasks, and personal planning.',
  'Designed for fast responses, voice support, and clear actions.',
  'Works across Windows, macOS, and Linux with the same assistant flow.',
]

const contactLinks = [
  { label: 'Email support', value: 'support@vaani.ai', href: 'mailto:support@vaani.ai' },
  { label: 'General inquiries', value: 'hello@vaani.ai', href: 'mailto:hello@vaani.ai' },
  { label: 'Official site', value: 'Back to top', href: '#home' },
]

const termsItems = [
  'Use Vaani responsibly and follow local laws when automating tasks.',
  'Downloaded installers are provided as-is and should be checked before use.',
  'Any connected services, accounts, or APIs may require their own terms.',
  'Placeholder download links should be replaced with signed releases before launch.',
]

const privacyItems = [
  'Keep user data collection minimal and transparent.',
  'Use microphone or device permissions only when the feature needs them.',
  'Document any third-party services that process prompts or account data.',
  'Publish a privacy policy before launch if Vaani stores personal information.',
]

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Terms', href: '#terms' },
  { label: 'Privacy', href: '#privacy' },
  { label: 'Download', href: '#download' },
]

function App() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="brand-mark" href="#home">
          <img className="brand-mark__logo" src={logo} alt="Vaani logo" />
          <span>Vaani</span>
        </a>

        <nav className="topnav" aria-label="Primary">
          {footerLinks.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero-section" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Intelligent personal assistant</p>
          <h1>Vaani</h1>
          <p className="lead">
            Vaani is your smart everyday assistant for reminders, schedules,
            quick answers, file actions, weather checks, and voice-enabled help.
          </p>

          <div className="action-row">
            <a className="primary-button" href="#download">
              Download Vaani
            </a>
            <a className="secondary-button" href="#features">
              Explore features
            </a>
          </div>

          <ul className="highlight-list">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="hero-panel">
          <div className="logo-shell">
            <div className="logo-orbit logo-orbit-one" />
            <div className="logo-orbit logo-orbit-two" />
            <div className="logo-orbit logo-orbit-three" />
            <img className="brand-logo" src={logo} alt="Vaani logo" />
          </div>
          <div className="assistant-card">
            <span className="status-pill">Ready to help</span>
            <h2>What Vaani can do</h2>
            <p>
              Manage daily tasks, answer questions, support your work, and keep
              everything organized from one simple interface.
            </p>

            <div className="stats-grid">
              <div>
                <strong>Cross-platform</strong>
                <span>Windows, macOS, Linux</span>
              </div>
              <div>
                <strong>Voice ready</strong>
                <span>Talk to Vaani naturally</span>
              </div>
              <div>
                <strong>Fast actions</strong>
                <span>Open, search, remind, and respond</span>
              </div>
              <div>
                <strong>Multi-purpose</strong>
                <span>Work, home, and productivity support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="content-section content-section--about">
        <div className="section-heading">
          <p className="eyebrow">About Vaani</p>
          <h2>A personal assistant that keeps everyday work simple</h2>
          <p>
            Vaani is designed to help people manage schedules, reminders, quick
            questions, and practical device actions in one clean experience.
          </p>
        </div>

        <div className="about-grid">
          {aboutPoints.map((point) => (
            <article key={point}>
              <span className="about-dot" aria-hidden="true" />
              <p>{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="features" className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Why people use it</p>
          <h2>A practical assistant for everyday life</h2>
        </div>

        <div className="feature-grid">
          <article>
            <h3>Productivity</h3>
            <p>Set reminders, plan schedules, and keep important dates visible.</p>
          </article>
          <article>
            <h3>Quick answers</h3>
            <p>Ask questions and get helpful responses for work or daily use.</p>
          </article>
          <article>
            <h3>System support</h3>
            <p>Open files, launch apps, and handle basic device actions faster.</p>
          </article>
          <article>
            <h3>Multilingual</h3>
            <p>Support voice input, translation, and communication across languages.</p>
          </article>
        </div>
      </section>

      <section id="contact" className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h2>Reach the Vaani team</h2>
          <p>
            Add your official support details here so users know where to get
            help, feedback, or partnership information.
          </p>
        </div>

        <div className="contact-grid">
          {contactLinks.map((item) => (
            <article key={item.label}>
              <span>{item.label}</span>
              <a href={item.href}>{item.value}</a>
            </article>
          ))}
        </div>
      </section>

      <section id="terms" className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Terms & Conditions</p>
          <h2>Simple usage terms for Vaani</h2>
          <p>
            This section gives you a clear starter terms page that you can
            replace with the final legal copy later.
          </p>
        </div>

        <div className="terms-card">
          <ul>
            {termsItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="privacy" className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Privacy</p>
          <h2>Privacy basics for Vaani</h2>
          <p>
            Keep this section for your privacy notice, data handling details,
            and permission disclosures.
          </p>
        </div>

        <div className="terms-card">
          <ul>
            {privacyItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="download" className="download-section">
        <div className="section-heading">
          <p className="eyebrow">Get the app</p>
          <h2>Download Vaani for your device</h2>
          <p>
            Choose the installer for Windows or macOS. Replace the placeholder
            files with your real builds when ready.
          </p>
        </div>

        <div className="download-grid">
          {platforms.map((platform) => (
            <article key={platform.name} className="download-card">
              <span className="status-pill">{platform.name}</span>
              <h3>{platform.label}</h3>
              <p>{platform.note}</p>
              <a
                className="download-button"
                href={platform.href}
                download={platform.downloadName}
              >
                Download for {platform.name}
              </a>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <strong>Vaani</strong>
          <p>Your intelligent personal assistant for everyday support.</p>
        </div>
        <div className="footer-links">
          {footerLinks.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </footer>
    </main>
  )
}

export default App
