const comments = [
  {
    id: "comment 1",
    text: "댓글 부분",
    likes: 1,
  },
  {
    id: "comment 2",
    text: "댓글 부분 2",
    likes: 10,
  },
];

function getAllComments() {
  return comments;
}

function getCommentsByLikes(minLikes) {
  return comments.filter((comment) => {
    return comment.likes >= minLikes;
  });
}

module.exports = {
  getAllComments,
  getCommentsByLikes,
};
