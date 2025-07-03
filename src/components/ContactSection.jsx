import React from "react";
import styles from "../styles/ContactSection.module.css";

// ContactSection component renders the green split contact/footer info and image
export default function ContactSection() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.leftPanel}>
        <h2 className={styles.title}>Reach Out</h2>
        <div className={styles.contactInfo}>
          <div>
            <strong>Conference Secretariat</strong>
            <br />163 Woodlands Place
            <br />Algies Bay, Rodney 0920
          </div>
          <div className={styles.spacedItem}>123-456-7890</div>
          <div className={styles.spacedItem}>hello@reallygreatsite.com</div>
          <div className={styles.spacedItem}>@reallygreatsite</div>
        </div>
        <button className={styles.ctaButton}>RESERVE YOUR SEAT</button>
      </div>
      <div className={styles.rightPanel}>
        {/* Contact Image: Replace src with group/table office photo if desired */}
        <img
          src="https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=900&q=80"
          alt="People discussing at a table in a glass office"
          className={styles.contactImg}
        />
      </div>
    </section>
  );
}
