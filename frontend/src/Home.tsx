import styles from './styles/Home.module.css';

export default function Home() {
  return (
    <>
    <div className={styles.sectionRowContainer}>
      <div className={styles.textContainer}>
        <h1 id={styles.titleText}> Ready to reach New Heights? </h1>
        <ul id={styles.introText}>
          <li className={styles.dotPoint}> Create custom timers </li>
          <li className={styles.dotPoint}> Set weekly study goals </li>
          <li className={styles.dotPoint}> Create a vision board (keeps you motivated!)</li>
          <li className={styles.dotPoint}> Adopt cute virtual pets </li>
          <li className={styles.dotPoint}> Beautiful profile customisation </li>
        </ul>
      </div>
      <div id={styles.pixelArt}> *insert pixel art of cat with timer and stationary here* </div>
    </div>
    <div className={styles.sectionRowContainer} id={styles.anotherContainer}>
      <div id={styles.pixelArt}> *insert pixel art of cat with timer and stationary here* </div>
      <div className={styles.textContainer}>
        <h1 id={styles.titleText}> Ready to reach New Heights? </h1>
        <ul id={styles.introText}>
          <li className={styles.dotPoint}> Create custom timers </li>
          <li className={styles.dotPoint}> Set weekly study goals </li>
          <li className={styles.dotPoint}> Create a vision board (keeps you motivated!)</li>
          <li className={styles.dotPoint}> Adopt cute virtual pets </li>
          <li className={styles.dotPoint}> Beautiful profile customisation </li>
        </ul>
      </div>
    </div>
    </>
  );
}