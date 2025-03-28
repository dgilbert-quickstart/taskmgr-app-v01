import {useEffect, useState} from "react"

const initial_todo_items = [
  {id:1,name:"item one", completed:false},
  {id:2,name:"item two", completed:false},
  {id:3,name:"item three", completed:true},
  {id:4,name:"item four", completed:false},
  {id:5,name:"item five", completed:false}
];

function Home() {

  /*
  useState = uesed to update and track data changes
            state variable
            update state function 
  */

  const [tmplist, setTmpList] = useState(initial_todo_items);
  const [todolist, setTodoList] = useState(null);

  /* useEffect(function) - ananymous function, callback, arraw fuction */
  //useEffect(function(){})
  //useEffect(()=>{

  useEffect(()=>{

    console.log("#App::Home page load")
    
    setTodoList(tmplist)
    console.log("---tmplist\n",tmplist)
    console.log("---todolist\n",todolist)

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
  