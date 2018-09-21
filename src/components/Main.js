import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/home/Home.js'
import About from './pages/about/About.js'
import Services from './pages/services/Services.js'
import Coverage from './pages/coverage/Coverage.js'
import Contact from './pages/contact/Contact.js'
import Claim from './pages/claim/Claim.js'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/Services' component={Services}/>
      <Route exact path='/coverage' component={Coverage}/>
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/claim' component={Claim}/>
    </Switch>
  </main>
)

export default Main