import React from "react";
import '../Styles/MainSection.css'

import ArticleFeatured from "./ArticleFeatured";
import ArticleRecent from "./ArticleRecent";

import ArticleFeaturedDB from "../DataBases/ArticleFeaturedDataBase";
import ArticleRecentDB from "../DataBases/ArticleRecentDataBase";

const MainSection = () => {
    const MainSectionArticleFeatured = ArticleFeaturedDB.map( item => <ArticleFeatured articleTitle={item.title} imgUrl={item.image} imgAlt={item.alt} articleInfo={item.info} articleBody={item.body} /> )
    const MainSectionArticleRecent = ArticleRecentDB.map( item => <ArticleRecent articleTitle={item.title} articleBody={item.body} imgUrl={item.image} imgAlt={item.alt} articleInfo={item.info} />)

    return(
        <main role='main'>
           {MainSectionArticleFeatured}
           {MainSectionArticleRecent}
        </main>
    )
}

export default MainSection