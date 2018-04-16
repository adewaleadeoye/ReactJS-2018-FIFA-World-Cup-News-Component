import React from "react";
import NewsList from "./NewsList";
import MainNews from "./MainNews";
const imgStyle={
    'width':'100%'
}
const News = ({main_news, other_news, handleNewsClick}) => (
    <div className="w3-row">
        <div className="w3-col l6 m6 w3-card w3-white">
        {main_news.map(main =>
            <MainNews 
                key={main.id} 
                image_thumb={main.image_thumb} 
                story_title={main.story_title} 
                name={main.name} 
                published_at={main.published_at}
                story_url={main.story_url}
                handleNewsClick={handleNewsClick}/>
        )}
        </div>
        <div className="side-news-container w3-col l6 m6">
        {other_news.map(news =>
            <NewsList 
            key={news.id} 
            image_thumb={news.image_thumb} 
            story_title={news.story_title}
            story_url={news.story_url}
            handleNewsClick={handleNewsClick} />

        )}
        </div>
    </div>

);
export default News