import React, { Component } from "react";
import "../styles/playerbar.css";

class PlayerBar extends Component {
  render() {
    return (
      <section className="player-bar">
        <section id="buttons">
          <button id="previous" onClick={this.props.handlePrevClick}>
            <span className="ion-skip-backward" />
          </button>
          <button id="play-pause" onClick={this.props.handleSongClick}>
            <span className={this.props.isPlaying ? "ion-pause" : "ion-play"} />
          </button>
          <button id="next" onClick={this.props.handleNextClick}>
            <span className="ion-skip-forward" />
          </button>
        </section>
        <div className="current-time">{this.props.formatTime()}</div>
        <div id="audio-container">
          <div id="time-control">
            <input
              type="range"
              className="seek-bar seek-bar-time"
              value={this.props.currentTime / this.props.duration || 0}
              max="1"
              min="0"
              step="0.01"
              onChange={this.props.handleTimeChange}
            />
          </div>
          <div id="volume-control">
            <input
              type="range"
              className="seek-bar seek-bar-vol"
              value={this.props.currentVolume || 0.05}
              max="1"
              min="0"
              step="0.01"
              onChange={this.props.handleVolumeChange}
            />
          </div>
          <div className="total-time">{this.props.duration}</div>
        </div>
      </section>
    );
  }
}

export default PlayerBar;
