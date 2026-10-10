import { Link } from 'react-router-dom'
import { serviceById } from '../lib/estimate.js'
import { useLang, useTo } from '../lib/i18n.jsx'
import Cover from './Cover.jsx'

/** The names of a project's services, as one line of text. */
export function serviceNames(project, lang) {
  return project.services.map((id) => serviceById(id).name[lang]).join(lang === 'ar' ? '، ' : ', ')
}

/** A project in a list: its picture, name and one line about it. `wide` puts the picture beside the text. */
export default function ProjectLink({ project, wide = false, heading: Heading = 'h3' }) {
  const lang = useLang()
  const to = useTo()
  return (
    <Link to={to(`/work/${project.slug}`)} className={`group grid min-w-0 gap-4 rounded-2xl ${wide ? 'md:grid-cols-[1.25fr_1fr] md:items-center md:gap-8' : ''}`}>
      <span className="block overflow-hidden rounded-2xl">
        <Cover cover={project.cover} className="transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none" />
      </span>
      <span className="block">
        <span className="block text-sm font-semibold text-flame-deep">{serviceNames(project, lang)}</span>
        <Heading className={`mt-1 font-bold underline-offset-4 group-hover:underline ${wide ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>{project.name[lang]}</Heading>
        <span className={`mt-1.5 block soft ${wide ? 'text-lg' : ''}`}>{project.line[lang]}</span>
      </span>
    </Link>
  )
}
