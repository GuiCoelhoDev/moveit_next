import styles from "./styles.module.scss";
export function Countdown() {
  return (
    <div className={styles.container}>
      <div>
        <span>2</span>
        <span>5</span>
      </div>
      <span>:</span>
      <div>
        <span>0</span>
        <span>0</span>
      </div>
    </div>
  );
}

export default Countdown;
