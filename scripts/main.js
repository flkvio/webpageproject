
//alert('Olá, seja muito bem vindo à essa página que eu fiz enquanto estudava HTML, CSS e Javascript. Espero que goste')
let imagem1 = document.querySelector('img');
imagem1.onclick = function() {alert('Não clique no ouriço, você pode se furar!')};

function definenome(){
let perguntanome = prompt("Olá, qual seu nome?");	
if (!perguntanome || perguntanome === null) {
definenome();
}
else {
let subtitulo = document.querySelector('h2');
subtitulo.textContent = "É um prazer ter você aqui, " + perguntanome + "!";
localStorage.setItem('nome', perguntanome);
}
}
definenome()
