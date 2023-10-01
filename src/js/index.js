const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagens");

botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    desselecionarbotao();
    desselecionarpersonagem();

    botao.classList.add("selecionado");

    personagens[indice].classList.add("selecionado");
  });
});

function desselecionarbotao() {
  desselecionar();
}

function desselecionarpersonagem() {
  const personagemselecionado = document.querySelector(
    ".personagens.selecionado"
  );
  personagemselecionado.classList.remove("selecionado");
}

function desselecionar() {
  const botaoselecionado = document.querySelector(".botao.selecionado");
  botaoselecionado.classList.remove("selecionado");
}
