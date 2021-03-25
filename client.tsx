import React from "https://dev.jspm.io/react@17.0.2";
import ReactDOM from "https://dev.jspm.io/react-dom@17.0.2";
import App from "./app.tsx";

(ReactDOM as any).hydrate(
  <App />,
  //@ts-ignore
  document.getElementById("root"),
);
