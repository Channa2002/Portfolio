import styles from "./NavBar.module.css"
// import { useState } from "react"
import {getImageUrl} from "../../utils"
import { useState } from "react"

export const NavBar = () => {
    const[menuOpen, setMenuOpen] = useState(false);
    return(
     <nav className={styles.navbar}>
        <a href="/" className={styles.title}>Portfolio</a>
        <div className={styles.menu}>
            <img
             src={ menuOpen? getImageUrl("nav/close1.png"):getImageUrl("nav/nav.png")} alt="" className={styles.menuBtn}
             onClick={() => setMenuOpen(!menuOpen)}
             />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
     </nav>
    )
}