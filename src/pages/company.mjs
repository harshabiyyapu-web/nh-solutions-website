// Company, work, industry, resource and legal pages.
import { IND_LABEL, SVC_LABEL } from "../cases.mjs";
import { CO, STATS, SERVICES, INDUSTRIES, CASES, POSTS, TESTIMONIALS, tCards, ratingRow, postCard, pageHero, trust, icon, art, svcGrid, cardGrid, ctaBanner, caseSlider, process, STEPS, COMMITS, techStack, testimonials, faq, insights, statBandDark } from "../lib.mjs";

const svcIcons = { "ai-development": "ai", "generative-ai": "spark", "data-analytics": "data", "software-development": "code", "saas-development": "saas", "web-development": "web", "mobile-app-development": "mobile", "mvp-development": "rocket", "ui-ux-design": "design", "cloud-devops": "cloud", "seo-content": "search", "performance-marketing": "megaphone", "hire-developers": "team" };
const svcBlurb = {
  "ai-development": "Agents, assistants and prediction models that cut manual work and sharpen decisions.",
  "generative-ai": "Copilots, chatbots and content tools grounded in your own data and voice.",
  "data-analytics": "One trusted source of truth, dashboards your team opens daily, and clean attribution.",
  "software-development": "Custom platforms shaped around how your business really runs.",
  "saas-development": "Multi-tenant SaaS with billing, onboarding and analytics built in from day one.",
  "web-development": "Fast, search-ready websites, publishing platforms and web apps.",
  "mobile-app-development": "iOS and Android apps built for retention and real-world networks.",
  "mvp-development": "The smallest product that proves your business, launched in weeks.",
  "ui-ux-design": "Research-led design that makes complex products feel obvious.",
  "cloud-devops": "Stable, automated, cost-efficient infrastructure on AWS and GCP.",
  "seo-content": "Technical SEO and content systems from a team that ranks its own sites.",
  "performance-marketing": "Meta and Google ads scaled on contribution margin, not vanity ROAS.",
  "hire-developers": "Vetted engineers and designers who join your team within days.",
};

const commonFaqs = [
  ["What services does NH Solutions offer?", "AI development, generative AI, data & analytics, custom software, SaaS, web and mobile apps, MVPs, product design, cloud & DevOps, SEO & content engineering, performance marketing and dedicated teams."],
  ["Where is NH Solutions based?", "We're headquartered in India and work with clients across India, the Middle East, the UK and North America."],
  ["What makes you different from other agencies?", "We operate our own products — a media network with millions of monthly readers, a D2C brand and an AI SaaS — so we make decisions like owners and measure work by business outcomes."],
  ["How do engagements usually start?", "With a free 30-minute discovery call, followed by a written proposal with scope, timeline and an itemised estimate within 3–5 working days."],
  ["Who leads NH Solutions?", "NH Solutions is led by co-founders Naman Seth (Technology & Operations, Delhi) and Harsha Biyyapu (Product & Growth). Naman owns architecture, team management, planning and execution on every build; Harsha owns product strategy, SEO and growth."],
  ["Do you sign NDAs?", "Yes, before any detailed discussion if you need one."],
  ["Who owns the code and IP?", "You do — 100% — from the first commit."],
  ["What engagement models do you offer?", "Fixed-scope projects, dedicated teams, growth retainers, AI sprints and staff augmentation."],
  ["How do you communicate during projects?", "Shared project boards, weekly demos, written updates and a dedicated project lead on Slack or WhatsApp."],
  ["Do you provide support after launch?", "Every project includes 30 days of free fixes, then optional support plans with defined response times."],
  ["How do you price projects?", "Fixed price for well-defined scope; monthly rates for dedicated teams and retainers. Estimates are always itemised."],
  ["Can you work with our in-house team?", "Yes. We can lead the build or work inside your repo, sprints and tools."],
  ["Do you work with early-stage startups?", "Yes — MVPs for founders are a big part of our work, and we've been founders ourselves."],
];

const pages = [];

// Services hub
pages.push({
  path: "services.html", title: "Services | NH Solutions", desc: "AI, software, product and growth services from NH Solutions.",
  body: `${pageHero({ crumb: "Services", title: "One studio for everything between idea and revenue", text: "Thirteen services across four practices — AI & data, engineering, product and growth. Use one, or hand us the whole problem. Either way, one senior team owns the result." })}
${trust()}
${[...new Set(SERVICES.map((s) => s.group))].map((g, gi) => `<section class="${gi % 2 ? "bg-soft" : ""}"><div class="wrap"><div class="sec-head"><span class="eyebrow">Practice 0${gi + 1}</span><h2>${g}</h2></div>${svcGrid(SERVICES.filter((s) => s.group === g).map((s) => [svcIcons[s.slug], s.name, svcBlurb[s.slug], `${s.slug}.html`]))}</div></section>`).join("")}
${ctaBanner()}
${process(STEPS, COMMITS)}
${statBandDark()}
${faq(commonFaqs.slice(0, 6))}`,
});

