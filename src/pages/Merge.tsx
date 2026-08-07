import SectionLayout from '../components/SectionLayout'
import GitGraph from '../components/GitGraph'
import Terminal from '../components/Terminal'
import CodeBlock from '../components/CodeBlock'

export default function Merge() {
  return (
    <SectionLayout
      title="Git Merge"
      subtitle="Combining the history of two branches."
    >
      <p className="text-[var(--color-github-muted)]">
        Merging brings the commits from a feature branch into the target branch (usually main).
      </p>

      <h2 className="text-xl font-semibold mt-6">Commands</h2>
      <Terminal
        lines={[
          { type: 'command', text: 'git checkout main' },
          { type: 'command', text: 'git merge feature-login' },
          { type: 'output', text: 'Updating a1b2c3d..e4f5g6h' },
          { type: 'output', text: 'Fast-forward' },
          { type: 'output', text: ' src/Login.jsx | 42 ++++++++++++++++++++++' },
        ]}
      />

      <h2 className="text-xl font-semibold mt-8">Before merge</h2>
      <GitGraph
        width={380}
        height={180}
        nodes={[
          { id: 'm1', label: 'main', branch: 'main', x: 60, y: 120 },
          { id: 'm2', label: '', branch: 'main', x: 140, y: 120 },
          { id: 'f1', label: 'feature-login', branch: 'feature', x: 220, y: 50 },
          { id: 'f2', label: '', branch: 'feature', x: 300, y: 50 },
        ]}
        edges={[
          { from: 'm1', to: 'm2' },
          { from: 'm2', to: 'f1' },
          { from: 'f1', to: 'f2' },
        ]}
      />

      <h2 className="text-xl font-semibold mt-6">After fast-forward merge</h2>
      <p className="text-sm text-[var(--color-github-muted)] mb-2">
        When main has no new commits, Git simply moves the main pointer forward.
      </p>
      <GitGraph
        width={380}
        height={140}
        nodes={[
          { id: 'm1', label: 'main (now here)', branch: 'main', x: 60, y: 70 },
          { id: 'm2', label: '', branch: 'main', x: 140, y: 70 },
          { id: 'f1', label: '', branch: 'main', x: 220, y: 70 },
          { id: 'f2', label: '', branch: 'main', x: 300, y: 70 },
        ]}
        edges={[
          { from: 'm1', to: 'm2' },
          { from: 'm2', to: 'f1' },
          { from: 'f1', to: 'f2' },
        ]}
      />

      <CodeBlock
        title="Note"
        code={`# Prefer merging via Pull Request on GitHub.
# Local merge is useful for personal projects or when teaching.`}
      />
    </SectionLayout>
  )
}
