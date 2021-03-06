import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

const HomepageHeader = (): JSX.Element => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
};

const Home = (): JSX.Element => {
  return (
    <Layout
      title={""}
      description="A lightweight Node.js wrapper for the PokéAPI with built-in types."
    >
      <HomepageHeader />
      <main>
        <Head>
          <meta property="og:image" content="cover.jpg" />
        </Head>
        <HomepageFeatures />
      </main>
    </Layout>
  );
};

export default Home;
