import React from "react";
import gsap from "gsap";

/* IMAGES */
import FirstBefore from "../../../img/11before.png";
import FirstAfter from "../../../img/11after.png";
import SecondBefore from "../../../img/10before.jpeg";
import SecondAfter from "../../../img/10after.jpeg";

import "./Content.scss";

gsap.fromTo(
  ".initial",
  { opacity: 0, x: -20 },
  { opacity: 1, x: 0, duration: 2 }
);

function Content() {
  return (
    <section className="content">
      {/* TEXT INTRO */}
      <div className="text-intro-container">
        <p className="text-intro">
          FINE
          <br />
          ART
          <br />
          RESTORATION
        </p>
      </div>
      {/* FIRST SECTION */}
      <section className="first-section">
        <div className="intro">
          <p className="initial">
            <span className="first-letter">O</span>ur philosophy is to alter the
            artwork as little as possible with respect to the original intention
            of the artist.
            <br /> <br />
            To that end, we examine each work of art closely and tailor our
            methodologies to meet both the needs of the painting and client.
            <br /> <br />
            We use only the finest materials and techniques which are found in
            major museums around the world.
            <br />
            <br /> In accordance with our belief that restoration should be
            noninvasive, all of the work we do is fully reversible and in
            accordance with the AIC Code of Ethics
          </p>
        </div>
      </section>
      {/* sSECOND SECTION */}
      <section className="second-section">
        <p className="second-section-text">
          <span className="first-letter">H</span>ere you can take a look on few
          projects we've been working on.
          <br />
          <br />
        </p>
        <p className="second-section-text">Copy of "L'Aurora" by Guido Reni</p>
        <div className="second-images-box">
          <img src={FirstBefore} className="before" alt="before-restoration" />
          <img src={FirstAfter} className="after" alt="after-restoration" />
        </div>
        <br />
        <br />
        <p className="second-section-text">Copy of "L'Aurora" by Guido Reni</p>
        <div className="second-images-box">
          <img src={SecondBefore} className="before" alt="before-restoration" />
          <img src={SecondAfter} className="after" alt="after-restoration" />
        </div>
        <br />
        <br />
        <p className="second-section-text">
          We put our passion and our expertise at your service, our mission is
          to preserve and make these Masterpieces last as long as possible.
        </p>
      </section>
    </section>
  );
}

export default Content;
