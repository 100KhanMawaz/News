import React, {useState,useEffect } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
// import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {
    const [articles, setarticles] = useState([])
    const [page, setpage] = useState(1)
    const [totalResults, settotalResults] = useState(0)
   const Capitalize=(str)=>{
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const updateNews= async()=>{
        let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        console.log(`page=${page}`);
        setarticles(parsedData.articles)
        settotalResults(parsedData.totalResults)
    }
    useEffect(() => {
        document.title= `${Capitalize(props.category)}-Khabar`;
      updateNews();
    }, [])
       // Component did mount ke jagah isko use kar rhe hai
        // let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&pagesize=${props.pageSize}`;
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
        // setState({articles: parsedDataarticles, totalResults: parsedDatatotalResults})
    
   const previous= async ()=>{
        // console.log("Previous Button is clicked");
        // let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&page=${page-1}&pagesize=${props.pageSize}`;
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
         setpage(page-1);
         updateNews();
    }
   const next= async ()=>{
        
        // console.log("next Button is clicked");
        // let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pageSize}`;
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
         setpage(page+1);
        updateNews();
    }
   
    
        if(articles.length===0){
            return(
            <>
            <div className="text-center">
  <div className="spinner-border" role="status" style={{position:'fixed',top:'8%'}}>
    <span className="sr-only">Loading...</span>
  </div>
</div>
</>
);

 }

else{
    return(
        <>
        
        <div className="container my-3">
            <div className="row">
            {articles.map((element)=>{ 
                return( 
                    <div className="col-md-4 my-2" key={element.url}>
        <NewsItem title={element.title} description={element.description} ImageUrl={element.urlToImage} NewsUrl={element.url} author={element.source.name} date={element.publishedAt}/>
            </div>
                )
            })};
            </div>
          
        </div>
           
        <div>
          <div className="container d-flex justify-content-between my-3 mx-2">
        <button type="button" disabled={page<=1} onClick={previous} className="btn btn-dark">&larr; Preview</button>
        <button type="button" disabled={page >= Math.ceil(totalResults/props.pageSize)} onClick={next} className="btn btn-dark">Next &rarr;</button>
        </div>
        </div>
        </>
    )
  }

}

News.defaultProps ={
    country: 'in',
    pageSize: 10,
    category: 'business'
  }
News.propTypes ={
    country:PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
export default News