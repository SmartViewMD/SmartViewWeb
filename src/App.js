import React, { Component } from 'react';
// import Layout from './components/Layout'
import { Router,navigate} from "@reach/router"
import logo from './logo.svg';
import './App.css';
import Nav from './components/nav'
import Home from './components/home'
import Privacy from './Privacy'
import CovidStatement from './CovidStatement'
import Footer from './components/footer'
// import MyInfo from './components/MyInfo'
// import Default from './components/Default'
// import DashboardDefault from './components/DashboardDefault'
// import Dashboard from './components/DataDashboard'

class App extends Component {
  render(){
  return (
    <div>
      <Nav></Nav>
      
      
            <Router>
              <Home path="/"/>
              <Privacy path="/privacy"/>
              <CovidStatement path="/covidstatement"/>
            </Router>

      <Footer></Footer>
      </div>
  );
}


}

export default App;

//
 
// import React from 'react'
// import Layout from '../components/Layout'
// import { Router, Link } from "@reach/router"
// import MyInfo from '../components/MyInfo'
// import Default from '../components/Default'
// import DashboardDefault from '../components/Dashboarddefault'
// import Dashboard from '../components/DataDashboard'

// const App = ({location}) => {
//     return (
//         <Layout>
//             <h1>Welcome to the App Page <span>{location.pathname}</span></h1>
//               <nav>
//                 <Link to='/app/info'>Info</Link>
//               </nav>
//               <Router basepath="/app">
//                 <Default path="/"/>
//                 <MyInfo path="/info" />
//               </Router>
//         </Layout>
//     )
// }
// export default App;