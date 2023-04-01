import { getByTitle } from '@testing-library/react'
import React,{useContext,useEffect} from 'react'
import noteContext from '../context/NoteContext';

const NewsItem =(props)=> {
  
      let {title,description,ImageUrl,NewsUrl,author,date} = props;
      const a = useContext(noteContext)
      useEffect(() => {
        a.update() 
      }, [])
    
    return (
    <>
    {/* <h1>Context wala {a.state.name}</h1> */}
      <div className="card mt-5" >
  <img src={ImageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={NewsUrl} target="_blank" className="btn btn-primary">Details</a>
    <p className="card-text"><small className="text-muted">Uploaded by {author} at {new Date(date).toGMTString()} </small></p>
</div>
</div>
</>
    )
  
}

export default NewsItem