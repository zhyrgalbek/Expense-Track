import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from "react-bootstrap";
import styles from './SpinnerRender.module.css';

function SpinnerRender() {
    return (
        <div className={styles.block}>
            <Spinner animation="border" size="hp" variant="light" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
}

export default SpinnerRender;