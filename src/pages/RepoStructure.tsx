import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'

export default function RepoStructure() {
  return (
    <SectionLayout
      title="Repository Structure"
      subtitle="What a professional project looks like on disk."
    >
      <p className="text-[var(--color-github-muted)]">
        A clean, predictable structure makes it easy for any developer to understand the project
        in seconds. Here is a typical modern frontend/backend project layout:
      </p>

      <CodeBlock
        title="example-project/"
        language="text"
        code={`example-project/
├── src/                 # Application source code
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   └── utils/
├── public/              # Static assets (favicon, images)
├── README.md            # Project documentation (first thing people read)
├── package.json         # Dependencies & scripts
├── .gitignore           # Files Git should never track
├── LICENSE              # Legal terms
└── .env.example         # Example environment variables (never commit real .env)`}
      />

      <h2 className="text-xl font-semibold mt-8">What each part is for</h2>
      <div className="space-y-4 mt-4">
        {[
          { name: 'src/', desc: 'All application code lives here. Keep it organized by feature or by type (components, pages, services).' },
          { name: 'public/', desc: 'Files that are served as-is (index.html, favicon, robots.txt). Not processed by the bundler in the same way as src.' },
          { name: 'README.md', desc: 'The front door of the repository. Explain what the project does, how to install, and how to run it.' },
          { name: 'package.json', desc: 'Lists dependencies, scripts (dev, build, test), and metadata. The single source of truth for npm/yarn/pnpm.' },
          { name: '.gitignore', desc: 'Tells Git which files to ignore (node_modules, .env, build output, OS files). Critical for security and cleanliness.' },
          { name: 'LICENSE', desc: 'States how others may use the code (MIT, Apache, etc.). Open-source projects almost always include one.' },
        ].map((item) => (
          <div key={item.name} className="p-4 rounded-lg border border-[var(--color-github-border)] bg-[#161b22]">
            <code className="text-[var(--color-github-blue)] font-semibold">{item.name}</code>
            <p className="text-sm text-[var(--color-github-muted)] mt-1">{item.desc}</p>
          </div>
        ))}
      </div>
    </SectionLayout>
  )
}
