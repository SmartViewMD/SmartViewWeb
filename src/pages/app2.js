import React from 'react'
import Layout from '../components/Layout'
import { Router, Link } from "@reach/router"
import MyInfo from '../components/MyInfo'
import Default from '../components/Default'
import DashboardDefault from '../components/Dashboarddefault'
import Dashboard from '../components/DataDashboard'

const App = ({location}) => {
    return (
        <Layout>
            <h1>Welcome to the App Page <span>{location.pathname}</span></h1>
              <nav>
                <Link to='/app/info'>Info</Link>
              </nav>
              <Router basepath="/app">
                <Default path="/"/>
                <MyInfo path="/info" />
              </Router>
        </Layout>
    )
}
export default App;