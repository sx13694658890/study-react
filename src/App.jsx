
import React from "react"
import { Route,Switch,Redirect,Link } from "react-router-dom"
import Home from "./compoents/Home"
import About  from "./compoents/About"
import Shop from "./compoents/Shop"

import Unfound from "./compoents/Unfound"
function App() {
  

  return (
    <div className="App">
      <div>
        <Link to="/">home</Link>
        <span> | </span>
        <Link to="/about">about</Link>
        <span> | </span>
        <Link to="/shop">shop</Link>
      </div>

      <hr />
  <Switch>
    <Route path="/" exact component={Home}></Route>
    <Route path="/about" render={(routProps)=><About {...routProps} />}></Route>
    <Route path="/shop" component={Shop}></Route>
    <Route path="/404" exact component={Unfound}></Route>
    <Redirect from="/*" to="/404" />
  </Switch>
    </div>
  )
}

export default App
