import { SectionTitle } from "../../components/section-title";
import { StoryCard } from "../../components/story-card";
import { stories } from "../../data/content";

export const metadata = { title: "Stories" };

export default function StoriesPage() {
  return <section className="archive-page page-padding"><div className="archive-intro"><p className="eyebrow">All stories</p><h1>Stories for people who stay curious after dark.</h1><p>Dating, culture, private ambition, the people with an interesting angle, and everything the feed gets half right.</p></div><SectionTitle number="All" title="The Latest" /><div className="story-archive-grid">{stories.map((story, index) => <StoryCard key={story.slug} story={story} className={index === 0 ? "story-archive-first" : ""} />)}</div></section>;
}
