import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import "./styles/styles.css";
import Landing from "./components/Landing";
import Library from "./components/Library";
import Album from "./components/Album";
import Background from "./img/grains.jpg";

const pStyle = {
  backgroundImage: `url(${Background})`
};

class App extends Component {
  render() {
    return (
      <div className="App hero">
        <div className="background-image" style={pStyle} />
        <header>
          <h2>
            <Link to="/">Bloc Jams by Sears</Link>
          </h2>
          <nav>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/library">Library</Link>
            </li>
          </nav>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
