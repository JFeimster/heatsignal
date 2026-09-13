import Link from "next/link";

export function SectionTitle({ number, title, href }: { number: string; title: string; href?: string }) {
  const titleNode = <><span>{number}</span><b>{title}</b></>;
  return <div className="section-title">{href ? <Link href={href}>{titleNode}<i>View all ↗</i></Link> : titleNode}</div>;
}
