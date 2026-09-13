export type CategorySlug = "after-hours" | "people" | "desire" | "internet";
export type Story = {
  slug: string; title: string; excerpt: string; image: string; category: { name: string; slug: CategorySlug };
  author: string; date: string; readTime: string; dek: string; body: string[]; pullQuote?: string;
};

export const stories: Story[] = [
  {
    slug: "the-hotel-bar-is-still-the-best-social-network", title: "The Hotel Bar Is Still the Best Social Network", category: { name: "After Hours", slug: "after-hours" }, image: "/assets/hero.png", author: "Mara Venn", date: "September 11, 2026", readTime: "7 min read",
    excerpt: "No app has ever beaten the useful ambiguity of a good bar with nowhere else to be.", dek: "The hotel bar does not need your algorithm, your follow request, or an explanation for why you are there.",
    body: ["At 10:47 on a Thursday, the hotel bar is an index of private ambition. There is a man taking a call he wants everyone to hear. There is a woman in a long black coat who has already decided she will not stay for a second drink. There is a table of three creative directors being very careful not to look like a table of three creative directors.", "This is why the old social network still works. Nobody arrives with the burden of declaring their purpose. You can be meeting someone, avoiding someone, celebrating a deal, or simply occupying the kind of chair that makes a long week feel temporary.", "The best rooms understand that a little opacity is good customer service. The lighting is kind. The music has an opinion but does not demand one. The martini costs enough to make you consider it, then tastes like the answer was obvious."],
    pullQuote: "A good hotel bar is where people go to be seen without agreeing to be known."
  },
  {
    slug: "the-business-of-being-wanted", title: "The Business of Being Wanted", category: { name: "Desire", slug: "desire" }, image: "/assets/afterdark.png", author: "Quinn Lyle", date: "September 8, 2026", readTime: "9 min read",
    excerpt: "Attention became a market. Then everyone forgot who was buying and who was selling.", dek: "Beauty, access, responsiveness: the old currency of attraction has acquired a price list and a payment processor.",
    body: ["There are people who know exactly what their attention is worth. They do not announce it, because announcing it is for people still hoping to be discovered. They answer selectively. They wear a little less makeup than the room expects. They leave before the story has an ending.", "Wanting to be wanted is ordinary. Turning that desire into a business is an ancient trick with a new set of analytics. It can make a person rich, bored, untouchable, or all three before the sun comes up.", "The uncomfortable part is not that desire has an economy. It always did. The uncomfortable part is how quickly everyone else becomes a spectator of their own appetite."],
    pullQuote: "There is no neutral way to want attention once it starts paying rent."
  },
  {
    slug: "the-strange-career-of-being-famous-online", title: "The Strange Career of Being Famous Online", category: { name: "Internet", slug: "internet" }, image: "/assets/portrait.png", author: "Jordan Sloane", date: "September 6, 2026", readTime: "6 min read",
    excerpt: "A close look at people who turn visibility into a job, a self, and eventually a strange little cage.", dek: "Internet fame has all the old glamour and almost none of the old distances.",
    body: ["The weirdest thing about being famous online is how much of your day is spent being accessible. You are always one camera roll away from work. You are always a little bit late to your own dinner because something that looks like your life is also now your job.", "The new celebrity is expected to be intimate at scale. A movie star can be silent for six months and still appear mysterious. A creator disappears for a week and people start reading it as a personal affront.", "That pressure produces a kind of public performance so polished that the person underneath begins to look like an intern for the persona."],
    pullQuote: "Fame used to create distance. Now it invoices you for proximity."
  },
  {
    slug: "the-economics-of-the-vip-room", title: "The Economics of the VIP Room", category: { name: "After Hours", slug: "after-hours" }, image: "/assets/night.png", author: "Elias Hart", date: "September 3, 2026", readTime: "8 min read",
    excerpt: "A table is rarely just a table. It is a visible receipt for the fantasy that the room arranged itself around you.", dek: "Inside the discreet math of bottles, ropes, promoters, and the very expensive business of being central.",
    body: ["Every VIP room has an official economy and a shadow one. The official version is visible on a menu: two bottles, a service charge, an opening number no one says out loud. The shadow economy is what you are really buying: a better angle, a faster entrance, a temporary fiction about where you belong.", "The experienced buyer does not confuse the table with intimacy. They understand that status is a rental business. You pay for the view, the velvet, the staff who remembers your name, and the possibility that somebody interesting will decide to sit down.", "The bill arrives before the feeling does. That is not a flaw. It is the arrangement."],
  },
  {
    slug: "why-everyone-lies-about-attraction", title: "Why Everyone Lies About What They Find Attractive", category: { name: "Desire", slug: "desire" }, image: "/assets/money.png", author: "Mara Venn", date: "August 30, 2026", readTime: "5 min read",
    excerpt: "Our stated type is usually a public-relations exercise. The truth is more inconvenient.", dek: "Attraction is full of private contradictions, and almost nobody wants to put theirs on the record.",
    body: ["Ask anyone what they find attractive and they will hand you a clean answer: confidence, kindness, ambition, someone who makes them laugh. None of this is false. It is just carefully incomplete.", "Real attraction often has bad timing, poor branding, and a tendency to reveal itself in the middle of a sentence about something else. It likes specificity. It ignores values statements. It is embarrassingly interested in voice, posture, attention, and the small evidence that somebody might be difficult.", "The lie is not that we have ideals. The lie is that ideals are where the story ends."],
  },
  {
    slug: "everyone-wants-access", title: "Everyone Wants Access. Nobody Wants to Admit It.", category: { name: "Internet", slug: "internet" }, image: "/assets/afterdark.png", author: "Quinn Lyle", date: "August 27, 2026", readTime: "6 min read",
    excerpt: "The desire for an inside look has eaten the old distinction between culture and surveillance.", dek: "The mood board, the close-friends story, the debrief: our favorite contemporary genre is somebody else letting us in.",
    body: ["A little access used to be glamorous because it was scarce. Now there are process videos, getting-ready videos, apology videos, private group chats posted publicly, and the strange ritual of watching somebody rich open a delivery box.", "The appetite is not merely envy. It is social rehearsal. We watch people enter rooms so we can learn what the room might ask of us. We watch their dates fail so our own embarrassment has company.", "The person with access has to keep feeding it. The person watching insists they are above it. Both are lying a little."],
  },
  {
    slug: "men-paying-thousands-to-be-ignored", title: "The Men Paying Thousands to Be Ignored", category: { name: "Desire", slug: "desire" }, image: "/assets/portrait.png", author: "Jordan Sloane", date: "August 23, 2026", readTime: "7 min read",
    excerpt: "For some people, the most expensive luxury is the feeling that someone could answer but chooses not to.", dek: "The scarcity economy has found an intimate edge case: desire that gets more potent when it is denied.",
    body: ["The message is seen. Nothing comes back. The silence is not an accident; it is part of the product. There are entire economies built around attention withheld with professional precision.", "To be clear, everybody understands the bargain. The customer is not buying a relationship. They are buying the heightened atmosphere around almost having one, wrapped in the certainty that the other person does not need them.", "There are worse ways to spend money. There are certainly less revealing ones."],
  },
  {
    slug: "the-room-feels-different", title: "This Is Why the Room Feels Different", category: { name: "People", slug: "people" }, image: "/assets/night.png", author: "Elias Hart", date: "August 20, 2026", readTime: "10 min read",
    excerpt: "An interview with the host who can tell, within ten seconds, whether a party will become a story.", dek: "She does not call herself a curator. She just knows who should arrive together and who should never meet.",
    body: ["She checks the room as if it is a living thing. Is the temperature too polite? Is anyone standing alone for the wrong reasons? Has somebody with a loud laugh found the quiet corner? A good host notices all of it before anybody else knows there is something to notice.", "Her guest lists have the logic of a good song: one unexpected verse, enough tension, no dead air. She is vague when we ask how she does it, which is probably the most useful answer.", "The room feels different because somebody cared before you got there. That is the whole secret."],
  },
  {
    slug: "everybody-lies-after-midnight", title: "Everybody Lies After Midnight", category: { name: "After Hours", slug: "after-hours" }, image: "/assets/hero.png", author: "Mara Venn", date: "August 17, 2026", readTime: "4 min read",
    excerpt: "The first honest thing most people say on a night out arrives a little after they should have gone home.", dek: "After midnight, the performance gets softer and the information gets better.",
    body: ["The midnight lie is usually harmless. I am not tired. I am over it. I am just having one. It keeps the night moving and the story open.", "Then, eventually, someone says the useful thing. They confess a bad desire, name the person they cannot stop thinking about, or admit that the job everyone envies makes them feel dead inside.", "It is not the hour that makes people honest. It is the fact that their usual audience has gone home."],
  },
  {
    slug: "the-persona-became-more-valuable", title: "When the Persona Becomes More Valuable Than the Person", category: { name: "People", slug: "people" }, image: "/assets/money.png", author: "Quinn Lyle", date: "August 13, 2026", readTime: "9 min read",
    excerpt: "The personal brand has a dark little talent: it can thrive even when its owner needs a day off.", dek: "A profile of the increasingly common person with a business entity, a fan base, and no private self left to invoice.",
    body: ["At a certain scale, a persona is not an expression. It is an asset. It has a tone guide, a revenue plan, a social strategy, and a team whose job is to make sure the public version continues to feel spontaneous.", "The person does not disappear exactly. They become operations. Their bad mood becomes a communications question. Their breakup becomes either a liability or content, depending on the week.", "The most modern form of success may be becoming too valuable to live like yourself."],
  },
  {
    slug: "the-beautiful-boring-date", title: "The Beautiful, Boring Date", category: { name: "Desire", slug: "desire" }, image: "/assets/night.png", author: "Elias Hart", date: "August 10, 2026", readTime: "5 min read",
    excerpt: "Attraction is no defense against the fatal condition of having absolutely nothing to say.", dek: "What a famously lovely dinner teaches us about chemistry, conversation, and the point of a second drink.",
    body: ["There is a special kind of grief reserved for a beautiful date who is impossible to talk to. The face makes a case. The silence wins it.", "We keep mistaking visual appeal for narrative potential. Then the menu arrives and neither person can find a question that does not sound like intake paperwork.", "Beauty opens the door. Curiosity is what gets you past the host stand."],
  },
];

