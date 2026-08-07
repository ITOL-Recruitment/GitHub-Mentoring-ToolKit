import SectionLayout from '../components/SectionLayout'
import GitGraph from '../components/GitGraph'
import CodeBlock from '../components/CodeBlock'

export default function Branching() {
  return (
    <SectionLayout
      title="Branching Explained"
      subtitle="Isolated lines of development that keep main stable."
    >
      <p className="text-[var(--color-github-muted)]">
        Branches let multiple people (or one person) work on different features at the same time
        without stepping on each other.
      </p>

      <h2 className="text-xl font-semibold mt-6">Visual Git graph</h2>
      <GitGraph
        width={420}
        height={220}
        nodes={[
          { id: '1', label: 'Initial commit', branch: 'main', x: 40, y: 110 },
          { id: '2', label: 'Add README', branch: 'main', x: 140, y: 110 },
          { id: '3', label: 'feat: login form', branch: 'feature', x: 240, y: 50 },
          { id: '4', label: 'feat: validation', branch: 'feature', x: 340, y: 50 },
          { id: '5', label: 'docs: update', branch: 'main', x: 240, y: 170 },
        ]}
        edges={[
          { from: '1', to: '2' },
          { from: '2', to: '3' },
          { from: '3', to: '4' },
          { from: '2', to: '5' },
        ]}
      />

      <div className="grid sm:grid-cols-2 gap-4 mt-6">
        <div className="p-4 rounded-lg border border-[var(--color-github-accent)]/40 bg-[#161b22]">
          <h3 className="font-semibold text-[var(--color-github-accent)]">main branch</h3>
          <p className="text-sm text-[var(--color-github-muted)] mt-1">
            Production-ready code. Only tested, reviewed work should land here.
          </p>
        </div>
        <div className="p-4 rounded-lg border border-[var(--color-github-blue)]/40 bg-[#161b22]">
          <h3 className="font-semibold text-[var(--color-github-blue)]">feature branch</h3>
          <p className="text-sm text-[var(--color-github-muted)] mt-1">
            Safe area to develop, experiment, and break things without affecting main.
          </p>
        </div>
      </div>

      <CodeBlock
        title="Mental model"
        code={`main          ──●──●──────────────●──  (always stable)
                 \\
feature-login     ●──●──●          (work in progress)`}
      />
    </SectionLayout>
  )
}
