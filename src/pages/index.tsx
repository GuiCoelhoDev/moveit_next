import ExperienceBar from "../components/ExperienceBar";
import Head from "next/head";
import Profile from "../components/Profile";
import styles from "../styles/home.module.scss";
import CompletedChallenges from "../components/CompletedChallenges";
import ChallengeBox from "../components/ChallengeBox";
import { GetServerSideProps } from "next";
import Countdown from "../components/Countdown";
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";

export default function Home(props) {
  console.log("Props:", props);

  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesComplted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Moveit | Home</title>
        </Head>

        <ExperienceBar />
        <CountdownProvider>
          <section id="content">
            <div id="leftSide">
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div id="rightSide">
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } =
    ctx.req.cookies;

  return {
    props: {
      level: Number(level) || null,
      currentExperience: Number(currentExperience) || null,
      challengesCompleted: Number(challengesCompleted) || null,
    },
  };
};

// export async function getServerSideProps : GetServerSideProps(ctx) {

//   const user = {
//     level: 1,
//     currentExperience: 45,
//     challengesCompleted: 2,
//   };
// const {level,currentExperience, challengesComplted} = ctx.req.cookies;
//   console.log(user);
//   return {
//     props: user,
//   };
// }
