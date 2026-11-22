import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { translations } from '../i18n/translations.js'
import { useTheme } from '../ThemeContext.jsx'
import { projects } from '../data/projects.js'

function CodeSnippet({ code }) {
  return (
    <div className="terminal-code">
      <div className="terminal-code-tab">{code.tab}</div>
      <div className="terminal-code-body">
        <span className="k">data class</span> <span className="t">{code.className}</span>({'\n'}
        {'    '}<span className="k">val</span> {code.fields.nom}: <span className="t">String</span> = <span className="s">"{code.name}"</span>,{'\n'}
        {'    '}<span className="k">val</span> {code.fields.programme}: <span className="t">String</span> = <span className="s">"{code.program}"</span>,{'\n'}
        {'    '}<span className="k">val</span> {code.fields.cegep}: <span className="t">String</span> = <span className="s">"{code.school}"</span>,{'\n'}
        {'    '}<span className="k">val</span> {code.fields.stack}: <span className="t">List</span>&lt;<span className="t">String</span>&gt; = <span className="t">listOf</span>({'\n'}
        {'        '}<span className="s">"Kotlin"</span>, <span className="s">"Unity"</span>, <span className="s">"PHP"</span>,{'\n'}
        {'        '}<span className="s">"Angular"</span>, <span className="s">"Spring Boot"</span>{'\n'}
        {'    '}),{'\n'}
        {'    '}<span className="k">val</span> {code.fields.disponible}: <span className="t">Boolean</span> = <span className="k">true</span> <span className="c">{code.comment}</span>{'\n'}
        )
      </div>
    </div>
  )
}

function Line({ line }) {
  if (line.type === 'input') {
    return (
      <div className="terminal-line is-input">
        <span className="prompt">{line.prompt}</span> {line.text}
      </div>
    )
  }
  if (line.type === 'node') {
    return <div className="terminal-line">{line.node}</div>
  }
  if (line.href) {
    return (
      <div className="terminal-line">
        <a className="terminal-output-link" href={line.href} target="_blank" rel="noopener noreferrer">{line.text}</a>
      </div>
    )
  }
  return <div className="terminal-line">{line.text}</div>
}

export default function Terminal() {
  const { lang, t, toggleLang } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const term = t.hero.terminal

  const [lines, setLines] = useState(() => term.intro.map((text) => ({ type: 'output', text })))
  const [value, setValue] = useState('')
  const [cmdHistory, setCmdHistory] = useState([])
  const [historyPos, setHistoryPos] = useState(null)
  const bodyRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight
  }, [lines])

  function print(text, href) {
    setLines((prev) => [...prev, { type: 'output', text, href }])
  }

  function printNode(node) {
    setLines((prev) => [...prev, { type: 'node', node }])
  }

  function runCommand(raw) {
    const cmd = raw.trim()
    setLines((prev) => [...prev, { type: 'input', text: cmd, prompt: term.prompt }])
    if (!cmd) return

    setCmdHistory((prev) => [...prev, cmd])
    setHistoryPos(null)

    const name = cmd.toLowerCase().split(/\s+/)[0]

    switch (name) {
      case 'help':
        term.help.forEach((l) => print(l))
        break
      case 'whoami':
        print(term.whoami)
        break
      case 'skills':
        Object.values(t.skills.groups).forEach((group) => {
          print(`${group.title}: ${group.chips.join(', ')}`)
        })
        break
      case 'projects':
      case 'ls':
        projects.forEach((p) => print(`${p.title} — ${p.kind[lang]}`))
        print(term.projectsHint)
        break
      case 'contact':
        print('gillesaurel17@gmail.com', 'mailto:gillesaurel17@gmail.com')
        print('github.com/gillesaurel', 'https://github.com/gillesaurel')
        break
      case 'github':
        window.open('https://github.com/gillesaurel', '_blank', 'noopener')
        print(term.openingGithub)
        break
      case 'theme': {
        const wasDark = theme === 'dark'
        toggleTheme()
        print(wasDark ? term.themeLight : term.themeDark)
        break
      }
      case 'lang': {
        const newLang = lang === 'fr' ? 'en' : 'fr'
        toggleLang()
        print(translations[newLang].hero.terminal.langSwitched)
        break
      }
      case 'clear':
        setLines([])
        return
      case 'date':
        print(new Date().toLocaleString(lang === 'fr' ? 'fr-CA' : 'en-CA'))
        break
      case 'pwd':
        print('/home/gilles/portfolio')
        break
      case 'sudo':
        print(term.sudo)
        break
      case 'code':
      case 'old':
        printNode(<CodeSnippet code={term.code} />)
        break
      case 'cat': {
        const target = cmd.split(/\s+/).slice(1).join(' ').trim().toLowerCase()
        if (target === 'stagiaire.kt' || target === 'intern.kt') {
          printNode(<CodeSnippet code={term.code} />)
        } else if (target) {
          print(term.catNotFound(target))
        } else {
          print(term.catUsage)
        }
        break
      }
      default:
        print(term.unknown(cmd))
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      runCommand(value)
      setValue('')
      return
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (cmdHistory.length === 0) return
      setHistoryPos((prev) => {
        const next = prev === null ? cmdHistory.length - 1 : Math.max(0, prev - 1)
        setValue(cmdHistory[next])
        return next
      })
      return
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setHistoryPos((prev) => {
        if (prev === null) return null
        const next = prev + 1
        if (next >= cmdHistory.length) {
          setValue('')
          return null
        }
        setValue(cmdHistory[next])
        return next
      })
    }
  }

  return (
    <div className="editor" onClick={() => inputRef.current?.focus()}>
      <div className="editor-bar">
        <span className="dot r"></span><span className="dot y"></span><span className="dot g"></span>
        <span className="editor-tab">{term.tabName}</span>
      </div>
      <div className="editor-body terminal-body" ref={bodyRef}>
        {lines.map((line, i) => (
          <Line line={line} key={i} />
        ))}
        <div className="terminal-input-row">
          <span className="prompt">{term.prompt}</span>
          <input
            ref={inputRef}
            className="terminal-input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            aria-label="Terminal interactif"
          />
        </div>
      </div>
    </div>
  )
}
