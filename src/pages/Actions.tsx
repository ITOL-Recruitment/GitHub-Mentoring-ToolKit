import SectionLayout from '../components/SectionLayout'
import FlowDiagram from '../components/FlowDiagram'
import CodeBlock from '../components/CodeBlock'

export default function Actions() {
  return (
    <SectionLayout
      title="GitHub Actions Introduction"
      subtitle="Basic CI/CD that runs automatically on every push."
    >
      <p className="text-[var(--color-github-muted)]">
        GitHub Actions lets you automate testing, building, and deploying whenever code is pushed
        or a PR is opened.
      </p>

      <FlowDiagram
        steps={[
          { label: 'Push Code', color: '#58a6ff' },
          { label: 'Run Tests', color: '#f0883e' },
          { label: 'Build Application', color: '#a371f7' },
          { label: 'Deploy', color: '#238636' },
        ]}
      />

      <h2 className="text-xl font-semibold mt-8">Example workflow file</h2>
      <CodeBlock
        title=".github/workflows/ci.yml"
        language="yaml"
        code={`name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm test
      - run: npm run build`}
      />
    </SectionLayout>
  )
}
