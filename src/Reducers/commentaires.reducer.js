export default function(commentList = [], action) {
  if(action.type == 'comment') {

    var commentListCopy = [...commentList]
    commentListCopy.push(action.infoComment)
    
    return commentListCopy;
  }
  else {
      return commentList;
  }
}