// About
pages.push({
  path: "about.html", title: "About Us | NH Solutions", desc: "NH Solutions is a builder-led AI, software and growth company that runs its own products.",
  body: `${pageHero({ crumb: "About us", title: "Operators first. Builders always.", text: "NH Solutions is an AI, software and growth company founded by operators. We run our own publishing network, D2C brand and AI SaaS, and bring that hands-on experience to every client we work with.", img: "about-team" })}
<section><div class="wrap value-grid">
  <div class="sec-head"><span class="eyebrow">Our story</span><h2>We started by building for ourselves</h2>
  <p>NH Solutions started by building and growing its own digital properties — a publishing network that now reaches 3–5 million readers a month. Along the way we built the publishing tech, the SEO engine and the analytics to run it.</p>
  <p>Then came a direct-to-consumer furniture brand we scaled 4× through performance marketing, and a multi-model AI workspace we built and run in-house. Each venture taught us something agencies rarely learn: what it feels like when the product is yours and the money is yours.</p>
  <p>As the work grew, Harsha teamed up with <b>Naman Seth</b> in Delhi — a technologist with rare depth across architecture, backend systems and AI, and the operating discipline to run teams and execute a business plan week after week. Naman built the delivery engine that lets NH Solutions take on complex, high-stakes builds with confidence.</p><p>Today we put that operator mindset to work for founders, publishers and growing businesses — designing, engineering and growing products as if they were our own.</p></div>
  <div><div class="value-list">${STATS.map(([b, s]) => `<div class="reveal"><b class="grad-text">${b}</b><span>${s}</span></div>`).join("")}</div></div>
</div></section>
${trust()}
<section class="bg-soft"><div class="wrap">
  <div class="card-grid two" style="margin-bottom:48px">
    <div class="card reveal">${icon("target")}<h3>Our mission</h3><p>Help ambitious businesses build digital products that earn their keep — useful to customers, profitable to run and built to last.</p></div>
    <div class="card reveal">${icon("eye")}<h3>Our vision</h3><p>To be India's most trusted builder-led product studio, known for outcomes we can show, not promises we make.</p></div>
  </div>
  <div class="sec-head center"><h2>What we won't compromise on</h2></div>
  ${cardGrid([["heart", "Act like owners", "We spend your budget the way we spend our own."], ["bolt", "Bias to shipping", "Working software beats perfect plans."], ["eye", "Radical transparency", "Honest estimates, open boards, early bad news."], ["target", "Outcomes over output", "We measure success in business results."], ["team", "Senior by default", "Experienced people on every project."], ["spark", "Keep learning", "We test new tools on our own products first."]], "three")}
</div></section>
<section><div class="wrap">
  <div class="sec-head"><h2>What we do</h2><p>Four practices, one accountable team.</p></div>
  ${svcGrid([["ai", "AI & Data", "AI agents, generative AI apps, LLM systems and analytics.", "ai-development.html", ["AI Development", "Generative AI", "Data & Analytics"]], ["code", "Engineering", "Custom software, SaaS, web and mobile applications.", "software-development.html", ["Custom Software", "SaaS", "Web & Mobile"]], ["design", "Product", "MVPs, product design and cloud infrastructure.", "mvp-development.html", ["MVP Development", "UI/UX Design", "Cloud & DevOps"]], ["chart", "Growth", "SEO, content engineering and performance marketing.", "seo-content.html", ["SEO & Content", "Performance Marketing", "Dedicated Teams"]]])}
</div></section>
${ctaBanner("Talk to a technology expert", "Tell us what you're building. A senior engineer will reply within one business day.", "Talk to an expert")}
<section id="leadership"><div class="wrap">
  <div class="sec-head"><span class="eyebrow">Leadership</span><h2>Two co-founders. Every project.</h2><p>NH Solutions is run by two co-founders with complementary strengths — one makes sure it is built right, the other makes sure it wins in the market.</p></div>
  <div class="cofounders">${CO.founders.map((f) => `<article class="cf-card reveal" id="${f.initials.toLowerCase()}">
    <div class="cf-top"><span class="cf-avatar">${f.initials}</span><div><b>${f.name}</b><small>${f.role} · ${f.city}</small></div></div>
    <p class="cf-short">${f.short}</p>
    <p style="margin:0">${f.bio}</p>
    <ul class="check-list">${f.points.map((x) => `<li>${x}</li>`).join("")}</ul>
    <blockquote>“${f.quote}”</blockquote>
  </article>`).join("")}</div>
  <div style="height:28px"></div>
  <div class="team-grid">${[["EN", "Engineering", "Full-stack, backend and mobile engineers led by senior architects."], ["AI", "AI & Data", "LLM, RAG and data engineers who build and evaluate AI systems."], ["DS", "Product Design", "Researchers and UI/UX designers who prototype before we build."], ["GR", "Growth", "SEO specialists and performance marketers who own outcomes."], ["ED", "Editorial", "Writers and editors behind content read by millions each month."], ["DL", "Delivery", "Project leads who keep scope, timelines and budgets visible."]].map(([a, n, r]) => `<div class="member reveal"><span class="avatar">${a}</span><div><b>${n}</b><small>${r}</small></div></div>`).join("")}</div>
</div></section>
${testimonials()}
${faq(commonFaqs.slice(0, 7), "About NH Solutions: FAQs")}
${insights()}`,
});

