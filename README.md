# What's this repo

React Router のアニメーション試したりするもの。

# Tools

- ESLint
- Prettier
- webpack + esbuild-loader

趣味で esbuild で作ってみた。TS の型チェックをしてないけどまあいいだろう。そのうちやりたい。

ESBuild だけだと watch ができなかったり、さすがに不便だったので webpack を噛ませた。webpack v5 が来たらそっち試したい。

# How to develop

```
npm install
npm start
```

npm start をするとウェブサーバーが立ち上がる。SPA として作っているので、サーバーを立ち上げていないと検証できない。
