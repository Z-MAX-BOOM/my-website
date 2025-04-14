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
    title: 'Shaaaaark',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        叫喊着「海底真是无聊透顶」而来到陆地上的亚特兰蒂斯的后裔。
      </>
    ),
  },
  {
    title: '鲨鱼的博客',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        欢迎大家访问我的博客，这里是我分享技术知识和生活的地方，我会坚持定期更新。我的文章都在页面上方<code>doc</code>中。
      </>
    ),
  },
  {
    title: '自由交流',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        我是一个正在学习的开发者，希望能给大家带来帮助。如果你有什么问题或者建议，欢迎随时联系我。
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
