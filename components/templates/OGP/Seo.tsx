import { DefaultSeo } from "next-seo";

export const Seo = () => {
  return (
    <DefaultSeo
      defaultTitle="chef's オフィシャルサイト"
      canonical="https://www.chefs-band.com/"
      description="chef's(シェフズ)バンドのオフィシャルサイト. ニュース・ライブ動画など最新情報を掲載. 「おいしいおんがく」をテーマに, 東京都内を中心に活動する4ピースバンド."
      twitter={{
        handle: "@chefs_band",
        site: "@chefs_band",
        cardType: "summary",
      }}
      openGraph={{
        locale: "ja_JP",
        type: "website",
        title: "chef's オフィシャルサイト",
        description:
          "chef's(シェフズ)バンドのオフィシャルサイト. ニュース・ライブ動画など最新情報を掲載. 「おいしいおんがく」をテーマに, 東京都内を中心に活動する4ピースバンド.",
        site_name: "chef's オフィシャルサイト",
        url: "https://www.chefs-band.com/",
        images: [
          {
            url: "/logo/logo06.JPG",
            width: 500,
            height: 500,
            alt: "logo",
          },
        ],
      }}
    />
  );
};
