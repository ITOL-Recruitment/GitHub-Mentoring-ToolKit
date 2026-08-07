import { motion } from 'framer-motion'

interface Node {
  id: string
  label: string
  branch: string
  x: number
  y: number
  color?: string
}

interface Edge {
  from: string
  to: string
  color?: string
}

interface GitGraphProps {
  nodes: Node[]
  edges: Edge[]
  width?: number
  height?: number
}

const branchColors: Record<string, string> = {
  main: '#238636',
  feature: '#58a6ff',
  hotfix: '#f85149',
  develop: '#a371f7',
}

export default function GitGraph({ nodes, edges, width = 400, height = 300 }: GitGraphProps) {
  const getNode = (id: string) => nodes.find((n) => n.id === id)

  return (
    <div className="my-6 p-4 rounded-lg border border-[var(--color-github-border)] bg-[#0d1117] overflow-x-auto">
      <svg width={width} height={height} className="mx-auto">
        {/* Edges */}
        {edges.map((edge, i) => {
          const from = getNode(edge.from)
          const to = getNode(edge.to)
          if (!from || !to) return null
          const color = edge.color || branchColors[to.branch] || '#30363d'
          return (
            <motion.line
              key={i}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke={color}
              strokeWidth={2.5}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            />
          )
        })}
        {/* Nodes */}
        {nodes.map((node, i) => {
          const color = node.color || branchColors[node.branch] || '#238636'
          return (
            <g key={node.id}>
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={10}
                fill={color}
                stroke="#0d1117"
                strokeWidth={3}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: i * 0.08 }}
              />
              <text
                x={node.x + 18}
                y={node.y + 4}
                fill="#e6edf3"
                fontSize={12}
                fontFamily="ui-monospace, monospace"
              >
                {node.label}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
