function Dots() {
  return (
    <div className="titlebar">
      <span className="dot r" style={{ width: 7, height: 7 }}></span>
      <span className="dot y" style={{ width: 7, height: 7 }}></span>
      <span className="dot g" style={{ width: 7, height: 7 }}></span>
    </div>
  )
}

function PhoneChart() {
  return (
    <div className="phone" aria-hidden="true">
      <div className="bar wide" style={{ background: 'var(--code-keyword)' }}></div>
      <div className="bar mid" style={{ background: 'var(--code-chrome)' }}></div>
      <div className="bar short" style={{ background: 'var(--code-chrome)' }}></div>
      <div className="chart">
        <i style={{ height: '40%', background: 'var(--code-string)' }}></i>
        <i style={{ height: '70%', background: 'var(--code-keyword)' }}></i>
        <i style={{ height: '55%', background: 'var(--code-type)' }}></i>
        <i style={{ height: '85%', background: 'var(--code-keyword)' }}></i>
        <i style={{ height: '30%', background: 'var(--code-string)' }}></i>
      </div>
    </div>
  )
}

function PhoneRecipe() {
  return (
    <div className="phone" aria-hidden="true">
      <div className="bar wide" style={{ background: 'var(--code-type)' }}></div>
      <div className="bar wide" style={{ background: 'var(--code-chrome)', height: 34, borderRadius: 6 }}></div>
      <div className="bar wide" style={{ background: 'var(--code-chrome)', height: 34, borderRadius: 6 }}></div>
      <div className="bar mid" style={{ background: 'var(--code-string)' }}></div>
    </div>
  )
}

function WindowGame() {
  return (
    <div className="window" aria-hidden="true">
      <Dots />
      <div className="scene" style={{ background: 'linear-gradient(180deg, #16324A 0%, #10131C 70%)' }}>
        <div className="sun" style={{ background: 'var(--code-string)' }}></div>
        <div className="terrain" style={{ background: 'linear-gradient(180deg, #2E4B2E 0%, #1B2B1B 100%)' }}></div>
      </div>
    </div>
  )
}

function WindowDashboard() {
  return (
    <div className="window" aria-hidden="true">
      <Dots />
      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div className="bar wide" style={{ background: 'var(--code-type)', height: 8, borderRadius: 4 }}></div>
        <div style={{ display: 'flex', gap: 6, alignItems: 'flex-end', height: 44 }}>
          <div style={{ width: 14, height: '55%', background: 'var(--code-keyword)', borderRadius: '3px 3px 0 0' }}></div>
          <div style={{ width: 14, height: '85%', background: 'var(--code-string)', borderRadius: '3px 3px 0 0' }}></div>
          <div style={{ width: 14, height: '40%', background: 'var(--code-type)', borderRadius: '3px 3px 0 0' }}></div>
          <div style={{ width: 14, height: '70%', background: 'var(--code-keyword)', borderRadius: '3px 3px 0 0' }}></div>
        </div>
        <div className="bar mid" style={{ background: 'var(--code-chrome)', height: 6, borderRadius: 3 }}></div>
        <div className="bar short" style={{ background: 'var(--code-chrome)', height: 6, borderRadius: 3 }}></div>
      </div>
    </div>
  )
}

function WindowAdmin() {
  return (
    <div className="window" aria-hidden="true">
      <Dots />
      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 9 }}>
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{ width: 28, height: 28, borderRadius: 6, background: 'var(--code-chrome)' }}></div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 5, justifyContent: 'center' }}>
            <div className="bar wide" style={{ background: 'var(--code-keyword)', height: 6, borderRadius: 3 }}></div>
            <div className="bar short" style={{ background: 'var(--code-chrome)', height: 6, borderRadius: 3 }}></div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{ width: 28, height: 28, borderRadius: 6, background: 'var(--code-chrome)' }}></div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 5, justifyContent: 'center' }}>
            <div className="bar wide" style={{ background: 'var(--code-type)', height: 6, borderRadius: 3 }}></div>
            <div className="bar mid" style={{ background: 'var(--code-chrome)', height: 6, borderRadius: 3 }}></div>
          </div>
        </div>
        <div className="bar wide" style={{ background: 'var(--code-string)', height: 8, borderRadius: 4, marginTop: 2 }}></div>
      </div>
    </div>
  )
}

function WindowAtm() {
  return (
    <div className="window" aria-hidden="true">
      <Dots />
      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="bar short" style={{ background: 'var(--code-type)', height: 8, borderRadius: 4 }}></div>
          <div style={{ width: 16, height: 16, borderRadius: '50%', background: 'var(--code-string)' }}></div>
        </div>
        <div className="bar wide" style={{ background: 'var(--code-chrome)', height: 22, borderRadius: 5 }}></div>
        <div className="bar wide" style={{ background: 'var(--code-chrome)', height: 22, borderRadius: 5 }}></div>
        <div className="bar mid" style={{ background: 'var(--code-keyword)', height: 8, borderRadius: 4 }}></div>
      </div>
    </div>
  )
}

const VARIANTS = {
  'phone-chart': PhoneChart,
  'phone-recipe': PhoneRecipe,
  'window-game': WindowGame,
  'window-dashboard': WindowDashboard,
  'window-admin': WindowAdmin,
  'window-atm': WindowAtm,
}

export default function ProjectVisual({ variant }) {
  const Visual = VARIANTS[variant]
  if (!Visual) return null
  return (
    <div className="project-visual">
      <Visual />
    </div>
  )
}
