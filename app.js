const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const app = express();
const PORT = 3000;

const schema = buildSchema(`
    type Query {
      posts: [Post],
      comments: [Comment]
     }

     type Post {
        id: ID!
        title: String!
        description: String!
        comments: [Comment]
     }

     type Comment {
        id: ID!
        text: String!
        likes: Int
     }



`);
// !를 붙이면 있어야된다.
// description을 요청하면 root값이 나온다.

const root = {
  posts: [
    {
      id: "post1",
      title: "It is a first post",
      description: "설명 부분",
      comments: [
        {
          id: "comment 1",
          text: "댓글 부분",
          likes: 1,
        },
      ],
    },
    {
      id: "post2",
      title: "It is a second post",
      description: "설명 부분",
      comments: [],
    },
  ],

  comments: [
    {
      id: "comment 1",
      text: "댓글 부분",
      likes: 1,
    },
  ],
};
// description을 요청하면 root값이 나온다.

app.use("/graphql", graphqlHTTP({ schema, rootValue: root }));
// post /graphql을 요청하면 descrition에서 root가 나온다.

app.listen(PORT, (req, res) => {
  console.log(`server open ${PORT}`);
});
