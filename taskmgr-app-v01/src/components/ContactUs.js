function ContactUs() {

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
  