// Shared layout, data and section builders for every page.
// ─────────────────────────────────────────────────────────────
// Company facts — edit here and every page updates on the next build.
import { CASES } from "./cases.mjs";
export { CASES };
export const CO = {
  name: "NH Solutions",
  tagline: "Product & Growth Studio",
  email: "hello@nhsolutions.in",
  salesEmail: "sales@nhsolutions.in",
  careersEmail: "careers@nhsolutions.in",
  phones: [
    ["India", "+91 91000 45678"],
    ["WhatsApp", "+91 91000 45678"],
  ],
  offices: [
    ["Hyderabad — Headquarters", "4th Floor, Cyber Towers,<br>HITEC City, Madhapur,<br>Hyderabad, Telangana 500081"],
    ["Vijayawada — Delivery Centre", "MG Road, Labbipet,<br>Vijayawada,<br>Andhra Pradesh 520010"],
    ["Global delivery", "Overlapping hours with<br>IST, GST, GMT and EST<br>— Mon to Sat, 9am–8pm IST"],
  ],
  hours: "Mon–Sat, 9:00 am – 8:00 pm IST",
  founder: "Harsha Biyyapu",
  founders: [
    {
      name: "Naman Seth", initials: "NS", role: "Co-founder · Technology & Operations", city: "Delhi",
      short: "The engineer-operator who turns ambitious plans into shipped, working systems.",
      bio: "Naman leads technology, delivery and business planning at NH Solutions from Delhi. He pairs hard-core technical depth — architecture, backend systems, infrastructure and AI — with the discipline to run teams and turn a business plan into weekly execution. When a project is complex, Naman is the person who breaks it down, sets the plan, puts the right engineers on it and stays in the details until it ships.",
      points: ["Owns architecture and engineering standards on every build", "Builds and manages the delivery team, from hiring to code review", "Turns business plans into roadmaps, budgets and sprint goals", "Co-executes alongside clients — weekly reviews, no hand-offs"],
      quote: "A plan is only as good as the system that executes it. My job is to make sure ours never misses.",
    },
    {
      name: "Harsha Biyyapu", initials: "HB", role: "Co-founder · Product & Growth", city: "Hyderabad",
      short: "The builder-marketer behind a publishing network read by millions every month.",
      bio: "Harsha started building businesses at 13 and was leading teams by 15. He built a publishing network that reaches 3–5 million readers a month, scaled a D2C brand 4× through performance marketing, and launched an in-house multi-model AI product. At NH Solutions he leads product strategy, SEO and growth — making sure what the team builds finds its audience.",
      points: ["Leads product strategy and positioning", "Owns SEO, content and performance marketing", "Built and scaled three ventures of his own", "Works directly with founders on go-to-market"],
      quote: "Build it like you'll have to run it. We do — every day.",
    },
  ],
  rating: "4.5",
  socials: { linkedin: "https://www.linkedin.com/", x: "https://x.com/", instagram: "https://www.instagram.com/", youtube: "https://www.youtube.com/", github: "https://github.com/harshabiyyapu-web" },
};

export const STATS = [
  ["3M+", "Monthly readers reached"],
  ["50+", "Products & platforms shipped"],
  ["4×", "Growth delivered for D2C"],
  ["25+", "Engineers, designers & marketers"],
  ["10+", "Industries served"],
];

export const pic = (name, alt = "", cls = "") => `<img class="${cls}" src="assets/img/${name}.jpg" alt="${alt}" loading="lazy" decoding="async" onerror="this.remove()">`;

// ─────────────────────────────────────────────────────────────
// Navigation
export const SERVICES = [
  { slug: "ai-development", name: "AI Development", group: "AI & Data" },
  { slug: "generative-ai", name: "Generative AI & LLM Apps", group: "AI & Data" },
  { slug: "data-analytics", name: "Data & Analytics", group: "AI & Data" },
  { slug: "software-development", name: "Custom Software Development", group: "Engineering" },
  { slug: "saas-development", name: "SaaS Product Development", group: "Engineering" },
  { slug: "web-development", name: "Web Development", group: "Engineering" },
  { slug: "mobile-app-development", name: "Mobile App Development", group: "Engineering" },
  { slug: "mvp-development", name: "MVP Development", group: "Product" },
  { slug: "ui-ux-design", name: "Product Design & UX", group: "Product" },
  { slug: "cloud-devops", name: "Cloud & DevOps", group: "Product" },
  { slug: "seo-content", name: "SEO & Content Engineering", group: "Growth" },
  { slug: "performance-marketing", name: "Performance Marketing", group: "Growth" },
  { slug: "hire-developers", name: "Hire Dedicated Developers", group: "Growth" },
];
export const INDUSTRIES = [
  { slug: "media-publishing", name: "Media & Publishing" },
  { slug: "ecommerce-d2c", name: "E-commerce & D2C" },
  { slug: "edtech", name: "Education" },
  { slug: "fintech", name: "Fintech" },
  { slug: "healthcare", name: "Healthcare" },
  { slug: "real-estate", name: "Real Estate" },
];

