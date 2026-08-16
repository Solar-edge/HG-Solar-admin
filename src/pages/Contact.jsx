export default function Contact() {
  const number = import.meta.env.VITE_WHATSAPP_NUMBER || "08101328963";
  const whatsapp = `https://wa.me/${number}?text=${encodeURIComponent("Hello HG Energy, I would like to make an enquiry.")}`;

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="logo.jpeg" />

      <section className="section page-top contact-page">
        <div>
          <span className="eyebrow">CONTACT</span>
          <h1>Let's talk about your energy needs.</h1>
          <p className="lead">Have a product question or need help deciding what fits your project? Reach out directly.</p>
          <a className="btn btn-dark" href={whatsapp}>Chat with us on WhatsApp</a>
        </div>
        <div className="contact-card">
          <span>HG ENERGY</span>
          <h2>Direct support</h2>
          <p>For product availability, pricing, specifications and project enquiries, WhatsApp is the quickest way to reach the team.</p>
          <a href={whatsapp}>Start a conversation →</a>
        </div>
      </section>
    </>


  );
}