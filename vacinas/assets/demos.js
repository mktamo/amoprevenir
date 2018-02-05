document.addEventListener('DOMContentLoaded', function() {
 
  new Typed('#typed3', {
    strings: ['Encontre tudo sobre<br>vacinas contra <span style="font-family: \'Open Sans semibold\'">BCG</span>', 'Encontre tudo sobre <br>vacinas contra <span style="font-family: \'Open Sans semibold\'">Hepatite A</span>', 'Encontre tudo sobre <br>vacinas contra <span style="font-family: \'Open Sans semibold\'">Hepatite B</span>', 'Encontre tudo sobre <br>vacinas contra <span style="font-family: \'Open Sans semibold\'">Meningocócica C conjugada</span>', 'Encontre tudo sobre <br>vacinas contra <span style="font-family: \'Open Sans semibold\'">Febre Amarela</span>', 'Encontre tudo sobre <br>vacinas contra <span style="font-family: \'Open Sans semibold\'">Febre Amarela</span>', 'E muito mais!'],
    typeSpeed: 1,
    backSpeed: 1,
    smartBackspace: true,
    loop: true
  });

 
});

function prettyLog(str) {
  console.log('%c ' + str, 'color: green; font-weight: bold;');
}

function toggleLoop(typed) {
  if (typed.loop) {
    typed.loop = false;
  } else {
    typed.loop = true;
  }
}
