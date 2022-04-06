import type { NextPage } from "next";
import Head from "next/head";
import { Stack } from "@chakra-ui/react";

import { FadeInTitle } from "../../components/atoms/FadeInTitle";
import { NewsCard } from "../../components/organisms/news/NewsCard";

const News: NextPage = () => {
  return (
    <>
      <Head>
        <title>chef&apos;s オフィシャルサイト | news</title>
      </Head>

      <main className="news">
        <FadeInTitle title="News" />

        <Stack mt={12} alignItems="center">
          <NewsCard
            id={1}
            image="/live/live01.jpg"
            title="chef'sホームページ開設!!"
            date="2022/3/1"
            contents={`この度, chef'sのホームページを開設いたしました!!\n今後ともchef'sをよろしくお願い致します!`}
          />

          <NewsCard
            id={2}
            image="/news/news07.JPG"
            title="4月のお知らせ <1>"
            date="2022/4/1"
            contents=""
          />

          <NewsCard
            id={3}
            image="/news/news08.JPG"
            title="4月のお知らせ <2>"
            date="2022/4/1"
            contents=""
          />

          <NewsCard
            id={4}
            image="/news/news06.JPG"
            title="東京晩餐会"
            date="2022/4/3"
            contents=""
          />
        </Stack>
      </main>
    </>
  );
};

export default News;
