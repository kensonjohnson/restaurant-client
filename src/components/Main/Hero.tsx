import { Row } from "react-bootstrap";
import { HeroImage } from "./HeroImage";
// import styles from "./Hero.module.css";

export function Hero() {
  return (
    <Row as="section" className="px-0" style={{ height: 600 }}>
      <HeroImage />
      <HeroImage />
      <HeroImage />
      <HeroImage />
    </Row>
  );
}
