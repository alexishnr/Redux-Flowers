export default function(like = 0, action) {
  if(action.type == 'increaseLike') {
      return like + 1;
  }
  else if (action.type == 'decreaseLike') {
      return like -1;
  }
  else if (action.type == 'reset') {
      return like = 0;
  }
  else {
      return like;
  }
}
