# React app with SSR using Deno

This is the source code of a React SSR app written in Typescript using the Deno runtime engine.
It's based on [Craig Morten's][2] article ["Writing a React SSR app in Deno"][1].

## Run command


you might have to bundle this first, just do deno bundle ./server.tsx
```
deno run --allow-net --allow-read --unstable .\server.tsx
```

If you want to reload all the imports use `--reload` Deno CLI option:

```
deno run --reload --allow-net --allow-read --unstable .\server.tsx
```

[1]: https://dev.to/craigmorten/writing-a-react-ssr-app-in-deno-2m7
[2]: https://dev.to/craigmorten
