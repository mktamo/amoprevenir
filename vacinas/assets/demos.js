document.addEventListener('DOMContentLoaded', function() {
 
  new Typed('#typed3', {
    strings: ['Encontre tudo sobre vacinas contra <strong>BCG</strong>', 'Encontre tudo sobre vacinas contra <strong>Hepatite A</strong>', 'Encontre tudo sobre vacinas contra <strong>Hepatite B</strong>', 'Encontre tudo sobre vacinas contra <strong>Meningocócica C conjugada</strong>', 'Encontre tudo sobre vacinas contra <strong>Febre Amarela</strong>', 'Encontre tudo sobre vacinas contra <strong>Febre Amarela</strong>', 'E muito mais!'],
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
