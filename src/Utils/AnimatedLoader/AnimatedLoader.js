import React, { useEffect } from "react";

import anime from "animejs";
import MainLogo from "../../assets/logo-light.png";

const AnimatedLoader = () => {
  useEffect(() => {
    var pathEls = document.querySelectorAll("path");
    for (var i = 0; i < pathEls.length; i++) {
      var pathEl = pathEls[i];
      var offset = anime.setDashoffset(pathEl);
      pathEl.setAttribute("stroke-dashoffset", offset);
      anime({
        targets: pathEl,
        strokeDashoffset: [offset, 0],
        duration: anime.random(1000, 1500),
        delay: function (el, i) {
          return i * 250;
        },
        loop: true,
        direction: "alternate",
        easing: "easeInOutSine",
        autoplay: true,
      });
    }
  }, []);

  return (
    <div>
      <img src={MainLogo} alt="BATER" width="300px" />
    </div>
  );
};

export default AnimatedLoader;