// ─────────────────────────────────────────────────────────────
// Icons
const P = {
  ai: '<path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/><circle cx="12" cy="12" r="4"/>',
  spark: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
  code: '<path d="M8 8l-5 4 5 4M16 8l5 4-5 4M14 4l-4 16"/>',
  mobile: '<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M11 18h2"/>',
  web: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01"/>',
  cloud: '<path d="M7 18a5 5 0 1 1 1-9.9A6 6 0 0 1 19.5 10 4 4 0 0 1 18 18z"/>',
  design: '<path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 2-2s-1-1.5-1-2.5S14 15 15 15h2a4 4 0 0 0 4-4c0-4.4-4-8-9-8z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/>',
  rocket: '<path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2M9 13l2 2M14 4c3-1 6-1 6-1s0 3-1 6l-7 7-5-5z"/><circle cx="15" cy="9" r="1.5"/>',
  chart: '<path d="M3 21h18M6 17V10M11 17V5M16 17v-4M21 17V8"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
  team: '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M15 14.5c3 0 6 2 6 5.5"/>',
  saas: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><path d="M17.5 14v7M14 17.5h7"/>',
  data: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  megaphone: '<path d="M3 11v2a1 1 0 0 0 1 1h3l6 4V6L7 10H4a1 1 0 0 0-1 1zM17 8a5 5 0 0 1 0 8"/>',
  news: '<rect x="3" y="4" width="15" height="16" rx="2"/><path d="M18 8h3v10a2 2 0 0 1-2 2M7 8h7M7 12h7M7 16h4"/>',
  cart: '<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.5 12h12L22 7H6"/>',
  edu: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"/>',
  bank: '<path d="M3 10l9-6 9 6M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 21h18"/>',
  health: '<path d="M12 21s-8-5-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 6-8 11-8 11z"/><path d="M9 11h6M12 8v6"/>',
  home: '<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>',
  shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
  bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  handshake: '<path d="M2 12l4-4 4 2 4-3 4 3 4 2M6 8v6l4 4 2-1 2 2 4-4-6-5"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  layers: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
  heart: '<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
};
export const icon = (n, cls = "ico") =>
  `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n] || P.spark}</svg>`;
const caret = '<svg class="caret" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2 3.5l3 3 3-3"/></svg>';

// Generated visual panels (no stock photos needed)
export const art = (n = 1, kind = "dash", label = "") => {
  if (typeof n === "string") return `<div class="art photo art-${(name => [...name].reduce((a, c) => a + c.charCodeAt(0), 0) % 6 + 1)(n)}"><div class="grid-lines"></div>${pic(n, label)}${label ? `<span class="art-label">${label}</span>` : ""}</div>`;
  const dash = `<div class="mock"><div class="mock-bar"><i></i><i></i><i></i></div><div class="mock-body"><div class="col"><div></div><div></div><div></div></div><div class="bars"><span style="height:40%"></span><span style="height:65%"></span><span style="height:52%"></span><span style="height:80%"></span><span style="height:70%"></span><span style="height:95%"></span></div></div></div>`;
  const phones = `<div class="phone" style="left:16%;top:14%;transform:rotate(-6deg)"><span class="big"></span><span></span><span style="width:70%"></span><span></span><span style="width:50%"></span></div><div class="phone" style="right:16%;top:22%;transform:rotate(5deg)"><span></span><span class="big"></span><span style="width:60%"></span><span></span></div>`;
  const inner = kind === "phones" ? phones : kind === "none" ? "" : dash;
  return `<div class="art art-${n}"><div class="grid-lines"></div>${inner}${label ? `<span class="art-label">${label}</span>` : ""}</div>`;
};

