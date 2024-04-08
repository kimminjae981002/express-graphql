const { loadFiles, loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const path = require("path");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
// const { buildSchema } = require("graphql");

const app = express();
const PORT = 3000;

// !를 붙이면 있어야된다.
// description을 요청하면 root값이 나온다.

const loadedFiles = loadFilesSync("**/*", {
  extensions: ["graphql"],
});
// graphql이라는 파일을 모두 불러온다.

const loadedResolverFiles = loadFilesSync(
  path.join(__dirname, "**/*.resolvers.js")
);
// 절대경로로 resolvers.js 파일 불러오기

const schema = makeExecutableSchema({
  typeDefs: loadedFiles,
  resolvers: loadedResolverFiles,
});

// const root = {
//   posts: require("./posts/posts.model"),
//   comments: require("./comments/comments.model"),
// };
// description을 요청하면 root값이 나온다.

app.use("/graphql", graphqlHTTP({ schema }));
// post /graphql을 요청하면 descrition에서 root가 나온다.

app.listen(PORT, (req, res) => {
  console.log(`server open ${PORT}`);
});
