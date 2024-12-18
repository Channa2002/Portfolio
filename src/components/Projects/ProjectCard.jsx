import { getImageUrl } from "../../utils"
import styles from "./ProjectCard.module.css"

// eslint-disable-next-line react/prop-types
export const  ProjectCard = ({project : {title, imageSrc, description, skills, demo, source} }) => {
    return(
        <div className={styles.container}>
            <img src={getImageUrl(imageSrc)} alt="" className={styles.image} />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {
                        // eslint-disable-next-line react/prop-types
                        skills.map((skill, id) => {
                         return <li key={id} className={styles.skill}>{skill}</li>
                    })
                }
            </ul>
            <div className={styles.links}>
                <a href={demo} className={styles.link}>Demo</a>
                <a href={source}className={styles.link}>Source</a>
            </div>
        </div>
    )
}