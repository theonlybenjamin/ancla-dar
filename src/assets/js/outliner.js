document.onkeydown = TabPress;

function TabPress(evt) {
  var evt = (evt) ? evt : ((event) ? event : null);
  var tabKey = 9;
  if(evt.keyCode == tabKey) {
    document.body.className += ' ' + 'accesibility';
  }
}