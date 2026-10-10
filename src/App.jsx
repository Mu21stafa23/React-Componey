import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Contact from './pages/Contact.jsx'
import Estimate from './pages/Estimate.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import Services from './pages/Services.jsx'
import Work from './pages/Work.jsx'
import WorkDetail from './pages/WorkDetail.jsx'

// The same pages in both languages: Arabic at the root, English under /en.
const pages = () => (
  <>
    <Route index element={<Home />} />
    <Route path="services" element={<Services />} />
    <Route path="estimate" element={<Estimate />} />
    <Route path="work" element={<Work />} />
    <Route path="work/:slug" element={<WorkDetail />} />
    <Route path="contact" element={<Contact />} />
    <Route path="*" element={<NotFound />} />
  </>
)

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/en" element={<Layout lang="en" />}>
          {pages()}
        </Route>
        <Route path="/" element={<Layout lang="ar" />}>
          {pages()}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
