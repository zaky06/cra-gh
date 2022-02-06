export const sortComments = (array = []) => {
  const commentsParent = [];
  const comments = [];

  const sortedArray = array.sort((a, b) => a.id - b.id);

  sortedArray.forEach((comment) => {
    if (comment.parent) {
      commentsParent.push(comment);
    } else {
      comments.push(comment);
    }
  });
  commentsParent.reverse().forEach((commentParent) => {
    comments.forEach((comment, j) => {
      if (comment.id === commentParent.parent) {
        comments.splice(j + 1, 0, commentParent);
      }
    });
  });

  return comments;
};
