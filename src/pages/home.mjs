import { avatar, STATS, CO, icon, art, trust, caseSlider, ctaBanner, testimonials, faq, insights, svcGrid, statBandDark, POSTS, postCard } from "../lib.mjs";

const caps = [
  ["ai", "AI Engineering", "Put AI to work where it pays: assistants that answer from your own data, agents that clear repetitive work, and models that predict what happens next.", ["AI Agent Development", "Generative AI Apps", "LLM & RAG Systems", "Multi-model Routing", "Predictive Analytics"], "ai-development.html", "Explore AI services"],
  ["code", "Product & Platform Engineering", "Web platforms, SaaS products and mobile apps engineered to scale from the first hundred users to the first million, without a rewrite in between.", ["Custom Software", "SaaS Products", "Mobile Apps", "MVP Development", "Cloud & DevOps"], "software-development.html", "View engineering services"],
  ["chart", "Growth & Content Engineering", "The playbook behind our own media network, available for your brand: technical SEO, content systems and performance marketing tied to revenue, not vanity metrics.", ["Technical SEO", "Programmatic Content", "Publishing Platforms", "Meta & Google Ads", "Conversion Tracking"], "seo-content.html", "Explore growth services"],
];

const industries = [
  ["news", "Media & Publishing", "Fast, SEO-first publishing platforms and newsroom tools — built by a team that runs a network read by millions every month.", "media-publishing.html", "ind-media"],
  ["cart", "E-commerce & D2C", "Storefronts, funnels and ad programs that grow revenue faster than spend, with tracking you can actually trust.", "ecommerce-d2c.html", "ind-ecommerce"],
  ["edu", "Education", "Learning platforms, assessment tools and AI tutors that keep students engaged and give educators real visibility.", "industries.html#edtech", "ind-edtech"],
  ["bank", "Fintech", "Secure, compliance-ready platforms for payments, lending and personal finance — designed for trust from the first screen.", "industries.html#fintech", "ind-fintech"],
  ["health", "Healthcare", "Patient apps, clinic workflows and data platforms that reduce admin load and keep sensitive data protected.", "industries.html#healthcare", "ind-healthcare"],
  ["home", "Real Estate", "Listing platforms, CRMs and lead engines that shorten the path from enquiry to site visit to closing.", "industries.html#real-estate", "ind-realestate"],
];

const services = [
  ["ai", "AI Agent Development", "Agents that read context, make decisions and complete multi-step work across your tools — with humans in the loop where it matters.", "ai-development.html"],
  ["spark", "Generative AI Apps", "Copilots, content tools and knowledge assistants grounded in your data and wired into the workflows your team already uses.", "generative-ai.html"],
  ["data", "Data & Analytics", "Pipelines, dashboards and models that turn scattered data into decisions your team can act on every morning.", "data-analytics.html"],
  ["design", "Product Design & UX", "Research-led design that makes complex products feel simple — tested with real users before it's built.", "ui-ux-design.html"],
  ["rocket", "MVP Development", "Launch the smallest product that proves your business in weeks, on a foundation you won't have to throw away.", "mvp-development.html"],
  ["mobile", "Mobile App Development", "Fast, reliable iOS and Android apps — native or cross-platform — built for retention, not just downloads.", "mobile-app-development.html"],
  ["code", "Custom Software", "From greenfield builds to legacy modernisation, software shaped around how your business actually runs.", "software-development.html"],
  ["search", "SEO & Content Engineering", "Technical SEO and content systems that compound — the same approach that grew our own network to millions of readers.", "seo-content.html"],
  ["megaphone", "Performance Marketing", "Meta and Google ad programs scaled on contribution margin, with clean attribution from click to cash.", "performance-marketing.html"],
];

