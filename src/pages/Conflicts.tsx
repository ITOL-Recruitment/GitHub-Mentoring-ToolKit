import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'
import Terminal from '../components/Terminal'

export default function Conflicts() {
  return (
    <SectionLayout
      title="Merge Conflicts"
      subtitle="What happens when two people change the same lines."
    >
      <p className="text-[var(--color-github-muted)]">
        A conflict occurs when Git cannot automatically decide which change to keep.
        This is normal and not a failure — it is a signal that human judgment is needed.
      </p>

      <h2 className="text-xl font-semibold mt-6">Visual conflict markers</h2>
      <CodeBlock
        title="src/App.jsx (conflicted)"
        language="jsx"
        code={`<<<<<<< HEAD
Current code (your branch / main)
=======
Incoming code (the branch being merged)
>>>>>>> feature-login`}
      />

      <h2 className="text-xl font-semibold mt-8">How to resolve</h2>
      <ol className="list-decimal list-inside space-y-2 text-[var(--color-github-muted)]">
        <li>Open the file that contains the conflict markers.</li>
        <li>Decide which code (or combination) is correct.</li>
        <li>Delete the markers <code className="text-[var(--color-github-red)]">&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>, <code className="text-[var(--color-github-muted)]">=======</code>, and <code className="text-[var(--color-github-blue)]">&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>.</li>
        <li>Stage the resolved file and commit.</li>
      </ol>

      <Terminal
        lines={[
          { type: 'command', text: 'git add .' },
          { type: 'command', text: 'git commit -m "fix: resolve merge conflict"' },
        ]}
      />

      <div className="p-4 rounded-lg border border-[var(--color-github-yellow)]/40 bg-[#161b22] mt-6">
        <p className="text-sm text-[var(--color-github-yellow)] font-medium">Mentor tip</p>
        <p className="text-sm text-[var(--color-github-muted)] mt-1">
          Create a live conflict in a demo repo during the meeting. Let students see the markers,
          resolve them together, and feel the relief when the commit succeeds.
        </p>
      </div>
    </SectionLayout>
  )
}
