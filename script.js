const elements = [
    {tag: 'p', text: 'Frase 1'},
    {tag: 'div', text: 'Frase 2'},
    {tag: 'footer', text: 'Frase 3'},
    {tag: 'section', text: 'Frase 4'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elements.length; i++){
    let { tag, text} = elements[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = text;
    div.appendChild(tagCriada);
}

container.appendChild(div);



/*Criar elementos HTML a partir da desestruturação do array que contém a tag HTML referente ao elemento e o text que deverá aparecer em cada elemento criado, respectivamente. Além disso, criar um elemento maior que contenha os elementos que serão criados via desestruturação */

/*
1 - Utilizar o for para iterar sobre o array e desestruturar cada um dos objetos.
2 - Criar elementos adicionar as frases para cada iteração no array 
*/

