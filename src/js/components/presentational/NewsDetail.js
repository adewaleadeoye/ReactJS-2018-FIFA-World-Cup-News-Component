import React from "react";
const imgStyle={
    'width':'100%'
}
function createMarkup(html) {
    return {__html: html};
}
const NewsDetail = ({story_title, story_content, published_at, name}) => (
    <div className="w3-padding w3-row w3-card w3-white news-margin-bottom">
        <div className="w3-col l12 s12">
            <h3 className="news-h3">{story_title}</h3>
            <div className="news-body" dangerouslySetInnerHTML={createMarkup(story_content)}></div>
            <p className="news-sub-text">{published_at} Author: {name}</p>
        </div>
    </div>
);
export default NewsDetail