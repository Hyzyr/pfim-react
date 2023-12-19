import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Offering = () => {
  const data = [
    {
      title_strong: "Matchmaking -Engine:",
      title: "Perfect Matches Await",
      p: "Seamlessly connects investors with tailored opportunities for optimal financial matches.",
      shape: "./images/shapes/offering-shape.png",
    },
    {
      title_strong: "AI-Powered Due Diligence:",
      title: "Elevate Your Investments.",
      p: "Swiftly analyze extensive datasets, gain actionable insights, and ensure comprehensive due diligence effortlessly.",
      color: "blue",
    },
    {
      title_strong: "Intelligent Investor Assistant:",
      title: "For better Decisions",
      p: " Ask questions, gain insights, and receive personalized guidance, enhancing your decision-making with real-time, AI intelligent support tailored to your unique investment needs.",
      color: "blueDark",
    },
    {
      title_strong: "Legal Documents Automated:",
      title: "Your Tailored Solutions",
      p: "Streamline your legal processes with our automated service, ensuring efficiency, accuracy, and a hassle-free approach to document management in the legal realm.",
      color: "violet",
    },
    {
      title_strong: "Negotiation Hub:",
      title: "Streamlined Investor Communication",
      p: "Our dynamic platform ensures smooth and efficient negotiations, fostering clear and effective communication between investors, promoting transparency, and optimizing deal- making processes.",
      color: "violetLight",
    },
  ];
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
    <div className="anchor" id="offering"></div>
      <section className="offering">
        <div className="autoContainer">
          <div className="offering__inner">
            <div className="offering__header">
              <h3 className="text--underline">
                <strong>AI-Powered,</strong>
                <br />
                Tailored by You.
              </h3>
              <div className="offering__box">
                <h5 className="_sm">
                  <strong>GLOBAL</strong>
                  <br />
                  <strong>COVERAGE</strong>
                </h5>
                <div className="offering__box-title">26</div>
                <h5 className="_sm">
                  <strong>languages</strong>
                </h5>
              </div>
            </div>
            <Slider className="offering__row" {...settings}>
              {data.map((item, i) => (
                <div
                  className={`offering__item ${
                    item.color ? `offering__item--${item.color}` : ""
                  }`}
                  key={i}
                >
                  <div className="offering__text">
                    <strong>{item.title_strong}</strong>
                    <span>{item.title}</span>
                  </div>
                  <p>{item.p}</p>
                  {item.shape ? (
                    <div className="shape">
                      <img src={`${item.shape}`} alt="shape" />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="bg">
          <div className="bg__image">
            <img src="./images/offering.png" alt="bg" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Offering;
