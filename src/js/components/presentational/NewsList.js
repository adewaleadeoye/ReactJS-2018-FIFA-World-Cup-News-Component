import React from "react";
const imgStyle={
    'width':'100%'
}
const NewsList = ({image_thumb, story_title, story_url,handleNewsClick}) => (
    <div className="w3-padding w3-row w3-card w3-white news-margin-bottom news-pointer" onClick={() => handleNewsClick(story_url)}>
        <div className="w3-col s4 l4">
            <img src={image_thumb} className="news-img-side" alt={story_title} style={imgStyle}/>
        </div>
        <div className="w3-col s8 l8">
            <h3 className="news-h3">{story_title}</h3>
        </div>
    </div>
);
export default NewsList