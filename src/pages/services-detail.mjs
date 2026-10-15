// One template, thirteen service pages.
import { pageHero, trust, icon, art, svcGrid, ctaBanner, caseSlider, process, STEPS, COMMITS, techStack, testimonials, faq, insights, relatedLinks, statBandDark } from "../lib.mjs";

const S = [
  {
    slug: "ai-development", name: "AI Development", crumb: "Services / AI Development", n: 1,
    title: "AI That Does Real Work — Not Just Demos",
    text: "We build production-grade AI — agents, assistants, prediction models and multi-model systems — that plug into your workflows and pay for themselves in hours saved and revenue gained.",
    badges: ["Multi-LLM", "RAG", "Agents", "Data privacy"],
    value: [["60%", "Typical drop in repetitive manual work after automation"], ["2–4 wks", "From idea to working AI prototype"], ["Multi", "Model routing — no single-vendor lock-in"], ["100%", "Your data stays in your control"]],
    offer: [
      ["ai", "AI Agent Development", "Agents that plan, call your tools and complete multi-step tasks, with approvals wherever risk is high."],
      ["spark", "Generative AI Apps", "Copilots and content tools grounded in your documents, products and tone of voice."],
      ["layers", "LLM & RAG Systems", "Retrieval pipelines that answer from your own knowledge base with sources, not guesses."],
      ["link", "Multi-model Routing", "Send each request to the best model for cost, speed and quality — the same architecture behind our in-house AI workspace."],
      ["chart", "Predictive Analytics", "Forecast demand, churn and risk from your historical data and act before problems land."],
      ["eye", "Computer Vision", "Image and document understanding for quality checks, KYC, cataloguing and search."],
      ["target", "AI Consulting", "A clear roadmap: which use cases to build, buy or skip, with expected ROI for each."],
      ["shield", "AI Governance", "Guardrails, evaluation suites, audit logs and cost caps so AI stays safe and predictable."],
    ],
    why: [["Built our own AI SaaS", "Our in-house AI workspace runs on the same routing, evaluation and cost-control layers we deploy for clients."], ["Outcome-first scoping", "Every AI feature starts with a measurable target — time saved, tickets deflected, revenue lifted."], ["Evaluation before launch", "We test against your real data and edge cases, then monitor quality in production."], ["Vendor-neutral", "OpenAI, Claude, Gemini or open-source — chosen per task, swappable later."], ["Privacy by design", "PII redaction, regional hosting and zero-retention options where your data demands it."], ["Handover-ready", "Documented prompts, pipelines and dashboards your team can own and extend."]],
    faqs: [["Which AI models do you work with?", "OpenAI, Anthropic Claude, Google Gemini and leading open-source models. We often combine several and route each task to the best fit."], ["Will my data be used to train public models?", "No. We use enterprise APIs with zero-retention options or self-hosted models, and keep sensitive data inside your cloud."], ["How long does an AI project take?", "A focused prototype takes 2–4 weeks. Production rollouts with integrations and evaluation typically take 6–12 weeks."], ["How do you measure if AI is working?", "We agree metrics up front — accuracy, time saved, deflection rate, cost per task — and build dashboards to track them live."]],
  },
  {
    slug: "generative-ai", name: "Generative AI & LLM Apps", crumb: "Services / Generative AI", n: 6,
    title: "Generative AI Apps Grounded in Your Business",
    text: "Copilots, chat assistants and content engines that know your products, policies and voice — built with retrieval, guardrails and evaluation so they're accurate enough to put in front of customers.",
    badges: ["Copilots", "Chatbots", "Content AI", "Voice"],
    value: [["24/7", "Customer answers without adding headcount"], ["10×", "Faster first drafts for content teams"], ["Cited", "Answers backed by your own sources"], ["Weeks", "Not months, to a working pilot"]],
    offer: [
      ["spark", "AI Copilots", "In-app assistants that help users complete tasks, not just chat."],
      ["team", "Customer Support Bots", "Bots that resolve real queries from your help centre and hand off cleanly to humans."],
      ["news", "Content Generation", "Brand-safe drafting for articles, product copy and social — with editorial review built in."],
      ["search", "Knowledge Assistants", "Ask-anything search across docs, wikis and tickets with source links."],
      ["megaphone", "Voice Agents", "Phone and WhatsApp voice assistants in English, Hindi and regional languages."],
      ["layers", "RAG Pipelines", "Chunking, embeddings and re-ranking tuned to your content, not a generic demo."],
      ["shield", "Guardrails & Evals", "Topic limits, PII filters and automated test suites that catch regressions."],
      ["link", "Integrations", "Connect to CRM, helpdesk, CMS, Slack, WhatsApp and your internal APIs."],
    ],
    why: [["Publishing DNA", "We run a content network — so we know what good AI-assisted editorial workflows look like."], ["Multilingual", "Experience with Indian languages and code-mixed text, not just English."], ["Accuracy obsessed", "Every answer is grounded and traceable; hallucinations are tested for, not hoped against."], ["Fast pilots", "A working pilot in your hands within weeks to prove value before scaling."], ["Cost control", "Caching, routing and token budgets keep running costs predictable."], ["Full ownership", "Prompts, pipelines and data stay yours."]],
    faqs: [["Can the assistant answer only from our content?", "Yes. Retrieval-augmented generation restricts answers to your approved sources and shows citations."], ["Do you support Hindi and regional languages?", "Yes — we build and evaluate for Hindi, Telugu, Tamil and other languages, including mixed-language input."], ["What does it cost to run?", "It depends on volume and model choice. We estimate monthly running costs during scoping and design for them."], ["Can it hand over to a human?", "Yes. We build escalation paths into your helpdesk or WhatsApp team with full conversation context."]],
  },
  {
    slug: "data-analytics", name: "Data & Analytics", crumb: "Services / Data & Analytics", n: 5,
    title: "Data Engineering & Analytics for Faster, Better Decisions",
    text: "We unify scattered data from your apps, ads, CRM and finance tools into one trusted source — then build the dashboards and models your team actually opens every morning.",
    badges: ["Pipelines", "BI", "Attribution", "Forecasting"],
    value: [["1", "Source of truth across tools"], ["Daily", "Automated reporting, zero spreadsheets"], ["Live", "Revenue and marketing attribution"], ["Hours → mins", "Time to answer a business question"]],
    offer: [
      ["data", "Data Engineering", "Reliable pipelines from every source into a warehouse you control."],
      ["chart", "Dashboards & BI", "Looker Studio, Metabase or custom dashboards built around decisions, not vanity charts."],
      ["target", "Marketing Attribution", "Server-side tracking and attribution so ad spend decisions rest on real numbers."],
      ["ai", "Forecasting & ML", "Demand, churn and revenue forecasts your planning cycle can rely on."],
      ["layers", "Data Warehousing", "BigQuery, ClickHouse or Postgres modelled with dbt for clean, documented tables."],
      ["shield", "Data Quality", "Tests and alerts that catch broken data before it reaches a board deck."],
      ["link", "Integrations", "Shopify, Razorpay, Meta, Google, CRM and ERP connectors."],
      ["eye", "Product Analytics", "Funnels, cohorts and retention analysis to guide your roadmap."],
    ],
    why: [["We live in the numbers", "Our own media and D2C businesses run on these dashboards daily."], ["Decision-first design", "Every dashboard maps to a decision and an owner."], ["Modern stack", "Cloud-native, version-controlled and cheap to run."], ["Clean tracking", "Analytics implementations audited end to end."], ["Self-serve", "Teams trained to answer their own questions."], ["Documented", "Every metric defined once, used everywhere."]],
    faqs: [["We have data in many tools. Where do we start?", "With the three decisions that matter most. We connect only the data needed for those, prove value, then expand."], ["Which BI tools do you use?", "Looker Studio, Metabase, Power BI or custom React dashboards — chosen around your team and budget."], ["Can you fix our broken GA4 / Meta tracking?", "Yes. Tracking audits and server-side setups are among our most requested projects."], ["Who owns the data?", "You do. Everything lives in your cloud accounts."]],
  },
  {
    slug: "software-development", name: "Custom Software Development", crumb: "Services / Software Development", n: 3,
    title: "Software Built Around How Your Business Actually Runs",
    text: "Off-the-shelf tools force your team to work around them. We build software that fits how you actually operate — secure, scalable and simple enough that people want to use it.",
    badges: ["Web platforms", "ERP & CRM", "Integrations", "Modernisation"],
    value: [["30–50%", "Less manual work after automating core workflows"], ["1", "Connected system instead of five spreadsheets"], ["99.9%", "Uptime targets on cloud-native builds"], ["100%", "Code and IP ownership"]],
    offer: [
      ["target", "Software Consulting", "Map processes, find the bottlenecks and decide what to build, buy or integrate."],
      ["code", "Custom Software", "Greenfield platforms designed around your workflows and growth plans."],
      ["ai", "AI-powered Software", "Bake automation and intelligence into everyday tools from day one."],
      ["saas", "Product Development", "Turn an internal tool or idea into a product you can sell."],
      ["layers", "Legacy Modernisation", "Move ageing systems to modern stacks without stopping the business."],
      ["link", "Systems Integration", "Make your CRM, ERP, payments and apps talk to each other."],
      ["shield", "Security & Compliance", "Role-based access, audit trails and secure-by-default architecture."],
      ["clock", "Maintenance & Support", "SLAs, monitoring and continuous improvement after launch."],
    ],
    solutions: ["CRM", "ERP", "Inventory management", "HRMS & payroll", "Customer portals", "Booking systems", "Field-service apps", "Marketplaces", "Billing & invoicing", "Internal admin panels"],
    why: [["Consulting first", "We challenge requirements before we code them — saving budget on features nobody needs."], ["End-to-end ownership", "Strategy, design, build, QA and support from one accountable team."], ["Engineering depth", "Senior engineers on every project, with code reviews on every change."], ["Total transparency", "Shared boards, weekly demos and itemised estimates."], ["Secure by default", "Security practices built into the process, not bolted on."], ["Long-term partner", "Most clients stay with us long after the first release."]],
    faqs: [["How do you estimate cost?", "After discovery we break scope into features with hour ranges, so you see exactly what drives price and can trade off."], ["Can you work with our existing team?", "Yes. We can own the full build or plug into your team's repo, sprints and tools."], ["Do you modernise legacy systems?", "Yes — usually in phases, running old and new side by side so operations never stop."], ["What happens after launch?", "Every project includes 30 days of free fixes, then optional support plans with defined response times."]],
  },
  {
    slug: "saas-development", name: "SaaS Product Development", crumb: "Services / SaaS Development", n: 1,
    title: "SaaS Product Development, From First Customer to Scale",
    text: "We've built and run our own SaaS. We bring that operator view to yours — multi-tenant architecture, billing, onboarding and analytics designed to grow revenue, not just ship features.",
    badges: ["Multi-tenant", "Subscriptions", "Onboarding", "AI-native"],
    value: [["Weeks", "To a sellable first version"], ["Multi", "Tenant architecture from day one"], ["Built-in", "Billing, roles and usage metering"], ["Live", "Product analytics on launch"]],
    offer: [
      ["saas", "SaaS Architecture", "Multi-tenant data models, isolation and scaling patterns that last."],
      ["rocket", "SaaS MVP", "Launch the core value loop fast and start charging early."],
      ["bank", "Billing & Subscriptions", "Stripe and Razorpay plans, trials, metering and invoicing."],
      ["design", "Onboarding UX", "First-run experiences that get users to value in minutes."],
      ["ai", "AI Features", "Add copilots, summaries and automation users will pay more for."],
      ["chart", "Product Analytics", "Activation, retention and expansion metrics wired in."],
      ["cloud", "Cloud & Scaling", "Infrastructure that scales with customers and keeps margins healthy."],
      ["layers", "SaaS Modernisation", "Re-platform legacy or single-tenant apps into modern SaaS."],
    ],
    why: [["Operators, not just builders", "Running our own AI SaaS taught us pricing, onboarding and churn first-hand."], ["Revenue-ready", "Billing, roles and admin panels are planned, not afterthoughts."], ["Lean MVPs", "We help you cut scope to what proves willingness to pay."], ["Scalable foundations", "No rewrite needed when customers arrive."], ["AI-native", "Modern AI features designed in from the start."], ["Growth support", "SEO, content and ads to bring your first customers."]],
    faqs: [["Can you help with pricing and packaging?", "Yes — we share what we've learned running our own SaaS and design billing to support experiments."], ["Single-tenant or multi-tenant?", "Usually multi-tenant for cost and speed; we'll recommend single-tenant where compliance requires it."], ["Which payment providers?", "Stripe for global, Razorpay for India, or both."], ["Do you help get first customers?", "Yes, through our growth practice: launch SEO, content and paid acquisition."]],
  },
  {
    slug: "web-development", name: "Web Development", crumb: "Services / Web Development", n: 3,
    title: "Websites That Load Fast, Rank High and Sell",
    text: "Websites, web apps and portals engineered for speed and search from the first line of code — the same standards behind a publishing network read by millions every month.",
    badges: ["Next.js", "Headless CMS", "Core Web Vitals", "SEO-ready"],
    value: [["<2s", "Target page load on mobile"], ["90+", "Lighthouse performance targets"], ["SEO", "Technical foundations built in"], ["CMS", "Your team edits without developers"]],
    offer: [
      ["web", "Corporate Websites", "Fast, credible sites that turn visitors into enquiries."],
      ["news", "Publishing Platforms", "High-traffic news and content sites with editorial workflows."],
      ["cart", "E-commerce Stores", "Shopify, headless or custom storefronts tuned for conversion."],
      ["saas", "Web Applications", "Dashboards, portals and tools with app-like experiences."],
      ["layers", "Headless CMS", "Sanity, Strapi or WordPress headless — easy for editors, fast for readers."],
      ["bolt", "Performance Optimisation", "Fix slow sites: images, fonts, scripts and Core Web Vitals."],
      ["search", "SEO Engineering", "Structured data, sitemaps, internal linking and crawl health."],
      ["clock", "Maintenance", "Updates, security patches and uptime monitoring."],
    ],
    why: [["Speed is a feature", "Every build has performance budgets checked before launch."], ["Search-first", "Technical SEO is part of the build, not a later add-on."], ["Editor-friendly", "Your team publishes without filing tickets."], ["Proven at scale", "Our own sites serve millions of monthly readers."], ["Accessible", "Built to WCAG guidelines for all users."], ["Measurable", "Analytics and conversion tracking configured on day one."]],
    faqs: [["WordPress or custom?", "WordPress (often headless) for content-heavy sites with familiar editing; custom Next.js for apps and maximum speed."], ["Will my site rank on Google?", "We build the technical foundations; rankings also need content and authority, which our SEO team can drive."], ["Can you redesign without losing traffic?", "Yes — with redirect maps, content parity checks and staged launches."], ["How long does a website take?", "Typically 4–8 weeks for a corporate site, longer for platforms and stores."]],
  },
  {
    slug: "mobile-app-development", name: "Mobile App Development", crumb: "Services / Mobile Apps", n: 2, kind: "phones",
    title: "Mobile App Development for iOS and Android That Users Keep",
    text: "Native and cross-platform apps built for speed, offline resilience and retention — designed for real-world networks and devices, from flagship phones to budget Androids.",
    badges: ["Flutter", "React Native", "Swift", "Kotlin"],
    value: [["2", "Platforms from one codebase"], ["60fps", "Smooth, native-feeling UI"], ["Offline", "Resilient on weak networks"], ["Store", "Submission and ASO handled"]],
    offer: [
      ["mobile", "iOS App Development", "Swift apps that feel at home on iPhone and iPad."],
      ["mobile", "Android App Development", "Kotlin apps optimised for the full range of Android devices."],
      ["layers", "Cross-platform Apps", "Flutter or React Native for speed to market on both stores."],
      ["cart", "Commerce Apps", "Shopping, payments, loyalty and order tracking."],
      ["news", "Content & News Apps", "Push-driven reading apps with offline mode."],
      ["ai", "AI-powered Apps", "On-device and cloud AI for smarter experiences."],
      ["rocket", "App Store Launch", "Store listings, ASO and release management."],
      ["clock", "App Maintenance", "OS updates, crash monitoring and feature releases."],
    ],
    why: [["Built for India and beyond", "Low-bandwidth, low-memory devices tested from day one."], ["Retention-focused", "Onboarding, notifications and analytics designed to keep users."], ["One team", "Design, backend and app under one roof."], ["Quality gates", "Automated tests and device-lab QA before every release."], ["Store-savvy", "We handle reviews, policies and rejections."], ["Post-launch growth", "ASO and paid install campaigns when you're ready."]],
    faqs: [["Native or cross-platform?", "Cross-platform (Flutter/React Native) fits most products; native when you need deep device features or maximum performance."], ["How much does an app cost?", "Simple apps start from a few lakh rupees; complex apps are phased. You'll get an itemised estimate after discovery."], ["Do you publish to the stores?", "Yes, under your developer accounts so you keep ownership."], ["Can you take over an existing app?", "Yes, after a code audit to understand quality and risks."]],
  },
  {
    slug: "mvp-development", name: "MVP Development", crumb: "Services / MVP Development", n: 4,
    title: "Launch in Weeks. Learn From Real Users. Build What Works.",
    text: "We help founders find the smallest product that proves the business — and build it in weeks on a foundation that won't need a rewrite once customers show up.",
    badges: ["6–10 weeks", "Fixed scope", "Investor-ready", "Scalable"],
    value: [["6–10", "Weeks to launch a typical MVP"], ["50%", "Scope typically cut in discovery"], ["Fixed", "Price for agreed scope"], ["Day 1", "Analytics to measure traction"]],
    offer: [
      ["target", "Product Discovery", "Workshops to pin down the riskiest assumptions and the smallest test."],
      ["design", "Prototype & Validation", "Clickable prototypes tested with real users before building."],
      ["rocket", "MVP Build", "Production-quality code for the core loop — nothing more."],
      ["ai", "AI MVPs", "Validate AI ideas quickly with prompts, evals and real data."],
      ["chart", "Traction Analytics", "Activation and retention tracking from launch day."],
      ["megaphone", "Launch Marketing", "Landing pages, SEO and early ads to get first users."],
      ["layers", "Scale-up Path", "Architecture ready for v2 without starting over."],
      ["briefcase", "Investor Materials", "Product demos and metrics that support your raise."],
    ],
    why: [["Founder-run team", "We've launched and shut down products ourselves — we know what matters."], ["Ruthless scoping", "We protect your runway by cutting what doesn't prove the idea."], ["Speed with quality", "Fast doesn't mean throwaway code."], ["Fixed price", "Clear scope, clear price, no surprises."], ["Growth included", "We help find your first users, not just ship code."], ["Honest advice", "If the idea needs a pivot, we'll say so."]],
    faqs: [["What is in an MVP?", "Only the features needed to test your core value with real users — usually one main workflow done very well."], ["Can I raise money on the MVP?", "Many founders do. We help you instrument the traction metrics investors ask about."], ["Do I own the code?", "Yes, fully — it's in your repository from day one."], ["What happens after the MVP?", "We plan v2 from what users actually did, and can continue as your product team."]],
  },
  {
    slug: "ui-ux-design", name: "Product Design & UX", crumb: "Services / UI/UX Design", n: 6, kind: "phones",
    title: "Product Design & UX That Makes Complex Things Feel Simple",
    text: "From research and strategy to pixel-perfect interfaces and design systems, we design products people understand on the first try — and test them before they're built.",
    badges: ["Research", "UX", "UI", "Design systems"],
    value: [["5", "User tests before any build"], ["1", "Design system across web and app"], ["Figma", "Handoff your developers love"], ["Faster", "Builds with fewer revisions"]],
    offer: [
      ["eye", "User Research", "Interviews and usability tests that uncover what users really need."],
      ["target", "UX Strategy", "Information architecture, journeys and flows mapped to business goals."],
      ["design", "UI Design", "Distinctive, accessible interfaces that build trust."],
      ["layers", "Design Systems", "Reusable components that keep products consistent as they grow."],
      ["mobile", "App Design", "iOS and Android patterns done right."],
      ["web", "Website Design", "Conversion-focused marketing sites."],
      ["spark", "Prototyping", "Interactive prototypes to test and pitch."],
      ["search", "UX Audits", "Expert reviews that find where users struggle and why."],
    ],
    why: [["Design + build", "Designers work beside engineers, so designs ship as intended."], ["Evidence-led", "Decisions backed by research and analytics."], ["Conversion aware", "Growth team input on every key screen."], ["Accessible", "WCAG-compliant from the start."], ["Systematic", "Design systems that scale with you."], ["Fast iterations", "Weekly design reviews with clear decisions."]],
    faqs: [["Do you only design, or also build?", "Both. Many clients start with design and continue into development with the same team."], ["What do we receive?", "Figma files, a design system, prototypes and annotated specs."], ["Can you redesign an existing product?", "Yes, starting with a UX audit and analytics review."], ["How long does design take?", "2–6 weeks for most products, depending on scope."]],
  },
  {
    slug: "cloud-devops", name: "Cloud & DevOps", crumb: "Services / Cloud & DevOps", n: 5,
    title: "Cloud & DevOps That Keep You Fast, Stable and Cost-Efficient",
    text: "We migrate, automate and monitor your infrastructure so releases are boring, outages are rare and your cloud bill makes sense.",
    badges: ["AWS", "GCP", "CI/CD", "Cost optimisation"],
    value: [["30%", "Typical cloud cost reduction after optimisation"], ["Daily", "Safe deploys with CI/CD"], ["99.9%", "Uptime targets with monitoring"], ["IaC", "Everything as code, reproducible"]],
    offer: [
      ["cloud", "Cloud Migration", "Move to AWS or GCP with minimal downtime."],
      ["bolt", "CI/CD Pipelines", "Automated build, test and deploy on every change."],
      ["layers", "Infrastructure as Code", "Terraform-managed environments you can rebuild in minutes."],
      ["chart", "Cost Optimisation", "Right-sizing, reserved capacity and waste removal."],
      ["eye", "Monitoring & Alerting", "Logs, metrics and alerts that catch issues first."],
      ["shield", "Cloud Security", "IAM, secrets, backups and hardening."],
      ["saas", "Containers & Kubernetes", "Docker and K8s where scale needs it — and only then."],
      ["clock", "Managed DevOps", "Ongoing ops support with clear SLAs."],
    ],
    why: [["Traffic-tested", "We run sites that handle viral news spikes."], ["Pragmatic", "Simple infrastructure first, complexity only when earned."], ["Cost conscious", "We treat your cloud bill like ours."], ["Secure", "Least-privilege and backups by default."], ["Documented", "Runbooks so your team isn't dependent on us."], ["24/7 options", "On-call support plans available."]],
    faqs: [["AWS or GCP?", "Both work well; we recommend based on your stack, team and credits."], ["Can you cut our cloud bill?", "Usually, yes. We start with a cost audit and share savings estimates before changing anything."], ["Do you offer on-call support?", "Yes, with defined response times."], ["Will migration cause downtime?", "We plan for zero or near-zero downtime with staged cutovers."]],
  },
  {
    slug: "seo-content", name: "SEO & Content Engineering", crumb: "Services / SEO & Content", n: 3,
    title: "SEO From a Team That Ranks Its Own Sites — Every Day",
    text: "Our own media network reaches millions of readers a month without paying for traffic. We bring the same technical SEO, content systems and publishing discipline to your brand.",
    badges: ["Technical SEO", "Programmatic SEO", "Content ops", "News SEO"],
    value: [["3–5M", "Monthly readers on our own network"], ["Hours", "From trending topic to indexed page"], ["Organic", "Traffic that compounds, not rents"], ["Tracked", "Rankings tied to leads and revenue"]],
    offer: [
      ["search", "Technical SEO Audits", "Crawlability, indexing, speed and structured data fixed at the root."],
      ["layers", "Programmatic SEO", "Thousands of useful, templated pages built from your data."],
      ["news", "News & Discover SEO", "Top Stories and Google Discover optimisation for publishers."],
      ["spark", "Content Strategy", "Topic clusters mapped to search demand and your funnel."],
      ["team", "Content Production", "Writers and editors with AI-assisted, human-checked workflows."],
      ["link", "Digital PR & Links", "Earned authority through data stories and partnerships."],
      ["globe", "Multilingual SEO", "Hindi and regional-language content for India's next billion users."],
      ["chart", "SEO Analytics", "Search Console and GA4 reporting tied to business results."],
    ],
    why: [["We practise what we sell", "Millions of monthly readers on sites we own."], ["Engineering + editorial", "Developers and editors on one team."], ["Speed to index", "Workflows that publish and get crawled fast."], ["Revenue-focused", "Rankings tracked against leads and sales."], ["White-hat only", "No shortcuts that risk penalties."], ["Transparent reporting", "Monthly reviews with clear next steps."]],
    faqs: [["How long until SEO shows results?", "Technical fixes can show results in weeks; content programs typically compound over 3–6 months."], ["Do you write content?", "Yes — our editorial team produces and optimises content, with AI assistance and human review."], ["Do you work with news publishers?", "It's our specialty — Top Stories, Discover and breaking-news workflows."], ["Can you guarantee rankings?", "No honest SEO can. We commit to the work, transparency and measurable progress."]],
  },
  {
    slug: "performance-marketing", name: "Performance Marketing", crumb: "Services / Performance Marketing", n: 4, kind: "phones",
    title: "Ad Spend That Scales Only When It Pays",
    text: "We've scaled our own D2C brand's ad spend into the ₹10–20L/month range while growing the business 4×. We bring the same margin-first discipline to your Meta and Google campaigns.",
    badges: ["Meta Ads", "Google Ads", "Tracking", "Creative testing"],
    value: [["4×", "Growth delivered for our D2C brand"], ["₹10–20L", "Monthly ad spend managed"], ["Margin", "First scaling decisions"], ["Weekly", "Creative tests and reviews"]],
    offer: [
      ["megaphone", "Meta Ads", "Facebook and Instagram campaigns from prospecting to retargeting."],
      ["search", "Google Ads", "Search, Shopping and Performance Max structured for profit."],
      ["target", "Conversion Tracking", "Pixel, CAPI and server-side tracking you can trust."],
      ["spark", "Creative Strategy", "Ad concepts, hooks and UGC tested systematically."],
      ["web", "Landing Pages", "Fast pages built to convert paid traffic."],
      ["chart", "Attribution & Reporting", "Contribution-margin dashboards, not just ROAS."],
      ["cart", "E-commerce Growth", "Catalog ads, offers and retention flows."],
      ["handshake", "Growth Consulting", "Audits and strategy for in-house teams."],
    ],
    why: [["Operator experience", "We spend our own money on ads every day."], ["Margin over ROAS", "We scale on profit, not platform-reported vanity metrics."], ["Clean data", "Tracking fixed before budgets grow."], ["Creative engine", "Constant testing to beat ad fatigue."], ["Full funnel", "Ads, landing pages and retention together."], ["No lock-in", "Ad accounts always stay in your name."]],
    faqs: [["What budget do I need?", "We typically recommend at least ₹1–2L/month in ad spend for reliable testing, but we'll advise based on your margins."], ["Do you make the creatives?", "Yes — concepts, static and video ads, with UGC partners where needed."], ["How do you report?", "Weekly updates and a live dashboard showing spend, revenue and contribution margin."], ["Who owns the ad accounts?", "You do. We work inside your Business Manager and Google Ads accounts."]],
  },
  {
    slug: "hire-developers", name: "Hire Dedicated Developers", crumb: "Services / Hire Developers", n: 2,
    title: "Hire a Dedicated Development Team That Starts This Week",
    text: "Vetted engineers, AI specialists, designers and growth experts who join your stand-ups, work in your tools, and scale up or down as your roadmap changes.",
    badges: ["Start in days", "Monthly contracts", "Senior talent", "Your timezone"],
    value: [["2–5 days", "To onboard your first developers"], ["Monthly", "Flexible contracts, no long lock-in"], ["Senior", "Engineers with code review on every change"], ["Overlap", "Daily working hours with your team"]],
    offer: [
      ["code", "Full-stack Developers", "React, Node, Python and modern web stacks."],
      ["mobile", "Mobile Developers", "Flutter, React Native, Swift and Kotlin."],
      ["ai", "AI/ML Engineers", "LLM, RAG and ML specialists."],
      ["cloud", "DevOps Engineers", "Cloud, CI/CD and infrastructure experts."],
      ["design", "UI/UX Designers", "Product designers for web and mobile."],
      ["shield", "QA Engineers", "Manual and automation testing."],
      ["search", "SEO Specialists", "Technical SEO and content strategists."],
      ["team", "Full Product Pods", "PM, design, engineering and QA as one unit."],
    ],
    why: [["Vetted talent", "Technical interviews and trial tasks before anyone joins your team."], ["Fast start", "Profiles in 48 hours, onboarding within days."], ["Flexible scaling", "Add or reduce headcount month to month."], ["Replacement guarantee", "Free replacement if a fit doesn't work out."], ["Your process", "Your tools, your sprints, your standards."], ["Backed by a company", "Senior oversight and continuity, not lone freelancers."]],
    faqs: [["How quickly can developers start?", "Usually within 2–5 business days of choosing profiles."], ["Can I interview them?", "Yes — you interview and approve every team member."], ["What are the contract terms?", "Monthly engagements with a short notice period."], ["What if someone isn't a fit?", "We replace them at no extra cost."]],
  },
];

