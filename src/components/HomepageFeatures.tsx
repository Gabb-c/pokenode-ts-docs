/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Built-in Typings",
    image: "/img/red-pokeball.png",
    description: (
      <>
        Pokenode-ts contains up-to-date typings, based in the{" "}
        <a href="https://pokeapi.co/" target="_blank">
          PokéAPI Documentation
        </a>
      </>
    ),
  },
  {
    title: "Axios Cache",
    image: "/img/yellow-pokeball.png",
    description: (
      <>
        <a
          href="https://github.com/RasCarlito/axios-cache-adapter"
          target="_blank"
        >
          Axios auto-cache
        </a>{" "}
        feature can meke your app requests blazing fast!
      </>
    ),
  },
  {
    title: "Low Overhead Logs",
    image: "/img/blue-pokeball.png",
    description: (
      <>
        Manipulate your app logs with{" "}
        <a href="https://github.com/pinojs/pino" target="_blank">
          Pino.js
        </a>
        , a super fast, all natural json logger
      </>
    ),
  },
];

const Feature = ({ title, image, description }: FeatureItem): JSX.Element => {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const HomepageFeatures = (): JSX.Element => {
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
};

export default HomepageFeatures;
