import SectionLayout from '../components/SectionLayout'
import Terminal from '../components/Terminal'
import CodeBlock from '../components/CodeBlock'

export default function FeatureBranches() {
  return (
    <SectionLayout
      title="Creating Feature Branches"
      subtitle="The everyday workflow every professional developer uses."
    >
      <p className="text-[var(--color-github-muted)]">
        Never work directly on <code className="text-[var(--color-github-blue)]">main</code>. Always
        create a short-lived branch for the task you are about to do.
      </p>

      <h2 className="text-xl font-semibold mt-6">Commands</h2>
      <Terminal
        lines={[
          { type: 'comment', text: '# Create a new branch' },
          { type: 'command', text: 'git branch feature-login' },
          { type: 'comment', text: '# Switch to it' },
          { type: 'command', text: 'git checkout feature-login' },
          { type: 'comment', text: '# Modern equivalent' },
          { type: 'command', text: 'git switch feature-login' },
          { type: 'comment', text: '# Create + switch in one step (most common)' },
          { type: 'command', text: 'git checkout -b feature-login' },
          { type: 'output', text: 'Switched to a new branch \'feature-login\'' },
        ]}
      />

      <h2 className="text-xl font-semibold mt-8">Real developer workflow</h2>
      <ol className="list-decimal list-inside space-y-2 text-[var(--color-github-muted)]">
        <li>Pull the latest main so your branch starts from current code.</li>
        <li>Create a branch named after the feature or ticket (feature/login, fix/navbar-bug).</li>
        <li>Write code, commit often with good messages.</li>
        <li>Push the branch and open a Pull Request.</li>
        <li>After review & merge, delete the local and remote branch.</li>
      </ol>

      <CodeBlock
        title="Naming conventions"
        code={`feature/user-authentication
fix/mobile-navbar-overflow
chore/update-dependencies
docs/api-endpoints`}
      />
    </SectionLayout>
  )
}
