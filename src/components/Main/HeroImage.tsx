import { Col } from "react-bootstrap";
import styles from "./Hero.module.css";

export function HeroImage() {
  return (
    <Col xs={{ span: 12 }} lg={{ span: 3 }} className="w-25">
      <div className={styles.placeholder}></div>
    </Col>
  );
}
