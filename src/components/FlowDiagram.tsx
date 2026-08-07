import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface FlowStep {
  label: string
  sublabel?: string
  color?: string
}

interface FlowDiagramProps {
  steps: FlowStep[]
  direction?: 'vertical' | 'horizontal'
}

export default function FlowDiagram({ steps, direction = 'vertical' }: FlowDiagramProps) {
  if (direction === 'horizontal') {
    return (
      <div className="flex flex-wrap items-center justify-center gap-2 my-6">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="px-4 py-2 rounded-lg border border-[var(--color-github-border)] bg-[#161b22] text-center min-w-[100px]"
              style={{ borderColor: step.color || undefined }}
            >
              <div className="text-sm font-medium">{step.label}</div>
              {step.sublabel && (
                <div className="text-xs text-[var(--color-github-muted)] mt-0.5">{step.sublabel}</div>
              )}
            </motion.div>
            {i < steps.length - 1 && (
              <span className="text-[var(--color-github-muted)] text-lg">→</span>
            )}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center my-6 space-y-1">
      {steps.map((step, i) => (
        <div key={i} className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="px-6 py-3 rounded-lg border border-[var(--color-github-border)] bg-[#161b22] text-center min-w-[200px]"
            style={{ borderLeftWidth: 3, borderLeftColor: step.color || '#238636' }}
          >
            <div className="text-sm font-semibold">{step.label}</div>
            {step.sublabel && (
              <div className="text-xs text-[var(--color-github-muted)] mt-1">{step.sublabel}</div>
            )}
          </motion.div>
          {i < steps.length - 1 && (
            <ChevronDown className="my-1 text-[var(--color-github-muted)]" size={20} />
          )}
        </div>
      ))}
    </div>
  )
}
