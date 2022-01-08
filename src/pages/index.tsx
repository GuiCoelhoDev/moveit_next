import ExperienceBar from "../components/ExperienceBar";
import Head from "next/head";
import { title } from "process";
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Moveit</title>
      </Head>
      <ExperienceBar />
    </div>
  );
}
