import SectionLayout from '../components/SectionLayout'
import FlowDiagram from '../components/FlowDiagram'
import CodeBlock from '../components/CodeBlock'

export default function Intro() {
  return (
    <SectionLayout
      title="Introduction to Git & GitHub"
      subtitle="Understanding the foundation of modern version control and collaboration."
    >
      <h2 className="text-xl font-semibold text-[var(--color-github-text)]">What is Git?</h2>
      <p className="text-[var(--color-github-muted)] leading-relaxed">
        Git is a <strong className="text-[var(--color-github-text)]">distributed version control system</strong>.
        It runs locally on your computer, tracks every change you make to files, and lets you travel
        back in time through the history of your project.
      </p>
      <ul className="list-disc list-inside text-[var(--color-github-muted)] space-y-1 ml-2">
        <li>Version control system</li>
        <li>Runs entirely on your machine</li>
        <li>Tracks changes to files over time</li>
        <li>Works offline</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 text-[var(--color-github-text)]">What is GitHub?</h2>
      <p className="text-[var(--color-github-muted)] leading-relaxed">
        GitHub is a <strong className="text-[var(--color-github-text)]">cloud platform</strong> built around Git.
        It stores your repositories online, makes collaboration easy, and adds tools like Pull Requests,
        Issues, Actions, and Projects.
      </p>
      <ul className="list-disc list-inside text-[var(--color-github-muted)] space-y-1 ml-2">
        <li>Cloud hosting for Git repositories</li>
        <li>Enables team collaboration</li>
        <li>Provides code review, CI/CD, and project management</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 text-[var(--color-github-text)]">Key Difference</h2>
      <div className="grid sm:grid-cols-2 gap-4 my-4">
        <div className="p-4 rounded-lg border border-[var(--color-github-border)] bg-[#161b22]">
          <h3 className="font-semibold text-[var(--color-github-accent)] mb-2">Git</h3>
          <ul className="text-sm text-[var(--color-github-muted)] space-y-1">
            <li>• Version control system</li>
            <li>• Runs locally</li>
            <li>• Tracks changes</li>
            <li>• Command-line tool</li>
          </ul>
        </div>
        <div className="p-4 rounded-lg border border-[var(--color-github-border)] bg-[#161b22]">
          <h3 className="font-semibold text-[var(--color-github-blue)] mb-2">GitHub</h3>
          <ul className="text-sm text-[var(--color-github-muted)] space-y-1">
            <li>• Cloud platform</li>
            <li>• Stores repositories</li>
            <li>• Enables collaboration</li>
            <li>• Web + API + tools</li>
          </ul>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-8 text-[var(--color-github-text)]">How They Connect</h2>
      <FlowDiagram
        steps={[
          { label: 'Developer Computer', sublabel: 'Your local machine', color: '#58a6ff' },
          { label: 'Git Repository', sublabel: 'Local .git folder', color: '#238636' },
          { label: 'GitHub Repository', sublabel: 'Remote origin', color: '#a371f7' },
        ]}
      />

      <p className="text-[var(--color-github-muted)]">
        You work locally with Git. When ready, you <code className="text-[var(--color-github-blue)]">push</code> your
        commits to GitHub so teammates can see them, review them, and pull them into their own machines.
      </p>

      <CodeBlock
        title="Simple mental model"
        code={`Local (Git)          Remote (GitHub)
─────────────        ────────────────
Working files   →    Shared history
Commits         →    Pull Requests
Branches        →    Code Review
`}
      />
    </SectionLayout>
  )
}
