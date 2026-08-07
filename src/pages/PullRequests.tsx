import SectionLayout from '../components/SectionLayout'
import FlowDiagram from '../components/FlowDiagram'
import CodeBlock from '../components/CodeBlock'

export default function PullRequests() {
  return (
    <SectionLayout
      title="Pull Requests"
      subtitle="The heart of professional collaboration."
    >
      <p className="text-[var(--color-github-muted)]">
        A Pull Request (PR) is a formal request to merge your branch into another branch (usually main).
        It is the place where code review, discussion, and automated checks happen.
      </p>

      <h2 className="text-xl font-semibold mt-6">Why companies use PRs</h2>
      <ul className="list-disc list-inside text-[var(--color-github-muted)] space-y-1">
        <li>Code quality is reviewed before it reaches main</li>
        <li>Knowledge is shared across the team</li>
        <li>CI tests must pass before merge</li>
        <li>History stays clean and intentional</li>
      </ul>

      <FlowDiagram
        steps={[
          { label: 'Developer', color: '#58a6ff' },
          { label: 'Feature Branch', color: '#a371f7' },
          { label: 'Pull Request', color: '#f0883e' },
          { label: 'Code Review', color: '#d29922' },
          { label: 'Approved', color: '#238636' },
          { label: 'Merge', color: '#238636' },
        ]}
      />

      <h2 className="text-xl font-semibold mt-8">Example PR</h2>
      <div className="rounded-lg border border-[var(--color-github-border)] bg-[#161b22] overflow-hidden">
        <div className="px-4 py-3 border-b border-[var(--color-github-border)] bg-[#0d1117]">
          <h3 className="font-semibold text-[var(--color-github-text)]">feat: add authentication</h3>
          <p className="text-xs text-[var(--color-github-muted)] mt-0.5">#42 opened by student-dev</p>
        </div>
        <div className="p-4 text-sm space-y-3">
          <div>
            <p className="font-medium text-[var(--color-github-text)]">Description</p>
            <p className="text-[var(--color-github-muted)]">Implements login and registration flow.</p>
          </div>
          <div>
            <p className="font-medium text-[var(--color-github-text)]">Changes</p>
            <ul className="list-disc list-inside text-[var(--color-github-muted)]">
              <li>Added login form</li>
              <li>Added validation</li>
              <li>Added API integration</li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-[var(--color-github-text)]">Testing</p>
            <ul className="list-disc list-inside text-[var(--color-github-muted)]">
              <li>Tested successful login</li>
              <li>Tested incorrect password</li>
            </ul>
          </div>
        </div>
      </div>
    </SectionLayout>
  )
}
