import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "What is the DoKC?",
    description: (
      <>
       <p>Kubernetes was originally designed to run stateless workloads. Today, it is increasingly used to run databases and other stateful workloads. Yet despite the success of these early adopters, there remain <b>few known good practices for running data on Kubernetes.</b></p>
       <p>After discussions with thousands of companies and individuals running data workloads on Kubernetes we’ve come to see that there is a need for a sharing of patterns and concerns about how to build and operate data-centric applications on Kubernetes. As a result, <b>the Data on Kubernetes Community (DoKC) was born.</b></p>
       <p> DoKC is an openly governed group of curious and experienced practitioners, taking inspiration from the CNCF and Apache Software Foundation.<b> Our aim is to assist in the emergence and development of techniques for the use of Kubernetes for data.</b></p> 
      </>
    ),
  },
  
];

function Feature({title, description }) {
  return (
    <div className={Text}>
      <div className="text--center">
        <h1 align = "center">{title}</h1>
        <p align = "center">{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
