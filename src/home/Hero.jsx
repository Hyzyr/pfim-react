import React from "react";

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
          <div className="bg__video">
            <video
              autoPlay
              muted
              loop
              poster="./videos/digital_futuristic_abstract-poster.png"
            >
              <source
                src="./videos/digital_futuristic_abstract.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
