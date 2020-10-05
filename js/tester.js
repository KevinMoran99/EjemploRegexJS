function isRegexValid(regexChain, input) {
    var myRegex = new RegExp(regexChain);
    return myRegex.test(input);
}

var exp = document.getElementById("exp");
var inp = document.getElementById("inp");

function validate() {
    if (isRegexValid(exp.value, inp.value)) {
      inp.classList.remove('is-invalid');
      inp.classList.add('is-valid');
    }
    else {
      inp.classList.remove('is-valid');
      inp.classList.add('is-invalid');
    }
}


exp.addEventListener("change", validate, false);
inp.addEventListener("change", validate, false);