// Portfolio
const portCard = (c) => `<article class="port-card reveal" data-tags="${c.ind} ${c.svc}"><a href="case-${c.id}.html"><div class="thumb">${art(c.img, "", "")}</div><div class="body"><span class="ind">${IND_LABEL[c.ind]} · ${SVC_LABEL[c.svc]}</span><h3>${c.title}</h3><div class="port-metrics">${c.out.map(([b, s]) => `<div><b>${b}</b><span>${s}</span></div>`).join("")}</div><p>${c.text}</p><span class="link-arrow">Read case study</span></div></a></article>`;
pages.push({
  path: "portfolio.html", title: "Our Work & Case Studies | NH Solutions", desc: "Case studies across AI, SaaS, publishing backends, e-commerce and web from NH Solutions.",
  body: `${pageHero({ crumb: "Work", title: "Work that moved the numbers", text: "${CASES.length} case studies — from AI SaaS and D2C growth to the backend systems that run high-traffic publishing. Client names are withheld; the work and the numbers are real.", ctas: [["Start your project", "contact.html"]] })}
<section><div class="wrap">
  <div class="filter-group" data-filter-group><small>By industry</small><div class="chips" style="margin:0 0 14px"><button class="chip active" data-filter="all">All work</button>${Object.entries(IND_LABEL).map(([k, v]) => `<button class="chip" data-filter="${k}">${v}</button>`).join("")}</div>
  <small>By service</small><div class="chips" style="margin:0">${Object.entries(SVC_LABEL).map(([k, v]) => `<button class="chip" data-filter="${k}">${v}</button>`).join("")}</div></div>
  <div class="port-grid">${CASES.map(portCard).join("")}</div>
</div></section>
${ctaBanner("Ready to reimagine how your business runs online?", "From AI products to growth engines — let's build something worth writing a case study about.", "Contact us")}`,
});

// Case studies
CASES.forEach((c) => {
  const more = CASES.filter((x) => x.id !== c.id && (x.svc === c.svc || x.ind === c.ind)).concat(CASES.filter((x) => x.id !== c.id)).filter((x, i, arr) => arr.indexOf(x) === i).slice(0, 3);
  pages.push({
    path: `case-${c.id}.html`, title: `Case Study: ${c.name} | NH Solutions`, desc: c.text.slice(0, 155),
    body: `${pageHero({ crumb: `<a href="portfolio.html">Work</a> / ${c.name}`, title: c.title, text: c.text, badges: c.tags, img: c.img, ctas: [["Build something similar", "contact.html"], ["All case studies", "portfolio.html"]] })}
<section style="padding-bottom:0"><div class="wrap"><div class="stat-band three reveal" style="background:var(--dark)">${c.out.map(([b, s]) => `<div><b>${b}</b><span>${s}</span></div>`).join("")}</div></div></section>
<section><div class="wrap value-grid">
  <div class="sec-head"><span class="eyebrow">The challenge</span><h2>What needed to change</h2></div>
  <div><p style="font-size:1.1rem">${c.challenge}</p><div class="tags">${c.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div></div>
</div></section>
<section class="bg-soft"><div class="wrap">
  <div class="sec-head"><span class="eyebrow">Our approach</span><h2>How we solved it</h2></div>
  <div class="process two">${c.approach.map(([h, p]) => `<div class="step reveal" style="background:#fff"><h3>${h}</h3><p>${p}</p></div>`).join("")}</div>
</div></section>
<section><div class="wrap value-grid">
  <div class="sec-head"><span class="eyebrow">The results</span><h2>Outcomes we're accountable for</h2><p>Measured against the targets agreed during discovery.</p></div>
  <div class="value-list">${c.out.map(([b, s]) => `<div class="reveal"><b class="grad-text">${b}</b><span>${s}</span></div>`).join("")}<div class="reveal"><b class="grad-text">${c.stack.length}</b><span>Core technologies in the build</span></div></div>
</div></section>
<section class="bg-soft"><div class="wrap"><div class="sec-head"><h2>Technology used</h2></div><div class="tab-panel active">${c.stack.map((t) => `<div class="tech"><i>${t.slice(0, 2)}</i>${t}</div>`).join("")}</div></div></section>
<section><div class="wrap"><div class="sec-row"><div class="sec-head"><h2>More case studies</h2></div><a class="btn btn-outline-dark" href="portfolio.html">All work</a></div>
<div class="port-grid three" style="margin-top:0">${more.map(portCard).join("")}</div></div></section>
${ctaBanner()}`,
  });
});

