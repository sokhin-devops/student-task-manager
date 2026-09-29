import { ThemeSwitcher } from './components/ThemeSwitcher'
import TaskManagerApp from './features/task-manager/TaskManagerApp'

const PORTFOLIO_REPO = 'https://github.com/sokhin-devops/kev-channoeurn-portfolio'

export default function App() {
  return (
    <div className="page" data-accent="violet">
      <a href="#main" className="skip-link">
        Skip to app
      </a>

      <header className="topbar">
        <div className="topbar__inner">
          <p className="topbar__title">
            Student Task Manager
            <span className="topbar__style">Minimalist + Ambient</span>
          </p>
          <ThemeSwitcher />
        </div>
      </header>

      <main id="main" className="page__main" tabIndex={-1}>
        <h1 className="sr-only">Student Task Manager</h1>
        <TaskManagerApp />
      </main>

      <footer className="page__footer">
        <p>Built by Kev Channoeurn with React and Vite.</p>
        <a href={PORTFOLIO_REPO} target="_blank" rel="noreferrer">
          Part of Kev Channoeurn&apos;s portfolio
        </a>
      </footer>
    </div>
  )
}
