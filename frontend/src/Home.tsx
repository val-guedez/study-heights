import styles from './styles/Home.module.css';

export default function Home() {
  return (
    <>
    <div className={styles.sectionRowContainer}>
      <div className={styles.textContainer}>
        <h1 id={styles.titleText}> Reach New Heights </h1>
        <p id={styles.introText}> every common study timer technique plus more at your finger tips! 
          create an account to make a study timetable and be rewarded with adorable 
          virtual pets when you keep studying! create a vision board with your goals 
          to stay motivated, to be reminded of what all this agony is for!  
          don’t like the look of the website? feel free to customise it in 
          your account settings!
        </p>
      </div>
      <div id={styles.pixelArt}> *insert pixel art of cat with timer and stationary here* </div>
    </div>
    </>
  );
}