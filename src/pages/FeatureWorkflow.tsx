import SectionLayout from '../components/SectionLayout'
import FlowDiagram from '../components/FlowDiagram'
import Terminal from '../components/Terminal'

export default function FeatureWorkflow() {
  return (
    <SectionLayout
      title="Complete Feature Workflow"
      subtitle="End-to-end demonstration: from task to merged code."
    >
      <div className="p-4 rounded-lg border border-[var(--color-github-blue)]/30 bg-[#161b22] mb-6">
        <p className="text-sm">
          <strong className="text-[var(--color-github-text)]">Task received:</strong>{' '}
          <span className="text-[var(--color-github-muted)]">"Add login page"</span>
        </p>
      </div>

      <FlowDiagram
        steps={[
          { label: '1. git pull', sublabel: 'Get latest main', color: '#58a6ff' },
          { label: '2. Create branch', sublabel: 'feature/login', color: '#a371f7' },
          { label: '3. Write code', sublabel: 'Build the feature', color: '#f0883e' },
          { label: '4. Stage & Commit', sublabel: 'git add + commit', color: '#238636' },
          { label: '5. Push branch', sublabel: 'git push origin', color: '#58a6ff' },
          { label: '6. Open Pull Request', sublabel: 'Request review', color: '#a371f7' },
          { label: '7. Code Review', sublabel: 'Feedback & approve', color: '#d29922' },
          { label: '8. Merge to main', sublabel: 'Feature is live', color: '#238636' },
        ]}
      />

      <h2 className="text-xl font-semibold mt-8">Commands in order</h2>
      <Terminal
        lines={[
          { type: 'command', text: 'git pull origin main' },
          { type: 'command', text: 'git checkout -b feature/login' },
          { type: 'comment', text: '# ... write code ...' },
          { type: 'command', text: 'git add .' },
          { type: 'command', text: 'git commit -m "feat: add login page"' },
          { type: 'command', text: 'git push -u origin feature/login' },
          { type: 'comment', text: '# Then open PR on GitHub UI' },
        ]}
      />

      <p className="text-[var(--color-github-muted)] mt-4">
        After the PR is approved and merged, switch back to main, pull, and delete the old branch:
      </p>
      <Terminal
        lines={[
          { type: 'command', text: 'git checkout main' },
          { type: 'command', text: 'git pull' },
          { type: 'command', text: 'git branch -d feature/login' },
          { type: 'command', text: 'git push origin --delete feature/login' },
        ]}
      />
    </SectionLayout>
  )
}
