import SectionLayout from '../components/SectionLayout'

export default function Issues() {
  return (
    <SectionLayout
      title="GitHub Issues"
      subtitle="Bug reports, feature requests, and tasks in one place."
    >
      <p className="text-[var(--color-github-muted)]">
        Issues are the conversation and tracking system for everything that needs to be done or fixed.
      </p>

      <h2 className="text-xl font-semibold mt-6">Common types</h2>
      <div className="grid sm:grid-cols-3 gap-3 mt-4">
        <div className="p-4 rounded-lg border border-[var(--color-github-red)]/30 bg-[#161b22]">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[var(--color-github-red)]/20 text-[var(--color-github-red)]">bug</span>
          <p className="text-sm text-[var(--color-github-muted)] mt-2">Something is broken.</p>
        </div>
        <div className="p-4 rounded-lg border border-[var(--color-github-accent)]/30 bg-[#161b22]">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[var(--color-github-accent)]/20 text-[var(--color-github-accent)]">enhancement</span>
          <p className="text-sm text-[var(--color-github-muted)] mt-2">New feature or improvement.</p>
        </div>
        <div className="p-4 rounded-lg border border-[var(--color-github-blue)]/30 bg-[#161b22]">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[var(--color-github-blue)]/20 text-[var(--color-github-blue)]">documentation</span>
          <p className="text-sm text-[var(--color-github-muted)] mt-2">Docs need updating.</p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-8">Example Issue</h2>
      <div className="rounded-lg border border-[var(--color-github-border)] bg-[#161b22] p-4">
        <h3 className="font-semibold">Navbar breaks on mobile</h3>
        <div className="flex gap-2 mt-2">
          <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-github-red)]/20 text-[var(--color-github-red)]">bug</span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-[#30363d] text-[var(--color-github-muted)]">priority: high</span>
        </div>
        <p className="text-sm text-[var(--color-github-muted)] mt-3">
          On screens smaller than 768px the navigation menu overflows and covers content.
          Steps to reproduce: open the site on a phone or resize the browser.
        </p>
      </div>
    </SectionLayout>
  )
}
