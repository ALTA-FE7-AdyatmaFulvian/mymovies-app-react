import React, { Component } from "react";
import { Layout } from "../components/Layout";
import NowPlaying from "../components/NowPlayingList";
import Trending from "../components/TrendingList";
import Discover from "../components/DiscoverList";

export class Home extends Component {
  render() {
    return (
      <Layout>
        <Discover />
        <Trending />
        <NowPlaying />
      </Layout>
    );
  }
}

export default Home;
