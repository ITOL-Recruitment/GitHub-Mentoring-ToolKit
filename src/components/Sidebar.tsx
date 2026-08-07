import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Home, GitBranch, FolderTree, Settings, PlusCircle, Activity,
  GitCommit, MessageSquare, GitPullRequest, Workflow, GitPullRequestArrow,
  GitMerge, AlertTriangle, Users, FileText, EyeOff, CircleDot,
  Kanban, Zap, AlertCircle, CheckCircle, Search, Menu, X
} from 'lucide-react'
import { useState, type ComponentType } from 'react'
import sectionsData from '../data/sections.json'

const iconMap: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  Home, GitBranch, FolderTree, Settings, PlusCircle, Activity,
  GitCommit, MessageSquare, GitPullRequest, Workflow, GitPullRequestArrow,
  GitMerge, AlertTriangle, Users, FileText, EyeOff, CircleDot,
  Kanban, Zap, AlertCircle, CheckCircle
}

interface SidebarProps {
  searchQuery: string
  setSearchQuery: (q: string) => void
}

export default function Sidebar({ searchQuery, setSearchQuery }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const filtered = sectionsData.sections.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.id.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const NavContent = () => (
    <>
      <div className="p-4 border-b border-[var(--color-github-border)]">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-[var(--color-github-accent)] flex items-center justify-center">
            <GitBranch size={18} className="text-white" />
          </div>
          <div>
            <h1 className="text-sm font-bold leading-tight">GitHub Mentor</h1>
            <p className="text-[10px] text-[var(--color-github-muted)]">Visual Training Guide</p>
          </div>
        </div>
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-github-muted)]" />
          <input
            type="text"
            placeholder="Search sections..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-sm bg-[#0d1117] border border-[var(--color-github-border)] rounded-md focus:outline-none focus:border-[var(--color-github-blue)] text-[var(--color-github-text)] placeholder:text-[var(--color-github-muted)]"
          />
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto p-2 space-y-0.5">
        {filtered.map((section) => {
          const Icon = iconMap[section.icon] || Home
          return (
            <NavLink
              key={section.id}
              to={section.path}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                  isActive
                    ? 'bg-[#21262d] text-[var(--color-github-text)] font-medium'
                    : 'text-[var(--color-github-muted)] hover:bg-[#161b22] hover:text-[var(--color-github-text)]'
                }`
              }
            >
              <Icon size={16} />
              <span className="truncate">{section.title}</span>
            </NavLink>
          )
        })}
      </nav>
      <div className="p-3 border-t border-[var(--color-github-border)] text-[10px] text-[var(--color-github-muted)] text-center">
        Mentor Presentation Tool · v1.0
      </div>
    </>
  )

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-[#161b22] border border-[var(--color-github-border)]"
      >
        <Menu size={20} />
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="lg:hidden fixed inset-0 bg-black/60 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <motion.aside
        initial={false}
        animate={{ x: mobileOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', damping: 25 }}
        className="lg:hidden fixed inset-y-0 left-0 z-50 w-72 bg-[var(--color-github-darker)] border-r border-[var(--color-github-border)] flex flex-col"
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-4 right-4 p-1 text-[var(--color-github-muted)]"
        >
          <X size={18} />
        </button>
        <NavContent />
      </motion.aside>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex w-64 shrink-0 flex-col bg-[var(--color-github-darker)] border-r border-[var(--color-github-border)] h-screen sticky top-0">
        <NavContent />
      </aside>
    </>
  )
}
