import './App.css'
import Navbar from './components/navbar/navbar'
import Main from './page/main/main'
import Projects from './page/projects/projects'
import About from './page/about/about'
function App() {

  return (
      <>
        <Navbar/>
        <Main/>
        <Projects/>
        <About/>
      </>
  )
}

export default App
