import { Link } from 'react-router-dom';
import styles from './styles/Footer.module.css';
interface FooterProps {
  heading: string;
  listElements: object[];
}

export const FooterText = (props: FooterProps) => {
  return (
    <div className={styles.sectionContainer}>
      <h3 className={styles.title}> {props.heading} </h3>
      {/* For now it will route all links to root */}
      {props.listElements.map((dotPoint: object) => {
        return <Link to='/'> {Object.keys(dotPoint)[0]} </Link>;
      })}
    </div>
  );
}