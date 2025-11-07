import Link from "next/link";

const services = [
  {
    title: "Factory Automation Roadmaps",
    description:
      "Turn audit insights into phased automation plans tailored to your production mix, budgets, and change-management pace.",
    icon: FactoryIcon
  },
  {
    title: "Connected Shopfloor Systems",
    description:
      "Deploy IoT sensors, MES dashboards, and predictive maintenance workflows that plug into your existing ERPs.",
    icon: NetworkIcon
  },
  {
    title: "Robotics & Cobots Integration",
    description:
      "Engineer collaborative workcells, vision systems, and tooling that streamline repetitive tasks while keeping teams safe.",
    icon: RobotIcon
  }
];

const differentiators = [
  {
    title: "Manufacturing DNA",
    description: "Process engineers, automation architects, and Lean experts who have sat in your seat."
  },
  {
    title: "Fast ROI Playbook",
    description: "90-day pilot sprints prove tangible gains before scaling across lines or facilities."
  },
  {
    title: "Vendor-Neutral Partners",
    description: "We curate hardware and software partners that fit your tolerance for risk, pace, and budget."
  }
];

const processSteps = [
  {
    title: "Discover",
    description: "Conduct plant walkthroughs, data studies, and stakeholder interviews to inventory automation potential."
  },
  {
    title: "Design",
    description: "Co-create a prioritized automation roadmap with budgets, ROI targets, and integration milestones."
  },
  {
    title: "Deploy",
    description: "Stand up pilots, iterate with operators, and scale the winning solutions across your network."
  },
  {
    title: "Upskill",
    description: "Train supervisors and technicians, codify best practices, and transition ownership to your team."
  }
];

const metrics = [
  { label: "Average OEE Lift", value: "18%" },
  { label: "Faster Changeovers", value: "32%" },
  { label: "Scrap Reduction", value: "22%" },
  { label: "Payback Period", value: "< 9 months" }
];

const testimonials = [
  {
    quote:
      "FlowForge helped our two plants share real-time production data for the first time. We hit 95% on-time delivery within weeks.",
    name: "Lena Ortiz",
    role: "COO, Orion Components"
  },
  {
    quote:
      "Their cobot deployment freed six operators for higher-value work, while improving consistency on a critical assembly line.",
    name: "Richard Evans",
    role: "Plant Director, MetalWorks Co."
  }
];

const caseStudies = [
  {
    stat: "42%",
    subtitle: "Throughput increase",
    title: "Precision metal fabricator optimizes workcells with cobots",
    body:
      "We designed a modular cobot cell that reduced handling time, and orchestrated material flow with Kanban-ready sensor alerts."
  },
  {
    stat: "4.6x",
    subtitle: "Faster root-cause analysis",
    title: "Plastics manufacturer unlocks predictive maintenance",
    body:
      "We networked aging injection presses, created live dashboards, and built ML alerts that reshaped maintenance scheduling."
  }
];

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#approach", label: "Approach" },
  { href: "#results", label: "Results" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" }
];

