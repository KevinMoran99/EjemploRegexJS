$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

function isRegexValid(regexChain, input) {
  var myRegex = new RegExp(regexChain);
  return myRegex.test(input);
}

function field(id, regex) {
  this.id = id;
  this.regex = regex;
}

var fieldList = [];
fieldList.push(new field('dui', '^[0-9]{8}[-][0-9]$'));
fieldList.push(new field('nit', '^[0-9]{4}[-][0-9]{6}[-][0-9]{3}[-][0-9]{1}$'));
fieldList.push(new field('email', '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'));
fieldList.push(new field('date', '^(0?[1-9]|[12][0-9]|3[01])[\\/\\-](0?[1-9]|1[012])[\\/\\-]\\d{4}$'));
fieldList.push(new field('phone', '^[267]{1}[0-9]{7}$'));
fieldList.push(new field('numb', '^[-]*[0-9]+([.][0-9]+)?$'));

fieldList.forEach(field => {
  var txt;
  txt = document.getElementById(field.id);
  txt.title = 'Expresión regular usada: ' + field.regex;
});


var btnTest = document.getElementById("test");
btnTest.addEventListener("click", function() {
  
  fieldList.forEach(field => {
    var txt;
    txt = document.getElementById(field.id);
    if (isRegexValid(field.regex, txt.value)) {
      txt.classList.remove('is-invalid');
      txt.classList.add('is-valid');
    }
    else {
      txt.classList.remove('is-valid');
      txt.classList.add('is-invalid');
    }
  });

  

}, false);