// Contact
pages.push({
  path: "contact.html", title: "Contact Us | NH Solutions", desc: "Talk to NH Solutions about your AI, software or growth project.",
  body: `${pageHero({ crumb: "Contact", title: "Tell us what you're building. We'll show you how we'd win.", text: "Share an idea, a stuck project or a product that's outgrown its stack. A senior engineer — never a sales script — replies within one business day with a first take.", img: "office", ctas: [["Send a message", "#contact"], ["Email us", `mailto:${CO.salesEmail}`]] })}
<section id="book"><div class="wrap">
  <div class="sec-head center"><h2>Pick the way you like to start</h2></div>
  ${cardGrid([["clock", "Book a 30-min call", "Speak directly with a co-founder — Naman Seth for technology and delivery, Harsha Biyyapu for product and growth."], ["briefcase", "Send a brief", "Share a document or deck through the form below and get a written proposal in 3–5 days."], ["team", "Hire a team", "Need developers quickly? Get matched profiles within 48 hours."]], "three")}
</div></section>
${faq(commonFaqs.slice(3, 9), "Before you reach out")}
<section><div class="wrap"><div class="sec-head center"><h2>Prefer to talk right now?</h2><p>Call or WhatsApp ${CO.phones[0][1]} · ${CO.hours}</p><a class="btn btn-grad" href="https://wa.me/${CO.phones[1][1].replace(/\D/g, "")}">Chat on WhatsApp</a></div></div></section>`,
});

// Industries hub
const indData = [
  ["media-publishing", "news", "Media & Publishing", "We run a publishing network with millions of monthly readers, so we build newsroom tech from the inside out.", ["Headless CMS & newsroom tools", "Google News & Discover SEO", "Paywalls & subscriptions", "Ad-tech & Core Web Vitals", "Push & WhatsApp distribution", "AI-assisted editorial workflows"]],
  ["ecommerce-d2c", "cart", "E-commerce & D2C", "We've scaled our own D2C brand 4×. We know where storefronts leak money and how to fix it.", ["Shopify & headless storefronts", "Meta & Google ads", "Server-side tracking", "Catalog & inventory systems", "Retention & loyalty flows", "Marketplace integrations"]],
  ["edtech", "edu", "Education", "Learning platforms that keep students engaged and give educators clear visibility.", ["LMS platforms", "Live class apps", "AI tutors & doubt solvers", "Assessment engines", "Parent & student apps", "Course marketplaces"]],
  ["fintech", "bank", "Fintech", "Secure, compliance-ready financial products designed for trust from the first screen.", ["Payments & wallets", "Lending platforms", "KYC & onboarding", "Personal finance apps", "Fraud detection with AI", "Reporting dashboards"]],
  ["healthcare", "health", "Healthcare", "Patient and clinic software that reduces admin work and protects sensitive data.", ["Telemedicine apps", "Clinic management", "Appointment & billing", "Patient engagement", "Health data platforms", "AI documentation"]],
  ["real-estate", "home", "Real Estate", "Platforms and lead engines that shorten the path from enquiry to closing.", ["Listing portals", "Real estate CRMs", "Virtual tours", "Lead management", "Property management", "Broker apps"]],
];
pages.push({
  path: "industries.html", title: "Industries We Serve | NH Solutions", desc: "Domain-aware software, AI and growth for media, D2C, education, fintech, healthcare and real estate.",
  body: `${pageHero({ crumb: "Industries", title: "We've worked inside these markets — not just for them", text: "Generic developers build generic products. We bring the context that only comes from operating: how readers behave, how margins break, how regulators think." })}
<section><div class="wrap">${indData.map(([id, ic, h, p, list], i) => `<div class="alt-block" id="${id}"><div><span class="eyebrow">${icon(ic, "ico")}</span><h2>${h}</h2><p>${p}</p><ul>${list.map((l) => `<li>${l}</li>`).join("")}</ul>${["media-publishing", "ecommerce-d2c"].includes(id) ? `<a class="link-arrow" style="margin-top:18px" href="${id}.html">Explore ${h}</a>` : ""}</div><div class="alt-art reveal">${art(["ind-media", "ind-ecommerce", "ind-edtech", "ind-fintech", "ind-healthcare", "ind-realestate"][i], "", "")}</div></div>`).join("")}</div></section>
${caseSlider()}
${ctaBanner("Don't see your industry?", "Our engineering and growth practices adapt quickly. Tell us about your market and we'll show you relevant experience.", "Talk to us")}`,
});

