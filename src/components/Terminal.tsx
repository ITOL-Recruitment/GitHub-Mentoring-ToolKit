import { motion } from 'framer-motion'

interface TerminalProps {
  lines: { type: 'command' | 'output' | 'comment'; text: string }[]
  title?: string
}

export default function Terminal({ lines, title = 'Terminal' }: TerminalProps) {
  return (
    <div className="terminal my-6 overflow-hidden shadow-lg">
      <div className="flex items-center gap-2 px-4 py-2 bg-[#161b22] border-b border-[var(--color-github-border)]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <span className="text-xs text-[var(--color-github-muted)] ml-2">{title}</span>
      </div>
      <div className="p-4 space-y-1 text-sm font-mono">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className={
              line.type === 'command'
                ? 'text-[var(--color-github-accent)]'
                : line.type === 'comment'
                ? 'text-[var(--color-github-muted)] italic'
                : 'text-[var(--color-github-text)]'
            }
          >
            {line.type === 'command' && <span className="text-[var(--color-github-muted)] select-none">$ </span>}
            {line.text}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
