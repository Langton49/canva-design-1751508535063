import React from "react";
import styles from "../styles/SpeakersSection.module.css";

const speakers = [
  {
    name: "Leslie Boatwright",
    role: "Head of Marketing",
    company: "The Hobbibox",
    date: "September 16",
    // Replace url with your image if needed
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    imgAlt: "Leslie Boatwright, professional woman in red blazer",
  },
  {
    name: "Nicholas Newark",
    role: "Director of Design",
    company: "Studio Ralla",
    date: "September 17",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
    imgAlt: "Nicholas Newark, man in black blazer smiling",
  },
  {
    name: "Kin Gyun",
    role: "Founder and CEO",
    company: "The Treasurebox Online",
    date: "September 18",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
    imgAlt: "Kin Gyun, woman in green top engaged mid-discussion",
  }
];

// SpeakersSection component renders grid of speakers with photo, name, title, etc.
export default function SpeakersSection() {
  return (
    <section className={styles.speakersSection}>
      <h2 className={styles.sectionTitle}>Our 2025 Keynote Speakers</h2>
      <div className={styles.speakersGrid}>
        {speakers.map((speaker) => (
          <div className={styles.speakerCard} key={speaker.name}>
            {/* Speaker Image: Replace src with your own for each speaker */}
            <img
              src={speaker.img}
              alt={speaker.imgAlt}
              className={styles.speakerImg}
            />
            <div className={styles.speakerInfo}>
              <div className={styles.speakerName}>{speaker.name}</div>
              <div className={styles.speakerRole}>{speaker.role}</div>
              <div className={styles.speakerCompany}>{speaker.company}</div>
              <div className={styles.speakerDate}>{speaker.date}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
