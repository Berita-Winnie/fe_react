import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
      />
      <Header />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default App
