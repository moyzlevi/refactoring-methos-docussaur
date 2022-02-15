import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Wikipedia',
    description: (
      <>
        Refatoração é o processo de modificar um sistema de software para melhorar a estrutura interna do código sem alterar seu comportamento externo. O uso desta técnica aprimora a concepção de um software e evita a deterioração tão comum durante o ciclo de vida de um código.
      </>
    ),
  },
  {
    title: 'Geekhunter',
    description: (
      <>
        Surgida na década de 80, refatoração é um processo de melhoria de código sem, necessariamente, envolver a criação de novas features, para transformar um código mal feito ou bagunçado em código limpo e com design simples, melhorando sua legibilidade e eficiência.
      </>
    ),
  },
];

function Feature({ title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
