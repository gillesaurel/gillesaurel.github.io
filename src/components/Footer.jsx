import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="foot">
      <span>{t.footer.location}</span>
      <span className="mono">{t.footer.updated}</span>
    </footer>
  )
}
