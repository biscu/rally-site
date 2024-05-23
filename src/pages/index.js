import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import video from "@site/static/video/hero-video.mp4";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.containerBanner}>
        <Heading as="h1" className={styles.heroTitle}>
          Rally
        </Heading>
        <p className={styles.heroSubTitle}>Easypark Group Design System</p>
      </div>
      {/* <video className={styles.heroVideo} autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video> */}
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
