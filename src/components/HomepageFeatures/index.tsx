import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Self-Supervised Learning',
    Svg: require('@site/static/img/self-supervised-learning.svg').default,
    description: (
      <>
        Advanced machine learning framework that requires minimal manual annotation,
        enabling automated object detection and tracking across diverse sensor types.
      </>
    ),
  },
  {
    title: 'Multi-Sensor Fusion',
    Svg: require('@site/static/img/multi-sensor-fusion.svg').default,
    description: (
      <>
        Integrates observations from multiple satellite and suborbital missions,
        creating a comprehensive "sensor web" for environmental monitoring.
      </>
    ),
  },
  {
    title: 'Environmental Applications',
    Svg: require('@site/static/img/environmental-applications.svg').default,
    description: (
      <>
        Proven applications in wildfire detection, harmful algal bloom monitoring,
        palm oil mapping, dust tracking, and inland water body analysis.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
