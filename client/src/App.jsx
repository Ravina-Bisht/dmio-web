import Navbar from './components/Navbar'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
// import PopupForm from './components/PopUpForm'
import Home from './pages/Home'
import CoursePage from './pages/CoursePage'
import { Routes, Route} from 'react-router-dom'
import AllCourses from './pages/AllCourses'
import AboutPage from './pages/AboutPage'
import Contact from './pages/ContactUs'
import ScrollToTop from './components/ScrollToTop'


function App() {
  return (
    <div className='gradient-bg min-h-screen text-white'>
    
      <Navbar/>
      {/* <PopupForm/> */}
      <ScrollToTop/>

      <Routes>
      <Route path="/" element={<Home />} />

       <Route
        path="/courses"
        element={<AllCourses />}
      />

      <Route
        path="/course/:courseId"
        element={<CoursePage />}
      />
       <Route
          path="/about"
          element={<AboutPage />}
        />
        <Route path='/contact'
          element={<Contact/>}
        />
    </Routes>
   

    <FAQ/>
   
   <Footer/>
    </div>
  )
}

export default App
