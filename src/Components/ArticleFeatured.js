import React from 'react'
import '../Styles/ArticleFeatured.css'

const ArticleFeatured = (props) => {
    return(
        <article className='article-featured'>
            <h2 className='article-title'>{props.articleTitle}</h2>
            <img src={props.imgUrl} alt={props.imgAlt} className='article-image' />
            <p className='article-info'>{props.articleInfo}</p>
            <p className='article-body'>{props.articleBody}</p>
            <a href='' className='article-read-more'>CONTINUE READING</a>
        </article>
    )
}

export default ArticleFeatured