import React, { Component } from 'react';
import './index.css';
import TopicBrowser from './components/TopicBrowser/TopicBrowser'

new TopicBrowser
class App extends Component {
  render() {
    return (
      <TopicBrowser />
    )
  }
}

export default App;
