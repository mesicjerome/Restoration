import React from "react";
import Saturne from "../../../img/saturne.jpg";

import "./Content.css";

function Content() {
  return (
    <section className="content">
      <div className="saturne-box">
        <img src={Saturne} className="saturne" alt="saturne" />
      </div>
    </section>
  );
}

export default Content;
