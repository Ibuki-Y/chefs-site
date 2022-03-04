import { VFC, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Image, WrapItem } from "@chakra-ui/react";
import { Grow } from "@mui/material";

export const GoodsCard: VFC = () => {
  const { ref, inView } = useInView({
    rootMargin: "-20px",
    triggerOnce: true,
  });
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
    return () => {
      setChecked(false);
    };
  }, []);

  return (
    <WrapItem ref={ref}>
      {inView && (
        <Grow in={checked} {...(checked ? { timeout: 3000 } : {})}>
          <Image src="/goods/goods04.JPG" alt="" shadow="lg" rounded="md" />
        </Grow>
      )}
    </WrapItem>
  );
};
