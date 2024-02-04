import React from "react";
import classNames from "classnames";
import "./spin.scss";

const Spin = ({ spin }) => (
  <div className="spin">
    <div className="spin__field">
      <div className={classNames("spin__img", {
        spin__img_dep: spin === "dep",
        spin__img_arr: spin === "arr",
      })}></div>
    </div>
  </div>
);

export default Spin;