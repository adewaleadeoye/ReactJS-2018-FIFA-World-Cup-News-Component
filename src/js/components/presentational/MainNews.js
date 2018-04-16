import React from "react";
const imgStyle={
    'width':'100%'
}
const storyTitle = {
    margin: '-6px 5px',
    lineHeight: '20px'
}
const MainNews = ({image_thumb, story_title,name,published_at,handleNewsClick,story_url}) => (
    <div className="news-pointer" onClick={() => handleNewsClick(story_url)}>
        <div><img src={image_thumb} className="news-img-main"  alt={story_title} style={imgStyle} /></div>
        <p className="news-sub-text">{name}</p>
        <h3 className="news-h3" style={storyTitle}>{story_title}</h3>
        <p className="news-sub-text">{published_at}</p>
    </div>

);
export default MainNews