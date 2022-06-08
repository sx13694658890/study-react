import React, { Component } from 'react'
import { Switch,Route, Link} from "react-router-dom"
import Apple from "./Apple"
export default class Shop extends Component {
  render() {
    return (
      <div>Shop
        <hr width="50%" align="center" />
        <Link to="/shop/apple">Apple</Link>
        <div>
          <Switch>
              <Route path="/shop/apple" component={Apple}></Route>
          </Switch>
        </div>
      </div>
    )
  }
}
