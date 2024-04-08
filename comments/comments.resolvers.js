const commentsModel = require("./comments.model");

module.exports = {
  Query: {
    comments: () => {
      return commentsModel.getAllComments();
    },
    commentsByLikes: (_, args) => {
      return commentsModel.getCommentsByLikes(args.minLikes);
    },
    // parent가 필요없으면 _를 넣어주자
    // passport done의 null 값과 같다
  },
};
