export default function(total = 0, action) {
  if(action.type == 'increaseTotal') {
      return total + 1;
  }
  else if (action.type == 'decreaseTotal') {
      return total -1;
  }
  else if (action.type == 'reset') {
      return total = 0;
  }
  else {
      return total;
  }
}
