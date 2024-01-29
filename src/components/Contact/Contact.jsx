import React from "react";
import styles from "./Contact.module.css";
import emailIcon from "../../assets/contact/emailIcon.png"; // Import the email icon
import linkedinIcon from "../../assets/contact/linkedinIcon.png"; // Import the LinkedIn icon
import githubIcon from "../../assets/contact/githubIcon.png"; // Import the GitHub icon

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:nerellasailaja5@email.com">
            <img src={emailIcon} alt="Email icon" /> {/* Use imported email icon */}
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/sailaja-nerella-87b8b0228">
            <img src={linkedinIcon} alt="LinkedIn icon" /> {/* Use imported LinkedIn icon */}
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/NerellaSailaja">
            <img src={githubIcon} alt="Github icon" /> {/* Use imported GitHub icon */}
          </a>
        </li>
      </ul>
    </footer>
  );
};
