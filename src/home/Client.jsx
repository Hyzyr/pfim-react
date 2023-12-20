import React, { useEffect, useState } from "react";

const data = [
  {
    title: "Investment",
    title_strong: "Banks",
    p: "Integrating AI-powered insights, PFIM optimizes efficiency, providing Investment Banks a strategic edge in the dynamic financial landscape. Precision, excellence, and success define the PFIM advantage.",
  },
  {
    title: "Asset",
    title_strong: "Managers",
    p: "Integrating AI-powered insights, PFIM optimizes efficiency, providing Investment Banks a strategic edge in the dynamic financial landscape. Precision, excellence, and success define the PFIM advantage.",
  },
  {
    title: "Wealth",
    title_strong: "Managers",
    p: "Integrating AI-powered insights, PFIM optimizes efficiency, providing Investment Banks a strategic edge in the dynamic financial landscape. Precision, excellence, and success define the PFIM advantage.",
  },
  {
    title: "Hedge",
    title_strong: "Funds",
    p: "Integrating AI-powered insights, PFIM optimizes efficiency, providing Investment Banks a strategic edge in the dynamic financial landscape. Precision, excellence, and success define the PFIM advantage.",
  },
];

const Client = () => {
  const [tab, setTab] = useState(data[0].title);
  const getBTNClassName = (data) => {
    let activeClass = tab === data.title ? "active" : "";
    return `client__tab-button text--underline ${activeClass}`;
  };
  const getContentClassName = (data) => {
    let activeClass = tab === data.title ? "active" : "";
    return `client__tab-content  ${activeClass}`;
  };
  return (
    <>
      <div className="anchor" id="client"></div>
      <section className="client">
        <div className="autoContainer autoContainer--fullWidth">
          <div className="client__inner">
            <div className="client__image">
              <img src="./images/client.png" alt="images" />
            </div>
            <div className="client__content">
              {data.map((item, i) => (
                <div className="client__tab" key={i}>
                  <button
                    className={getBTNClassName(item)}
                    onClick={() => setTab(item.title)}
                  >
                    <strong>{item.title}</strong>{" "}
                    <span>{item.title_strong}</span>
                  </button>
                  <p className={getContentClassName(item)}>{item.p}</p>
                </div>
              ))}
            </div>
            <div className="client__box">
              <a href="mailto:tm@zif.xzy" className="button button--primary">
                <span>Request a Demo</span>
              </a>
              <div className="shape">
                <img src="./images/shapes/button-shape.svg" alt="shape" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Client;
