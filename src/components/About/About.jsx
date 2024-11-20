import { getImageUrl } from "../../utils";
import styles from "./About.module.css"

export const About = () => {
    return (
   <section className={styles.container} id="about"  >
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
        <img src={getImageUrl("abouts/hero3.png")} alt="Me sitting" className={styles.aboutImage} />
        <ul className={styles.aboutItems}>
            <li  className={styles.aboutItem}>
                <img width={60} src={getImageUrl("abouts/arrow.png")} alt="" />
                <div  className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>
                        I have been working as a frontend developer as a freelancer from past few months.
                        And have a good hands on experience in handling components in reactjs.Developed projects
                        using React, TailwindCSS, Firebase.
                    </p>
                </div>
            </li>

            <li  className={styles.aboutItem}>
                <img width={60} src={getImageUrl("abouts/server.png") } alt="" />
                <div className={styles.aboutItemText}>
                    <h3>Backend  Developer</h3>
                    <p>
                     I have been working in nodeJS from past few months and have good knowledge about the nodejs and other backend languages python, java
                    </p>
                </div>
            </li>
        </ul>
    </div>
   </section>
    );
}