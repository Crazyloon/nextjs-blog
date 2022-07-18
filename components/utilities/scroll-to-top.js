import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, useRef } from "react";
import useInterval from "../../hooks/useInterval";
import { gsap } from "gsap";

const ScrollToTop = () => {
  const [posY, setposY] = useState(0);
  const [scrollerVisible, setScrollerVisible] = useState(false);
  const scroller = useRef();
  const scrollerTimeline = useRef();
  const bounceTimeline = useRef();

  useInterval(() => {
    const y = window.pageYOffset;
    if (y > window.innerHeight) {
      setposY(y);
    }
    setScrollerVisible(y > window.innerHeight);
  }, 500);

  useEffect(() => {
    scrollerTimeline.current = new gsap.timeline();
    bounceTimeline.current = new gsap.timeline({
      repeat: -1,
      yoyo: true,
      paused: true,
    });

    if (scrollerVisible) {
      scrollerTimeline.current.fromTo(
        scroller.current,
        { right: 20, bottom: 0, scale: 0 },
        { right: 20, bottom: 20, scale: 1, duration: 0.3 }
      );
      bounceTimeline.current.to(scroller.current, {
        y: -20,
        duration: 0.5,
        ease: "power1.in",
      });
    } else {
      scrollerTimeline.current.fromTo(
        scroller.current,
        { right: 20, bottom: 20, scale: 1 },
        { right: 20, bottom: 0, scale: 0, duration: 0.3 }
      );
    }
  }, [scrollerVisible]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const startBounceAnimation = () => {
    if (!bounceTimeline.current.isActive()) {
      bounceTimeline.current.restart();
      bounceTimeline.current.repeat(-1);
    }
  };

  const stopBounceAnimation = () => {
    var repeats = Math.floor(
      bounceTimeline.current.totalTime() / bounceTimeline.current.duration()
    );
    if (repeats % 2 === 0) {
      //make sure we end on an odd yoyo cycle to stop at the beginning
      repeats += 3;
    }
    bounceTimeline.current.repeat(repeats);
  };

  return (
    <div
      ref={scroller}
      onClick={scrollToTop}
      onMouseEnter={startBounceAnimation}
      onMouseLeave={stopBounceAnimation}
      className="transition-opacity rounded-sm fixed inline-block opacity-70 hover:opacity-100 cursor-pointer"
    >
      {scrollerVisible && <FontAwesomeIcon icon={faCircleArrowUp} size="2x" />}
    </div>
  );
};

export default ScrollToTop;
