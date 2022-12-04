import React, {useState,useEffect} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props)=> {
    const [articles,setArticles]=useState([]);
    const [totalResults,setTotalresults]=useState(0);
    const[page,setPage]=useState(1);
    const[loading,setLoading]=useState(true);

  // console.log("number of times triggered");
  
 const capitalizeFirstLetter =(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const newsUpdate  = async()=> { 
    props.setProgress(10)

    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

    
    //  setLoading(true)
   
    let data = await fetch(url);
    let fetchedData = await data.json();

    // console.log("data is ",data);

    // console.log("fetched data is ",fetchedData);
    // console.log("total result is ",fetchedData.totalResults);


    setArticles(fetchedData.articles)
    setTotalresults(fetchedData.totalResults)
    // console.log("totalresutl is ",fetchedData.totalResults)

    setLoading(false)

   
    props.setProgress(100)
    // console.log("page is ",page)
  }



 

// it will only execute once after loading of whole component
  // sequence will be first above code will load then below return will be laod then it will execute once 
  
  useEffect(() => {
    console.log("rendered once");
    newsUpdate();
    // eslint-disable-next-line
  }, []);
  

  
  const fetchMoreData = async () => {
    // console.log("inside fetched more ");

  setPage(page + 1)
   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
   
   setLoading(true);
   
    let data = await fetch(url);
   let fetchedData = await data.json();
   
   
     setArticles(articles.concat(fetchedData.articles))
   
  
   setTotalresults(fetchedData.totalResults)
    
   
   
    setLoading(false)


  };

 
    // console.log('render')
    return (
      <>
        {/* <div className="container mb-5"> */}
          <h1 className="text-center " style={{marginTop:'90px'}}>These are today's top headlines from  {capitalizeFirstLetter(props.category)} </h1>

        {loading && <Spinner />}

        {/* {console.log("inside return ")} */}

          <InfiniteScroll
              dataLength={articles.length}
              next={fetchMoreData}
              hasMore={articles.length !==totalResults}
              loader={loading&&<Spinner/>}
            >
            
             <div className="container">

             
             <div className="row">

              {articles.map((element) => {
            
               
                return <div className="col-md-4" key={element.url}>
                
                  <NewsItem
                    
                    title={element.title}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                    description={element.description}
                    imageUrl={element.urlToImage ? element.urlToImage : "https://images.livemint.com/img/2022/02/05/600x338/Rakesh_Jhunjhunwala_Reuters_1622431252074_1644040295288.jpg"}
                    url={element.url}

                  />
                  
                </div>
              }
             
              )
              }
                
              
               </div>
               </div>
            </InfiniteScroll>
         

        {/* </div> */}
        {/* <div className="container d-flex justify-content-between mb-5">
        <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.triggerPrev}> &#8592; Previous</button>
        <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/props.pageSize)} className="btn btn-dark" onClick={this.triggerNext}>Next &#8594;</button>
        </div> */}
      </>
  );
  
  
}

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general'
}

News.propTypes = {
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,
 }


export default News;
