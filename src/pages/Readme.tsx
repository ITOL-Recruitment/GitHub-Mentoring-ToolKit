import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'

export default function Readme() {
  return (
    <SectionLayout
      title="README.md Training"
      subtitle="The first file every visitor opens."
    >
      <p className="text-[var(--color-github-muted)]">
        A professional README answers three questions in under 30 seconds:
        What is this? How do I run it? How do I contribute?
      </p>

      <CodeBlock
        title="Professional README template"
        language="markdown"
        code={`# Project Name

## Description
What the project does in one or two clear sentences.

## Features
- Feature one
- Feature two
- Feature three

## Technologies
- React
- Node.js
- Database (PostgreSQL / MongoDB)

## Installation
\`\`\`bash
npm install
\`\`\`

## Usage
\`\`\`bash
npm run dev
\`\`\`

## Environment Variables
Copy \`.env.example\` to \`.env\` and fill in the values.

## Contributing
1. Fork the repo
2. Create a feature branch
3. Open a Pull Request

## License
MIT`}
      />
    </SectionLayout>
  )
}
