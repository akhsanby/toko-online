import { Card } from "react-bootstrap";
import styles from "../scss/Jumbotron.module.scss";

export default function _Jumbotron() {
  return (
    <Card>
      <Card.Body>
        <Card.Text className="text-dark fw-bold fs-1">
          Product Category
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
