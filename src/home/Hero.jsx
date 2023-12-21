import React from "react";

const assetsFolder = process.env.PUBLIC_URL;
const posterLink =
  assetsFolder + "/videos/business_infographics_stock_market.png";
const videoLink =
  assetsFolder + "/videos/business_infographics_stock_market.mp4";

const Hero = () => {
  return (
    <>
      <div className="anchor anchor--lg" id="hero"></div>
      <section className="hero" id="hero">
        <div className="autoContainer autoContainer--fullWidth">
          <div className="hero__inner">
            <div className="hero__content">
              <div className="hero__group">
                <h2>
                  <strong> AI-Powered Investment </strong>
                  and
                  <strong> Deal-Making Solutions </strong>
                  <br />
                  For Every Decision
                </h2>
                <p>
                  Gain competitive advantage through the use of AI in research,
                  alpha generation, and risk management. With its global
                  coverage of asset classNamees, PFIM offers a comprehensive AI
                  platform for professional investors.
                </p>
              </div>
              {/* <h4>Request a Demo</h4> */}
              <a href="mailto:tm@zif.xzy" className="button button--text">
                <span> Request a Demo </span>
              </a>
            </div>
          </div>
        </div>
        <div className="bg">
          <div className="bg__image">
            <img src={posterLink} alt="poster" />
          </div>
          <div className="bg__video">
            <video width="100%" height="100%" autoPlay muted loop>
              <source src={videoLink} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