// Two featured industry pages
const indPage = (id, title, text, offers, cases, faqs) => {
  const d = indData.find((x) => x[0] === id);
  return {
    path: `${id}.html`, title: `${d[2]} Software & Growth | NH Solutions`, desc: text.slice(0, 155),
    body: `${pageHero({ crumb: `<a href="industries.html">Industries</a> / ${d[2]}`, title, text, badges: d[4].slice(0, 4), img: ["ind-media", "ind-ecommerce"][id === "media-publishing" ? 0 : 1] })}
${trust()}
<section><div class="wrap"><div class="sec-head center"><h2>What we build for ${d[2].toLowerCase()}</h2></div>${svcGrid(offers)}</div></section>
${ctaBanner()}
<section class="bg-soft"><div class="wrap"><div class="sec-head"><h2>Relevant case studies</h2></div><div class="port-grid" style="margin-top:0">${CASES.filter((c) => cases.includes(c.id)).map(portCard).join("")}</div></div></section>
${process(STEPS, COMMITS)}
${testimonials()}
${faq(faqs, `${d[2]}: FAQs`)}
${insights()}`,
  };
};
pages.push(indPage("media-publishing", "Technology and growth for publishers, built by publishers", "We run a news and content network with 3–5 million monthly readers. Every tool, workflow and SEO tactic we offer has been tested on our own audience first.",
  [["news", "Publishing Platforms", "Headless CMS and newsroom tools built for speed and scale.", "web-development.html"], ["search", "News & Discover SEO", "Top Stories, Discover and evergreen search traffic.", "seo-content.html"], ["bolt", "Core Web Vitals", "Fast pages without sacrificing ad revenue.", "web-development.html"], ["spark", "AI Editorial Tools", "Summaries, translations and headline testing with human review.", "generative-ai.html"], ["mobile", "News Apps", "Push-driven apps with offline reading.", "mobile-app-development.html"], ["bank", "Monetisation", "Ads, subscriptions, paywalls and sponsored content.", "contact.html"]],
  ["publishing-network-seo", "regional-news-modernisation", "multi-site-analytics-command-centre", "ai-multi-site-publishing-engine"],
  [["Can you migrate our CMS without losing traffic?", "Yes — with URL parity, redirect maps and staged launches, monitored in Search Console."], ["Do you help with Google News and Discover?", "Yes, it's a core part of our own traffic strategy."], ["Do you offer content partnerships?", "Yes. As with the regional news brand in our portfolio, we can bring technology, SEO and distribution together in one partnership."], ["Can AI help our newsroom without hurting quality?", "Yes — AI for drafts, summaries and translations, always with editors in the loop."]]));
pages.push(indPage("ecommerce-d2c", "E-commerce and D2C growth from a team that runs its own brand", "We scaled our own D2C furniture brand 4× with disciplined performance marketing. Now we build and grow storefronts for brands that want profitable growth, not just traffic.",
  [["cart", "Storefront Development", "Shopify, headless or custom stores built to convert.", "web-development.html"], ["megaphone", "Performance Marketing", "Meta and Google ads scaled on contribution margin.", "performance-marketing.html"], ["target", "Tracking & Attribution", "Pixel, CAPI and server-side tracking you can trust.", "data-analytics.html"], ["mobile", "Shopping Apps", "Mobile commerce with loyalty and push.", "mobile-app-development.html"], ["data", "Inventory & Ops", "Catalog, inventory and order systems that scale.", "software-development.html"], ["search", "E-commerce SEO", "Category and product SEO for compounding organic sales.", "seo-content.html"]],
  ["d2c-furniture-growth", "lead-capture-crm-sync"],
  [["Do you work with Shopify?", "Yes — themes, custom apps and headless builds."], ["Can you manage our ads?", "Yes, inside your own ad accounts, with weekly margin-based reporting."], ["How do you fix tracking?", "Audit, then implement CAPI/server-side tracking and reconcile with actual orders."], ["What ad spend do you recommend?", "It depends on margins; we usually suggest at least ₹1–2L/month for reliable tests."]]));

