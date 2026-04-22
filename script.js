const videos = {
  "God of War Ragnarok": "video/godofwar.mp4",
  "Free Fire": "video/freefire.mp4",
  "Fortnite": "video/fortnite.mp4",
  "Call of Duty: Warzone": "video/cod.mp4",
  "EA Sports FC 26": "video/fifa.mp4",
  "Farming Simulator": "video/farming.mp4",
  "League of Legends": "video/lol.mp4",
  "Lego Batman": "video/legobatman.mp4",
  "Minecraft": "video/minecraft.mp4",
  "Red Dead Redemption 2": "video/reddead.mp4",
  "Roblox": "video/roblox.mp4",
  "GTA VI": "video/gta.mp4",
  "The Last of Us": "video/thelastofus.mp4",
  "Forza Horizon 5": "video/forza.mp4",
  "Valorant": "video/valorant.mp4"
};

function jogar(nome){

  const player = document.getElementById("videoPlayer");

  player.src = videos[nome];
  player.load();

  document.getElementById("videoModal").style.display = "flex";

  player.play();
}

const botoes = document.querySelectorAll('.cats button');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        // remove o active de todos
        botoes.forEach(b => b.classList.remove('active'));

        // adiciona no clicado
        botao.classList.add('active');
    });
});

function fecharVideo(){
  let player = document.getElementById("videoPlayer");
  player.pause();
  player.currentTime = 0;
  player.src = ""; // limpa o vídeo
  document.getElementById("videoModal").style.display = "none";
}

function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

function pesquisar(){
  let termo = document.getElementById("pesquisa").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let nome = card.innerText.toLowerCase();
    card.style.display = nome.includes(termo) ? "block" : "none";
  });
}

function filtrar(cat){
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    if(cat==="todos" || card.dataset.cat===cat){
      card.style.display="block";
    } else {
      card.style.display="none";
    }
  });
}

function entrar(){
  const inicio = document.getElementById("inicio");
  const app = document.getElementById("app");

  inicio.classList.remove("ativa");

  setTimeout(() => {
    inicio.style.display = "none";
    app.classList.add("ativa");
  }, 400);
}