export const issues = [
  { number: "001", slug: "youre-not-supposed-to-be-here", date: "September 12, 2026", subject: "You’re Not Supposed to Be Here", image: "/assets/hero.png", lead: stories[0], summary: "The hotel bar, the price of attention, and a corner of the internet that learned too much about desire." },
  { number: "002", slug: "everybody-lies-after-midnight", date: "September 5, 2026", subject: "Everybody Lies After Midnight", image: "/assets/night.png", lead: stories[8], summary: "The soft disclosures that arrive late, plus the calculus behind a table with a view." },
  { number: "003", slug: "the-business-of-being-wanted", date: "August 29, 2026", subject: "The Business of Being Wanted", image: "/assets/afterdark.png", lead: stories[1], summary: "Beauty has a price, access has a cost, and nobody wants to say which side they are on." },
  { number: "004", slug: "nobody-admits-they-care", date: "August 22, 2026", subject: "Nobody Admits They Care About This", image: "/assets/portrait.png", lead: stories[2], summary: "Fame, attention, and the people who insist they only opened the app for a second." },
];

export const categoryInfo: Record<CategorySlug, { title: string; intro: string; eyebrow: string }> = {
  "after-hours": { eyebrow: "Nightlife / dating / vice", title: "When the city gets honest.", intro: "The rooms, rituals and small acts of social theater that make the night worth following." },
  people: { eyebrow: "Profiles / interviews / characters", title: "People who make a room move.", intro: "A closer look at the personalities, performers, creators and professional enigmas shaping the moment." },
  desire: { eyebrow: "Attraction / status / sex", title: "All the things we pretend are simple.", intro: "Desire has its own private logic. We follow it to the strange places it gets expensive, revealing, and very human." },
  internet: { eyebrow: "Culture / behavior / weirdness", title: "The feed after the feed.", intro: "Online culture, public longing, tiny status games, and the stories everyone is watching with the sound off." },
};
