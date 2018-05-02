import React, { Component } from "react";
import ReactDOM from "react-dom";
import News from "../presentational/News";
import NewsDetail from "../presentational/NewsDetail";

class NewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        other_news: [],
        main_news:[],
        details:false,
        news_details:[]
    };
    this.handleNewsClick = this.handleNewsClick.bind(this);
  }

  fetchFirst() {
    var that = this;
      fetch('http://fcnaija.com/world-cup-2018/news').then(function (response) {
        if(response.ok) { 
          return response.json();
        }
      }).then(function (result) {
        //console.log(JSON.stringify(result));
        that.setState({ main_news: result.main_news});
        that.setState({ other_news: result.other_news});
      }).catch(function(error) {
        console.log('Problem with News fetch operation: ', error.message);
      });

  } 
  
  handleNewsClick(news_id) {
    var that = this;
      fetch('http://fcnaija.com/world-cup-2018/news/'+news_id).then(function (response) {
        if(response.ok) { 
          return response.json();
        }
      }).then(function (result) {
        that.setState({ news_detail: result.news_detail});
        that.setState({details: true})
      }).catch(function(error) {
        console.log('Problem with News fetch operation: ', error.message);
      });
  }

  handleNewsBackClick() {
    this.setState({details: false})
    this.fetchFirst();
  }
  
  componentDidMount() {
    this.fetchFirst();
  }
  
  // componentShouldUpdate() {
  //   this.fetchFirst();
  // }

  render() {
    let news = <div>Loading...</div>
    if ( !this.state.details ) {
          news =<News 
                    main_news={this.state.main_news} 
                    other_news={this.state.other_news} 
                    handleNewsClick={this.handleNewsClick} />
         
    }else{
        news=<div>
              <button onClick={() => this.handleNewsBackClick()} className="w3-btn">Back To News</button>
              <NewsDetail
                  story_title={this.state.news_detail.story_title}
                  story_content={this.state.news_detail.story_content}
                  published_at={this.state.news_detail.published_at}
                  name={this.state.news_detail.name} />
              <button onClick={() => this.handleNewsBackClick()} className="w3-btn">Back To News</button>
            </div>
    }
    return (     
            <div>
              {news}
            </div>
    );
  }
}
export default NewsContainer;
const wrapper = document.getElementById("news");
wrapper ? ReactDOM.render(<NewsContainer />, wrapper) : false;