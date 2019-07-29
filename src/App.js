import React from "react";
import { Root, Routes } from "react-static";
import { Link } from "@reach/router";
import "react-bulma-components/dist/react-bulma-components.min.css";
import "./app.css";

const App = () => (
  <Root>
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <div className="content">
        <Routes default />
      </div>
    </div>
  </Root>
);

export default App;
