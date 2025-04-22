const elements = [
    {tag: 'p', text: 'Frase 1'},
    {tag: 'div', text: 'Frase 2'},
    {tag: 'footer', text: 'Frase 3'},
    {tag: 'section', text: 'Frase 4'}
];
//Desestrutura cada objeto contido no array através do loop for e chama a função addElement() passando tag e text como argumentos.
function desestructionTag(elements){
    for(i = 0; i <= elements.length - 1; i++){
        const {tag, text} = elements[i]; 
        addElement(tag, text);

    }
};

//Cria a div que vai conter o elementos criados em addElement().
function createDivFor(){
    const container = document.querySelector('.container')
    const divFor = document.createElement('div');
    divFor.className = 'div-for';
    container.appendChild(divFor);
}

//Cria um novo elemento com tag e text como parametros de tagName e conteúdo da tag, respectivamente.
function addElement(tag, text){
    const divFor = document.querySelector('.div-for');
    const newElement = document.createElement(tag);
    newElement.innerHTML = text;
    divFor.appendChild(newElement);

    
}


createDivFor();
desestructionTag(elements);

/*Criar elementos HTML a partir da desestruturação do array que contém a tag HTML referente ao elemento e o text que deverá aparecer em cada elemento criado, respectivamente. Além disso, criar um elemento maior que contenha os elementos que serão criados via desestruturação */

/*
1 - Utilizar o for para iterar sobre o array e desestruturar cada um dos objetos.
2 - Criar elementos adicionar as frases para cada iteração no array 
*/

