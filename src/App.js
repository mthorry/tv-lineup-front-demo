import React, { Component } from 'react';
import './App.css';
import SearchContainer from './components/search/SearchContainer'
import PremieresContainer from './components/shows/PremieresContainer'
import ShowCalendar from './components/shows/ShowCalendar'
import ShowContainer from './components/shows/ShowContainer'
import TrendingContainer from './components/extras/TrendingContainer'
import MostWatchedContainer from './components/extras/MostWatchedContainer'
import DashboardContainer from './components/extras/DashboardContainer'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Container text/>
        <Route path="/" component={Nav}/>
        <Route path="/search" render={(props) => <SearchContainer {...props} /> } />
        <Route path="/shows" render={(props) => <ShowContainer {...props} /> } />
        <Route path="/premieres" render={(props) => <PremieresContainer {...props} /> } />
        <Route exact path='/lineup' component={ShowCalendar} />
        <Route exact path='/trending' component={TrendingContainer} />
        <Route exact path='/watching' component={MostWatchedContainer} />
        <Route exact path='/dash' component={DashboardContainer} />
        <Route path="/" component={Footer}/>
      <Container/>
      </div>
    );
  }
}

export default App;