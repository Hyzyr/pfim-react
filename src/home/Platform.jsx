import React from "react";

const Platform = () => {
  return (
    <>
    <div className="anchor" id="platform"></div>
      <section className="info">
        <div className="autoContainer">
          <div className="info__inner">
            <h3 className="text--underline">
              <strong>Performance. </strong>Effectiveness.
              <strong> Excellence. </strong>
            </h3>
            <p>
              We revolutionize investment decisions with AI-driven matchmaking,
              ensuring strategic advantages and unparalleled insights. Its
              no-code platform simplifies global decision-making, providing a
              transformative edge in finance.
            </p>
          </div>
        </div>
      </section>
      <section className="platform">
        <div className="autoContainer autoContainer--fullWidth">
          <div className="platform__inner">
            <div className="platform__image">
              <img src="./images/platform.png" alt="image" />
            </div>
            <div className="platform__content">
              <h3 className="text--underline">
                <strong>Precision Terminal.</strong>
                <br />
                Your One-Stop Solution
              </h3>
              <p>
                Experience seamless control and comprehensive insights with
                Precision Terminal. Your ultimate one-stop solution for
                precision-driven investment management, offering unparalleled
                efficiency and intelligence in a single, user-friendly platform.
              </p>
              <div className="platform__box">
                <h3>
                  Over <strong>$70 Billion</strong>
                </h3>
                <p>Connected financial parameters</p>
              </div>
            </div>
            <div className="shape">
              <img src="./images/shapes/platform-shape.png" alt="shape" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Platform;
