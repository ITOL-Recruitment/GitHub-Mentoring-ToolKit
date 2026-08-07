import SectionLayout from '../components/SectionLayout'

export default function Mistakes() {
  const mistakes = [
    {
      mistake: 'Committing directly to main',
      solution: 'Always create a feature branch first. Protect the main branch on GitHub.',
    },
    {
      mistake: 'Large, unclear commits',
      solution: 'Make small, meaningful commits with Conventional Commit messages.',
    },
    {
      mistake: 'Uploading .env files',
      solution: 'Add .env to .gitignore and never force-add it. Use .env.example instead.',
    },
    {
      mistake: 'Forcing push to shared branches',
      solution: 'Never git push --force on main or develop. Use --force-with-lease only on your own feature branches if necessary.',
    },
    {
      mistake: 'Ignoring git status',
      solution: 'Run git status before every commit and after every pull/merge.',
    },
    {
      mistake: 'Working offline for days without pulling',
      solution: 'Pull frequently so merge conflicts stay small and manageable.',
    },
  ]

  return (
    <SectionLayout
      title="Common Beginner Mistakes"
      subtitle="Teach these early so students avoid painful habits."
    >
      <div className="space-y-4">
        {mistakes.map((m, i) => (
          <div key={i} className="rounded-lg border border-[var(--color-github-border)] overflow-hidden">
            <div className="px-4 py-3 bg-[#161b22] border-b border-[var(--color-github-border)]">
              <span className="text-xs font-medium text-[var(--color-github-red)] uppercase tracking-wide">Mistake</span>
              <p className="font-medium mt-0.5">{m.mistake}</p>
            </div>
            <div className="px-4 py-3 bg-[#0d1117]">
              <span className="text-xs font-medium text-[var(--color-github-accent)] uppercase tracking-wide">Solution</span>
              <p className="text-sm text-[var(--color-github-muted)] mt-0.5">{m.solution}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  )
}
