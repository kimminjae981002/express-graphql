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

function addNewComment(id, text) {
  const newComment = {
    id,
    text,
    likes: 0,
  };

  comments.push(newComment);
  return newComment;
}

module.exports = {
  getAllComments,
  getCommentsByLikes,
  addNewComment,
};
