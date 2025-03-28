import {useEffect} from "react"

function Home() {

  /* useEffect(function) - ananymous function, callback, arraw fuction */
  //useEffect(function(){})
  //useEffect(()=>{

  useEffect(()=>{

    console.log("#App::Home page load")

    //page load [] -- 1 time
    //-- always refresh page on state update -- setTodoList , updated caused a page refresh, = endless loop page refresh
    
  },[]) //[] - run only 1 time 


  return (
      <>
      <div> 
          <h3>Demo Task Manager App v1.0.6</h3>
          <p></p>
          <div>
              <input type="text" maxLength={25} placeholder="* add item"/>
              {" "} <button>Add</button> {" "} <a>clear</a>
              <p></p>
          </div>
          <p></p>
          <a>all</a> {" | "}
          <a>complete</a> {" | "}
          <a>in-complete</a> 
          <p></p>
          <div>
            <span>[] itema -x- </span><br/>
            <span>[x] itemb -x- </span><br/>
            <span>[] itemc -x- </span><br/>
            <span>[x] itemd -x- </span><br/>
          </div>
          <p></p>
          <p>footer @ 2025</p>       
        </div>
      </>

    );
  }
  
  export default Home;
  