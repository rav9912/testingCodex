export default function ContactPage() {
  return (
    <section className="hero">
      <div className="hero-card">
        <h1>Contact</h1>
        <p>We are here to help with scent consultations and order support.</p>
        <div className="notice">
          Email: hello@bliblablu.com
          <br />
          Concierge: +1 (212) 555-0820
          <br />
          Hours: Mon - Sat, 10am - 6pm
        </div>
      </div>
      <div className="hero-card">
        <h2>Send a note</h2>
        <input className="input" placeholder="Name" />
        <input className="input" placeholder="Email" />
        <input className="input" placeholder="Message" />
        <button className="primary-button">Submit</button>
      </div>
    </section>
  );
}