// AI Lab
pages.push({
  path: "ai-lab.html", title: "NH AI Lab — Multi-Model AI Workspace | NH Solutions", desc: "Inside NH Solutions' AI Lab: our in-house multi-model AI workspace and the AI products we build for clients.",
  body: `<section class="product-band" style="padding-top:80px"><div class="wrap">
  <span class="eyebrow" style="color:#ffb3ab">Built in-house by NH Solutions</span>
  <p class="giant">AI Lab</p>
  <h2>The AI we sell, we run ourselves.</h2>
  <p style="max-width:680px;margin:0 auto 28px">Our in-house AI workspace routes each prompt to the model best suited for it, compares answers side by side, and keeps usage and costs under control. It's where we test every AI pattern before we put it in a client's product.</p>
  <div class="band-actions"><a class="btn btn-grad" href="contact.html">Request a demo</a><a class="btn btn-ghost" href="case-multi-model-ai-workspace.html">Read the case study</a></div>
  <div class="alt-art" style="max-width:960px;margin:48px auto 0;min-height:420px">${art("ai-lab", "", "")}</div>
</div></section>
<section><div class="wrap"><div class="sec-head center"><h2>What the workspace does</h2></div>
${cardGrid([["link", "Smart routing", "Sends each task to the model that's best for it on quality, speed and cost."], ["layers", "Side-by-side compare", "See how different models answer the same prompt."], ["team", "Team workspaces", "Shared prompts, folders and permissions."], ["chart", "Usage & cost tracking", "Know exactly what AI costs, per user and per team."], ["shield", "Guardrails", "Admin controls, data policies and audit logs."], ["spark", "Prompt library", "Reusable prompts that capture your best work."], ["globe", "Multilingual", "Works across English and Indian languages."], ["bolt", "Fast", "Streaming responses and caching for speed."]])}</div></section>
<section class="bg-soft"><div class="wrap"><div class="sec-head"><h2>AI products we've shipped</h2></div><div class="port-grid three" style="margin-top:0">${CASES.filter((c) => c.svc === "ai").map(portCard).join("")}</div></div></section>
${ctaBanner("Want a private AI workspace for your business?", "The architecture behind our AI Lab powers the AI products we build for clients. Let's talk about yours.", "Get your AI strategy")}
${faq([["Can we get access to the workspace?", "Yes — contact us for a demo and early access for your team."], ["Can you build a custom version for my company?", "Yes. We build private, branded AI workspaces on the same architecture, hosted in your cloud."], ["Which models does it support?", "Leading models from OpenAI, Anthropic, Google and open-source providers."], ["Is my data safe?", "We use enterprise APIs with zero-retention options and strict access controls."]], "AI Lab: FAQs")}`,
});

// Insights
pages.push({
  path: "insights.html", title: "Insights & Blog | NH Solutions", desc: "Notes on AI, SEO, growth and engineering from NH Solutions.",
  body: `${pageHero({ crumb: "Insights", title: "Field notes from people who ship", text: "No trend-chasing think pieces. Practical lessons on AI, SEO, growth and engineering — each one tested on our own businesses before we write it down.", ctas: [["Talk to the authors", "#contact"]] })}
<section><div class="wrap">
  <div data-filter-group><div class="chips"><button class="chip active" data-filter="all">All</button>${[...new Set(POSTS.map((p) => p.cat))].map((c) => `<button class="chip" data-filter="${c}">${c}</button>`).join("")}</div></div>
  <div class="insight-grid" style="margin-top:20px">${POSTS.map(postCard).join("")}</div>
</div></section>
${ctaBanner("Want these insights applied to your business?", "Book a call and we'll walk through what would work for you.", "Book a call")}`,
});
POSTS.forEach((p) => {
  const others = POSTS.filter((x) => x.slug !== p.slug).slice(0, 3);
  pages.push({
    path: `blog-${p.slug}.html`, title: `${p.t} | NH Solutions`, desc: p.e,
    body: `<section style="padding-top:56px;padding-bottom:0"><div class="wrap"><div class="article">
  <div class="breadcrumb"><a href="index.html">Home</a> / <a href="insights.html">Insights</a> / ${p.cat}</div>
  <span class="cat">${p.cat}</span><h1 style="margin-top:12px">${p.t}</h1>
  <div class="article-meta"><span class="avatar" style="width:40px;height:40px;font-size:.8rem">HB</span><span><b style="color:var(--ink)">${CO.founder}</b> · Co-founder</span><span>${p.date}</span><span>${p.read} min read</span></div>
  </div><div class="article-cover">${art(p.img, "", "")}</div>
  <article class="article">${p.body}
  <div class="author-box"><span class="avatar">HB</span><div><b style="color:var(--ink);font-family:var(--head)">${CO.founder}</b><br><small>Co-founder, NH Solutions (Product & Growth). Builds AI products, publishing systems and growth engines — and writes about what works. Technical review by co-founder Naman Seth.</small></div></div>
  </article></div></section>
${insights("Keep reading", others)}
${ctaBanner()}`,
  });
});

