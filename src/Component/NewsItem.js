import React from 'react'


const NewsItem = (props) => {
  
  console.log(props);
 
  let { title, description, imageUrl, url, date, author, source } = props;
    return (
      <div>
            {/* <span className="badge bg-danger">{source}</span> */}

<div  className="card" >
  <div style={{display : 'flex',
    justifyContent: 'flex-end',
    position: 'absolute',
    right: '0'}}>

 <span className=" badge rounded-pill bg-danger">  {source} </span>
  </div>

  <img src={imageUrl}  className="card-img-top" alt="..."/>
  <div  className="card-body">
  
  
    <h5  className="card-title">{title}
  </h5>
    
    <p  className="card-text">{description}</p>
    <div className="card-text">
      <small className="text-muted">By {author?author:'Unknown'} on {new Date(date).toLocaleTimeString()} </small>
    </div>
   
   
   

    <a href={url}  rel="noreferrer" target='_blank' className="btn btn-sm btn-primary">Read more</a>
  </div>
</div>     
 </div>
    )
  }


export default NewsItem