// ─────────────────────────────────────────────────────────────
// Header
const megaServices = () => {
  const groups = [...new Set(SERVICES.map((s) => s.group))];
  return `<div class="mega"><div class="wrap mega-inner">
    <div class="mega-intro"><h4>Engineering that ships, growth that compounds.</h4><p>From AI products to content engines read by millions — pick a capability or talk to us about the whole build.</p><a class="btn btn-grad btn-sm" href="services.html">All services</a></div>
    <div class="mega-cols">${groups
      .map((g) => `<div><h5>${g}</h5>${SERVICES.filter((s) => s.group === g).map((s) => `<a href="${s.slug}.html">${s.name}</a>`).join("")}</div>`)
      .join("")}</div></div></div>`;
};
const megaIndustries = () => `<div class="mega"><div class="wrap mega-inner">
  <div class="mega-intro"><h4>Built for how your market actually works.</h4><p>Domain-aware teams for regulated, high-traffic and fast-moving businesses.</p><a class="btn btn-grad btn-sm" href="industries.html">All industries</a></div>
  <div class="mega-cols"><div><h5>Industries</h5>${INDUSTRIES.slice(0, 3).map((i) => `<a href="industries.html#${i.slug}">${i.name}</a>`).join("")}</div><div><h5>&nbsp;</h5>${INDUSTRIES.slice(3).map((i) => `<a href="industries.html#${i.slug}">${i.name}</a>`).join("")}</div>
  <div><h5>Featured</h5><a href="media-publishing.html">Media & Publishing</a><a href="ecommerce-d2c.html">E-commerce & D2C</a></div><div><h5>Proof</h5><a href="portfolio.html">Case studies</a><a href="testimonials.html">Client stories</a></div></div></div></div>`;
const megaWork = () => `<div class="mega"><div class="wrap mega-inner">
  <div class="mega-intro"><h4>${CASES.length} case studies, real numbers.</h4><p>Products we've built, scaled or run — from AI SaaS to publishing backends.</p><a class="btn btn-grad btn-sm" href="portfolio.html">View all work</a></div>
  <div class="mega-cols">${[0, 1, 2, 3].map((c) => `<div><h5>${["Featured", "Backend & data", "AI & automation", "Web & apps"][c]}</h5>${CASES.filter((x) => (c === 0 ? x.featured : c === 1 ? ["data", "software"].includes(x.svc) && !x.featured : c === 2 ? x.svc === "ai" && !x.featured || x.id === "bulk-search-index-monitor" : x.svc === "web" && !x.featured)).slice(0, 4).map((x) => `<a href="case-${x.id}.html">${x.name}</a>`).join("")}</div>`).join("")}</div></div></div>`;
const megaAbout = () => `<div class="mega"><div class="wrap mega-inner">
  <div class="mega-intro"><h4>A builder-led company.</h4><p>Founded by operators who run their own products — so we build yours like we'd run it.</p><a class="btn btn-grad btn-sm" href="about.html">About NH Solutions</a></div>
  <div class="mega-cols"><div><h5>Company</h5><a href="about.html">About Us</a><a href="careers.html">Careers</a><a href="process.html">How We Work</a></div><div><h5>Resources</h5><a href="insights.html">Insights</a><a href="faqs.html">FAQs</a><a href="testimonials.html">Testimonials</a></div><div><h5>Innovation</h5><a href="ai-lab.html">NH AI Lab</a><a href="portfolio.html">Case Studies</a></div><div><h5>Get in touch</h5><a href="contact.html">Contact</a><a href="hire-developers.html">Hire a team</a></div></div></div></div>`;

export const header = () => `<header class="site-header">
  <div class="wrap nav">
    <a class="logo" href="index.html" aria-label="NH Solutions home"><img class="logo-img" src="assets/logo-nh.png" alt="NH Solutions logo" width="66" height="48"><span class="logo-word"><b>NH</b> Solutions<small>${CO.tagline}</small></span></a>
    <ul class="nav-links">
      <li><a href="ai-lab.html">AI Lab <span class="ai-tag">AI</span></a></li>
      <li class="has-mega"><button aria-expanded="false">Services ${caret}</button>${megaServices()}</li>
      <li class="has-mega"><button aria-expanded="false">Industries ${caret}</button>${megaIndustries()}</li>
      <li class="has-mega"><button aria-expanded="false">Work ${caret}</button>${megaWork()}</li>
      <li class="has-mega"><button aria-expanded="false">About ${caret}</button>${megaAbout()}</li>
    </ul>
    <div class="nav-cta">
      <a class="btn btn-outline-dark" href="contact.html#book">Book a Call</a>
      <a class="btn btn-grad btn-sm" href="contact.html">Contact Us</a>
      <button class="menu-toggle" aria-label="Open menu"><span></span></button>
    </div>
  </div>
</header>`;

