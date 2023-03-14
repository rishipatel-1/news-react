import React, { Component } from 'react'
import NewsItems from './NewsItems';
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps = {
    category:"technology"
  }
 
static propTypes={
  category:PropTypes.string
}

  constructor() {
    super();

    this.state = {
      articles: [],
      page: 1

    }
  }


  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=be2241793c6c49529c5b1da7e9232f02&page=1`;
    let data = await fetch(url)
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles
    })
  }
  handleNext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=be2241793c6c49529c5b1da7e9232f02&page=${this.state.page + 1}`;
    let data = await fetch(url)
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      page: this.page + 1,


    })

  }
  handlePrevious = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=be2241793c6c49529c5b1da7e9232f02&page=${this.state.page-1}`;
    let data = await fetch(url)
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      page: this.page-1,


    })

  }

  render() {
    return (
      <>
        <div className='container my-3'>
          <h2 className='py-3'>News Headlines</h2>
          <div className='row'>
            {this.state.articles.map((element) => {
              return <div className='col-md-4 py-2' key={element.url}>
                <NewsItems title={element.title ? element.title.slice(0, 40) : ""}
                  description={element.description ? element.description.slice(0, 88) : ""}
                  imageUrl={element.urlToImage} url={element.url}
                />
              </div>
            })}


          </div>
          <div className='container d-flex justify-content-between mt-4'>
            <button disabled={this.state.page <= 1} onClick={this.handlePrevious} className='btn btn-dark'>&#8249; Previous</button>
            <button className='btn btn-dark' onClick={this.handleNext}> Next &#8250;</button>

          </div>
        </div>
      </>
    )
  }
}

export default News;