import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import Privacy from './pages/Privacy.jsx'

// The same pages in both languages: English at the root, Arabic under /ar.
const pages = () => (
  <>
    <Route index element={<Home />} />
    <Route path="privacy" element={<Privacy />} />
    <Route path="*" element={<NotFound />} />
  </>
)

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ar" element={<Layout lang="ar" />}>
          {pages()}
        </Route>
        <Route path="/" element={<Layout lang="en" />}>
          {pages()}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
