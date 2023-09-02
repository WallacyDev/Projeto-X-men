/* 
O que precisamos fazer? - quando passar o mouse em cima do personagem na lista temos que adicionar a borda azul de seleção na imagem pequena do personagem e mostrar a imagem, o nome e o texto grande do personagem que está selecionado

OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles
passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele

OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
passo 2 - alterar a imagem do personagem grande
passo 3 - alterar o nome do personagem grande
passo 4 - alterar a descrição do personagem grande
*/

// passo 1 - selecionar todos personagens no JS atraves de uma variavel const, pra poder verificar quando o usuário passar o mouse em cima de um deles
const personagens = document.querySelectorAll('.personagem')

// passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
personagens.forEach((personagem) => {
  personagem.addEventListener('mouseenter', () => {
    if (window.innerWidth < 450) {
      window.scroll({ top: 0, behavior: 'smooth' });
    }
    // passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 
    removerSelecaoDoPersonagem();

    personagem.classList.add('selecionado')

    // OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
    // passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele

    // passo 2 - alterar a imagem do personagem grande
    alterarImagemPersonagemSelecionado(personagem);
    // passo 3 - alterar o nome do personagem grande
    alterarNomePersonagemSelecionado(personagem);
    // passo 4 - alterar a descrição do personagem grande
    alterarDescriçãoPersonagemSelecionado(personagem);
  })
})

function removerSelecaoDoPersonagem() {
  const personagemSelecionado = document.querySelector('.selecionado');
  personagemSelecionado.classList.remove('selecionado');
}

function alterarImagemPersonagemSelecionado(personagem) {
  const imagemPersonagemGrande = document.querySelector('.personagem-grande');

  const idPersonagem = personagem.attributes.id.value;
  imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function alterarNomePersonagemSelecionado(personagem) {
  const nomePersonagem = document.getElementById('nome-personagem');
  nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarDescriçãoPersonagemSelecionado(personagem) {
  const descricaoPersonagem = document.getElementById('descricao-personagem');
  descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}




/* OBJETIVO 1 - VIA CHATGPT = quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo

// 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles
const personagens = document.querySelectorAll('.personagem');

// 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
personagens.forEach(personagem => {
  personagem.addEventListener('mouseover', () => {
    personagem.classList.add('selecionado');
  });

    // 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 
  personagem.addEventListener('mouseout', () => {
    personagem.classList.remove('selecionado');
  });
});


// 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles
const personagens = document.querySelectorAll('.personagem')
console.log(personagens);

// Função para adicionar a classe "selecionado" quando o mouse entra
function adicionarClasseSelecionado() {
    this.classList.add('selecionado');
}

// Função para remover a classe "selecionado" quando o mouse sai
function removerClasseSelecionado() {
    this.classList.remove('selecionado');
}

// Adicionar ouvintes de evento para cada elemento da lista de personagens
// 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
personagens.forEach((personagem) => {
    console.log(personagem);
    personagem.addEventListener('mouseenter', adicionarClasseSelecionado);

    // 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 
    personagem.addEventListener('mouseleave', removerClasseSelecionado);
});
*/