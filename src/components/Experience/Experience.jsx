import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";

// Function to import all images from a directory
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
    return null;
  });
  return images;
}

// Import all images from the specified directory
const images = importAll(require.context('../../assets/skills/', false, /\.(png|jpe?g|svg)$/));

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                {/* Use image from the imported images object */}
                <img src={images[skill.imageSrc]} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


