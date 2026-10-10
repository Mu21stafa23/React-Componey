import { useTitle } from '../lib/hooks.js'
import { useT } from '../lib/i18n.jsx'
import About from '../sections/About.jsx'
import Contact from '../sections/Contact.jsx'
import Hero from '../sections/Hero.jsx'
import Services from '../sections/Services.jsx'
import Stats from '../sections/Stats.jsx'
import WorkWithUs from '../sections/WorkWithUs.jsx'

export default function Home() {
  const t = useT()
  useTitle(t('ECO | Data to Enrich Your Online Business', 'ECO | بيانات تُثري أعمالك على الإنترنت'))
  return (
    <>
      <Hero />
      <WorkWithUs />
      <Services />
      <Stats />
      <About />
      <Contact />
    </>
  )
}
