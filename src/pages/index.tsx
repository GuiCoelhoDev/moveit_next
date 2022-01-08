import ExperienceBar from "../components/ExperienceBar";
import Head from "next/head";
import Profile from "../components/Profile";
import styles from "../styles/home.module.scss";
import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Moveit | Home</title>
      </Head>

      <ExperienceBar />

      <section id="home">
        <div id="leftSide">
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div id="rightSide"></div>
      </section>
    </div>
  );
}
