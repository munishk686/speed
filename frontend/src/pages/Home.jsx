import { Link } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.appContainer}>
      <div className={styles.main}>
        <div className={styles.wrapper}>
        <div className={styles.mainContent}>
          <h1>Welcome to Speed!</h1>
          <p>The best place to find true software engineering claims!</p>
          <div className={styles.mainButtons}>
            <Link to="/login" className={styles.btn}>
              Login
            </Link>
            <Link to="/register" className={styles.btn}>
              Create an Account
            </Link>
          </div>
          </div>
        </div>
      </div>

    </div>
  );
}
