import React from "react";
import styles from "../styles/HeroSection.module.css";

// HeroSection Component renders the green split header with image and CTA
export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.leftPanel}>
        <h1 className={styles.mainHeadline}>Selling online is vital to business growth.</h1>
        <div className={styles.subHeadlines}>
          <h2 className={styles.subheadline}>2025 Grow Your e-Commerce Conference</h2>
          <div className={styles.eventInfo}>
            <span>September 16-18, 2025</span>
            <span>Paragon One Plaza and Sky Garden</span>
          </div>
          <button className={styles.ctaButton}>BOOK NOW FOR EARLY BIRD PRICES</button>
        </div>
      </div>
      <div className={styles.rightPanel}>
        {/* Hero Image: Replace src with your preferred meeting image if needed */}
        <img 
          src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=900&q=80" 
          alt="Business team in a modern meeting room" 
          className={styles.heroImg}
        />
      </div>
    </section>
  );
}
