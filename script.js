// Contador desde 05/08/2024
const contador = document.getElementById('contador');
const dataInicial = new Date('2024-08-05T00:00:00');

function atualizarContador() {
  const agora = new Date();
  const diff = agora - dataInicial;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  contador.textContent = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos juntos 💞`;
}

setInterval(atualizarContador, 1000);
atualizarContador();

// Carrossel
const imagens = [
  'foto1.jpeg', 'foto2.jpeg', 'foto3.jpeg', 'foto4.jpeg', 'foto5.jpeg',
  'foto6.jpeg', 'foto7.jpeg', 'foto8.jpeg', 'foto9.jpeg', 'foto10.jpeg', 
  'foto11.jpeg', 'foto12.jpeg', 'foto13.jpeg', 'foto14.jpeg', 'foto15.jpeg', 
  'foto16.jpeg', 'foto17.jpeg'
];

let indice = 0;
const imgElement = document.getElementById('carrossel-img');

document.getElementById('next').addEventListener('click', () => {
  indice = (indice + 1) % imagens.length;
  imgElement.src = `img/${imagens[indice]}`;
});

document.getElementById('prev').addEventListener('click', () => {
  indice = (indice - 1 + imagens.length) % imagens.length;
  imgElement.src = `img/${imagens[indice]}`;
});

// Mostrar carta
function mostrarCarta() {
  document.getElementById('carta').style.display = 'block';
}
