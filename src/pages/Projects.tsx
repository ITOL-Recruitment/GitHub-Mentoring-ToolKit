import SectionLayout from '../components/SectionLayout'
import FlowDiagram from '../components/FlowDiagram'

export default function Projects() {
  return (
    <SectionLayout
      title="GitHub Projects / Kanban"
      subtitle="Visual boards for managing work."
    >
      <p className="text-[var(--color-github-muted)]">
        GitHub Projects give teams a Kanban-style board linked directly to Issues and Pull Requests.
      </p>

      <FlowDiagram
        steps={[
          { label: 'Backlog', sublabel: 'Ideas & requests', color: '#8b949e' },
          { label: 'To Do', sublabel: 'Ready to start', color: '#58a6ff' },
          { label: 'In Progress', sublabel: 'Currently working', color: '#f0883e' },
          { label: 'Review', sublabel: 'PR open', color: '#a371f7' },
          { label: 'Done', sublabel: 'Merged & closed', color: '#238636' },
        ]}
      />

      <p className="text-[var(--color-github-muted)] mt-4">
        Teams drag cards across columns as work progresses. Mentors can show this live to illustrate
        how professional teams stay organized without external tools.
      </p>
    </SectionLayout>
  )
}
