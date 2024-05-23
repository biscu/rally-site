import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Tokens",
    Svg: require("@site/static/img/home-1.svg").default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
    link: "/docs/tokens/",
  },
  {
    title: "Components",
    Svg: require("@site/static/img/home-2.svg").default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
    link: "/docs/components/",
  },
  {
    title: "Patterns",
    Svg: require("@site/static/img/home-3.svg").default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
    link: "/docs/patterns/",
  },
];

function Feature({ Svg, title, description, link }) {
  return (
    <a href={link}>
      <div className={clsx("col", styles.feautureCard)}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <h3 as="h3" className={clsx(styles.feautureTitle)}>
            {title}
          </h3>
          <p className={clsx(styles.feautureParagraph)}>{description}</p>
        </div>
      </div>
    </a>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.row}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
