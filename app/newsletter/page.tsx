import Link from "next/link";
import { NewsletterForm } from "../../components/newsletter-form";
import { issues } from "../../data/content";

export const metadata = { title: "Newsletter" };

export default function NewsletterPage() {
  return <><section className="newsletter-page-hero page-padding"><p className="eyebrow">The Friday issue</p><h1>The things you should probably know.</h1><p>AFTERDARK arrives once a week with a useful mix of people, desire, a little vice, and the online behavior nobody explains at brunch.</p><NewsletterForm /></section><section className="issues-section page-padding"><div className="issue-section-heading"><p className="eyebrow">Publication archive</p><h2>Every issue, on record.</h2></div><div className="issues-list">{issues.map((issue) => <article className="issue-row" key={issue.slug}><Link href={`/newsletter/${issue.slug}`} className="issue-row-cover"><img src={issue.image} alt="" /><span>Issue {issue.number}</span></Link><div><p className="eyebrow">{issue.date}</p><h3><Link href={`/newsletter/${issue.slug}`}>{issue.subject}</Link></h3><p>{issue.summary}</p></div><Link className="read-link" href={`/newsletter/${issue.slug}`}>Open issue <span>↗</span></Link></article>)}</div></section></>;
}
