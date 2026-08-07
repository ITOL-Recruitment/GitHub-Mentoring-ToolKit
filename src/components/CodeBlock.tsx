import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { motion } from 'framer-motion'

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
}

export default function CodeBlock({ code, language = 'bash', title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group my-4 rounded-lg overflow-hidden border border-[var(--color-github-border)] bg-[#161b22]">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-[#0d1117] border-b border-[var(--color-github-border)]">
          <span className="text-xs font-medium text-[var(--color-github-muted)] uppercase tracking-wider">
            {title || language}
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs text-[var(--color-github-muted)] hover:text-[var(--color-github-text)] transition-colors"
          >
            {copied ? (
              <>
                <Check size={14} className="text-[var(--color-github-accent)]" />
                <span className="text-[var(--color-github-accent)]">Copied!</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      )}
      {!title && (
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-1.5 rounded-md bg-[#21262d] text-[var(--color-github-muted)] hover:text-[var(--color-github-text)] opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {copied ? <Check size={14} className="text-[var(--color-github-accent)]" /> : <Copy size={14} />}
        </button>
      )}
      <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed">
        <code className="text-[var(--color-github-text)]">{code}</code>
      </pre>
    </div>
  )
}
