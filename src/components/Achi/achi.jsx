// Achievements.jsx
import React from 'react';
import styles from './Achi.module.css';

export const Achi = () => {
  const achievements = [
    { id: 1, title: 'First Achievement', description: '•	I have achieved merit certificate of Summer internship from IIIT Hyderabad  ' },
    { id: 2, title: 'Second Achievement', description: '•	I have achieved certificate in AI THON' },
    { id: 3, title: 'Third Achievement', description: '•	I have achieved certificate in Edyst hackathon ' },
    { id: 4, title: 'Fourth Achievement', description: 'I have achieved merit certificate Foundations of Modern Machine Learning from IIIT Hyderabad' },
    // Add more achievements as needed
  ];

  return (
    <section id="achi">
      <div className={styles.achievementsContainer}>
        <h1 className={styles.heading}>Achievements</h1>
        <ul className={styles.achievementsList}>
          {achievements.map((achievement) => (
            <li key={achievement.id} className={styles.achievementItem}>
              <h3 className={styles.achievementTitle}>{achievement.title}</h3>
              <p className={styles.achievementDescription}>{achievement.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};


