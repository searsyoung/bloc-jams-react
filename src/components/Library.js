import React, { Component } from "react";
import { Link } from "react-router-dom";
import albumData from "./../data/albums";
import "../styles/library.css";

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
    // console.log(this.state);
  }
  render() {
    return (
      <section>
        <header className="jumbotron">
          <h1 className="display-4 ">Turn the music up!</h1>
          <Link to="/" className="lead text-muted">
            Bloc Jams
          </Link>{" "}
          >{" "}
          <Link to="/Library" className="lead text-muted">
            Library
          </Link>
        </header>
        <section className="flex-container">
          {this.state.albums.map((album, index) => (
            <div className="flex-item selected d-flex" key={index}>
              <Link to={`/album/${album.slug}`} className="album-details">
                <img
                  src={album.albumCover}
                  alt={album.title}
                  className="album-cover"
                />
                <p className="album-details album-title">{album.title}</p>
                <p className="album-details album-title">{album.artist}</p>
                <p className="album-details album-title">
                  {album.songs.length} songs
                </p>
              </Link>
            </div>
          ))}{" "}
        </section>
      </section>
    );
  }
}

export default Library;
