import stylesGuidesNo from "./stylesGuidesNo.module.css";

const GuidesNo = () => {
  return (
    <>
      <div className={stylesGuidesNo.containerGuides}>
        <div>
          <img src="/img/button-light.png" />
        </div>
        <div className={stylesGuidesNo.guideError}>
          <span>Dont do this (custom jsx)</span>
        </div>
      </div>
    </>
  );
};

export default GuidesNo;
