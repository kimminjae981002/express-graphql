const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const app = express();
const PORT = 3000;

const schema = buildSchema(`
    type Query{
      description: String
}`);
// description을 요청하면 root값이 나온다.

const root = {
  description: "hello world!",
};
// description을 요청하면 root값이 나온다.

app.use("/graphql", graphqlHTTP({ schema, rootValue: root }));
// post /graphql을 요청하면 descrition에서 root가 나온다.

app.listen(PORT, (req, res) => {
  console.log(`server open ${PORT}`);
});
