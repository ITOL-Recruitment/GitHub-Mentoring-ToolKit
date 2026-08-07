import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Intro from './pages/Intro'
import RepoStructure from './pages/RepoStructure'
import Setup from './pages/Setup'
import CreateRepo from './pages/CreateRepo'
import Status from './pages/Status'
import AddCommit from './pages/AddCommit'
import CommitMessages from './pages/CommitMessages'
import Branching from './pages/Branching'
import FeatureBranches from './pages/FeatureBranches'
import FeatureWorkflow from './pages/FeatureWorkflow'
import PullRequests from './pages/PullRequests'
import Merge from './pages/Merge'
import Conflicts from './pages/Conflicts'
import Collaboration from './pages/Collaboration'
import Readme from './pages/Readme'
import Gitignore from './pages/Gitignore'
import Issues from './pages/Issues'
import Projects from './pages/Projects'
import Actions from './pages/Actions'
import Mistakes from './pages/Mistakes'
import BestPractices from './pages/BestPractices'

export default function App() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-[var(--color-github-dark)]">
        <Sidebar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/repo-structure" element={<RepoStructure />} />
            <Route path="/setup" element={<Setup />} />
            <Route path="/create-repo" element={<CreateRepo />} />
            <Route path="/status" element={<Status />} />
            <Route path="/add-commit" element={<AddCommit />} />
            <Route path="/commit-messages" element={<CommitMessages />} />
            <Route path="/branching" element={<Branching />} />
            <Route path="/feature-branches" element={<FeatureBranches />} />
            <Route path="/feature-workflow" element={<FeatureWorkflow />} />
            <Route path="/pull-requests" element={<PullRequests />} />
            <Route path="/merge" element={<Merge />} />
            <Route path="/conflicts" element={<Conflicts />} />
            <Route path="/collaboration" element={<Collaboration />} />
            <Route path="/readme" element={<Readme />} />
            <Route path="/gitignore" element={<Gitignore />} />
            <Route path="/issues" element={<Issues />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/actions" element={<Actions />} />
            <Route path="/mistakes" element={<Mistakes />} />
            <Route path="/best-practices" element={<BestPractices />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
