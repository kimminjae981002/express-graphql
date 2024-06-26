const posts = [
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
];

function getAllPosts() {
  return posts;
}

function getPost(id) {
  return posts.find((post) => {
    return post.id === id;
  });
}

function addNewPost(id, title, description) {
  const newPost = {
    id,
    title,
    description,
    comments: [],
  };

  posts.push(newPost);
  return newPost;
}

module.exports = {
  getAllPosts,
  getPost,
  addNewPost,
};
