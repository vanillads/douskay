window.mdc.autoInit();
document.getElementById('hunt-form').addEventListener('submit', function(evt) {
  evt.preventDefault();
  var firstname = evt.target.elements.prenom.value;
  var lastname = evt.target.elements.nom.value;
  var greeting = 'Hello';
  if (firstname || lastname) {
    greeting += ', ';
    if (firstname && lastname) {
      greeting += firstname + ' ' + lastname;
    } else if (lastname) {
      greeting += 'Mx. ' + lastname;
    } else {
      greeting += firstname;
    }
  }
  greeting += '!';

  document.getElementById('greeting').textContent = greeting;
});
