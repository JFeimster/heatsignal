import Link from "next/link";
import { NewsletterForm } from "../components/newsletter-form";
import { SectionTitle } from "../components/section-title";
import { StoryCard } from "../components/story-card";
import { issues, stories } from "../data/content";

const latest = [stories[0], stories[1], stories[2]];

export default function HomePage() {
  return <>
    <section className="hero-home">
      <img className="hero-home-image" src="/assets/hero.png" alt="A late-night bar scene, washed in city light" />
      <div className="hero-overlay" />
      <div className="hero-topline"><span>Issue 001 / September 2026</span><span>New York / Everywhere late</span></div>
      <div className="hero-home-copy">
        <p className="eyebrow hero-entrance">After Hours</p>
        <h1 className="hero-entrance">The hotel bar is still the best social network.</h1>
        <p className="hero-dek hero-entrance">No app has ever beaten the useful ambiguity of a good bar with nowhere else to be.</p>
        <Link className="hero-link hero-entrance" href={`/stories/${stories[0].slug}`}>Read the lead story <span>↗</span></Link>
      </div>
      <p className="hero-side-note">Good stories for bad hours.</p>
    </section>

    <section className="latest-section page-padding">
      <SectionTitle number="01" title="Latest" href="/stories" />
      <div className="latest-grid">
        <StoryCard story={latest[0]} className="latest-lead" />
        <StoryCard story={latest[1]} />
        <StoryCard story={latest[2]} />
      </div>
    </section>

    <section className="after-hours-section">
      <div className="section-header page-padding"><SectionTitle number="02" title="After Hours" href="/after-hours" /></div>
      <div className="after-hours-layout">
        <Link className="after-hours-feature" href={`/stories/${stories[3].slug}`}><img src={stories[3].image} alt="" /><div><p className="eyebrow">After Hours</p><h2>The economics of the VIP room.</h2><span>Go inside →</span></div></Link>
        <div className="after-hours-side"><StoryCard story={stories[8]} /><StoryCard story={stories[7]} /></div>
      </div>
    </section>

    <section className="people-feature page-padding">
      <SectionTitle number="03" title="People" href="/people" />
      <div className="people-feature-inner">
        <div className="people-intro"><p className="eyebrow">Profile / the art of hosting</p><h2>She knows why the room feels different.</h2><p>She does not call herself a curator. She just knows who should arrive together and who should never meet.</p><Link className="read-link" href={`/stories/${stories[7].slug}`}>Meet the host <span>→</span></Link></div>
        <Link className="people-image" href={`/stories/${stories[7].slug}`}><img src="/assets/portrait.png" alt="A person posing at a nightlife event" /><span>Photograph by A. Dune</span></Link>
      </div>
    </section>

    <section className="desire-section">
      <div className="page-padding"><SectionTitle number="04" title="Desire" href="/desire" /></div>
      <div className="desire-grid page-padding"><StoryCard story={stories[1]} /><StoryCard story={stories[6]} /><StoryCard story={stories[4]} /></div>
    </section>

    <section className="internet-section page-padding">
      <div className="internet-heading"><SectionTitle number="05" title="Internet" href="/internet" /><p>Culture moves fast. We look at the part people pretend did not matter to them.</p></div>
      <div className="internet-stories"><StoryCard story={stories[2]} tone="light" /><StoryCard story={stories[5]} tone="light" /><StoryCard story={stories[9]} tone="light" /></div>
    </section>

    <section className="newsletter-block">
      <div className="newsletter-block-bg"><img src="/assets/afterdark.png" alt="" /></div>
      <div className="newsletter-block-copy"><p className="eyebrow">The newsletter</p><h2>Let us send you something good.</h2><p>One sharp issue every Friday: desire, people, a room worth knowing about, and one strange thing from the internet.</p><NewsletterForm /></div>
    </section>

    <section className="archive-preview page-padding">
      <SectionTitle number="06" title="The Archive" href="/newsletter" />
      <div className="issue-preview-grid">{issues.slice(0, 3).map((issue) => <Link href={`/newsletter/${issue.slug}`} className="issue-preview" key={issue.slug}><div className="issue-preview-image"><img src={issue.image} alt="" /><span>Issue {issue.number}</span></div><p>{issue.date}</p><h3>{issue.subject}</h3><span className="read-link">Open issue →</span></Link>)}</div>
    </section>
  </>;
}
