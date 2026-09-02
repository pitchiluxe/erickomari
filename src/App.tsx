import { useState, useMemo } from 'react';
import {
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Sparkles,
  Layers,
  Terminal,
  CheckCircle2,
  Rocket,
  Globe,
  ArrowUpRight,
  Filter
} from 'lucide-react';
import { CREATOR_PROFILE, CREATOR_PROJECTS } from './data/profile';

// Local avatar — drop your photo into /public/avatar.jpg and it will be used
// automatically. Falls back to the bundled asset if the file is missing.
const AVATAR_SRC = '/avatar.jpg';

const SITE_URL = 'https://erickomari.vercel.app';

const CATEGORIES = [
  'All',
  'AI & Machine Learning',
  'Cybersecurity & Labs',
  'Productivity & Tools',
  'Education & Labs',
  'Web Applications'
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [avatarOk, setAvatarOk] = useState<boolean>(true);

  const filteredProjects = useMemo(() => {
    return selectedCategory === 'All'
      ? CREATOR_PROJECTS
      : CREATOR_PROJECTS.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="bg-grid min-h-screen">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12 space-y-8 sm:space-y-10">
        <h1 className="sr-only">Erick Omari — Full-Stack Software Architect & AI Systems Engineer</h1>
        {/* Creator Hero Header */}
        <section className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#121622] via-[#0f172a] to-[#1e1b4b] border border-slate-800/80 p-4 sm:p-10 shadow-2xl">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-5 sm:gap-8">
            {/* Avatar & Status — bigger and framed to stand out */}
            <div className="relative shrink-0 group">
              <div className="absolute -inset-1 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 opacity-80 blur-md group-hover:opacity-100 transition-opacity" />
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-700 bg-slate-900">
                {avatarOk ? (
                  <img
                    src={AVATAR_SRC}
                    alt={CREATOR_PROFILE.name}
                    className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={() => setAvatarOk(false)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 text-white text-5xl font-extrabold">
                    E
                  </div>
                )}
              </div>
              <div className="absolute -bottom-2 -right-2 px-2.5 py-1 bg-emerald-500/90 text-white text-[10px] font-bold rounded-full border-2 border-[#121622] flex items-center gap-1 shadow">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                BUILDING
              </div>
            </div>

            {/* Profile Bio & Badges */}
            <div className="flex-1 text-center md:text-left space-y-3">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 sm:gap-2">
                <span className="px-2.5 sm:px-3 py-1 bg-blue-500/10 text-blue-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-full border border-blue-500/20 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                  {CREATOR_PROFILE.roleTag}
                </span>
                <span className="px-2.5 sm:px-3 py-1 bg-purple-500/10 text-purple-300 text-[10px] sm:text-xs font-semibold rounded-full border border-purple-500/20">
                  GitHub: @{CREATOR_PROFILE.handle}
                </span>
                <span className="px-2.5 sm:px-3 py-1 bg-emerald-500/10 text-emerald-300 text-[10px] sm:text-xs font-semibold rounded-full border border-emerald-500/20">
                  Deployments: {CREATOR_PROFILE.stats.deployments}
                </span>
              </div>

              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-100 tracking-tight leading-tight">
                {CREATOR_PROFILE.name}
              </h1>

              <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
                {CREATOR_PROFILE.bio}
              </p>

              {/* Quick Action Links & Socials */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 pt-2">
                {/* Primary CTA buttons — stacked on mobile, row on sm+ */}
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                  <a
                    href={CREATOR_PROFILE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 sm:px-4 py-2 bg-[#24292e] hover:bg-black text-white text-[11px] sm:text-xs font-semibold rounded-xl border border-slate-700 flex items-center justify-center gap-2 transition-all shadow-md shadow-black/30 hover:scale-105 whitespace-nowrap"
                  >
                    <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>Explore GitHub Profile</span>
                    <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 opacity-70" />
                  </a>

                  <a
                    href="https://ccna-certification.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-[11px] sm:text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-500/20 hover:scale-105 whitespace-nowrap"
                  >
                    <Rocket className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>Launch CCNA Academy</span>
                    <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 opacity-70" />
                  </a>
                </div>

                {/* Social icon buttons — always in a row */}
                <div className="flex items-center gap-1.5 justify-center sm:justify-start">
                  <a
                    href={CREATOR_PROFILE.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-800/80 hover:bg-slate-800 text-cyan-400 hover:text-cyan-300 rounded-xl border border-slate-700 transition-colors"
                    title="Personal Website"
                  >
                    <Globe className="w-4 h-4" />
                  </a>

                  <a
                    href={CREATOR_PROFILE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white rounded-xl border border-slate-700 transition-colors"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>

                  <a
                    href={CREATOR_PROFILE.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white rounded-xl border border-slate-700 transition-colors"
                    title="X (Twitter) Profile"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Highlight Stats Strip */}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-center">
            <div className="p-2.5 sm:p-3 rounded-2xl bg-slate-900/40 border border-slate-800/60">
              <div className="text-lg sm:text-xl md:text-2xl font-black text-blue-400">
                {CREATOR_PROFILE.stats.githubStars}
              </div>
              <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium uppercase tracking-wider mt-0.5">
                GitHub Stars
              </div>
            </div>
            <div className="p-2.5 sm:p-3 rounded-2xl bg-slate-900/40 border border-slate-800/60">
              <div className="text-lg sm:text-xl md:text-2xl font-black text-purple-400">
                {CREATOR_PROFILE.stats.activeUsers}
              </div>
              <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium uppercase tracking-wider mt-0.5">
                Active Users
              </div>
            </div>
            <div className="p-2.5 sm:p-3 rounded-2xl bg-slate-900/40 border border-slate-800/60">
              <div className="text-lg sm:text-xl md:text-2xl font-black text-emerald-400">
                {CREATOR_PROFILE.stats.verifiedCommits}
              </div>
              <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium uppercase tracking-wider mt-0.5">
                Verified Commits
              </div>
            </div>
            <div className="p-2.5 sm:p-3 rounded-2xl bg-slate-900/40 border border-slate-800/60">
              <div className="text-lg sm:text-xl md:text-2xl font-black text-amber-400">100%</div>
              <div className="text-[10px] sm:text-[11px] text-slate-400 font-medium uppercase tracking-wider mt-0.5">
                Vercel &amp; Edge Live
              </div>
            </div>
          </div>
        </section>

        {/* Projects Showcase Section */}
        <section id="projects" aria-labelledby="projects-heading" className="space-y-5 sm:space-y-6">
          <div className="flex flex-col gap-4">
            {/* Title above filters on mobile, to the left on sm+ */}
            <div>
              <h2 id="projects-heading" className="text-lg sm:text-xl md:text-2xl font-bold text-slate-100 tracking-tight flex items-center gap-2">
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 shrink-0" />
                <span>Deployed Applications &amp; Projects</span>
              </h2>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-1">
                Live web apps, open-source repos, and intelligent software suites by {CREATOR_PROFILE.name}.
              </p>
            </div>

            {/* Category Filter Chips — horizontal scroll on mobile, wrapping on sm+ */}
            <div className="overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [-moz-appearance:none] [&>*]:[-moz-appearance:none]">
              <div className="flex items-center gap-1.5 w-max sm:w-auto sm:flex-wrap min-w-full sm:min-w-0">
                <Filter className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-500 shrink-0" />
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl text-[10px] sm:text-xs font-semibold transition-all shrink-0 ${
                      selectedCategory === cat
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                        : 'bg-slate-800/70 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-700/60'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map(project => (
              <article
                key={project.id}
                className="group relative flex flex-col justify-between rounded-2xl bg-[#121622] border border-slate-800/80 hover:border-blue-500/50 p-4 sm:p-6 transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1"
                itemScope
                itemType="https://schema.org/SoftwareApplication"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <span
                      className={`px-2.5 py-1 text-[10px] font-bold rounded-lg uppercase tracking-wider ${
                        project.featured
                          ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                          : 'bg-slate-800 text-slate-400 border border-slate-700'
                      }`}
                    >
                      {project.badge || project.category}
                    </span>

                    {project.stats && (
                      <span className="text-[11px] font-medium text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20">
                        {project.stats}
                      </span>
                    )}
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-100 group-hover:text-blue-300 transition-colors leading-snug" itemProp="name">
                    {project.title}
                  </h3>

                  <p className="text-xs font-medium text-slate-400 leading-relaxed line-clamp-3" itemProp="description">
                    {project.description}
                  </p>
                  {project.liveUrl && <meta itemProp="url" content={project.liveUrl} />}
                  <meta itemProp="applicationCategory" content={project.category} />
                </div>

                <div className="mt-4 pt-4 border-t border-slate-800/60 space-y-3 sm:space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-slate-900/80 text-slate-400 rounded-md text-[10px] font-mono border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2 sm:px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-[11px] sm:text-xs font-semibold flex items-center justify-center gap-1 sm:gap-1.5 transition-colors shadow-sm shadow-blue-500/20 whitespace-nowrap"
                      >
                        <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                        <span>Launch App</span>
                      </a>
                    ) : (
                      <span className="px-2 sm:px-3 py-2 bg-slate-900 text-slate-500 rounded-xl text-[11px] sm:text-xs font-semibold flex items-center justify-center gap-1 sm:gap-1.5 border border-slate-800">
                        GitHub Only
                      </span>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-2 sm:px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-[11px] sm:text-xs font-semibold flex items-center justify-center gap-1 sm:gap-1.5 border border-slate-700 transition-colors ${
                        project.liveUrl ? '' : 'col-span-2'
                      }`}
                    >
                      <Github className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Core Architectural Philosophy & Stack Matrix */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-2 sm:pt-4">
          <div className="p-4 sm:p-6 rounded-2xl bg-[#121622] border border-slate-800/80 space-y-3">
            <div className="flex items-center gap-2 text-slate-100 font-bold text-sm sm:text-base">
              <Terminal className="w-5 h-5 text-blue-400 shrink-0" />
              <span>Architecture &amp; Engineering Philosophy</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Every application is designed with zero-friction user ergonomics, strict tenant data isolation,
              local-first resiliency with dual AI engines (local Ollama alongside cloud free-tier failover), and
              clean mathematical typography.
            </p>
            <ul className="text-xs text-slate-400 space-y-1.5 list-disc pl-4 pt-1">
              <li>Sub-100ms client state synchronizations and Markdown AST parsing.</li>
              <li>Spaced repetition decay intervals mapped to SuperMemo-2 mathematical curves.</li>
              <li>Physics-grounded force-directed graph visualizers with responsive degree scaling.</li>
            </ul>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl bg-[#121622] border border-slate-800/80 space-y-3">
            <div className="flex items-center gap-2 text-slate-100 font-bold text-sm sm:text-base">
              <Layers className="w-5 h-5 text-purple-400 shrink-0" />
              <span>Full-Stack &amp; AI Capabilities</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
              {CREATOR_PROFILE.coreSkills.map(skill => (
                <div key={skill} className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="pt-4 sm:pt-6 pb-2 text-center text-[10px] sm:text-[11px] text-slate-500 px-2">
          © {new Date().getFullYear()} {CREATOR_PROFILE.name} — Built with React, Tailwind CSS, and Vite.
        </footer>

        {/* Per-project JSON-LD so each card has its own rich-result entry.
            Plain <script type="application/ld+json"> is the only safe way to
            embed structured data from a single-page React app. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              name: `${CREATOR_PROFILE.name} — Deployed Projects`,
              itemListElement: CREATOR_PROJECTS.map((p, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: p.title,
                url: p.liveUrl || p.githubUrl,
                description: p.tagline
              }))
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: SITE_URL + '/'
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Projects',
                  item: SITE_URL + '/#projects'
                }
              ]
            })
          }}
        />
      </div>
    </div>
  );
}