export default S.map((s) => ({
  path: `${s.slug}.html`,
  title: `${s.name} | NH Solutions`,
  desc: s.text.slice(0, 155),
  body: `
${pageHero({ crumb: s.crumb, title: s.title, text: s.text, ctas: [["Get a free consultation", "contact.html"], ["See our work", "portfolio.html"]], badges: s.badges, img: s.slug })}
${trust()}
<section><div class="wrap value-grid">
  <div class="sec-head"><span class="eyebrow">Why it matters</span><h2>What great ${s.name.toLowerCase()} is worth to your business</h2><p>Good work shows up on the P&L, not just in the demo. These are the outcomes we design toward on every ${s.name.toLowerCase()} engagement.</p><a class="btn btn-grad" href="contact.html">Discuss your project</a></div>
  <div class="value-list">${s.value.map(([b, t]) => `<div class="reveal"><b class="grad-text">${b}</b><span>${t}</span></div>`).join("")}</div>
</div></section>
<section class="bg-soft"><div class="wrap">
  <div class="sec-head center"><h2>What we deliver</h2><p>Pick one capability or hand us the whole problem — every service below is delivered by the same senior team that scoped it.</p></div>
  ${svcGrid(s.offer)}
</div></section>
${ctaBanner(`Not sure where ${s.name.toLowerCase()} fits in your roadmap?`, "Book a 30-minute call. We'll review your goals and suggest the smallest, highest-impact next step — no obligation.", "Book a discovery call")}
${caseSlider("Success stories", "Real products, real numbers — work we built or ran ourselves.")}
${s.solutions ? `<section><div class="wrap"><div class="sec-head"><h2>Solutions we build</h2><p>Common systems our clients commission — each tailored, never templated.</p></div><div class="card-grid five">${s.solutions.map((x) => `<div class="card reveal">${icon("layers")}<h3>${x}</h3></div>`).join("")}</div></div></section>` : ""}
<section><div class="wrap alt-wrap">
  <div class="alt-block"><div><span class="eyebrow">Built for your stage</span><h2>Right-sized for where you are today</h2><p>Startups get speed and focus. Growing companies get structure and scale. Established businesses get modernisation without disruption. Same team, adjusted to where you are.</p><ul><li>Startups: lean MVPs</li><li>SMEs: process automation</li><li>Publishers: high-traffic stacks</li><li>D2C: funnels that convert</li><li>Enterprises: integrations</li><li>Agencies: white-label delivery</li></ul></div><div class="alt-art">${art(s.n, s.kind || "dash", s.name)}</div></div>
</div></section>
${process(STEPS, COMMITS)}
${techStack()}
<section><div class="wrap">
  <div class="sec-head"><h2>Why teams choose us for ${s.name.toLowerCase()}</h2></div>
  <div class="card-grid three">${s.why.map(([h, p], i) => `<div class="card reveal"><span class="num">0${i + 1}</span><h3>${h}</h3><p>${p}</p></div>`).join("")}</div>
</div></section>
${statBandDark()}
${testimonials()}
${faq(s.faqs, `${s.name}: FAQs`)}
${relatedLinks(s.slug)}
${insights()}
`,
}));
