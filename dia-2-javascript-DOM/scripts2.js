let parent2 = document.getElementById('pai')
let element1 = document.createElement('section');
element1.id = 'irmaoElemento';
element1.innerHTML = '<strong>Irmão Elemento</strong>'
parent2.appendChild(element1);

let parent3 = document.getElementById('elementoOndeVoceEsta');
let element2 = document.createElement('section')
element2.id = 'filhoAdotivo1';
element2.innerHTML = 'Filho adotivo 1'
parent3.appendChild(element2);
parent3.innerHTML = 'Pai do filho adotivo 1<p>'