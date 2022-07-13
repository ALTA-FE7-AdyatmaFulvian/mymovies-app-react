import React, { Component } from "react";
import { Layout } from "../components/Layout";
import Movies from "../components/MoviesList";

export class Home extends Component {
  render() {
    return (
      <Layout>
        <Movies />
      </Layout>
    );
  }
}

export default Home;
