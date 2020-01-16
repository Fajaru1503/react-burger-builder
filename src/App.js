import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

class App extends Component {
  render() {
    return (
      <section className="App">
        <Layout>
          <BurgerBuilder />
        </Layout>
      </section>
    );
  }
}

export default App;
