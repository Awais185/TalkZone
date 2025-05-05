import React from 'react'

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import PrivateRoute from "./utils/PrivateRoute"
import { AuthProvider } from './context/AuthContext'

import Homepage from './views/Homepage'
import Registerpage from './views/Registerpage'
import Loginpage from './views/Loginpage'
import Dashboard from './views/Dashboard'
import Navbar from './views/Navbar'
import Footer from './views/footor'
import Todo from './views/Todo'
import Message from './views/Message'
import MessagesDetails from './views/MessagesDetails'
import SearchUser from './views/SearchUser'



function App() {
  return (
    <Router>
      <AuthProvider>
        < Navbar/>
        <Switch>
          <PrivateRoute component={Dashboard} path="/dashboard" exact />
          <PrivateRoute component={MessagesDetails} path="/inbox/:id" exact />
          <Route component={Message} path="/inbox" exact />
          <Route component={SearchUser} path="/search/:username" exact />
          <Route component={Loginpage} path="/login" />
          <Route component={Registerpage} path="/register" exact />
          <Route component={Homepage} path="/" exact />
          <Route component={Todo} path="/todo" exact />
        </Switch>
        <Footer/>
      </AuthProvider>
    </Router>
  )
}

export default App