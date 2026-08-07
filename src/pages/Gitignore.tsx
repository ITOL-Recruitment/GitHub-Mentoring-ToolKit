import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'

export default function Gitignore() {
  return (
    <SectionLayout
      title=".gitignore Explained"
      subtitle="Files that should never be uploaded to the repository."
    >
      <p className="text-[var(--color-github-muted)]">
        The <code className="text-[var(--color-github-blue)]">.gitignore</code> file tells Git which
        paths to ignore. This protects secrets and keeps the repository free of generated files.
      </p>

      <CodeBlock
        title=".gitignore (typical Node / React project)"
        code={`# Dependencies
node_modules/

# Build output
dist/
build/
.next/
out/

# Environment & secrets
.env
.env.local
.env.*.local

# Logs & OS
*.log
.DS_Store
Thumbs.db

# Editor
.vscode/
.idea/
*.swp`}
      />

      <div className="p-4 rounded-lg border border-[var(--color-github-red)]/40 bg-[#161b22] mt-6">
        <p className="text-sm font-medium text-[var(--color-github-red)]">Critical security rule</p>
        <p className="text-sm text-[var(--color-github-muted)] mt-1">
          Never commit <code className="text-[var(--color-github-blue)]">.env</code> files that contain
          API keys, database passwords, or tokens. Once pushed to a public repo they are considered
          compromised. Always use <code className="text-[var(--color-github-blue)]">.env.example</code> instead.
        </p>
      </div>
    </SectionLayout>
  )
}
