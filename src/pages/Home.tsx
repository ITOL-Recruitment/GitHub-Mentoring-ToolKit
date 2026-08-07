import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { GitBranch, BookOpen, Users, Zap, ArrowRight } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'

const features = [
  {
    icon: BookOpen,
    title: 'Visual Explanations',
    desc: 'Diagrams, terminal simulations, and step-by-step workflows designed for live mentoring.',
  },
  {
    icon: GitBranch,
    title: 'Git Fundamentals',
    desc: 'From init and commit to branching, merging, and resolving conflicts.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    desc: 'Pull Requests, code review, Issues, Projects, and professional team workflows.',
  },
  {
    icon: Zap,
    title: 'Best Practices',
    desc: 'Conventional commits, .gitignore, CI/CD intro, and common beginner mistakes to avoid.',
  },
]

export default function Home() {
  return (
    <SectionLayout
      title="GitHub & Git Training Guide"
      subtitle="A visual presentation tool for mentors to teach professional Git and GitHub workflows."
    >
      <div className="rounded-xl border border-[var(--color-github-border)] bg-[#161b22] p-6 mb-8">
        <p className="text-[var(--color-github-muted)] leading-relaxed">
          This is <strong className="text-[var(--color-github-text)]">not</strong> a learning management system.
          It is a clean, developer-focused reference website you open during student meetings to demonstrate
          real workflows, commands, and professional practices — similar to GitHub Docs style.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="p-5 rounded-lg border border-[var(--color-github-border)] bg-[#0d1117] hover:border-[#484f58] transition-colors"
          >
            <f.icon size={22} className="text-[var(--color-github-blue)] mb-3" />
            <h3 className="font-semibold mb-1">{f.title}</h3>
            <p className="text-sm text-[var(--color-github-muted)]">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      <h2 className="text-xl font-semibold mb-4">Quick Start for Mentors</h2>
      <ol className="list-decimal list-inside space-y-2 text-[var(--color-github-muted)] mb-8">
        <li>Open the sidebar and pick a topic relevant to the current lesson.</li>
        <li>Use the terminal examples and copy buttons live with students.</li>
        <li>Show the Git graphs and flow diagrams on a shared screen.</li>
        <li>Walk through the full Feature Workflow section end-to-end.</li>
      </ol>

      <Link
        to="/intro"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-github-accent)] text-white font-medium hover:bg-[#2ea043] transition-colors"
      >
        Start with Introduction
        <ArrowRight size={16} />
      </Link>
    </SectionLayout>
  )
}
