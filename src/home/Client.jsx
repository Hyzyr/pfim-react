import React, { useEffect, useState } from "react";
const Client = () => {
  const [state, setState] = useState("active");
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
  const Tab = (i) => {
    const tabButton = document.querySelectorAll(".tabBtn");
    const tabConetent = document.querySelectorAll(".tabEvent");
    tabConetent.forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("id") === `tab-${i}`) {
        item.classList.add("active");
      }
    });
    tabButton.forEach((button) => {
      button.classList.remove("active");
      if (button.getAttribute("data-tab") === `#tab-${i}`) {
        button.classList.add("active");
      }
    });
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
                    className={`client__tab-button text--underline tabBtn ${
                      i === 0 ? "active" : ""
                    }`}
                    data-tab={`#tab-${i}`}
                    onClick={() => {
                      Tab(i);
                    }}
                  >
                    <strong>{item.title}</strong>
                    <span>{item.title_strong}</span>
                  </button>
                  <p
                    className={`client__tab-content tabEvent ${
                      i === 0 ? "active" : ""
                    }`}
                    id={`tab-${i}`}
                  >
                    {item.p}
                  </p>
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
