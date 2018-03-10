import React, { Component } from "react";
import albumData from "./../data/albums";
import PlayerBar from "./PlayerBar";
import "../styles/album.css";
import "../styles/styles.css";

class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find(album => {
      return album.slug === this.props.match.params.slug;
    });

    this.state = {
      album: album,
      currentSong: album.songs[0],
      currentTime: 0,
      duration: album.songs[0].duration,
      isPlaying: false,
      currentVolume: 0.05,
      onHover: null
    };
    this.audioElement = document.createElement("audio");
    this.audioElement.src = album.songs[0].audioSrc;
    this.audioElement.volume = this.state.currentVolume;
  }

  play() {
    this.audioElement.play();
    this.setState({ isPlaying: true });
  }

  pause() {
    this.audioElement.pause();
    this.setState({ isPlaying: false });
  }

  componentDidMount() {
    this.eventListeners = {
      timeupdate: e => {
        this.setState({ currentTime: this.audioElement.currentTime });
      },
      durationchange: e => {
        this.setState({ duration: this.audioElement.duration });
      },
      volumechange: e => {
        this.setState({ currentVolume: this.audioElement.currentVolume });
      }
    };
    this.audioElement.addEventListener(
      "timeupdate",
      this.eventListeners.timeupdate
    );
    this.audioElement.addEventListener(
      "durationchange",
      this.eventListeners.durationchange
    );
    this.audioElement.addEventListener(
      "volumechange",
      this.eventListeners.volumechange
    );
  }

  componentWillUnmount() {
    this.audioElement.src = null;
    this.audioElement.removeEventListener(
      "timeupdate",
      this.eventListeners.timeupdate
    );
    this.audioElement.removeEventListener(
      "durationchange",
      this.eventListeners.durationchange
    );
    this.audioElement.removeEventListener(
      "volumechange",
      this.eventListeners.volumechange
    );
  }

  setSong(song) {
    this.audioElement.src = song.audioSrc;
    this.setState({ currentSong: song });
  }

  handleSongClick(song) {
    const isSameSong = this.state.currentSong === song;
    if (this.state.isPlaying && isSameSong) {
      this.pause();
    } else {
      if (!isSameSong) {
        this.setSong(song);
      }
      this.play();
    }
  }

  handlePrevClick() {
    const currentIndex = this.state.album.songs.findIndex(
      song => this.state.currentSong === song
    );
    const newIndex = Math.max(0, currentIndex - 1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play(newSong);
  }

  handleNextClick() {
    const currentIndex = this.state.album.songs.findIndex(
      song => this.state.currentSong === song
    );
    const newIndex = Math.min(
      this.state.album.songs.length - 1,
      currentIndex + 1
    );
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play(newSong);
  }

  handleTimeChange(e) {
    const newTime = this.audioElement.duration * e.target.value;
    this.audioElement.currentTime = newTime;
    this.setState({ currentTime: newTime });
  }

  handleVolumeChange(e) {
    const newVolume = e.target.value;
    //console.log(this.state.currentVolume, newVolume);
    this.audioElement.currentVolume = newVolume;
    this.setVolume(newVolume);
    this.setState({ currentVolume: newVolume });
  }
  setVolume(volume) {
    this.audioElement.volume = volume;
    this.setState({ currentVolume: volume });
  }

  formatTime() {
    var currentTime = this.state.currentTime;
    if (typeof currentTime === "number") {
      var minutes = Math.floor(currentTime / 60);
      var seconds = Math.ceil(currentTime - minutes * 60);
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      return minutes + ":" + seconds;
    } else {
      return "-:--";
    }
  }

  toggleHidden(show, index) {
    if (show) {
      this.setState({
        isHidden: !this.state.isHidden,
        hoverIndex: index + 1
      });
    }
    console.log(index);
    this.setState({
      isHidden: !this.state.isHidden,
      hoverIndex: null
    });
  }

  whenOver(index) {
    this.setState({
      onHover: index + 1
    });
  }

  whenOut() {
    this.setState({
      onHover: false
    });
  }
  formatSongDuration(time) {
    if (typeof parseFloat(time) === "number") {
      var minutes = Math.floor(time / 60);
      var seconds = Math.ceil(time - minutes * 60);
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      return minutes + ":" + seconds;
    } else {
      return "-:--";
    }
  }

  render() {
    return (
      <section className="album">
        <section id="album-info">
          <img
            id="album-cover-art"
            src={this.state.album.albumCover}
            alt={`${this.state.album.title} Album Cover`}
            width="75px"
          />
          <div className="album-details">
            <h1 id="album-title">{this.state.album.title}</h1>
            <h2 className="artist">{this.state.album.artist}</h2>
            <div id="release-info">{this.state.album.releaseInfo}</div>
          </div>
        </section>
        <i className="fas fa-camera-retro" />
        <table
          id="song-list"
          className="table table-striped table-bordered table-hover rounded"
        >
          <colgroup>
            <col id="song-number-column" />
            <col id="song-title-column" />
            <col id="song-duration-column" />
          </colgroup>
          <tbody>
            {this.state.album.songs.map((song, index) => (
              <tr
                className="song "
                key={index}
                onMouseOver={() => this.whenOver(index)}
                onMouseOut={() => this.whenOut()}
                onClick={() => this.handleSongClick(song)}
              >
                <td className="song-number ">
                  {this.state.currentSong.title === song.title ? (
                    <span
                      className={
                        this.state.isPlaying ? "ion-pause" : "ion-play"
                      }
                    />
                  ) : this.state.onHover === index + 1 ? (
                    <span className="ion-play" />
                  ) : (
                    <span className="song-number">{index + 1}</span>
                  )}
                </td>
                <td className="song-title ">{song.title}</td>
                <td className="song-duration ">
                  {this.formatSongDuration(song.duration)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <PlayerBar
          isPlaying={this.state.isPlaying}
          currentSong={this.state.currentSong}
          currentTime={this.audioElement.currentTime}
          duration={this.audioElement.duration}
          currentVolume={this.audioElement.currentVolume}
          handleSongClick={() => this.handleSongClick(this.state.currentSong)}
          handlePrevClick={() => this.handlePrevClick()}
          handleNextClick={() => this.handleNextClick()}
          handleTimeChange={e => this.handleTimeChange(e)}
          handleVolumeChange={e => this.handleVolumeChange(e)}
          formatTime={() => this.formatTime()}
        />
      </section>
    );
  }
}

export default Album;