// Careers
pages.push({
  path: "careers.html", title: "Careers | NH Solutions", desc: "Join NH Solutions — build AI products, platforms and growth engines.",
  body: `${pageHero({ crumb: "Careers", title: "Do the best work of your career — at real scale", text: "Join a builder-led team that ships client products and runs its own. Your work will be seen by millions, measured honestly and owned by you.", img: "careers-team", ctas: [["See open roles", "#roles"], ["Send your CV", `mailto:${CO.careersEmail}`]] })}
<section><div class="wrap"><div class="sec-head"><h2>Why great people stay</h2></div>
${cardGrid([["rocket", "Ownership early", "Lead real projects from your first months."], ["globe", "Real scale", "Ship to audiences of millions."], ["spark", "Latest tools", "Work with frontier AI models daily."], ["team", "Senior mentors", "Code reviews and pairing with experienced builders."], ["clock", "Flexible work", "Hybrid and remote options."], ["heart", "Learning budget", "Courses, conferences and books covered."], ["chart", "Growth paths", "Clear levels and regular reviews."], ["handshake", "Learn from the founders", "Work directly with Naman Seth on engineering and Harsha Biyyapu on product and growth."]])}</div></section>
<section class="bg-soft" id="roles"><div class="wrap"><div class="sec-head"><h2>Open roles</h2><p>Don't see your role? Write to us anyway.</p></div>
<div class="faq" style="max-width:none">${[["Senior Full-stack Engineer", "React · Node.js · 4+ yrs · Hybrid"], ["AI/ML Engineer", "LLMs · RAG · Python · 3+ yrs"], ["Flutter Developer", "Mobile · 2+ yrs · Hybrid"], ["Product Designer", "UX/UI · Figma · 3+ yrs"], ["SEO Specialist", "Technical SEO · News SEO · 2+ yrs"], ["Performance Marketer", "Meta & Google Ads · D2C · 2+ yrs"]].map(([r, m]) => `<div class="faq-item"><button class="faq-q">${r} <small style="font-family:var(--text);font-weight:500;color:var(--muted);margin-left:auto;margin-right:16px">${m}</small></button><div class="faq-a"><div><p>Own meaningful work from day one across client products and our own ventures. Apply with your CV and links to work you're proud of: <a href="mailto:${CO.careersEmail}"><u>${CO.careersEmail}</u></a>.</p></div></div></div>`).join("")}</div></div></section>`,
});

// How we work
pages.push({
  path: "process.html", title: "How We Work | NH Solutions", desc: "NH Solutions' delivery process, engagement models and commitments.",
  body: `${pageHero({ crumb: "How we work", title: "No black boxes. No surprise invoices.", text: "Clear phases, visible progress and honest estimates — so you always know what's being built, what it costs and when it ships.", img: "workshop" })}
${process(STEPS, COMMITS)}
<section class="bg-soft"><div class="wrap"><div class="cf-card delivery reveal"><div><div class="cf-top" style="margin-bottom:18px"><span class="cf-avatar">NS</span><div><b>Naman Seth</b><small>Co-founder · Technology &amp; Operations · Delhi</small></div></div><span class="eyebrow">Who runs delivery</span><h2>Every plan is owned by Naman Seth</h2><p style="font-size:1.05rem">Our delivery process was designed — and is personally run — by co-founder <b>Naman Seth</b>. Naman combines hands-on technical depth with the rigour of an operator: he turns your goals into a costed plan, staffs the right engineers, reviews architecture and code, and co-executes alongside your team until launch. The result clients describe most often: no surprises.</p><blockquote class="lead-quote">“A plan is only as good as the system that executes it. My job is to make sure ours never misses.” — Naman Seth</blockquote></div></div></div></section>
${statBandDark("Engagement models that fit how you work")}
${techStack()}
${faq(commonFaqs.slice(6, 12), "Working with us: FAQs")}`,
});

