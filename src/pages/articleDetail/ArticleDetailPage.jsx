import React from "react";
import MainLayout from "../../components/MainLayout";
import BreadCrumbs from "../../components/BreadCrumbs";
import { images } from "../../constants";
import { Link } from "react-router";
import SuggestedPosts from "./container/SuggestedPosts";
import CommentsContainer from "../../components/comments/CommentsContainer";

const breadCrumbsData = [
  { name: "Home", link: "/" },
  { name: "Blog", link: "/blog" },
  { name: "Article title", link: "/blog/1" },
];

const postsData = [
  {
    _id: "1",
    image: images.Post1Image,
    title: "Help children get better education",
    createdAt: "2025-01-08T18:28:09.607+0000",
  },
  {
    _id: "2",
    image: images.Post1Image,
    title: "Help children get better education",
    createdAt: "2025-01-08T18:28:09.607+0000",
  },
  {
    _id: "3",
    image: images.Post1Image,
    title: "Help children get better education",
    createdAt: "2025-01-08T18:28:09.607+0000",
  },
  {
    _id: "4",
    image: images.Post1Image,
    title: "Help children get better education",
    createdAt: "2025-01-08T18:28:09.607+0000",
  },
];

const tagsData = [
  "Medical",
  "Lifestyle",
  "Learn",
  "Healthy",
  "Food",
  "Diet",
  "Education",
];

const ArticleDetailPage = () => {
  return (
    <div>
      <MainLayout>
        <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
          <article className="flex-1">
            <BreadCrumbs data={breadCrumbsData} />
            <img
              src={images.Post1Image}
              alt="laptop"
              className="rounded-xl w-full"
            />
            <Link
              to="/blog?category=selectedCategory"
              className="text-primary text-sm font-roboto inline-block mt-4 md:text-base"
            >
              EDUCATION
            </Link>
            <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
              Help children get better education
            </h1>
            <div className="mt-4 text-dark-soft">
              <p className="leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                natus minima molestiae numquam, aliquid saepe veritatis ullam
                architecto repellendus ipsum id consectetur. Aliquam tempora
                veniam eos deleniti. Voluptatibus, dolores. Eveniet deserunt,
                fugit maiores fugiat quod odit eos aliquid consequatur accusamus
                nihil quisquam ducimus assumenda velit ea. Provident maiores
                voluptates molestiae.
              </p>
            </div>
            <CommentsContainer className="mt-10" />
          </article>
          <SuggestedPosts
            header="Latest Article"
            posts={postsData}
            tags={tagsData}
            className="mt-8 lg:mt-0 lg:max-w-xs"
          />
        </section>
      </MainLayout>
    </div>
  );
};

export default ArticleDetailPage;
