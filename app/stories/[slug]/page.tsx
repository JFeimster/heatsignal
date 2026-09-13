import Link from "next/link";
import { notFound } from "next/navigation";
import { NewsletterForm } from "../../../components/newsletter-form";
import { StoryCard } from "../../../components/story-card";
import { stories } from "../../../data/content";

export function generateStaticParams() { return stories.map((story) => ({ slug: story.slug })); }
export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const story = stories.find((item) => item.slug === slug); if (!story) notFound();
  const related = stories.filter((item) => item.slug !== story.slug && item.category.slug === story.category.slug).slice(0, 2);
  const next = stories[(stories.findIndex((item) => item.slug === story.slug) + 1) % stories.length];
  return <article className="article-page"><header className="article-header page-padding"><Link href={`/${story.category.slug}`} className="eyebrow">{story.category.name}</Link><h1>{story.title}</h1><p className="article-dek">{story.dek}</p><div className="article-byline"><span>By {story.author}</span><span>{story.date}</span><span>{story.readTime}</span></div></header><figure className="article-hero"><img src={story.image} alt="" /><figcaption>AFTERDARK / {story.category.name}</figcaption></figure><div className="article-layout page-padding"><aside className="article-share"><span>Share</span><a href="#">Copy link</a><a href="#">Post</a></aside><div className="article-body">{story.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}{story.pullQuote && <blockquote>{story.pullQuote}</blockquote>}<figure className="article-inline-image"><img src={story.category.slug === "desire" ? "/assets/afterdark.png" : "/assets/night.png"} alt="" /><figcaption>There is always another version of the story.</figcaption></figure><p>The details change, but the feeling does not. That is what makes the good stories worth returning to: you recognize them before you can quite explain why.</p></div></div><section className="article-signup"><div><p className="eyebrow">Stay out a little later</p><h2>The next story arrives on Friday.</h2></div><NewsletterForm compact /></section><section className="related-stories page-padding"><p className="eyebrow">Keep reading</p><div>{related.map((item) => <StoryCard key={item.slug} story={item} />)}</div></section><Link className="next-story" href={`/stories/${next.slug}`}><img src={next.image} alt="" /><div><p className="eyebrow">Next story</p><h2>{next.title}</h2><span>Keep going →</span></div></Link></article>;
}
