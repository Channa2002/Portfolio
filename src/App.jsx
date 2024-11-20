
import styles from  './App.module.css'
import { About } from './components/About/About'
import { Hero } from './components/Hero/Hero'
import { NavBar } from './components/Navbar/NavBar'
import {Experience} from './components/Experience/Experience'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/contacts/contact'

function App() {
 

  return (
    <>
    <div className={styles.App}>
    <NavBar/>
    <Hero/>
    <About/>
    <Experience/>
    <Projects />
    <Contact/>
    </div>
    </>
  )
}

export default App
