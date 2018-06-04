import React, { Component } from 'react'
import './App.css'
import PageHeader from './components/PageHeader.js'
import PageFooter from './components/PageFooter.js'
import Main from './components/Main.js'
import logo from './assets/logo.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='page-container animated fadeIn'>
          <PageHeader headerLogo={logo} buttonCopy='File a claim'/>
          <Main/>
          <div className='center-row'>
            <PageFooter footerLogo={logo}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App
