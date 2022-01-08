import styles from "./styles.module.scss";
export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://github.com/GuiCoelhoDev.png"
        alt="Guilherme Minervino"
      />
      <div>
        <strong>Guilherme Coelho</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level 1
        </p>
      </div>
    </div>
  );
}

export default Profile;
