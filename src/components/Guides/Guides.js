import stylesGuides from "./stylesGuides.module.css";

const Guides = () => {
  return (
    <>
      <div className={stylesGuides.containerGuides}>
        <div>
          <img src="/img/button-light.png" />
        </div>
        <div className={stylesGuides.guideSuccess}>
          <span>Do this (custom jsx)</span>
        </div>
      </div>
    </>
  );
};

export default Guides;
