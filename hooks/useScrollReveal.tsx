/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useRef, useEffect } from "react";
import scrollReveal from "scrollreveal";

interface ScrollRevealContainerProps {
  move?: string;
}

const ScrollRevealContainer: FC<ScrollRevealContainerProps> = ({ children, move }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        easing: "ease-in-out",
        duration: 2000,
        reset: false,
        opacity: 0,
        origin:
          move === "left"
            ? "left"
            : move === "right"
            ? "right"
            : move === "top"
            ? "top"
            : "bottom",
        distance: "3em",
      });
  }, [sectionRef]);

  return <section ref={sectionRef}>{children}</section>;
};
export default ScrollRevealContainer;
