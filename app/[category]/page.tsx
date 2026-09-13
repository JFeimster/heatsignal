import { notFound } from "next/navigation";
import { StoryCard } from "../../components/story-card";
import { categoryInfo, CategorySlug, stories } from "../../data/content";

const categories = Object.keys(categoryInfo) as CategorySlug[];
export function generateStaticParams() { return categories.map((category) => ({ category })); }
export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  if (!categories.includes(category as CategorySlug)) notFound();
  const info = categoryInfo[category as CategorySlug];
  const matchingStories = stories.filter((story) => story.category.slug === category);
  return <section className={`category-page category-page--${category} page-padding`}><div className="category-hero"><p className="eyebrow">{info.eyebrow}</p><h1>{info.title}</h1><p>{info.intro}</p></div><div className="category-story-list">{matchingStories.map((story, index) => <StoryCard key={story.slug} story={story} className={index === 0 ? "category-story-lead" : ""} />)}</div></section>;
}