const faqs = [
  ["What does NH Solutions do?", "We design, build and grow digital products. That covers AI development, custom software, SaaS, web and mobile apps — plus the growth side most agencies skip: technical SEO, content engineering and performance marketing."],
  ["Why do businesses choose NH Solutions over a typical agency?", "We run our own products — a publishing network with millions of monthly readers, a D2C brand and an AI SaaS. So we make decisions like owners: we cut scope that doesn't move the numbers and measure success by business outcomes, not hours billed."],
  ["How much does it cost to build a product with you?", "It depends on scope. Focused MVPs typically start from a few lakh rupees; larger platforms are scoped in phases. After a free discovery call we send a written, itemised estimate — fixed price or a clear range."],
  ["How fast can you start?", "Most projects kick off within one to two weeks of sign-off. Dedicated developers can often join your stand-ups within a few days."],
  ["Who owns the code and IP?", "You do — 100%. Code lives in your repository from day one, and we sign an NDA before any detailed discussion if you need one."],
  ["Do you work with clients outside India?", "Yes. We work with teams across India, the Middle East, the UK and North America, with overlapping hours for daily communication."],
];

export default {
  path: "index.html",
  title: "NH Solutions — AI, Software & Growth Engineering Company",
  desc: "NH Solutions builds AI products, custom software, SaaS and mobile apps — and grows them with SEO, content and performance marketing.",
  body: `
<section class="home-hero">
  <div class="mesh"><span class="m1"></span><span class="m2"></span><span class="m3"></span></div>
  <div class="wrap hh-grid">
    <div class="hh-copy">
      <a class="rating-pill" href="testimonials.html"><span class="stars">★★★★½</span> <b>${CO.rating}/5</b> from founders, publishers & D2C brands</a>
      <h1>We build the product.<br><span class="grad-text">Then we bring the customers.</span></h1>
      <p class="lead">NH Solutions is a product and growth studio. We engineer AI-powered software — then grow it with the same SEO and performance playbook that reaches 3M+ readers a month on sites we own. One senior team. One owner of the outcome.</p>
      <div class="hero-actions"><a class="btn btn-grad" href="contact.html">Start your project</a><a class="btn btn-ghost" href="portfolio.html">See the results →</a></div>
      <ul class="hh-points"><li>Senior engineers only</li><li>100% code & IP ownership</li><li>Proposal in 3–5 days</li></ul>
    </div>
    <div class="hh-visual">
      <div class="hh-frame">${art("hero-main", "", "")}</div>
      <div class="fc fc-traffic"><small>Live readers</small><b>3.2M <em>monthly</em></b><svg viewBox="0 0 120 36" aria-hidden="true"><defs><linearGradient id="sg" x1="0" x2="1"><stop offset="0" stop-color="#8e0010"/><stop offset=".5" stop-color="#dd0216"/><stop offset="1" stop-color="#ff5a3c"/></linearGradient></defs><path d="M0 30 L15 26 L28 28 L42 18 L56 21 L70 12 L84 15 L98 6 L120 3" fill="none" stroke="url(#sg)" stroke-width="3" stroke-linecap="round"/></svg></div>
      <div class="fc fc-agent"><span class="dot"></span><div><b>AI agent · running</b><small>Publishing to 12 sites — 9 done</small><i class="bar"><span style="width:75%"></span></i></div></div>
      <div class="fc fc-growth"><b class="grad-text">4×</b><small>D2C revenue<br>growth delivered</small></div>
    </div>
  </div>
  <div class="wrap"><div class="hh-stats reveal">${STATS.map(([b, s]) => `<div><b data-count="${b}">${b}</b><span>${s}</span></div>`).join("")}</div></div>
</section>

${trust()}

<section><div class="wrap">
  <div class="sec-head"><h2>Three practices. One team accountable for the result.</h2><p>Most agencies stop at launch. We start there. Clients usually come for one practice and stay for all three — because a great product without an audience is just an expensive secret.</p></div>
  <div class="cap-list">${caps.map(([ic, h, p, chips, href, cta]) => `<article class="cap-card reveal"><div class="cap-icon">${icon(ic)}</div><div><h3>${h}</h3><p>${p}</p><div class="chips">${chips.map((c) => `<span class="chip">${c}</span>`).join("")}</div><a class="link-arrow" href="${href}">${cta}</a></div></article>`).join("")}</div>
</div></section>

${caseSlider()}

<section style="padding-bottom:40px"><div class="wrap">
  <div class="sec-row"><div class="sec-head"><h2>We know these markets from the inside</h2><p>We've run a newsroom on deadline and watched every rupee of a D2C ad budget. That context shows up in every decision we make on your product.</p></div><div class="slider-nav"><button class="round-btn" data-scroll-target="ind" data-dir="prev" aria-label="Previous">←</button><button class="round-btn" data-scroll-target="ind" aria-label="Next">→</button></div></div>
</div>
<div class="wrap"><div class="h-scroll" id="ind">${industries.map(([ic, h, p, href, img]) => `<a class="ind-card" href="${href}"><div class="ind-img">${art(img, "", "")}</div>${icon(ic)}<h3>${h}</h3><p>${p}</p><span class="link-arrow">Learn more</span></a>`).join("")}</div></div>
</section>

<section><div class="wrap">
  <div class="sec-row"><div class="sec-head"><span class="eyebrow">Leadership</span><h2>Led by builders, not account managers</h2><p>A founder is on every NH Solutions project — from the first call to launch day.</p></div><a class="btn btn-outline-dark" href="about.html#leadership">Meet the team</a></div>
  <div class="cofounders">${CO.founders.filter((f) => f.initials === "HB").map((f) => `<a class="cf-card reveal" href="about.html#${f.initials.toLowerCase()}">
    <div class="cf-top">${avatar(f)}<div><b>${f.name}</b><small>${f.role} · ${f.city}</small>${f.school ? `<span class="school-tag">${f.school}</span>` : ""}</div></div>
    <p class="cf-short">${f.short}</p>
    <ul class="check-list">${f.points.slice(0, 3).map((x) => `<li>${x}</li>`).join("")}</ul>
    <blockquote>“${f.quote}”</blockquote>
  </a>`).join("")}</div>
</div></section>

${statBandDark()}

<section><div class="wrap">
  <div class="sec-head center"><h2>Everything it takes to launch, scale and win</h2><p>Strategy, design, engineering and growth under one roof — so nothing gets lost between the people who build your product and the people who sell it.</p></div>
  ${svcGrid(services)}
</div></section>

${ctaBanner()}

<section class="product-band"><div class="wrap">
  <span class="eyebrow" style="color:#ffb3ab">Built in-house</span>
  <p class="giant">AI Lab</p>
  <h2>We don't sell AI we haven't shipped ourselves</h2>
  <p style="max-width:680px;margin:0 auto">Our in-house workspace routes every prompt to the best model, compares answers side by side and keeps costs in check. Every AI feature we build for clients is proven here first.</p>
  <div class="feature-boxes">
    <div class="feature-box"><h4>${icon("target", "ico")} AI Strategy</h4><ul class="check-list"><li>AI readiness review</li><li>Use-case prioritisation</li><li>Build vs buy roadmap</li></ul></div>
    <div class="feature-box"><h4>${icon("layers", "ico")} AI Engineering</h4><ul class="check-list"><li>LLM & RAG development</li><li>Multi-model routing</li><li>AI integration into your stack</li></ul></div>
    <div class="feature-box"><h4>${icon("ai", "ico")} AI Solutions</h4><ul class="check-list"><li>AI agents & copilots</li><li>Chatbots & voice assistants</li><li>Predictive analytics</li></ul></div>
    <div class="feature-box"><h4>${icon("data", "ico")} Data Intelligence</h4><ul class="check-list"><li>Data engineering</li><li>Dashboards & BI</li><li>Usage & cost monitoring</li></ul></div>
  </div>
  <div class="band-actions"><a class="btn btn-grad" href="ai-development.html">Get your AI strategy</a><a class="btn btn-ghost" href="ai-lab.html">Explore the AI Lab</a></div>
</div></section>

${testimonials()}
${faq(faqs)}
${insights()}
`,
};
