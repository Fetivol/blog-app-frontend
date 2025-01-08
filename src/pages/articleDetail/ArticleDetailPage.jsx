import React from "react";
import MainLayout from "../../components/MainLayout";
import BreadCrumbs from "../../components/BreadCrumbs";

const breadCrumbsData = [
  { name: "Home", link: "/" },
  { name: "Blog", link: "/blog" },
  { name: "Article title", link: "/blog/1" },
];

const ArticleDetailPage = () => {
  return (
    <div>
      <MainLayout>
        <section className="container mx-automax-w-5xl flex flex-col px-5 py-5">
          <article className="flex-1">
            <BreadCrumbs data={breadCrumbsData} />
          </article>
        </section>
      </MainLayout>
    </div>
  );
};

export default ArticleDetailPage;
