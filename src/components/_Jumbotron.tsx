import { Card } from "react-bootstrap";
import styles from "../scss/Jumbotron.module.scss";

export default function _Jumbotron({ title }) {
  return (
    <Card className={styles.card}>
      <Card.Body>
        <Card.Text className={styles.card_text}>{title}</Card.Text>
      </Card.Body>
    </Card>
  );
}
