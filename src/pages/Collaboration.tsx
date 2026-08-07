import SectionLayout from '../components/SectionLayout'
import FlowDiagram from '../components/FlowDiagram'

export default function Collaboration() {
  return (
    <SectionLayout
      title="GitHub Collaboration Workflow"
      subtitle="How professional teams ship code together."
    >
      <p className="text-[var(--color-github-muted)]">
        In a real team every developer works on their own feature branch. Changes only reach main
        through reviewed Pull Requests.
      </p>

      <FlowDiagram
        steps={[
          { label: 'Developer A', sublabel: 'feature/auth', color: '#58a6ff' },
          { label: 'Developer B', sublabel: 'feature/dashboard', color: '#a371f7' },
          { label: 'Pull Requests', sublabel: 'Open on GitHub', color: '#f0883e' },
          { label: 'Code Review', sublabel: 'Comments & approval', color: '#d29922' },
          { label: 'Main Branch', sublabel: 'Stable & shared', color: '#238636' },
        ]}
      />

      <h2 className="text-xl font-semibold mt-8">Key rules teams follow</h2>
      <ul className="list-disc list-inside text-[var(--color-github-muted)] space-y-2">
        <li>No direct pushes to main (protected branch).</li>
        <li>Every change goes through a PR.</li>
        <li>At least one approving review is required.</li>
        <li>CI must pass before merge is allowed.</li>
        <li>Branches are deleted after merge to keep the list clean.</li>
      </ul>
    </SectionLayout>
  )
}
