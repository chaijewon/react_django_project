import {Fragment} from "react";
import {routes, route, Routes, Route} from 'react-router-dom'
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
import Home from "./components/main/Home";
import FoodList from "./components/food/FoodList";
function App() {
  return (
     <Fragment>
       <Header/>
        <Routes>
            {/* Django:urls.py , Spring:@RequestMapping */}
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/food/list"} element={<FoodList/>}/>
        </Routes>
       <Footer/>
     </Fragment>
  );
}

export default App;
