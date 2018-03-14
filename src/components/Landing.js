import React from "react";
import "../styles/landing.css";
import { Link } from "react-router-dom";
import Choose from "../img/choose.png";
import AdFree from "../img/ad-free.png";
import Phone from "../img/phone-green.png";

const Landing = () => (
  <section>
    <section>
      <section className=" jumbotron">
        <h1 className="display-4 ">Turn the music up!</h1>
        <p className="lead text-muted">What will you listen to today?</p>
        <hr className="my-4" />
        <p>We're adding new music everyday. Check back often!</p>
        <Link
          to="/library"
          className="btn btn-primary btn-lg music-button"
          role="button"
        >
          Music Library
        </Link>
      </section>
    </section>

    <section className="selling-points container marketing">
      <div className="row">
        <div className="point col-lg-4">
          <img
            className="rounded-circle marketing-img"
            src={Choose}
            alt="choose your music"
          />
          <h2 className="point-title">Choose your music</h2>
          <p className="point-description">
            The world is full of music; why should you have to listen to music
            that someone else chose?
          </p>
        </div>
        <div className="point col-lg-4">
          <img
            className="rounded-circle marketing-img"
            src={AdFree}
            alt="choose your music"
          />
          <h2 className="point-title">Unlimited, streaming, ad-free</h2>
          <p className="point-description">
            No arbitrary limits. No distractions.
          </p>
        </div>
        <div className="point col-lg-4">
          <img
            className="rounded-circle marketing-img"
            src={Phone}
            alt="choose your music"
          />
          <h2 className="point-title">Mobile enabled</h2>
          <p className="point-description">
            Listen to your music on the go. This streaming service is available
            on all mobile platforms.
          </p>
        </div>
      </div>
    </section>

    <hr className="featurette-divider" />
    <section>
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Pricing</h1>
        <p className="lead">
          We're offering a high quality streaming service for the lowest prices
          in the industry! We've partnered with many Indie bands and pay them
          directly, cutting out the middle-man. Great music at an affordable
          price for you, money paid directly to the artists! Try us risk-free
          today...
        </p>
      </div>
      <div className="container">
        <div className="card-deck mb-3 text-center">
          <div className="card mb-4 box-shadow">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Free</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$0</h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Stream 10 songs a day</li>
                <li>7 day trial</li>
                <li>No Credit Card Required!</li>
                <li>MP3</li>
              </ul>
              <button
                type="button"
                className="btn btn-lg btn-block btn-outline-primary"
              >
                Sign up for free
              </button>
            </div>
          </div>
          <div className="card mb-4 box-shadow">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Gold</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $15 <small className="text-muted">/ mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Streaming Unlimited</li>
                <li>Listen Offline</li>
                <li>192 kbps bit-rate</li>
                <li>MP3, AAC</li>
              </ul>
              <button
                type="button"
                className="btn btn-lg btn-block btn-primary"
              >
                Get started
              </button>
            </div>
          </div>
          <div className="card mb-4 box-shadow">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Platinum</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $29 <small className="text-muted">/ mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Streaming Unlimited</li>
                <li>Listen Offline</li>
                <li>256 kbps bit-rate</li>
                <li>MP3, AAC, FLAC</li>
              </ul>
              <button
                type="button"
                className="btn btn-lg btn-block btn-primary"
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
);

export default Landing;
