import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
      <br/>
          <br/><br/><br/><br/>
        <h1 className="hero__title">Set Up Local <br/> Development</h1>
        <h3 className="hero__subtitle">Environment</h3>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/Tutorials/intro"
          >
           Let's Begin
          </Link>
          <div>
          <Link className=" button button--link button--lg has-text-grey-dark"
            to="/docs/Tutorials/intro"
          >
           Watch Video
          </Link>
          </div>
         

        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          
      </div>
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
      <header></header>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
