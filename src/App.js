import React from "react";
import "./App.css";
import { TodoList } from "./components/TodoList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TodoDetail } from "./components/TodoDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={TodoList} />
          <Route path="/todolist/:id" component={TodoDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
