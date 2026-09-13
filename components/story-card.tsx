import Link from "next/link";
import { Story } from "../data/content";

export function StoryCard({ story, tone = "dark", className = "" }: { story: Story; tone?: "dark" | "light"; className?: string }) {
  return <article className={`story-card story-card--${tone} ${className}`}>
    <Link href={`/stories/${story.slug}`} className="story-card-image"><img src={story.image} alt="" /></Link>
    <div className="story-card-copy"><Link href={`/${story.category.slug}`} className="eyebrow">{story.category.name}</Link><h3><Link href={`/stories/${story.slug}`}>{story.title}</Link></h3><p>{story.excerpt}</p><Link className="read-link" href={`/stories/${story.slug}`}>Read story <span>→</span></Link></div>
  </article>;
}
