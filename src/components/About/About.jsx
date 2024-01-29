import React from "react";
import styles from "./About.module.css";
import aboutImage from "../../assets/about/aboutImage.png"; // Import the image
import cursorIcon from "../../assets/about/cursorIcon.png"; // Import the cursor icon

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={aboutImage} // Use imported image directly
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="Cursor icon" /> {/* Use imported cursor icon */}
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites. My expertise lies in transforming design concepts into responsive and interactive web applications.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
