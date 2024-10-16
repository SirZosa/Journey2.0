import './App.css'
import Navbar from './components/navbar/navbar'
import Main from './page/main/main'
import Projects from './page/projects/projects'
import About from './page/about/about'
import Footer from './page/footer/footer'
function App() {

  return (
      <>
        <Navbar/>
        <div className='app-container'>
          <Main/>
          <Projects/>
          <About/>
        </div>
        <Footer/>
      </>
  )
}

export default App
