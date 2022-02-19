import React from 'react'
import '../Styles/ArticleRecent.css'

const ArticleRecent = (props) => {
    return(
        <article className='article-recent'>
            <div className='article-recent-main'>
                <h2 className='article-title'>{props.articleTitle}</h2>
                <p className='article-body'>{props.articleBody}</p>
                <a href='' className='article-read-more'>CONTINUE READING</a>
            </div>
            <div className='article-recent-secondary'>
                <img src={props.imgUrl} alt={props.imgAlt} className='article-image' />
                <p className='article-info'>{props.articleInfo}</p>
            </div>
        </article>
    )
}

export default ArticleRecent