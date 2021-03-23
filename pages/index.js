import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <Projects />
    </>
  );
}
