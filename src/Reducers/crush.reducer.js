export default function(crush = 0, action) {
  if(action.type == 'increaseCrush') {
      return crush + 1;
  }
  else if (action.type == 'decreaseCrush') {
      return crush -1;
  }
  else if (action.type == 'reset') {
      return crush = 0;
  }
  else {
      return crush;
  }
}
