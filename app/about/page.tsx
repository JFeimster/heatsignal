import { NewsletterForm } from "../../components/newsletter-form";

export const metadata = { title: "About" };

export default function AboutPage() {
  return <><section className="about-hero page-padding"><p className="eyebrow">About AFTERDARK</p><h1>A serious digital magazine with sex appeal.</h1><p>AFTERDARK is about the people, places, desires and strange social rituals that make life interesting after dark.</p></section><section className="about-body page-padding"><div><p className="eyebrow">What we are here for</p><h2>Beautiful stories with a pulse.</h2></div><div><p>We publish profiles, cultural dispatches, conversations about attraction, sharp takes on the internet, and reports from the rooms where something is actually happening.</p><p>We do not mistake access for insight. We do not write like a company announcement. We like good photographs, vivid characters, and the useful friction between taste and appetite.</p><p>Think of this as your excuse to care about the things people care about when the day finally lets go.</p></div></section><section className="about-signup"><p className="eyebrow">Every Friday</p><h2>Come out with us.</h2><NewsletterForm /></section></>;
}
