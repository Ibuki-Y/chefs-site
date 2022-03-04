/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useRef, useEffect, ReactNode } from "react";
import scrollReveal from "scrollreveal";

interface ScrollRevealContainerProps {
  children: ReactNode;
  move?: string;
  duration?: number;
  delay?: number;
}

const ScrollRevealContainer: FC<ScrollRevealContainerProps> = (props) => {
  const { children, move, duration = 2000, delay = 0 } = props;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        easing: "ease-in-out",
        duration: duration,
        delay: delay,
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
