// import React from 'react';
// import { NextSeo, ArticleJsonLd } from 'next-seo';

// type Props = {
//   title: string;
//   summary: string;
//   publishedAt: string;
//   url: string;
//   image: string;
//   slug: string;
// };

// type Featured = {
//   url: string;
//   alt: string;
// };

// const BlogSeo = ({ title, summary, publishedAt, url, image }: Props) => {
//   const date = new Date(publishedAt).toISOString();
//   const featuredImage: Featured = {
//     url: `https://gabrielhicks.dev${image}`, // 2. change this
//     alt: title
//   };

//   const stringImages: ReadonlyArray<string> = [
//     `https://gabrielhicks.dev${image}, ${title}` // 3. change this
//   ];

//   return (
//     <>
//       <NextSeo
//         title={`${title} – William Wesley`}
//         description={summary}
//         canonical={url}
//         openGraph={{
//           type: 'article',
//           article: {
//             publishedTime: date
//           },
//           url,
//           title,
//           description: summary,
//           images: [featuredImage]
//         }}
//       />
//       <ArticleJsonLd
//         authorName="William Wesley"
//         dateModified={date}
//         datePublished={date}
//         description={summary}
//         images={stringImages}
//         publisherLogo="/public/favicons/android-chrome-192x192.png"
//         publisherName="William Wesley"
//         title={title}
//         url={url}
//       />
//     </>
//   );
// };

// export default BlogSeo;