export default function Page() {
  const year = new Date().getFullYear();

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-60 bg-gradient-to-br from-brand-500 via-brand-700 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_rgba(15,24,54,0))]" />
        <div className="relative container flex flex-col gap-12 py-10">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              FlowForge<span className="text-sky-200">.automation</span>
            </Link>
            <div className="hidden md:flex items-center gap-8 text-sm text-slate-200">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="hover:text-white transition">
                  {link.label}
                </a>
              ))}
            </div>
            <Link
              href="#contact"
              className="hidden md:inline-flex rounded-full bg-white px-5 py-2 text-sm font-medium text-slate-900 shadow-glow transition hover:translate-y-0.5"
            >
              Book Strategy Call
            </Link>
          </nav>
          <div className="grid gap-10 pb-14 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-4 py-1 text-xs uppercase tracking-[0.22em] text-slate-300">
                Tailored automation for manufacturing SMEs
              </span>
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
                Automate your shopfloor without pausing production.
              </h1>
              <p className="max-w-xl text-base text-slate-200 md:text-lg">
                We help growing manufacturers connect legacy equipment, unlock robotics, and orchestrate human-machine workflows—delivering measurable efficiency in under 90 days.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="#contact"
                  className="inline-flex w-full items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-sm font-medium text-white shadow-glow transition hover:bg-brand-400 sm:w-auto"
                >
                  Schedule Discovery Call
                </Link>
                <a
                  href="#results"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-white hover:text-white sm:w-auto"
                >
                  See Results
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-8 text-left sm:grid-cols-4">
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3">
                    <div className="text-2xl font-semibold text-white">{metric.value}</div>
                    <div className="text-xs uppercase tracking-wide text-slate-300">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 -translate-y-6 translate-x-6 rounded-[26px] border border-brand-400/40 opacity-40 blur-xl" />
              <div className="relative rounded-[26px] border border-white/10 bg-white/10 p-6 backdrop-blur">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-xs uppercase text-slate-300">Live Production Feed</p>
                    <p className="text-sm font-semibold text-white">ForgeLine Plant 2</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs text-emerald-300">Synced</span>
                  </div>
                </div>
                <div className="space-y-4 pt-4">
                  <div className="rounded-2xl bg-slate-900/40 p-4">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span>Cell A - CNC Milling</span>
                      <span>OEE 89%</span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-slate-800">
                      <div className="h-2 rounded-full bg-brand-400" style={{ width: "89%" }} />
                    </div>
                  </div>
                  <div className="rounded-2xl bg-slate-900/40 p-4">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span>Cell B - CNC Turning</span>
                      <span>Downtime 6%</span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-slate-800">
                      <div className="h-2 rounded-full bg-emerald-400" style={{ width: "94%" }} />
                    </div>
                  </div>
                  <div className="rounded-2xl bg-slate-900/40 p-4">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span>Cobot Assembly Line</span>
                      <span>Throughput +27%</span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-slate-800">
                      <div className="h-2 rounded-full bg-sky-400" style={{ width: "77%" }} />
                    </div>
                  </div>
                </div>
                <div className="mt-6 rounded-2xl border border-white/5 bg-slate-900/40 p-4">
                  <p className="text-xs uppercase text-slate-400">Alert Feed</p>
                  <div className="mt-3 space-y-3">
                    <AlertBadge status="Resolved" message="Vision system recalibrated — line restart approved." />
                    <AlertBadge status="Action" message="Schedule lubrication cycle for press #4 before next shift." tone="warning" />
                    <AlertBadge status="Info" message="Operator onboarding complete for new cobot station." tone="info" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="bg-slate-950">
        <section id="services" className="section bg-slate-950">
          <div className="container space-y-12">
            <SectionHeading eyebrow="Services" title="Full-stack automation to modernize your factory floor." />
            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <div key={service.title} className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-brand-400/60">
                  <div className="absolute inset-0 opacity-0 transition group-hover:opacity-30 bg-gradient-to-br from-brand-500/40 to-slate-900" />
                  <div className="relative space-y-4">
                    <service.icon className="h-11 w-11 text-brand-300" />
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="approach" className="section bg-slate-900/40">
          <div className="container grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
            <div className="space-y-6">
              <SectionHeading eyebrow="Approach" title="Build momentum without disrupting delivery commitments." align="left" />
              <p className="text-slate-300">
                FlowForge combines lean manufacturing rigor with cutting-edge automation talent. We respect production promises, layer automation in manageable pilots, and help your team carry the torch after deployment.
              </p>
              <div className="space-y-4">
                {differentiators.map((item) => (
                  <div key={item.title} className="rounded-3xl border border-white/5 bg-white/[0.03] p-5">
                    <h3 className="text-base font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-slate-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[26px] border border-white/5 bg-gradient-to-br from-slate-900/30 via-slate-900/60 to-slate-950 p-8">
              <h3 className="text-sm uppercase tracking-widest text-slate-300">Engagement Blueprint</h3>
              <div className="mt-6 grid gap-6">
                {processSteps.map((step, index) => (
                  <div key={step.title} className="grid gap-2 rounded-2xl border border-white/5 bg-slate-950/40 p-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-300">Step {index + 1}</span>
                    <h4 className="text-lg font-semibold text-white">{step.title}</h4>
                    <p className="text-sm text-slate-300">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="results" className="section bg-slate-950">
          <div className="container space-y-12">
            <SectionHeading eyebrow="Case Studies" title="Doing more with less for industrial leaders." />
            <div className="grid gap-8 md:grid-cols-2">
              {caseStudies.map((study) => (
                <div key={study.title} className="rounded-3xl border border-white/5 bg-gradient-to-br from-slate-900/60 to-slate-950 p-8">
                  <div className="flex items-center gap-3 text-brand-300">
                    <span className="text-4xl font-semibold">{study.stat}</span>
                    <span className="text-sm uppercase tracking-[0.22em] text-slate-300">{study.subtitle}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{study.title}</h3>
                  <p className="mt-3 text-sm text-slate-300">{study.body}</p>
                </div>
              ))}
            </div>
            <div className="rounded-[28px] border border-brand-400/30 bg-brand-500/10 p-10 text-center shadow-glow">
              <p className="text-lg font-semibold text-white">
                Ready to stage your first automation win in 90 days?
              </p>
              <p className="mt-2 text-sm text-slate-200">
                We orchestrate pilots that earn trust with your operators, leadership, and finance teams.
              </p>
              <Link
                href="#contact"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
              >
                Plan Your Pilot Sprint
              </Link>
            </div>
          </div>
        </section>

        <section id="about" className="section bg-slate-900/30">
          <div className="container grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-center">
            <div className="space-y-6">
              <SectionHeading eyebrow="Why FlowForge" title="We speak operator, engineer, and CFO." align="left" />
              <p className="text-sm text-slate-300">
                FlowForge Automation partners with small and midsize manufacturers who need to modernize without derailing throughput. Our multidisciplinary teams bring together industrial engineers, robotics specialists, data scientists, and change management consultants.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-6">
                  <h4 className="text-sm font-semibold text-white">Global expertise, local execution</h4>
                  <p className="mt-2 text-sm text-slate-300">
                    Regional deployment pods in the US, Canada, and EU ensure on-site support and training.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/5 bg-white/[0.03] p-6">
                  <h4 className="text-sm font-semibold text-white">Better human + machine collaboration</h4>
                  <p className="mt-2 text-sm text-slate-300">
                    We design automation to augment skilled labor, not replace it—keeping talent engaged and upskilled.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <SectionHeading eyebrow="Testimonials" title="Trusted by manufacturing leaders." align="left" />
              <div className="space-y-5">
                {testimonials.map((testimonial) => (
                  <blockquote key={testimonial.name} className="rounded-3xl border border-white/5 bg-slate-950/60 p-6">
                    <p className="text-sm text-slate-100">&ldquo;{testimonial.quote}&rdquo;</p>
                    <footer className="mt-4 text-xs uppercase tracking-[0.18em] text-slate-400">
                      {testimonial.name} — {testimonial.role}
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section bg-slate-950">
          <div className="container grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-center">
            <div className="space-y-5">
              <SectionHeading eyebrow="Let's Talk" title="Bring automation to life in your facility." align="left" />
              <p className="text-sm text-slate-300">
                Share your current bottlenecks, automation wishlist, and timeline. We&apos;ll respond within one business day with a tailored next step.
              </p>
              <div className="grid gap-4 text-sm text-slate-200">
                <p><strong className="text-white">Phone:</strong> +1 (555) 412-2045</p>
                <p><strong className="text-white">Email:</strong> hello@flowforgeautomation.com</p>
                <p><strong className="text-white">HQ:</strong> Cleveland, OH • On-site support across North America & EU</p>
              </div>
            </div>
            <form className="space-y-5 rounded-[26px] border border-white/5 bg-slate-900/80 p-8 shadow-glow">
              <div className="grid gap-1">
                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Jane Miller"
                  className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-400 focus:outline-none"
                />
              </div>
              <div className="grid gap-1">
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                  Work Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jane@manufacturer.com"
                  className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-400 focus:outline-none"
                />
              </div>
              <div className="grid gap-1">
                <label htmlFor="company" className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="ForgeTech Industries"
                  className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-400 focus:outline-none"
                />
              </div>
              <div className="grid gap-1">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                  Priority Initiative
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Share your automation goals..."
                  className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-400 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-400"
              >
                Request Consultation
              </button>
              <p className="text-xs text-slate-400">
                By submitting, you agree to receive updates about FlowForge Automation and can opt out anytime.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-slate-950 py-10">
        <div className="container flex flex-col gap-5 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {year} FlowForge Automation. All rights reserved.</p>
          <div className="flex items-center gap-4 uppercase tracking-[0.22em] text-xs">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({ eyebrow, title, align = "center" }) {
  const alignment = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  }[align] || "text-center";

  return (
    <div className={`space-y-3 ${alignment}`}>
      <span className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-300">{eyebrow}</span>
      <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>
    </div>
  );
}

function AlertBadge({ status, message, tone = "success" }) {
  const palette = {
    success: "bg-emerald-500/10 text-emerald-200 border-emerald-400/30",
    warning: "bg-amber-500/10 text-amber-200 border-amber-400/30",
    info: "bg-sky-500/10 text-sky-200 border-sky-400/30"
  };

  return (
    <div className={`rounded-2xl border px-4 py-3 text-xs ${palette[tone]}`}>
      <div className="font-semibold uppercase tracking-[0.18em] text-white/80">{status}</div>
      <p className="mt-2 text-[0.75rem] leading-relaxed">{message}</p>
    </div>
  );
}

function FactoryIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M3.5 9.5V21h17v-7l-5-4v4l-4.5-4v4l-3-2.7V9.5l-4.5 3.3Zm0 0V6.5a2 2 0 0 1 2-2H8m4.5 0H21v8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 21v-4m4 4v-4m4 4v-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function NetworkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 2v6m0 8v6m10-10h-6m-8 0H2m15.07-7.07-4.24 4.24m-3.66 3.66-4.24 4.24m0-12.14 4.24 4.24m3.66 3.66 4.24 4.24"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function RobotIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="5" y="7" width="14" height="12" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 11h2m2 0h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M8 17h8m-4-14v4m-8 5v-2a2 2 0 0 1 2-2h1m10 0h1a2 2 0 0 1 2 2v2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
