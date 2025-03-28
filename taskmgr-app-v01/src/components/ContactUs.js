import {useEffect} from "react"

function ContactUs() {

    /* useEffect(function) - ananymous function, callback, arraw fuction */
    //useEffect(function(){})
    //useEffect(()=>{
  
    useEffect(()=>{
  
      console.log("#App::ContactUs page load")
  
      //page load [] -- 1 time
      //-- always refresh page on state update -- setTodoList , updated caused a page refresh, = endless loop page refresh
      
    },[]) //[] - run only 1 time 
  
    return (
      <>
      <div>
          <h2>Contact Us</h2>
          <form>
              <div> 
                  <span>* first name: </span> <input type="text" maxLength={25} placeholder="* first name"/>
                  <br/>
                  <span>last name: </span> <input type="text" maxLength={25} placeholder="last name"/>
                  <br/>
                  <span>* email: </span> <input type="text" maxLength={100} placeholder="* email"/>
                  <br/>
                  <span>* comment: </span> 
                  <br/><textarea rows={5} cols={30} maxLength={100} placeholder="* comment"></textarea>
                  <p></p>
                  <button>submit</button> {" "} <a>clear</a>
              </div>
          </form>
      </div>
      </>
    );
  }
  
  export default ContactUs;
  