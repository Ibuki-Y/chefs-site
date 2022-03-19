import { VFC } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Scrollbar, Autoplay, Navigation } from "swiper";
import { Box } from "@chakra-ui/react";

import { useLoading } from "../../../hooks/useLoading";
const ScrollRevealContainer = dynamic(import("../../../hooks/useScrollFadeIn"), {
  ssr: false,
});

SwiperCore.use([Scrollbar, Autoplay, Navigation]);
const images = [
  "/live/live03.jpeg",
  "/live/live04.jpeg",
  "/live/live06.jpg",
  "/artist/artist02.jpg",
];

export const HomeSwiper: VFC = () => {
  const { setLoading } = useLoading();
  const loadedImage = () => {
    setLoading(true);
  };

  return (
    <ScrollRevealContainer delay={300}>
      <Box mx={{ base: 2, md: 8 }} mt={{ base: 10, md: 4 }}>
        <Swiper
          id="swiper-color"
          slidesPerView={1}
          modules={[Scrollbar]}
          scrollbar={{
            hide: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation
        >
          {images.map((src: string, index: number) => {
            return (
              <SwiperSlide key={`${index}`}>
                <Image
                  width={320}
                  height={180}
                  src={src}
                  layout="responsive"
                  alt="chef's"
                  className="slide-image"
                  onLoadingComplete={loadedImage}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </ScrollRevealContainer>
  );
};
