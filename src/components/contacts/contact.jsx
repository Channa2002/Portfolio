import {getImageUrl} from "../../utils"
import styles from "./contact.module.css"
export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/email.png")} alt="" />
                <a href="mailto:channabasava836@gmail.com">channabasava836@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedin.png")} alt="" />
                <a href="https://www.linkedin.com/in/channa-basava-6481862bb/">LinkedIn.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/gitHub.png")} alt="" />
                <a href="https://github.com/Channa2002">GitHub</a>
            </li>
        </ul>
        </footer>
    )
}