import ExperienceBar from "../components/ExperienceBar";
import Head from "next/head";
import Profile from "../components/Profile";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Moveit | Home</title>
      </Head>

      <ExperienceBar />

      <section id="home">
        <div>
          <Profile />
        </div>
        <div></div>
      </section>
    </div>
  );
}
