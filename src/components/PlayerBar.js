import React, { Component } from "react";
import "../styles/playerbar.css";

class PlayerBar extends Component {
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
      <section className="player-bar">
        <div id="buttons">
          <div id="previous" onClick={this.props.handlePrevClick}>
            <span className="ion-skip-backward play-controls media-button" />
          </div>
          <div id="play-pause" onClick={this.props.handleSongClick}>
            <span
              className={
                this.props.isPlaying
                  ? "ion-pause play-controls circle"
                  : "ion-play play-controls circle"
              }
            />
          </div>
          <div id="next" onClick={this.props.handleNextClick}>
            <span className="ion-skip-forward play-controls media-button" />
          </div>
        </div>

        <div id="audio-container slidecontainer">
          <div id="time-control ">
            {this.props.formatTime()}
            <input
              type="range"
              className="seek-bar seek-bar-time slider-time"
              value={this.props.currentTime / this.props.duration || 0}
              max="1"
              min="0"
              step="0.01"
              onChange={this.props.handleTimeChange}
            />
            {this.formatSongDuration(this.props.duration)}
          </div>
          <div className="margin-pad" />
          <div id="volume-control slidecontainer">
            <span className="ion-volume-high" />
            <input
              type="range"
              className="seek-bar seek-bar-vol slider slider-vol"
              value={this.props.currentVolume || 0.05}
              max="1"
              min="0"
              step="0.01"
              onChange={this.props.handleVolumeChange}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default PlayerBar;
