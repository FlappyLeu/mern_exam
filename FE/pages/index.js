import BookList from "./components/table";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <BookList />
    </div>
  );
}
