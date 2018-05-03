import React, { Component } from 'react'
import './App.css'
import PageHeader from './components/PageHeader.js'
import PageFooter from './components/PageFooter.js'
import Main from './components/Main.js'
import logo from './assets/logo.svg'

// const pages = [
//     { key: 'home', active: true, name: 'Home' },
//     { key: 'about', name: 'About'},
//     { key: 'claim', name: 'File a claim'}
// ]

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader headerLogo={logo} buttonCopy='File a Claim'/>
        <div className='page-container'>
          <div className='page-inner'>
            <Main/>
            <PageFooter footerLogo={logo}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App
