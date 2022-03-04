// import { useEffect, useState, useCallback, VFC } from "react";
// import Head from "next/head";
// import { Wrap, WrapItem, useDisclosure } from "@chakra-ui/react";
// import styled, { keyframes } from "styled-components";

// import { NewsCard } from "../../components/organisms/news/NewsCard";
// import { NewsDetailModal } from "../../components/organisms/news/NewsDetailModal";
// import { useSelectNews } from "../../hooks/useSelectNews";

// const News: VFC = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const { onSelectNews, selectedNews } = useSelectNews();

//   const onClickNews = useCallback(() => {}, []);

//   return (
//     <>
//       <Head>
//         <title>chef&apos;s news</title>
//       </Head>

//       <main className="news" style={{ backgroundColor: "#fff" }}>
//         <Wrap p={{ base: 4, md: 10 }} mt={5} justify="center" spacing="40px">
//           <WrapItem>
//             <NewsCard
//               id={1}
//               image="/live/live01.jpg"
//               title="test"
//               contents="test contents"
//               date="2022/2/27"
//               onClick={onClickNews}
//             />
//           </WrapItem>
//           <WrapItem>
//             <NewsCard
//               id={2}
//               image="/live/live01.jpg"
//               title="test"
//               contents="test contents"
//               date="2022/2/27"
//               onClick={onClickNews}
//             />
//           </WrapItem>
//           <WrapItem>
//             <NewsCard
//               id={3}
//               image="/live/live01.jpg"
//               title="test"
//               contents="test contents"
//               date="2022/2/27"
//               onClick={onClickNews}
//             />
//           </WrapItem>
//         </Wrap>
//         <NewsDetailModal isOpen={isOpen} onClose={onClose} news={selectedNews} />
//       </main>
//     </>
//   );
// };

// export default News;

// const Opacity = keyframes`
//   from{
//     opacity:0;
//     transform: translateY(3em);
//   }
//   to{
//     opacity:1;
//     transform: translateY(0);
//   }
// `;
// const FadeIn = styled.div`
//   animation: ${Opacity} 2000ms ease-in-out;
// `;
