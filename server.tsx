import React from "https://dev.jspm.io/react@17.0.2";
import ReactDOMServer from "https://dev.jspm.io/react-dom@17.0.2/server";
import { opine } from "https://deno.land/x/opine@0.25.0/mod.ts";
import App from "./app.tsx";

/**
 * Create our client bundle - you could split this out into
 * a preprocessing step.
 */
// const [diagnostics, js] = await Deno.bundle(
//   "./client.tsx",
//   undefined,
//   { lib: ["dom", "dom.iterable", "esnext"] },
// );

// if (diagnostics) {
//   console.log(diagnostics);
// }

/**
 * Create our Opine server.
 */
const app = opine();

//I dont think this is needed, this is only used if you do deno bundle .server.tsx bundle.tsx and then want to run the bundle.  
//we may be running the bundle with our vue app, but in this repo it isnt needed i THINK
const browserBundlePath = "/browser.js";

console.log((ReactDOMServer as any).renderToString())
const js =
`import React from "https://dev.jspm.io/react@16.13.1";
import ReactDOM from "https://dev.jspm.io/react-dom@16.13.1";
const App = ${App};
ReactDOM.hydrate(React.createElement(App), document.body);`;

const html =
  `<html><head><script type="module" src="${browserBundlePath}"></script><style>* { font-family: Helvetica; }</style></head><body><div id="root">${
    (ReactDOMServer as any).renderToString(<App />)
  }</div></body></html>`;

app.use(browserBundlePath, (req, res, next) => {
  res.type("application/javascript").send(js);
});

app.use("/", (req, res, next) => {
  res.type("text/html").send(html);
});

const port = 17123;
app.listen({ port });

console.log(`React SSR App listening on port ${port}`);
