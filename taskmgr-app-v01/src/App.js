//import {BrowserRouter, Routes, Route} from "react-router-dom"
//-- hashrouter - used with GitHub pages
import {HashRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home";

function App() {
  return (
    <>
      <HashRouter>            
        <Routes>      
          <Route path="/" element={<Home/>}/>
        </Routes>
     </HashRouter>    
    </>
  );
}

export default App;