// ─────────────────────────────────────────────────────────────
// Contact block (shared on every page, like the reference site)
export const contact = () => `<section id="contact" class="contact-sec"><div class="wrap">
  <div class="contact-wrap reveal">
    <div class="contact-info">
      <span class="eyebrow">Contact us</span>
      <h2>Let's build something worth talking about.</h2>
      <p>Tell us what you're building. You'll get a reply from a senior engineer — not a sales script — within one business day, with a suggested approach and a ballpark.</p>
      <h3>Email us</h3><a href="mailto:${CO.salesEmail}">${CO.salesEmail}</a><a href="mailto:${CO.email}">${CO.email}</a>
      <h3>Call us</h3>${CO.phones.map(([k, v]) => `<a href="tel:${v.replace(/\s/g, "")}">${k}: ${v}</a>`).join("")}
      <h3>Working hours</h3><p style="margin:0">${CO.hours}</p><h3>What happens next</h3>
      <ul class="check-list"><li>We sign an NDA if you need one</li><li>30-minute call with a co-founder</li><li>Written proposal in 3–5 days</li></ul>
    </div>
    <form class="contact-form lead-form" novalidate data-to="${CO.salesEmail}">
      <div class="form-grid">
        <div class="field"><label for="fn">First name*</label><input id="fn" name="fn" required autocomplete="given-name"></div>
        <div class="field"><label for="ln">Last name*</label><input id="ln" name="ln" required autocomplete="family-name"></div>
        <div class="field"><label for="em">Work email*</label><input id="em" name="em" type="email" required autocomplete="email"></div>
        <div class="field"><label for="co">Company</label><input id="co" name="co" autocomplete="organization"></div>
        <div class="field"><label for="ct">Country</label><select id="ct" name="ct"><option>India</option><option>United States</option><option>United Kingdom</option><option>United Arab Emirates</option><option>Singapore</option><option>Australia</option><option>Canada</option><option>Germany</option><option>Other</option></select></div>
        <div class="field"><label for="ph">Phone</label><div class="phone-row"><select name="cc" aria-label="Country code"><option>+91</option><option>+1</option><option>+44</option><option>+971</option><option>+65</option><option>+61</option></select><input id="ph" name="ph" type="tel" autocomplete="tel"></div></div>
        <div class="field full"><label for="bd">Budget range</label><select id="bd" name="bd"><option>Not sure yet</option><option>Under ₹5L / $6k</option><option>₹5L – ₹20L / $6k – $25k</option><option>₹20L – ₹50L / $25k – $60k</option><option>₹50L+ / $60k+</option></select></div>
        <div class="field full"><label for="msg">Your message*</label><textarea id="msg" name="msg" required placeholder="What are you building, and what does success look like?"></textarea></div>
      </div>
      <p class="form-note">By submitting, you agree to our <a href="privacy-policy.html"><u>privacy policy</u></a>. We never share your details.</p>
      <button class="btn btn-grad" type="submit">Submit now</button>
      <div class="form-success" role="status">Thanks! Your email app has opened with your message ready to send to our team. Prefer WhatsApp? Message us on ${CO.phones[1][1]}.</div>
    </form>
  </div>
  <div class="offices reveal">${CO.offices.map(([h, p]) => `<div><h4>${h}</h4><p>${p}</p></div>`).join("")}</div>
</div></section>`;

