# atonomi | Engineering Build Document
**Version 1.1** | May 2026 | **Prepared for:** Engineering Team
**Domain:** [print.atonomi.ai](https://print.atonomi.ai)

---

## 1. Project Overview & Business Context

### What atonomi Is
**atonomi** is the operating system for modern custom apparel printing businesses. It automates:
* [cite_start]Lead generation and client acquisition [cite: 7]
* [cite_start]CRM and project management [cite: 7]
* [cite_start]Quoting and production scheduling [cite: 7]

[cite_start]**Goal:** To help shop owners stop chasing work and start scaling profitably[cite: 7].

### Core Differentiator / Killer Feature
[cite_start]**Automated Personalized Postcard + Landing Page Engine** [cite: 10]
* [cite_start]**Scrapes** local U.S. businesses (contractors, teams, schools, etc.)[cite: 11].
* [cite_start]**AI Generates** hyper-realistic mockups of their logo on premium apparel (t-shirts, hoodies, hats)[cite: 12].
* [cite_start]**Prints & Mails** professional postcards with a unique QR code[cite: 13].
* [cite_start]**Personalized Landing Page:** The QR code leads to a branded "We designed something just for you" page[cite: 14].

**Reference Material:**
* [cite_start]**Live Example:** [J5 Pro Gear Lander](https://j5progear.com/lander/american-town-painting-salt-lake-city-ut?v=b) [cite: 16]
* [cite_start]**Visual North Star:** Use the hero section of the personalized lander prominently[cite: 17].

### Target Audience
[cite_start]Owners of screen-print, DTG, and embroidery shops tired of inconsistent revenue who want predictable B2B orders on autopilot[cite: 19].

### Real Pain Points (Use these exact quotes)
1.  [cite_start]**Inconsistent Lead Flow:** "I spend hours cold-calling local businesses and get zero responses. My phone never rings with real B2B jobs." [cite: 22, 23]
2.  [cite_start]**Cash-Flow Nightmares:** "I overbuy blanks hoping for orders that never come. Feast-or-famine seasons leave me with dead inventory tying up thousands in cash." [cite: 24, 25]
3.  [cite_start]**Production Chaos:** "Quoting, scheduling, and chasing orders is a daily fire drill." [cite: 26, 27]
4.  [cite_start]**Razor-thin Margins:** "Competing with cheap online printers is killing my profits." [cite: 28, 29]
5.  [cite_start]**Vendor Overpayment:** "I'm checking SanMar, S&S, and AlphaBroder every order... I don't have time to compare." [cite: 30, 31]

---

## 2. Landing Page Structure & Design

### General Direction
* [cite_start]**Tone:** Confident, results-driven, premium apparel feel[cite: 44].
* [cite_start]**Visual Style:** Clean minimalist SaaS style (Reference: [unloopa.ai](https://unloopa.ai))[cite: 45, 48].
* [cite_start]**Colors:** White/neutral backgrounds, dark charcoal text, and one primary accent (vibrant teal/green)[cite: 46, 47, 49].
* [cite_start]**Typography:** Sans-serif (System or Inter)[cite: 50].

### Section Roadmap
1.  [cite_start]**Hero Section:** * *Headline:* "Stop Chasing Customers. Start Getting Calls from Local Businesses." [cite: 54]
    * [cite_start]*Visuals:* Screenshot of the American Town Painting lander + High-quality postcard mockups[cite: 57].
2.  **The Problem:** "Running a print shop shouldn't feel this hard." [cite_start]Use illustrated pain-point cards with real quotes[cite: 61, 62, 63].
3.  [cite_start]**The Solution (Flagship Feature):** 4-step visual flow showing: Scrape → AI Mockup → Mail Postcard → Branded Landing Page[cite: 65, 66].
4.  **Core Platform Features:**
    * [cite_start]**Vendor Price Comparison:** Auto-pulls pricing from SanMar, AlphaBroder, S&S, and TSC[cite: 75, 76].
    * [cite_start]**Reorder Automation:** Tracks history and auto-flags reorder opportunities[cite: 78, 80].
    * [cite_start]**Instant Quoting:** Turns 20-minute quotes into 30-second approvals[cite: 86, 88].
    * [cite_start]**Art Approval & CRM:** Digital sign-offs and lead tracking in one place[cite: 89, 96].
5.  [cite_start]**Social Proof:** Testimonials and before/after stats[cite: 115, 117].
6.  [cite_start]**Final CTA:** "Ready to fill your schedule with high-margin B2B work?"[cite: 119].

---

## 3. Technical & Graphics Requirements

### Custom Graphics Priority
[cite_start]Create high-quality visuals of the postcards[cite: 131]:
* [cite_start]**Front:** 3 apparel mockups + logo + scannable QR code[cite: 132].
* [cite_start]**Back:** Professional layout with CTA and contact info[cite: 133].
* [cite_start]**Research:** Study [Scribeless.com](https://Scribeless.com) or [Print.one](https://Print.one) for realistic dimensions and aesthetics[cite: 134].

### Tech Stack Recommendations
* [cite_start]**Framework:** Next.js / React (App Router) + Tailwind CSS[cite: 137].
* [cite_start]**Animations:** Framer Motion for smooth transitions[cite: 138].
* [cite_start]**Deployment:** Vercel (instant previews)[cite: 139].
* [cite_start]**Media:** Next.js Image + Cloudinary[cite: 140].
* [cite_start]**Analytics:** PostHog or GA4[cite: 141].

### MVP Deliverables Checklist
* [cite_start][ ] Fully responsive page live at print.atonomi.ai[cite: 143].
* [cite_start][ ] Custom postcard graphics featured[cite: 144].
* [cite_start][ ] Working "Book a Demo" lead capture[cite: 146].
* [cite_start][ ] SEO-optimized meta tags and OG images[cite: 147].