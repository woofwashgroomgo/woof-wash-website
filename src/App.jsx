import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import MeetTheGroomer from './pages/MeetTheGroomer.jsx'
import Services from './pages/Services.jsx'
import Testimonials from './pages/Testimonials.jsx'
import Gallery from './pages/Gallery.jsx'
import BookNow from './pages/BookNow.jsx'
import ClientAgreement from './pages/ClientAgreement.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-800">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meet-the-groomer" element={<MeetTheGroomer />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/book-now" element={<BookNow />} />
          <Route path="/client-agreement" element={<ClientAgreement />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