// ─────────────────────────────────────────────────────────────
// Footer
const S = {
  linkedin: '<path d="M4 9h3v11H4zM5.5 4a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6zM10 9h3v1.6c.5-.9 1.7-1.8 3.4-1.8 3.3 0 3.6 2.1 3.6 4.8V20h-3v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V20h-3z" fill="currentColor" stroke="none"/>',
  x: '<path d="M4 4l16 16M20 4L4 20"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/>',
  youtube: '<rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l5 3-5 3z" fill="currentColor"/>',
  github: '<path d="M9 19c-4 1.5-4-2-6-2.5M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
};
export const footer = () => `<footer class="site-footer"><div class="wrap">
  <div class="footer-top">
    <a class="logo" href="index.html"><img class="logo-img" src="assets/logo-nh.png" alt="NH Solutions logo" width="66" height="48"><span class="logo-word"><b>NH</b> Solutions<small>${CO.tagline}</small></span></a>
    <div class="socials">${Object.entries(CO.socials).map(([k, h]) => `<a href="${h}" aria-label="${k}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">${S[k]}</svg></a>`).join("")}</div>
  </div>
  <div class="footer-cols">
    <div><h5>Services</h5>${SERVICES.slice(0, 7).map((s) => `<a href="${s.slug}.html">${s.name}</a>`).join("")}</div>
    <div><h5>Growth & Product</h5>${SERVICES.slice(7).map((s) => `<a href="${s.slug}.html">${s.name}</a>`).join("")}<a href="ai-lab.html">NH AI Lab</a></div>
    <div><h5>Industries</h5>${INDUSTRIES.map((i) => `<a href="industries.html#${i.slug}">${i.name}</a>`).join("")}</div>
    <div><h5>Company</h5><a href="about.html">About Us</a><a href="careers.html">Careers</a><a href="process.html">How We Work</a><a href="portfolio.html">Case Studies</a><a href="testimonials.html">Client Testimonials</a><a href="faqs.html">FAQs</a><a href="contact.html">Contact</a></div>
  </div>
  <div class="footer-bottom">
    <span>© <span data-year>2026</span> NH Solutions. All rights reserved.</span>
    <span class="review-badge"><span class="stars">★★★★½</span> ${CO.rating}/5 average client rating</span>
    <nav><a href="insights.html">Insights</a><a href="privacy-policy.html">Privacy Policy</a><a href="terms.html">Terms</a><a href="sitemap.html">Sitemap</a></nav>
  </div>
</div></footer>`;

// ─────────────────────────────────────────────────────────────
// Page shell
export const layout = ({ title, desc, body }) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${desc}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Sora:wght@500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/css/styles.css">
<link rel="icon" type="image/png" href="assets/favicon.png">
<link rel="apple-touch-icon" href="assets/apple-touch-icon.png">
</head>
<body>
${header()}
<main>
${body}
${contact()}
</main>
${footer()}
<script src="assets/js/site.js" defer></script>
</body>
</html>`;

// ─────────────────────────────────────────────────────────────
// Reusable sections
export const pageHero = ({ crumb, title, text, ctas = [["Talk to an expert", "contact.html"]], side = "stats", badges = [], img }) => `
<section class="page-hero"><div class="wrap"><div class="hero-card${img ? " has-img" : ""}">
  <div class="hero-art"><div class="ring"></div><div class="ring small"></div></div>
  <div class="hero-copy">
    <div class="breadcrumb"><a href="index.html">Home</a> / ${crumb}</div>
    <h1>${title}</h1>
    <p style="font-size:1.08rem;max-width:620px">${text}</p>
    <div class="hero-actions">${ctas.map(([t, h], i) => `<a class="btn ${i ? "btn-ghost" : "btn-grad"}" href="${h}">${t}</a>`).join("")}</div>
    ${badges.length ? `<div class="badges">${badges.map((b) => `<span class="badge">${b}</span>`).join("")}</div>` : ""}
  </div>
  ${img ? `<div class="hero-photo reveal">${art(img, "", "")}<div class="float-chip"><span class="stars">★★★★½</span><b>${CO.rating}/5</b><small>Average client rating</small></div></div>`
    : side === "stats" ? `<div class="hero-stats">${STATS.slice(0, 3).map(([b, s]) => `<div class="stat-card reveal"><b data-count="${b}">${b}</b><span>${s}</span></div>`).join("")}</div>` : `<div></div>`}
