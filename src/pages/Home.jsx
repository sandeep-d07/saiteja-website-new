import { ArrowUpRight, ArrowRight, Code2, Layers3, Cloud, Users2, Sparkles, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import services from "../data/services";
import heroImage from "../assets/services/it-solutions.jpg";

const capabilities = [
  { icon: Code2, title: "Build with purpose", text: "Digital products shaped around real business needs." },
  { icon: Layers3, title: "Connect the pieces", text: "Technology, people and processes working together." },
  { icon: Cloud, title: "Scale with confidence", text: "Reliable foundations that grow with your ambitions." },
  { icon: Users2, title: "People-first delivery", text: "A collaborative team focused on outcomes, not jargon." },
];

export default function Home() {
  return (
    <main className="neo-home">
      <section className="neo-hero">
        <div className="neo-hero-copy">
          <div className="neo-kicker"><span /> INDEPENDENT THINKING. PRACTICAL TECHNOLOGY.</div>
          <h1>Make your next<br /><em>move matter.</em></h1>
          <p className="neo-lead">We help ambitious organisations turn complex challenges into clear, useful digital experiences — from the first idea to what comes next.</p>
          <div className="neo-actions">
            <Link className="neo-button neo-button-dark" to="/contact">Let’s talk <ArrowUpRight size={17}/></Link>
            <Link className="neo-text-link" to="/services">Explore what we do <ArrowRight size={16}/></Link>
          </div>
          <div className="neo-proof"><span className="neo-proof-mark"><CheckCircle2 size={16}/></span><span>Technology · Talent · Transformation</span></div>
        </div>
        <div className="neo-hero-art">
          <img src={heroImage} alt="Modern technology workspace" />
          <div className="neo-art-caption"><span>01 / OUR APPROACH</span><strong>Clarity first.<br/>Progress always.</strong></div>
          <div className="neo-art-index">S / I</div>
        </div>
        <div className="neo-hero-bottom"><span>SAITEJA INFOTECH PRIVATE LIMITED</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="neo-intro section-shell">
        <div className="neo-section-meta">01 <span> / WHO WE ARE</span></div>
        <div className="neo-intro-main"><p className="neo-overline">A PARTNER FOR WHAT’S POSSIBLE</p><h2>Good technology<br/>should feel <em>simple.</em></h2></div>
        <div className="neo-intro-side"><p>We bring together software development, digital thinking and people solutions to help businesses work smarter and move forward with confidence.</p><Link className="neo-text-link" to="/about">Get to know us <ArrowUpRight size={16}/></Link></div>
      </section>

      <section className="neo-services">
        <div className="section-shell">
          <div className="neo-section-head"><div><p className="neo-overline">02 / WHAT WE DO</p><h2>Ideas into<br/><em>impact.</em></h2></div><p>One connected team. A considered mix of capabilities. Solutions designed around your next challenge.</p></div>
          <div className="neo-service-grid">
            {services.map(({ image, number, title, description, link }) => (
              <Link className="neo-service-card" to={link || "/services"} key={title}>
                <div className="neo-service-image"><img src={image} alt={title}/><span>{number}</span></div>
                <div className="neo-service-info"><h3>{title}</h3><p>{description}</p></div>
              </Link>
            ))}
          </div>
          <div className="neo-all-services"><Link className="neo-button neo-button-outline" to="/services">View all capabilities <ArrowUpRight size={17}/></Link></div>
        </div>
      </section>

      <section className="neo-statement">
        <div className="section-shell neo-statement-inner"><p className="neo-overline">03 / THE SAITEJA DIFFERENCE</p><h2>Not more technology.<br/><em>Better outcomes.</em></h2><p>We start by understanding the work behind the brief. Then we bring the right people, tools and thinking together to make meaningful progress.</p><Link className="neo-button neo-button-light" to="/about">Why work with us <ArrowUpRight size={17}/></Link><span className="neo-statement-symbol">✳</span></div>
      </section>

      <section className="neo-values section-shell">
        <div className="neo-section-head"><div><p className="neo-overline">04 / HOW WE THINK</p><h2>Built on the<br/><em>right things.</em></h2></div><p>Good partnerships are built through clear thinking, thoughtful execution and a shared definition of success.</p></div>
        <div className="neo-value-grid">{capabilities.map(({icon: Icon,title,text},i)=><article className="neo-value" key={title}><span className="neo-value-no">0{i+1}</span><Icon size={24} strokeWidth={1.5}/><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="neo-contact"><div className="section-shell neo-contact-inner"><div><p className="neo-overline">HAVE A CHALLENGE IN MIND?</p><h2>Let’s make<br/><em>something better.</em></h2></div><Link className="neo-button neo-button-dark" to="/quotation">Start a conversation <ArrowUpRight size={18}/></Link></div></section>
    </main>
  );
}
