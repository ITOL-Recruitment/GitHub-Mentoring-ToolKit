import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionLayoutProps {
  title: string
  subtitle?: string
  children: ReactNode
}

export default function SectionLayout({ title, subtitle, children }: SectionLayoutProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 py-8 lg:py-12"
    >
      <header className="mb-8 pb-6 border-b border-[var(--color-github-border)]">
        <h1 className="text-3xl font-bold tracking-tight text-[var(--color-github-text)]">{title}</h1>
        {subtitle && (
          <p className="mt-2 text-[var(--color-github-muted)] text-lg">{subtitle}</p>
        )}
      </header>
      <div className="space-y-6 prose-invert">{children}</div>
    </motion.article>
  )
}
