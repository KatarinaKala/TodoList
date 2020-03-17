import React from "react";
import Home from "./components/Home";
import TodoApp from "./components/Todo";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Layout from "./components/Layout";
import { Route } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Route exact path="/" component={Home} />
      <Route exact path="/Todo" component={TodoApp} />
    </Layout>
  );
}
export default App;
