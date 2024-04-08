const { loadFiles, loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");
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

const schema = makeExecutableSchema({
  typeDefs: loadedFiles,
  resolvers: {
    Query: {
      posts: async (parent, args, context, info) => {
        // console.log("parent", parent); // 이 필드의 부모에 대한 resolver의 반환 값
        // console.log("args", args); // 이 필드에 제공된 모든 GraphQL 인수를 포함하는 객체 // postsId 1 필터링을 해준다.
        // console.log("context", context); // 특정 작업에 대해 실행 중인 모든 resolver 간에 공유되는 object
        // console.log("info", info); //
        const posts = await Promise.resolve(parent.posts);
        return posts; // parent에 있는 posts를 보여준다
      },
      comments: async (parent) => {
        const comments = await Promise.resolve(parent.comments);
        return await comments; // parent에 있는 comments를 보여준다
      },
    },
  },
});

const root = {
  posts: require("./posts/posts.model"),
  comments: require("./comments/comments.model"),
};
// description을 요청하면 root값이 나온다.

app.use("/graphql", graphqlHTTP({ schema, rootValue: root }));
// post /graphql을 요청하면 descrition에서 root가 나온다.

app.listen(PORT, (req, res) => {
  console.log(`server open ${PORT}`);
});
