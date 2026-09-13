import Link from "next/link";
import { notFound } from "next/navigation";
import { NewsletterForm } from "../../../components/newsletter-form";
import { issues, stories } from "../../../data/content";

export function generateStaticParams() { return issues.map((issue) => ({ issue: issue.slug })); }
export default async function IssuePage({ params }: { params: Promise<{ issue: string }> }) {
  const { issue: issueSlug } = await params; const issue = issues.find((item) => item.slug === issueSlug); if (!issue) notFound();
  const modules = [
    { label: "The Lead", story: issue.lead, copy: "A good room does more than look good. It lets people reveal themselves at their own pace." },
    { label: "After Hours", story: stories[3], copy: "A table is rarely just a table. It is a receipt for the fantasy that the room arranged itself around you." },
    { label: "People", story: stories[7], copy: "The people who make the night look effortless are often doing the most work." },
    { label: "Internet", story: stories[5], copy: "The contemporary appetite for an inside look has eaten the old line between culture and surveillance." },
  ];
  return <article className="issue-page"><header className="issue-hero"><img src={issue.image} alt="" /><div className="issue-hero-overlay" /><div className="issue-hero-copy"><p className="eyebrow">AFTERDARK / Issue {issue.number}</p><h1>{issue.subject}</h1><p>{issue.date}</p></div></header><section className="issue-letter"><p className="eyebrow">From the desk</p><p className="issue-letter-lead">The best part of a night is rarely the part anyone posts. This week, we went looking for the rest of it.</p><p>There is a particular kind of confidence in knowing when to leave, when to stay for one more drink, and when a story is telling you more about a person than they intended. We collected a few of those stories for you. Read carefully. Then go somewhere with better lighting.</p></section><div className="issue-modules">{modules.map((module, index) => <section className={`issue-module ${index === 0 ? "issue-module--lead" : ""}`} key={module.label}><Link href={`/stories/${module.story.slug}`} className="issue-module-image"><img src={module.story.image} alt="" /></Link><div><p className="eyebrow">{module.label}</p><h2><Link href={`/stories/${module.story.slug}`}>{module.story.title}</Link></h2><p>{module.copy}</p><Link className="read-link" href={`/stories/${module.story.slug}`}>Read this <span>→</span></Link></div></section>)}</div><section className="one-more-thing"><p className="eyebrow">One more thing</p><h2>Somebody is having a better time than you. It is probably because they left their phone in their coat.</h2></section><section className="issue-subscribe"><p className="eyebrow">Get the next issue</p><h2>Friday looks good on you.</h2><NewsletterForm /></section></article>;
}
