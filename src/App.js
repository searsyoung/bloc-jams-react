import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Landing from "./components/Landing";
import Library from "./components/Library";
import Album from "./components/Album";
import "./styles/app.css";

class App extends Component {
  render() {
    return (
      <div id="App">
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <Link to="/" className="navbar-brand">
              Bloc Jams by Sears
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item ">
                  <Link to="/" className="nav-link ">
                    <i className="ion-home" /> Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Library" className="nav-link ">
                    <i className="ion-music-note" /> Library
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link "
                    onClick={() => alert("Coming soon...")}
                  >
                    <i className="ion-android-person" /> Sign In
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
        <hr className="featurette-divider" />
        <footer className="footer">
          <div className="container">
            <span className="text-muted">
              Copyright &copy;
              {new Date().getFullYear()} Bloc Jams by Sears. All rights
              reserved.
            </span>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
