// Single source of truth for the static portfolio content, mirrored from
// server/routes/creator.ts in the SchedulePlanner 2.0 Web app.

export type CreatorProject = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  liveUrl?: string;
  githubUrl: string;
  tags: string[];
  featured: boolean;
  badge: string;
  stars: number;
  stats: string;
};

export const CREATOR_PROFILE = {
  name: 'Erick Omari',
  handle: 'pitchiluxe',
  title: 'Full-Stack Software Architect & AI Systems Engineer',
  roleTag: 'CREATOR & INSTRUCTOR',
  bio: 'Building intelligent software ecosystems, AI agents, cybersecurity training labs, and developer-first web applications. Creator of CCNA Academy, AIHub, Phishforge, Technobiztrader, and CodeCraftr.',
  location: 'United States',
  email: 'erickomari243@gmail.com',
  website: 'https://www.technobiztrader.net/',
  github: 'https://github.com/pitchiluxe',
  linkedin: 'https://www.linkedin.com/in/erickomari/',
  twitter: 'https://x.com/eomari',
  experienceYears: '7+ Years',
  totalProjects: 18,
  coreSkills: [
    'TypeScript & React 19 / Next.js',
    'AI Agents & LLM Orchestration',
    'Cybersecurity & Network Systems',
    'Node.js & Express Architecture',
    'Algorithmic Trading & Finance Systems',
    'Interactive Educational Labs & Simulators',
    'Tailwind CSS & Modern Motion Design',
    'PostgreSQL, Cloud SQL & Vercel Edge'
  ],
  stats: {
    githubStars: '380+',
    activeUsers: '28.6k+',
    deployments: '61+',
    verifiedCommits: '2,400+'
  }
};