</div></div></section>`;

export const trust = (label = "Built with the technology trusted by the world's best product teams") => {
  const names = ["React", "Next.js", "Node.js", "Python", "Flutter", "AWS", "Google Cloud", "OpenAI", "Claude", "WordPress", "Shopify", "Docker"];
  const row = names.map((n) => `<span>${n}</span>`).join("");
  return `<section class="trust"><div class="wrap trust-row"><p>${label}</p><div class="marquee"><div class="marquee-track">${row}${row}</div></div></div></section>`;
};

const caseCard = (c) => `<article class="case-slide">
    <div class="case-text"><span class="cat">${c.name}</span><h3 style="margin-top:10px">${c.title}</h3><p>${c.text}</p><div class="tags">${c.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
      <div class="outcomes"><small>Outcomes</small><div class="outcome-row">${c.out.map(([b, s]) => `<div><b>${b}</b><span>${s}</span></div>`).join("")}</div></div>
      <a class="link-arrow" style="margin-top:22px" href="case-${c.id}.html">Read case study</a></div>
    <div class="case-art">${art(c.img, "", "")}</div>
  </article>`;
export const caseSlider = (title = "Proof, not promises.", text = "Every project below was built, scaled or run by our team — from AI SaaS to the backend systems behind high-traffic publishing. The numbers are the ones we were held to.", list = CASES.filter((c) => c.featured).concat(CASES.filter((c) => !c.featured).slice(0, 2))) => `
<section class="cases"><div class="wrap">
  <div class="sec-row"><div class="sec-head"><h2>${title}</h2><p>${text}</p></div><div class="slider-nav"><button class="round-btn s-prev" aria-label="Previous">←</button><button class="round-btn s-next" aria-label="Next">→</button><a class="btn btn-outline-dark" href="portfolio.html">All work</a></div></div>
  <div class="slider reveal"><div class="slider-viewport"><div class="slider-track">${list.map(caseCard).join("")}</div></div></div>
</div></section>`;

export const ctaBanner = (h = "Have an idea? Let's find the fastest path to revenue.", p = "Tell us where you are — a napkin sketch, a stalled prototype or a product that's outgrown its stack. In 30 minutes, we'll show you what we'd build first and why.", b = "Book a free strategy call") => `
<section><div class="wrap"><div class="cta-banner reveal"><span class="orb o1"></span><span class="orb o2"></span>
<h2>${h}</h2><p>${p}</p><a class="btn btn-grad" href="contact.html">${b}</a></div></div></section>`;

export const TESTIMONIALS = [
  ["Founder", "D2C home-furniture brand", "They treated our ad budget like their own money", "Spend went up only when the numbers justified it. Tracking was rebuilt properly before we scaled, and the weekly reviews were blunt and genuinely useful. We grew four times over without losing control of margins.", "d2c-furniture-growth", 5],
  ["Editor-in-chief", "Regional news publisher", "Our pages finally load fast on cheap phones", "The publishing stack and SEO playbook changed how quickly our stories get found. The team understood newsroom pressure, not just code, and breaking news now goes live in minutes.", "regional-news-modernisation", 4.5],
  ["Co-founder & CTO", "AI SaaS startup", "A product team that thinks like owners", "They pushed back on features that didn't matter and shipped the ones that did. The routing layer they built saved us from betting everything on a single AI vendor.", "multi-model-ai-workspace", 4.5],
  ["Head of Operations", "Digital media group", "One screen instead of forty dashboards", "Our team used to open dozens of analytics tabs every morning. Now we see every site, live, in one place — and the browser extension is the first thing our editors check.", "multi-site-analytics-command-centre", 4.5],
  ["Content Director", "Multi-site publisher", "Publishing that used to take a day takes minutes", "The AI publishing engine replaced hours of copy-pasting. Live progress for every job means we always know exactly what went out, and where.", "ai-multi-site-publishing-engine", 4.5],
  ["Owner", "Wedding & portrait photography studio", "Couples now find us on Google and book directly", "The website shows our work beautifully on phones, and enquiries come straight to us instead of through marketplaces that take a cut.", "photography-studio-website", 4],
];
const stars = (n) => "★".repeat(Math.floor(n)) + (n % 1 ? "½" : "");
const tCard = ([n, r, h, p, link, s]) => `<article class="t-card reveal"><div class="t-person"><span class="avatar">${n.split(/[\s&-]+/).filter(Boolean).map((x) => x[0]).join("").slice(0, 2)}</span><div><b>${n}</b><small>${r}</small></div></div><span class="stars">${stars(s)}</span><h4 style="margin-top:10px">${h}</h4><p>${p}</p><a class="link-arrow" href="case-${link}.html">Read the case study</a></article>`;
export const tCards = (list = TESTIMONIALS) => list.map(tCard).join("");
export const ratingRow = () => `<div class="ratings">${[["Google Reviews", "4.5"], ["Clutch", "4.5"], ["GoodFirms", "4.5"], ["Client satisfaction", "4.5"]].map(([s, b]) => `<div class="rating"><div><span class="stars">★★★★½</span><br><span>${s}</span></div><b>${b}</b></div>`).join("")}</div>`;
export const testimonials = (title = "Clients talk about outcomes, not deliverables") => `
<section><div class="wrap">
  <div class="sec-row"><div class="sec-head"><h2>${title}</h2><p>Behind every review is a business problem solved — a funnel leaking money, a site too slow to rank, a team drowning in manual work. Here's how clients describe working with us. Names are withheld to respect client confidentiality.</p></div>
  <div class="slider-nav"><button class="round-btn" data-scroll-target="tt" data-dir="prev" aria-label="Previous">←</button><button class="round-btn" data-scroll-target="tt" aria-label="Next">→</button><a class="btn btn-outline-dark" href="testimonials.html">View all</a></div></div>
  <div class="t-track" id="tt">${tCards()}</div>
  ${ratingRow()}
</div></section>`;

export const faq = (items, title = "Frequently asked questions", sub = "Quick answers to what founders and product leaders usually ask us first.", more = true) => `
<section class="bg-soft"><div class="wrap">
  <div class="sec-head center"><h2>${title}</h2><p>${sub}</p></div>
  <div class="faq">${items.map(([q, a], i) => `<div class="faq-item${i === 0 ? " open" : ""}"><button class="faq-q" aria-expanded="${i === 0}">${q}</button><div class="faq-a"><div><p>${a}</p></div></div></div>`).join("")}</div>
  ${more ? `<div class="center-btn"><a class="btn btn-outline-dark" href="faqs.html">View more FAQs</a></div>` : ""}
</div></section>`;

export { POSTS } from "./posts.mjs";
import { POSTS } from "./posts.mjs";
export const postCard = (p) => `<a class="post reveal" href="blog-${p.slug}.html" data-tags="${p.cat}"><div class="thumb">${art(p.img, "", "")}</div><div class="post-body"><span class="cat">${p.cat} · ${p.read} min read</span><h4>${p.t}</h4><p>${p.e}</p></div></a>`;
export const insights = (title = "Field notes from the build", posts = POSTS.slice(0, 3)) => `
<section><div class="wrap">
  <div class="sec-row"><div class="sec-head"><h2>${title}</h2><p>Field notes from building AI products, engineering publishing backends and running growth for our own brands and our clients'.</p></div><a class="btn btn-outline-dark" href="insights.html">All insights</a></div>
  <div class="insight-grid">${posts.map(postCard).join("")}</div>
</div></section>`;


export const svcGrid = (items) => `<div class="svc-grid">${items
  .map(([ic, h, p, href, list]) => `<div class="svc reveal">${icon(ic)}<h3>${href ? `<a href="${href}">${h}</a>` : h}</h3><p>${p}</p>${list ? `<ul>${list.map((l) => `<li>${l}</li>`).join("")}</ul>` : ""}</div>`)
  .join("")}</div>`;

export const cardGrid = (items, cols = "") => `<div class="card-grid ${cols}">${items
  .map(([ic, h, p]) => `<div class="card reveal">${ic ? icon(ic) : ""}<h3>${h}</h3><p>${p}</p></div>`)
  .join("")}</div>`;

export const process = (steps, commits) => `
<section><div class="wrap">
  <div class="sec-head"><span class="eyebrow">How we deliver</span><h2>No black boxes. No surprise invoices.</h2><p>Six phases, each with a clear output you sign off on — so budget, scope and quality stay visible from day one to launch and beyond.</p></div>
  <div class="process">${steps.map(([h, p]) => `<div class="step reveal"><h3>${h}</h3><p>${p}</p></div>`).join("")}</div>
  ${commits ? `<div class="commit">${commits.map((c) => `<span>${c}</span>`).join("")}</div>` : ""}
</div></section>`;
export const STEPS = [
  ["Discovery & scoping", "Workshops to pin down users, outcomes and constraints. You get a scoped backlog, risks and a fixed or ranged estimate."],
  ["Product design", "User flows, wireframes and a clickable prototype tested with real users before a line of production code."],
  ["Architecture", "Stack, data model, integrations and security decided up front — documented so any engineer can pick it up."],
  ["Agile build", "Two-week sprints with a working demo every sprint. Shared board, shared repo, no black boxes."],
  ["QA & launch", "Automated and manual testing, performance and security checks, then a staged rollout with monitoring."],
  ["Grow & support", "Post-launch SLAs, analytics reviews and a roadmap for the next release — we stay until it's working."],
];
export const COMMITS = ["You own 100% of the code and IP", "NDA before the first call", "Weekly demos and written updates", "Senior engineer on every project", "Transparent, itemised estimates", "30 days of free post-launch fixes"];

export const TECH = {
  Frontend: ["React", "Next.js", "Vue", "Astro", "TypeScript", "Tailwind"],
  Backend: ["Node.js", "Python", "Go", "Laravel", "NestJS", "FastAPI"],
  Mobile: ["Flutter", "React Native", "Swift", "Kotlin", "Expo", "PWA"],
  "AI / ML": ["OpenAI", "Claude", "Gemini", "LangChain", "PyTorch", "Pinecone"],
  Data: ["PostgreSQL", "MongoDB", "Redis", "BigQuery", "ClickHouse", "dbt"],
  Cloud: ["AWS", "GCP", "Vercel", "Docker", "Kubernetes", "Terraform"],
  Growth: ["GA4", "Search Console", "Meta Ads", "Google Ads", "Ahrefs", "Looker Studio"],
};
export const techStack = (title = "Our technology stack") => {
  const keys = Object.keys(TECH);
  return `<section class="bg-soft"><div class="wrap" data-tabs>
  <div class="sec-head"><h2>${title}</h2><p>We pick proven tools for the job — not whatever is trending — and document every choice so your team can own it later.</p></div>
  <div class="tabs">${keys.map((k, i) => `<button class="chip${i ? "" : " active"}">${k}</button>`).join("")}</div>
  ${keys.map((k, i) => `<div class="tab-panel${i ? "" : " active"}">${TECH[k].map((t) => `<div class="tech"><i>${t.slice(0, 2)}</i>${t}</div>`).join("")}</div>`).join("")}
</div></section>`;
};

export const statBandDark = (title = "Why teams switch to NH Solutions") => `
<section class="dark"><div class="wrap">
  <div class="why-top"><h2>${title}</h2><div class="partner-row"><div class="partner"><small>Built on</small>Google Cloud</div><div class="partner"><small>Built on</small>AWS</div><div class="partner"><small>Builds with</small>OpenAI · Claude</div></div></div>
  <div class="stat-band reveal">${STATS.map(([b, s]) => `<div><b data-count="${b}">${b}</b><span>${s}</span></div>`).join("")}</div>
  <div class="why-grid">
    <div class="why-box"><h4>Who we<br>work best<br>with</h4><div class="pill-list"><span>Founders going from idea to MVP</span><span>Publishers and media brands</span><span>D2C and e-commerce brands</span><span>SaaS teams adding AI</span><span>SMEs modernising operations</span></div></div>
    <div class="why-box"><h4>Our engagement<br>models</h4><table class="model-table"><thead><tr><th>Engagement model</th><th>Best for</th></tr></thead><tbody>
      <tr><td>Fixed-scope project</td><td>MVPs and well-defined builds</td></tr>
      <tr><td>Dedicated team</td><td>Long-term product development</td></tr>
      <tr><td>Growth retainer</td><td>SEO, content and paid acquisition</td></tr>
      <tr><td>AI sprint</td><td>Prototyping an AI feature in 2–4 weeks</td></tr>
      <tr><td>Staff augmentation</td><td>Adding senior engineers to your team</td></tr>
    </tbody></table></div>
  </div>
</div></section>`;

export const relatedLinks = (exclude) => `<section style="padding-top:0"><div class="wrap"><div class="sec-head"><h2>Related services</h2></div><div class="link-list">${SERVICES.filter((s) => s.slug !== exclude).slice(0, 8).map((s) => `<a href="${s.slug}.html">${s.name}</a>`).join("")}</div></div></section>`;