// Testimonials
pages.push({
  path: "testimonials.html", title: "Client Testimonials | NH Solutions", desc: "What clients say about working with NH Solutions.",
  body: `${pageHero({ crumb: "Testimonials", title: "Don't take our word for it", text: "Every story here began with a real business problem. Here's how the people we work with describe the experience." })}
<section><div class="wrap"><div class="card-grid three">${tCards()}</div>${ratingRow()}</div></section>
${caseSlider()}
${ctaBanner()}`,
});

// FAQs
pages.push({
  path: "faqs.html", title: "FAQs | NH Solutions", desc: "Answers to common questions about working with NH Solutions.",
  body: `${pageHero({ crumb: "FAQs", title: "Frequently asked questions", text: "Everything founders and product leaders usually ask before working with us. Can't find your answer? Just ask.", side: "none", ctas: [["Ask us anything", "#contact"]] })}
${faq(commonFaqs, "General questions", "Services, pricing, process and ownership.")}`,
});

// Legal + sitemap
const legal = (path, title, sections) => ({
  path, title: `${title} | NH Solutions`, desc: `${title} for NH Solutions.`,
  body: `<section style="padding-top:60px"><div class="wrap" style="max-width:820px"><div class="breadcrumb"><a href="index.html">Home</a> / ${title}</div><h1>${title}</h1><p><em>Last updated: October 1, 2026.</em></p>${sections.map(([h, p]) => `<h3 style="margin-top:32px">${h}</h3><p>${p}</p>`).join("")}</div></section>`,
});
pages.push(legal("privacy-policy.html", "Privacy Policy", [["Information we collect", "Details you provide through forms (name, email, phone, company, message) and basic analytics data such as pages visited and device type."], ["How we use it", "To respond to enquiries, deliver services, improve our website and, with consent, send occasional updates."], ["Sharing", "We don't sell personal data. We share it only with service providers who help us operate, under confidentiality obligations."], ["Cookies", "We use essential cookies and, with consent, analytics cookies. You can control cookies in your browser settings."], ["Your rights", "You can request access, correction or deletion of your data at any time by emailing " + CO.email + "."], ["Contact", "Questions about this policy: " + CO.email + "."]]));
pages.push(legal("terms.html", "Terms of Use", [["Use of this website", "Content on this site is for general information and may change without notice."], ["Intellectual property", "Site content, branding and design belong to NH Solutions unless stated otherwise."], ["Client work", "Project terms, ownership and confidentiality are governed by individual client agreements."], ["Liability", "We aren't liable for decisions made solely on the basis of website content."], ["Governing law", "These terms are governed by the laws of India."]]));
const all = () => pages.map((p) => p.path);
pages.push({
  path: "sitemap.html", title: "Sitemap | NH Solutions", desc: "All pages on the NH Solutions website.",
  body: `<section style="padding-top:60px"><div class="wrap"><div class="breadcrumb"><a href="index.html">Home</a> / Sitemap</div><h1>Sitemap</h1>
  <div class="footer-cols"><div><h5>Main</h5><a href="index.html">Home</a><a href="services.html">Services</a><a href="industries.html">Industries</a><a href="portfolio.html">Work</a><a href="ai-lab.html">AI Lab</a><a href="contact.html">Contact</a></div>
  <div><h5>Services</h5>${SERVICES.map((s) => `<a href="${s.slug}.html">${s.name}</a>`).join("")}</div>
  <div><h5>Work & Industries</h5>${CASES.map((c) => `<a href="case-${c.id}.html">${c.name}</a>`).join("")}<a href="media-publishing.html">Media & Publishing</a><a href="ecommerce-d2c.html">E-commerce & D2C</a></div>
  <div><h5>Company</h5><a href="about.html">About</a><a href="process.html">How We Work</a><a href="careers.html">Careers</a><a href="testimonials.html">Testimonials</a><a href="insights.html">Insights</a><a href="faqs.html">FAQs</a><a href="ai-lab.html">AI Lab</a><a href="privacy-policy.html">Privacy</a><a href="terms.html">Terms</a></div></div>
  <div class="footer-cols"><div><h5>Blog</h5>${POSTS.map((p) => `<a href="blog-${p.slug}.html">${p.t}</a>`).join("")}</div></div></div></section>`,
});

export default pages;
