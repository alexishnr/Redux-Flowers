export default function(alert = 0, action) {
  if(action.type == 'increaseAlert') {
      return alert + 1;
  }
  else if (action.type == 'decreaseAlert') {
      return alert -1;
  }
  else if (action.type == 'reset') {
      return alert = 0;
  }
  else {
      return alert;
  }
}
