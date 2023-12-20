import React from "react";

const Footer = () => {
  return (
    <>
    <div className="anchor" id="footer"></div>
      <footer className="footer">
        <div className="autoContainer">
          <div className="footer__inner">
            <button className="button button--text text--underline">
              Contact Us
            </button>
            <div className="footer__group">
              <p>ZIF Limited All Rights Reserved. 2023.</p>
              <a href="https://maps.app.goo.gl/d1t5JZjW6q8cATjs7">
                128 City Road London, England, EC1V 2NX
              </a>
              <a href="mailto:info@zif.xyz">info@zif.xyz</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
