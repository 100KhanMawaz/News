import React,{useEffect} from 'react'
import { Link,useLocation } from 'react-router-dom'
const Navbaar=()=>{
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
   }, [location]);
    return (
      <div><nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">NewsMonkey</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/business"?"active":""}`} aria-current="page" to="/business">business</Link>
              <Link className={`nav-link ${location.pathname==="/entertainment"?"active":""}`} aria-current="page" to="/entertainment">entertainment</Link>
              <Link className={`nav-link ${location.pathname==="/general"?"active":""}`} aria-current="page" to="/general">general</Link>
              <Link className={`nav-link ${location.pathname==="/health"?"active":""}`} aria-current="page" to="/health">health</Link>
              <Link className={`nav-link ${location.pathname==="/science"?"active":""}`} aria-current="page" to="/science">science</Link>
              <Link className={`nav-link ${location.pathname==="/technology"?"active":""}`} aria-current="page" to="/technology">technology</Link>
            </li>
            
            </ul>
        </div>
      </div>
    </nav></div>
    )
  }


export default Navbaar