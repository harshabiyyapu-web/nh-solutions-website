// Blog posts — each becomes blog-<slug>.html
export const POSTS = [
  {
    slug: "multi-llm-routing", cat: "AI", read: 7, img: "post-multi-llm", date: "September 24, 2026",
    t: "Why one LLM isn't enough: routing prompts across models without losing control",
    e: "Model quality changes every month. Here's how we design routing, fallbacks and cost caps so your product never depends on a single AI vendor.",
    body: `
<p>Eighteen months ago, most teams building with AI picked one model and wired it into everything. That made sense when there was a clear leader. It doesn't anymore. Today, different models win at different jobs — one writes better long-form copy, another is faster and cheaper for classification, a third handles code or structured output more reliably. Prices move constantly, and so does quality.</p>
<p>If your product is hard-wired to one provider, every one of those shifts becomes a migration project. If it's built on a routing layer, they become a configuration change.</p>
<h2>What a routing layer actually does</h2>
<p>A routing layer sits between your application and the model providers. Your product sends a request with some context — the task type, the user's plan, latency requirements — and the router decides which model handles it. In the multi-model AI workspace we built, routing decisions weigh three things:</p>
<ul><li><strong>Quality for the task.</strong> We maintain small evaluation sets per task type and re-run them whenever a provider ships a new model.</li><li><strong>Latency.</strong> Interactive features get fast models; background jobs can wait for slower, stronger ones.</li><li><strong>Cost.</strong> Every request is priced before it's sent, and per-team budgets can cap or downgrade it.</li></ul>
<h2>Fallbacks are not optional</h2>
<p>Every provider has outages, rate limits and the occasional bad deploy. A router should treat failure as normal: retry once, then fall back to the next-best model for that task, and log it. Users rarely notice. Without fallbacks, one provider's bad afternoon becomes your support queue.</p>
<h2>Make cost visible early</h2>
<p>AI costs creep. A feature that costs a fraction of a rupee per use in testing can become a serious line item at scale. We meter usage at the token level and surface it per user, per team and per model from day one — not as an afterthought when finance starts asking questions.</p>
<h2>Evaluate continuously, not once</h2>
<p>The biggest mistake we see is evaluating models once, at the start of a project, and never again. Treat evaluations like tests: version them, run them on every model change, and fail the deploy if quality drops below your threshold.</p>
<h2>Where to start</h2>
<p>You don't need a complex system on day one. Start with a thin abstraction over your model calls, log every request with its cost and latency, and add a second provider for one task. Once that works, routing becomes a natural next step instead of a rewrite.</p>
<p>If you're planning an AI feature and want to avoid vendor lock-in from the start, <a href="contact.html"><u>talk to our AI team</u></a>.</p>`,
  },
  {
    slug: "seo-for-news", cat: "SEO", read: 8, img: "post-seo-news", date: "September 10, 2026",
    t: "How a news site reaches millions of readers without paying for traffic",
    e: "The technical SEO, publishing cadence and internal-linking habits behind a content network with millions of monthly readers.",
    body: `
<p>Paid traffic is rented. The moment you stop paying, it stops coming. Organic search, done well, compounds — every good page keeps bringing readers for months or years. That's how the publishing network we operate grew to between three and five million monthly readers without a paid acquisition budget.</p>
<p>There's no single trick. It's a handful of disciplines practised every day.</p>
<h2>1. Speed is the foundation</h2>
<p>Most of our readers arrive on mid-range or budget Android phones, often on patchy mobile data. A page that takes six seconds to load loses most of them before the headline appears. We set strict performance budgets: compressed, correctly sized images; system or self-hosted fonts loaded without blocking; and ad slots with reserved space so the layout never jumps.</p>
<h2>2. Publish where demand already exists</h2>
<p>Good editorial instinct matters, but so does data. Our editorial queue is fed by trend monitoring — rising searches, breaking events, recurring seasonal interest — so writers start on topics people are already looking for. The goal is to have a useful, accurate page live within the first hour of a trend.</p>
<h2>3. Structure every page the same way</h2>
<p>Consistent templates help search engines understand your site. Every article carries clean headings, an accurate summary, structured data for articles and breadcrumbs, and a clear author and date. Consistency also makes your site easier to audit and fix at scale.</p>
<h2>4. Internal links are your distribution network</h2>
<p>New pages are discovered faster when existing, well-ranked pages link to them. We automate part of this — related articles and topic hubs — and editors add contextual links by hand. Topic hubs that gather everything about a subject also become strong ranking pages in their own right.</p>
<h2>5. Update, don't just publish</h2>
<p>Some of our best-performing pages are years old — because they're updated. Analytics tell us which pages are slipping, and editors refresh facts, add context and improve the structure. One good update often outperforms three new articles.</p>
<h2>6. Measure what matters</h2>
<p>We track impressions, clicks and indexing in Search Console, and reading depth and returning visitors in analytics. Vanity numbers don't help; patterns do.</p>
<p>Want this playbook applied to your site? See our <a href="seo-content.html"><u>SEO & content engineering service</u></a>.</p>`,
  },
  {
    slug: "d2c-ads-scaling", cat: "Growth", read: 6, img: "post-d2c-ads", date: "August 27, 2026",
    t: "Scaling Meta ads for D2C: when to raise spend, and when to stop",
    e: "A practical framework for scaling ad budgets on real numbers — contribution margin, payback period and creative fatigue.",
    body: `
<p>Every D2C founder hits the same wall: ads work at small budgets, then performance collapses the moment spend goes up. When we scaled a direct-to-consumer furniture brand four times over, with monthly ad spend reaching the ₹10–20 lakh range, the difference wasn't a secret targeting hack. It was discipline about when to scale and when not to.</p>
<h2>Fix tracking before you scale</h2>
<p>If your ad platform says one thing and your bank account says another, you can't make good decisions. Before increasing budgets, we set up server-side conversion tracking and reconciled reported purchases against real orders every day. Only once those numbers agreed did we trust them enough to scale.</p>
<h2>Scale on contribution margin, not ROAS</h2>
<p>Return on ad spend ignores product cost, shipping, returns and payment fees. A 3× ROAS can be profitable for one product and loss-making for another. We calculate contribution margin per order and set a target cost per acquisition from it. Budgets go up only when that target holds.</p>
<h2>Raise budgets in steps</h2>
<p>Large jumps reset the platform's learning and usually spike costs. We increase budgets on winning campaigns gradually, a step at a time, and watch cost per purchase for a few days before the next step.</p>
<h2>Feed the machine new creative</h2>
<p>Creative fatigue is the most common reason performance drops at scale. The same audience sees the same ad too often. We run a weekly testing rhythm — new hooks, formats and offers — and retire ads as soon as frequency rises and click-through falls.</p>
<h2>Know when to stop</h2>
<p>Sometimes the right move is to hold or cut. If cost per purchase rises above target for several days despite fresh creative, the market may be saturated at that price point. Pause, fix the offer or landing page, and come back stronger.</p>
<p>Want a margin-first growth plan for your brand? Explore our <a href="performance-marketing.html"><u>performance marketing service</u></a>.</p>`,
  },
  {
    slug: "mvp-scope", cat: "Product", read: 5, img: "post-mvp", date: "August 13, 2026",
    t: "The MVP scope test: five questions that cut your build time in half",
    e: "Most MVPs are over-built. These five questions help founders find the smallest version that still proves the business.",
    body: `
<p>Most first products try to do too much. Founders worry that a small product will look unfinished, so they add accounts, settings, dashboards and integrations before anyone has proven they want the core thing. The result is months of build time and a launch that teaches very little.</p>
<p>Before we start any MVP, we run every proposed feature through five questions.</p>
<h2>1. What's the one thing a user must be able to do?</h2>
<p>Write it as a single sentence. Everything in version one should serve that sentence. If a feature doesn't, it waits.</p>
<h2>2. What would prove this is working?</h2>
<p>Pick a measurable signal: people completing the core action, coming back within a week, or paying. If you can't measure it, you can't learn from the launch.</p>
<h2>3. Can this be manual for now?</h2>
<p>Many features can start as a human doing the work behind the scenes. Automated onboarding can be a call. Automated reports can be a spreadsheet you email. Automate once you know it's needed.</p>
<h2>4. Can we use something that already exists?</h2>
<p>Authentication, payments, email, forms and analytics all have reliable off-the-shelf options. Building them from scratch rarely proves anything about your business.</p>
<h2>5. What happens if we cut it?</h2>
<p>If the honest answer is "nothing much" or "a few users would be slightly annoyed", cut it. You can add it back in a week if you're wrong.</p>
<h2>Small doesn't mean throwaway</h2>
<p>Cutting scope is different from cutting corners. The features you keep should be built properly, on an architecture that can grow. That's how you launch in weeks without facing a rewrite when customers arrive.</p>
<p>Planning a first product? See how our <a href="mvp-development.html"><u>MVP development</u></a> works.</p>`,
  },
  {
    slug: "core-web-vitals", cat: "Engineering", read: 6, img: "post-web-vitals", date: "July 30, 2026",
    t: "Core Web Vitals on a budget: speed wins for content-heavy sites",
    e: "Image pipelines, font loading and ad-slot discipline — the fixes that move loading speed and layout stability the most for publishers.",
    body: `
<p>Content-heavy sites have a speed problem built in: lots of images, lots of scripts, and usually ads. But you don't need a rebuild to pass Core Web Vitals. On the publishing sites we run, a few focused fixes made most of the difference.</p>
<h2>Fix the largest image first</h2>
<p>On most article pages, the biggest element on screen is the featured image. Serve it in a modern format, at the right size for each screen, and make sure it isn't lazy-loaded — the browser should fetch it immediately. This single change often improves loading scores more than anything else.</p>
<h2>Load fonts without blocking text</h2>
<p>Custom fonts can delay text from appearing at all. Use a font-display setting that shows fallback text immediately, limit yourself to the weights you actually use, and preload only the most important file.</p>
<h2>Reserve space for everything that loads late</h2>
<p>Layout shift — content jumping as the page loads — is usually caused by ads, embeds and images without dimensions. Give every one of them a reserved box with fixed dimensions so the page stays stable while they arrive.</p>
<h2>Audit third-party scripts</h2>
<p>Analytics, chat widgets, social embeds and ad scripts accumulate over the years. List them all, remove what nobody uses, and delay what isn't needed for the first view until after the page has loaded.</p>
<h2>Measure real users, not just lab tests</h2>
<p>Lab tools are great for debugging, but search engines use field data from real visitors. Watch the Core Web Vitals report in Search Console and track changes after each release.</p>
<p>Need a faster site? Our <a href="web-development.html"><u>web development team</u></a> runs performance audits and fixes.</p>`,
  },
  {
    slug: "backend-automation-content-teams", cat: "Engineering", read: 7, img: "post-automation", date: "July 16, 2026",
    t: "The backend tools that let a small content team run dozens of sites",
    e: "Analytics aggregation, parallel publishing, index monitoring and archive research — the internal systems that multiply a content team's output.",
    body: `
<p>Running one website is a job. Running dozens with a small team is only possible if the repetitive work is automated. Over the past few years we've built a set of backend tools for exactly this — first for our own publishing operation, then for clients facing the same problem.</p>
<h2>One analytics view for every site</h2>
<p>Logging into a separate dashboard for each site wastes the most valuable hour of the morning. We built an aggregation service that pulls realtime visitors and 24-hour trends from every site into one grid, adds uptime checks, and even shows the key numbers in a browser extension.</p>
<h2>Publish once, distribute everywhere</h2>
<p>Copy-pasting the same story into site after site is slow and error-prone. Our AI-assisted publishing engine takes one article, produces a distinct version for each site, and publishes to whole groups of sites in parallel — with live progress for every job and a full history.</p>
<h2>Know what's indexed</h2>
<p>A page that isn't indexed doesn't exist as far as search is concerned. A bulk index monitor checks thousands of URLs per run, rotates API keys to stay within quotas and streams progress live, so SEO teams can audit at scale.</p>
<h2>Learn from the past</h2>
<p>When evaluating domains or planning content, it helps to know what a site used to publish. An archive recovery engine indexes historical snapshots, previews old pages and exports the data for analysis.</p>
<h2>Keep the team organised</h2>
<p>Finally, simple internal tools — a link organiser, a daily work tracker, a publishing overview — replace the spreadsheets and chat threads that small teams usually run on.</p>
<h2>The pattern</h2>
<p>None of these tools is huge. Each one removes a specific, repeated task. Together, they let a small team operate at a scale that would otherwise need many more people. See the full stories in our <a href="portfolio.html"><u>portfolio</u></a>, or <a href="contact.html"><u>tell us about your workflow</u></a>.</p>`,
  },
];
