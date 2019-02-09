import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import App from "./App";

// Export your top level component as JSX (for static rendering)
export default App;

if (typeof document !== "undefined") {
  const renderMethod = module.hot
    ? ReactDOM.render
    : ReactDOM.hydrate || ReactDOM.render;
  const render = Comp => {
    renderMethod(
      <AppContainer>
        <Comp />
      </AppContainer>,
      document.getElementById("root")
    );
  };

  render(App);
  // Hot Module Replacement
  if (module.hot) {
    module.hot.accept("./App", () => render(require("./App").default));
  }
}