export const CREATOR_PROJECTS: CreatorProject[] = [
  {
    id: 'proj-scheduleplanner',
    title: 'SchedulePlanner 2.0',
    tagline: 'Full-Stack AI Productivity Suite — Agenda, Notes, Flashcards, CRM & Cold Outreach',
    description: 'A complete productivity ecosystem: an agenda calendar driven by an AI executive assistant (local Ollama with cloud free-tier failover), Markdown study notes with Obsidian vault export, SuperMemo SM-2 flashcards, a sales CRM with simulated cold-email outreach, an ID badge studio, and multi-tenant team organizations.',
    category: 'Productivity & Tools',
    liveUrl: 'https://scheduleplanner-rho.vercel.app',
    githubUrl: 'https://github.com/pitchiluxe/SchedulePlanner',
    tags: ['React 19', 'Express', 'Ollama Local AI', 'SM-2 Flashcards', 'CRM & Outreach', 'Vercel Live'],
    featured: true,
    badge: 'FLAGSHIP PRODUCTIVITY SUITE',
    stars: 240,
    stats: 'Local-First AI Engine'
  },
  {
    id: 'proj-ccna',
    title: 'CCNA Academy',
    tagline: 'Comprehensive Cisco CCNA Certification Prep & Interactive Network Labs',
    description: 'Master networking fundamentals, routing & switching protocols, IP subnetting, and Cisco exam objectives with interactive practice questions and realistic network topology labs.',
    category: 'Education & Labs',
    liveUrl: 'https://ccna-certification.vercel.app',
    githubUrl: 'https://github.com/pitchiluxe/ccna-certification',
    tags: ['CCNA Prep', 'Cisco Networking', 'Interactive Labs', 'Subnetting', 'Vercel Live'],
    featured: true,
    badge: 'CERTIFICATION ACADEMY',
    stars: 142,
    stats: '10,000+ Questions Solved'
  },
  {
    id: 'proj-iam-os',
    title: 'IAM OS',
    tagline: 'Simulated Windows Workstation for Identity & Privileged Access Management Training',
    description: 'A simulated Windows workstation for practicing Identity and Access Management and Privileged Identity Management. Features a real directory that can be misconfigured to demonstrate realistic IAM behaviors, including Active Directory management, PowerShell scripting, cloud identity integration (Okta/Entra ID), and ticket workflows.',
    category: 'Cybersecurity & Labs',
    liveUrl: 'https://iam-range.vercel.app/',
    githubUrl: 'https://github.com/pitchiluxe/iam-range',
    tags: ['Active Directory', 'PowerShell', 'Okta / Entra ID', 'Electron', 'Vue.js', 'Vercel Live'],
    featured: true,
    badge: 'IAM WORKSTATION SIM',
    stars: 0,
    stats: 'Real Directory Simulation'
  },
  {
    id: 'proj-comptia-securityplus-3d-lab',
    title: 'CompTIA Security+ Zero to Hero 3D Lab',
    tagline: 'From Zero to Security+ Certified — Interactive 3D Cybersecurity Training Lab',
    description: 'An immersive 3D certification lab that takes learners from foundational concepts to exam-ready CompTIA Security+ proficiency through interactive scenarios, hands-on threat simulations, cryptography exercises, identity and access management drills, and risk assessment workflows.',
    category: 'Education & Labs',
    liveUrl: 'https://comptiasecuritypluslab.vercel.app/',
    githubUrl: 'https://github.com/pitchiluxe/CompTIA-SecurityPlus-Zero-to-Hero-3D-Lab',
    tags: ['CompTIA Security+', '3D Lab', 'Certification Prep', 'Cybersecurity Training', 'Vercel Live'],
    featured: true,
    badge: 'SECURITY+ CERT LAB',
    stars: 0,
    stats: 'Zero to Hero Training'
  },
  {
    id: 'proj-ccna-zero-to-hero-3d-lab',
    title: 'CCNA Zero to Hero 3D Lab',
    tagline: 'From Zero to CCNA Certified — Interactive 3D Networking Training Lab',
    description: 'An immersive 3D certification lab that guides learners from networking fundamentals to exam-ready CCNA proficiency through interactive Cisco networking scenarios, hands-on subnetting exercises, routing and switching simulations, and real-world topology labs.',
    category: 'Education & Labs',
    liveUrl: 'https://ccna3dlab.vercel.app/',
    githubUrl: 'https://github.com/pitchiluxe/CCNA_Zero_to_Hero_3D_Lab_Project',
    tags: ['CCNA', 'Cisco Networking', '3D Lab', 'Certification Prep', 'Vercel Live'],
    featured: true,
    badge: 'CCNA CERT LAB',
    stars: 0,
    stats: 'Zero to Hero Training'
  },
  {
    id: 'proj-iam-sso-3d-lab',
    title: 'IAM & SSO 3D Lab',
    tagline: 'Learn Identity & Access Management the Way the Work Actually Looks — Walkable 3D Enterprise Campus, Socratic AI Tutor, Real Ticket Flow',
    description: 'A job-ready 3D training lab for Identity & Access Management, SSO/SAML/OIDC, MFA, RBAC, access reviews, and incident response. Learners walk a fully modeled 3D enterprise campus — IAM Ops floor, SOC, ticket queue, and interactive workstation consoles — to complete thirteen enterprise scenarios covering federation, lifecycle, hardening, break/fix drills, and a capstone gated at 85%. A Socratic AI tutor escalates a nudge → question → approach → solution ladder instead of handing out answers, every ticket triage, escalation, and closure is logged and scored against a six-category 100-point rubric (execution, troubleshooting, least-privilege, documentation, evidence, communication), and the same codebase ships as a Three.js/WebGL browser build and a signed Windows Electron desktop installer. All credentials and entities are fictional; MIT-licensed.',
    category: 'Cybersecurity & Labs',
    liveUrl: 'https://iamsso3dlab.vercel.app/',
    githubUrl: 'https://github.com/pitchiluxe/iam-sso-3d-lab',
    tags: ['Three.js / WebGL', '13 IAM Scenarios', 'Socratic AI Tutor', 'Ticket Triage & Scoring', 'Electron Desktop', 'MIT Licensed'],
    featured: true,
    badge: '3D IAM TRAINING LAB',
    stars: 0,
    stats: 'Walkable 3D Campus'
  },
  {
    id: 'proj-aihub',
    title: 'AIHub',
    tagline: 'Intelligence Hub for AI News, Research Breakthroughs & Model Releases',
    description: 'Real-time aggregated intelligence hub tracking the latest artificial intelligence developments, LLM release benchmarks, open-source model updates, and cutting-edge tech industry news.',
    category: 'AI & Machine Learning',
    liveUrl: 'https://aihub-eight-xi.vercel.app',
    githubUrl: 'https://github.com/pitchiluxe/aihub',
    tags: ['AI Intelligence', 'News Hub', 'LLM Releases', 'Real-Time Feeds', 'Vercel Live'],
    featured: true,
    badge: 'AI INTELLIGENCE HUB',
    stars: 185,
    stats: 'Real-Time AI Tracker'
  },
  {
    id: 'proj-technobiz',
    title: 'Technobiztrader',
    tagline: 'Agent Trader — Autonomous Financial Market Intelligence & Algorithmic Trading',
    description: 'Intelligent trade agent analyzing market signals, liquidity patterns, and technical setups to execute algorithmic trading strategies with precision risk controls.',
    category: 'AI & Machine Learning',
    liveUrl: 'https://technobiz-trader-agent.vercel.app/',
    githubUrl: 'https://github.com/pitchiluxe/technobiz-trader-agent',
    tags: ['AI Trader Agent', 'Algorithmic Trading', 'Market Signals', 'Finance', 'Vercel Live'],
    featured: true,
    badge: 'AUTONOMOUS AGENT',
    stars: 96,
    stats: 'Automated Agent Signals'
  },
  {
    id: 'proj-codecraftr',
    title: 'CodeCraftr',
    tagline: 'Turn Designs Into Production Code with AI-Powered Precision',
    description: 'Transform visual UI designs, component wireframes, and design specs directly into pristine, responsive React and Tailwind CSS production-grade code in seconds.',
    category: 'Productivity & Tools',
    liveUrl: 'https://codecraftr-gamma.vercel.app/',
    githubUrl: 'https://github.com/pitchiluxe/codecraftr',
    tags: ['Design to Code', 'React Generator', 'Tailwind CSS', 'Developer Suite', 'Vercel Live'],
    featured: true,
    badge: 'DEVELOPER TOOL',
    stars: 120,
    stats: 'Design to Code in Seconds'
  },
  {
    id: 'proj-phishforge',
    title: 'Phishforge',
    tagline: 'Simulate Attacks — AI-Powered Cyber Threat & Phishing Defense Simulator',
    description: 'Simulate sophisticated phishing campaigns and social engineering vectors to train teams, evaluate vulnerabilities, and strengthen organizational cyber resilience.',
    category: 'Cybersecurity & Labs',
    liveUrl: 'https://phishforge-ai.vercel.app/',
    githubUrl: 'https://github.com/pitchiluxe/phishforge',
    tags: ['Phishing Simulator', 'Threat Intelligence', 'Cyber Defense', 'Security Training', 'AI'],
    featured: true,
    badge: 'SECURITY SIMULATOR',
    stars: 114,
    stats: 'Threat Defense Engine'
  },
  {
    id: 'proj-aihub-browser',
    title: 'AIHub Browser',
    tagline: 'The Browser That Thinks with You — Context-Aware Smart Web Experience',
    description: 'An AI-native browser workspace combining real-time contextual synthesis, smart search summaries, active tab reasoning, and intelligent web research assistance.',
    category: 'AI & Machine Learning',
    liveUrl: 'https://landing-sooty-omega-22.vercel.app/',
    githubUrl: 'https://github.com/pitchiluxe/aihub-browser',
    tags: ['Smart Browser', 'Contextual AI', 'Knowledge Synthesis', 'Web Assistant', 'Vercel Live'],
    featured: false,
    badge: 'SMART BROWSER',
    stars: 78,
    stats: 'Context-Aware Browsing'
  },
  {
    id: 'proj-georgia-re',
    title: 'Georgia Real Estate Exam Prep',
    tagline: 'Pass Your GA Real Estate Exam with Confidence',
    description: 'Complete Georgia real estate licensing study suite featuring state law review, national real estate practice exams, broker principles, and adaptive knowledge testing.',
    category: 'Education & Labs',
    liveUrl: 'https://ga-realstate.vercel.app',
    githubUrl: 'https://github.com/pitchiluxe/GARealState',
    tags: ['GA Real Estate', 'License Exam Prep', 'State Laws', 'Study Simulator', 'Vercel Live'],
    featured: false,
    badge: 'EXAM SIMULATOR',
    stars: 64,
    stats: 'High Pass Rate Prep'
  },
  {
    id: 'proj-techbench',
    title: 'Cybersecurity Academy & IT Training Lab',
    tagline: 'Train Like a Real Tier-1 Technician with Interactive Workbench Labs',
    description: 'Immersive IT support workbench simulating real-world helpdesk tickets, Active Directory tasks, network diagnostics, hardware troubleshooting, and Tier-1 technician challenges.',
    category: 'Cybersecurity & Labs',
    liveUrl: 'https://techbench-academy.vercel.app',
    githubUrl: 'https://github.com/pitchiluxe/cybersecurity-academy',
    tags: ['Tier-1 Technician', 'Helpdesk Lab', 'Cybersecurity', 'Diagnostic Workbench', 'IT Support'],
    featured: true,
    badge: 'HANDS-ON IT LAB',
    stars: 156,
    stats: 'Real-World Ticket Sim'
  },
  {
    id: 'proj-congo',
    title: 'Congo Solution',
    tagline: 'Building Congo Together — Tech Empowerment & Community Infrastructure',
    description: 'A forward-thinking platform dedicated to digital empowerment, sustainable technology infrastructure, educational initiatives, and collaborative growth across the Democratic Republic of Congo.',
    category: 'Web Applications',
    liveUrl: 'https://congosolutions.vercel.app/',
    githubUrl: 'https://github.com/pitchiluxe/congosolutions',
    tags: ['Congo Solutions', 'Community Tech', 'Economic Growth', 'Digital Empowerment', 'Vercel Live'],
    featured: false,
    badge: 'COMMUNITY IMPACT',
    stars: 92,
    stats: 'Building Congo Together'
  },
  {
    id: 'proj-it-support',
    title: 'IT Support Lab',
    tagline: 'Tier-1 Technician Training — Interactive IT Support & Ticket Resolution Workbench',
    description: 'A hands-on IT support lab that simulates real-world helpdesk tickets, Active Directory tasks, network diagnostics, hardware troubleshooting, and Tier-1 technician challenges.',
    category: 'Cybersecurity & Labs',
    liveUrl: 'https://it-support-lab.vercel.app',
    githubUrl: 'https://github.com/pitchiluxe/IT-Support-Lab',
    tags: ['IT Support', 'Helpdesk Lab', 'Tier-1 Technician', 'Ticket Simulation', 'Vercel Live'],
    featured: true,
    badge: 'IT SUPPORT LAB',
    stars: 0,
    stats: 'Real-World Ticket Sim'
  },
  {
    id: 'proj-amazon-it-support',
    title: 'Amazon IT Support Engineer I Lab',
    tagline: 'Role-Ready Training for the Amazon IT Support Engineer I Position',
    description: 'A hands-on IT training platform that simulates the Amazon IT Support Engineer I role across 22 guided labs, with an AI tutor and live incident simulation covering the diagnostics, escalation, and ticket-handling workflows the job runs on.',
    category: 'Education & Labs',
    githubUrl: 'https://github.com/pitchiluxe/Amazon_IT_Support_Engineer_I_Lab_Workflows',
    tags: ['IT Support Engineer', '22 Hands-On Labs', 'AI Tutor', 'Incident Simulation', 'TypeScript'],
    featured: true,
    badge: 'ROLE PREP LAB',
    stars: 0,
    stats: '22 Guided Labs'
  },
  {
    id: 'proj-cloud-engineer',
    title: 'Cloud Engineer Lab',
    tagline: 'Scenario-Based Cloud Engineer Training — AWS, Linux, Terraform & Kubernetes',
    description: 'A scenario-based Cloud Engineer training platform running deterministic simulated AWS, Linux, Terraform, and Kubernetes labs with failure injection, evidence-driven scoring, and a local-Ollama AI tutor.',
    category: 'Education & Labs',
    liveUrl: 'https://cloudengineerlab.vercel.app',
    githubUrl: 'https://github.com/pitchiluxe/Cloud_Engineer_Real_World_Lab_Workflows',
    tags: ['AWS & Terraform', 'Kubernetes Labs', 'Failure Injection', 'Local Ollama Tutor', 'Vercel Live'],
    featured: true,
    badge: 'CLOUD ENGINEER LAB',
    stars: 0,
    stats: 'Evidence-Driven Scoring'
  },
  {
    id: 'proj-cyberguard-ai',
    title: 'CyberGuard AI',
    tagline: 'AI-Powered SOC Monitoring for Windows — Local LLM, No Cloud, No Telemetry',
    description: 'A background SOC monitor that reads real Windows Security, Sysmon, System, and DNS Client event logs, classifies each event with a locally running LLM, maps alerts to MITRE ATT&CK techniques, extracts IP, domain, and hash indicators, and streams findings to a live React dashboard over WebSockets. Nothing leaves the machine.',
    category: 'Cybersecurity & Labs',
    liveUrl: 'https://cyberguard-ai-gamma.vercel.app',
    githubUrl: 'https://github.com/pitchiluxe/CyberGuard-AI',
    tags: ['SOC Monitoring', 'Sysmon & Event Logs', 'MITRE ATT&CK', 'Local LLM', 'WebSocket Alerts'],
    featured: true,
    badge: 'SOC MONITOR',
    stars: 0,
    stats: 'Real Windows Telemetry'
  }
];
