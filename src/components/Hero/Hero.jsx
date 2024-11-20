import { getImageUrl } from "../../utils"
import styles from "./Hero.module.css"
export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I am Channabasava</h1>
                <p className={styles.description}>
                I have been working as Freelancer for last few months and I am looking for professional opportunity. <br /> I
worked with html, css, javascript, react, responsive web design, bootstrap, tailwind css and a high level of
english. Proficient in writing clean and maintainable code with best practices.

                </p>
                <a href="mailto:channabasava836@gmail.com" className={styles.contactMe}>Contact Me</a>
            </div>
            <img src={getImageUrl("abouts/hero4.webp")} className={styles.heroImg } alt="" />
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    )
}